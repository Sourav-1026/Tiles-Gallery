"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

export default function SignUpPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log(name, image, email, password);

    const { data, error } = await authClient.signUp.email({
      name,
      image,
      email,
      password,
    });

    console.log({ data, error });

    if (!error) {
      router.push("/login");
    }

    if (data) {
      toast.success("Successfully Registered");
    }

    if (error) {
      toast.error(error.message || "Something went wrong");
    }
  };

  const handleGoogleSignIN = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <Card className="border mx-auto w-full max-w-125 px-4 py-10 my-10 md:my-14 bg-[#1D9E75]">
      <h1 className="text-center text-2xl font-bold text-white">Sign Up</h1>

      <Form className="flex w-full max-w-96 mx-auto flex-col gap-4 px-2" onSubmit={onSubmit}>
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" className="w-full" />
          <FieldError />
        </TextField>

        <TextField isRequired name="image" type="text">
          <Label>Image URL</Label>
          <Input placeholder="Image URL" className="w-full" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" className="w-full" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) return "Password must be at least 8 characters";
            if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
            if (!/[0-9]/.test(value)) return "Password must contain at least one number";
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" className="w-full" />
          <Description className="text-black text-sm">Must be at least 8 characters with 1 uppercase and 1 number</Description>
          <FieldError />
        </TextField>

        <div className="flex flex-col sm:flex-row gap-2">
          <Button type="submit" className="w-full sm:w-auto">
            <Check />
            Signup
          </Button>
          <Link href={"/login"} className="w-full sm:w-auto">
            <Button variant="secondary" className="w-full">
              Login
            </Button>
          </Link>
        </div>
      </Form>

      <p className="text-center text-white my-2">Or</p>

      <div className="w-full max-w-96 mx-auto px-2">
        <Button onClick={handleGoogleSignIN} variant="outline" className="w-full bg-white flex items-center justify-center gap-2">
          <FcGoogle />
          Login with Google
        </Button>
      </div>
    </Card>
  );
}

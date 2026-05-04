"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

export default function LoginPage() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log(name, image, email, password);

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (data) {
      toast.success("Successfully Login");
    }

    if (error) {
      toast.error(error.message || "Something went wrong");
    }

    console.log({ data, error });
  };

  const handleGoogleSignIN = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <Card className="border mx-auto w-full max-w-125 px-4 py-10 my-10 md:my-20 lg:my-33 bg-[#1D9E75]">
      <h1 className="text-center text-2xl font-bold text-white">Login</h1>

      <Form className="flex w-full max-w-96 mx-auto flex-col gap-4 px-2" onSubmit={onSubmit}>
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
            Login
          </Button>
          <Link href={"/signup"} className="w-full sm:w-auto">
            <Button variant="secondary" className="w-full">
              SignUp
            </Button>
          </Link>
        </div>
      </Form>

      <p className="text-center text-white my-2">Or</p>

      <Button onClick={handleGoogleSignIN} variant="outline" className="w-full max-w-96 mx-auto block bg-white px-4">
        <FcGoogle />
        Login with Google
      </Button>
    </Card>
  );
}

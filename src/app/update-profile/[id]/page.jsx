"use client";

import { authClient } from "@/lib/auth-client";
import { FloppyDisk } from "@gravity-ui/icons";
import { Button, Description, FieldError, Fieldset, Form, Input, Label, Surface, TextField } from "@heroui/react";
import { useState } from "react";
import { toast } from "react-toastify";

export default function UpdateProfilePage() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log({ name, image });

    await authClient.updateUser({ name, image });

    toast.success("Your Profile is Successfully Updated");
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full p-6">
      <Surface className="w-full max-w-lg shadow-md rounded-3xl p-6 border border-gray-200">
        <Form onSubmit={onSubmit}>
          <Fieldset className="w-full">
            <Fieldset.Legend>Profile Settings</Fieldset.Legend>
            <Description>Update your profile information.</Description>
            <Fieldset.Group>
              <TextField isRequired name="name" value={name} onChange={setName} validate={(value) => (value.length < 3 ? "Name must be at least 3 characters" : null)}>
                <Label>Name</Label>
                <Input placeholder="Your Name" variant="secondary" />
                <FieldError />
              </TextField>

              <TextField isRequired name="image" type="url" value={image} onChange={setImage}>
                <Label>Image URL</Label>
                <Input placeholder="Your Image URL" variant="secondary" />
                <FieldError />
              </TextField>
            </Fieldset.Group>
            <Fieldset.Actions>
              <Button type="submit">
                <FloppyDisk />
                Save changes
              </Button>
              <Button
                type="reset"
                variant="tertiary"
                onPress={() => {
                  setName("");
                  setImage("");
                }}
              >
                Cancel
              </Button>
            </Fieldset.Actions>
          </Fieldset>
        </Form>
      </Surface>
    </div>
  );
}

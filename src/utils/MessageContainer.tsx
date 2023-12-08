import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import "./MessageContainer.css";

const FormSchema = z.object({
  username: z.string().min(5, {
    message: "Please enter your first and last name.",
  }),
  email: z.string().min(7, {
    message: "Invalid Email address.",
  }),
  content: z.string().min(20, {
    message: "Please add more details to your message!",
  }),
});

export default function MessageContainer() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "spide",
      email: "temp@email.com",
      content: "",
    },
  });

  function handleConfirm() {}

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("sent message");
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="toast-pop-up">
          <code>{JSON.stringify(data, null, 2)}</code>
          <Button onClick={handleConfirm} children={"Send Email?"} />
        </pre>
      ),
    });
  }

  return (
    <div className="main-content-holder">
      <h2>You can reach me using </h2>
      <Card className="message-card">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col w-3/4"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input
                      className="input-field"
                      placeholder="Your name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="flex justify-center indent-0" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Email</FormLabel>
                  <FormControl>
                    <Input
                      className="input-field"
                      placeholder="The email I should use to respond to you!"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="flex justify-center indent-0" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message Content</FormLabel>
                  <FormControl>
                    <Textarea
                      className="input-field"
                      placeholder="What do you have to say?"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="flex justify-center indent-0" />
                </FormItem>
              )}
            />

            <Button
              size="lg"
              type="submit"
              className="flex self-center w-1/2 m-5"
            >
              Submit
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  );
}

"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { useFormState } from "react-dom";
import { sendEmail } from "../lib/utils";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string(),
  address: z.string(),
  subject: z.string(),
  message: z.string(),
});

const ContactForm = () => {
  const [dispatchMessage, dispatch] = useFormState(sendEmail, undefined);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const payload = new FormData();
    payload.append("name", values.name);
    payload.append("email", values.email);
    payload.append("phone", values.phone);
    payload.append("address", values.address);
    payload.append("subject", values.subject);
    payload.append("message", values.message);

    dispatch(payload);
    toast({
      title: "Email Sent Successfully!",
      description: "We will get back to you soon. Thank you.",
    });
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[33%] flex flex-col gap-2"
      >
        {/* name and email */}
        <div className="w-full flex flex-row items-center justify-between">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your name"
                    required
                    {...field}
                    className=" placeholder:text-[#231137]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    required
                    {...field}
                    className=" placeholder:text-[#231137]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* phone and address */}
        <div className="w-full flex flex-row items-center justify-between">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Phone</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your phone number"
                    {...field}
                    className="w-[200px] placeholder:text-[#231137]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your address"
                    {...field}
                    className=" placeholder:text-[#231137]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">Subject</FormLabel>
              <FormControl>
                <Input
                  placeholder="Type the subject"
                  {...field}
                  className=" placeholder:text-[#231137] py-5"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Type your Message here..."
                  {...field}
                  className=" placeholder:text-[#231137] h-[100px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className=" font-sans text-xl font-thin">
          Submit
        </Button>
        {dispatchMessage && <span>{dispatchMessage}</span>}
      </form>
    </Form>
  );
};

export default ContactForm;

"use client";

import type { ContactSectionTypes } from "@/utils/types";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import { env } from "@/env.mjs";

import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Form, Section } from "./components";
import { homeAnimation } from "./animationVariants";

interface ContactSectionProps extends ContactSectionTypes {}

const formSchema = z.object({
  name: z.string().min(2, "The name must be at least 2 characters long."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(5, "The message must be at least 5 characters long."),
});
export type FormData = z.infer<typeof formSchema>;

export function ContactSection({
  title,
  description,
  id,
}: ContactSectionProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isLoading, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(data: FormData) {
    const { name, email, message } = data;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    const requestOptions = {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    };
    try {
      await fetch(env.NEXT_PUBLIC_FORM_SEND_URL, requestOptions);
      toast.success("Message sent!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  }

  return (
    <Section.Root id={id}>
      <motion.div
        variants={homeAnimation.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Section.Container>
          <Section.Title>{title}</Section.Title>
          <Section.Description>{description}</Section.Description>
          <motion.div
            variants={homeAnimation.container}
            transition={{ duration: 0.5 }}
            className="mx-auto w-full max-w-4xl overflow-hidden rounded-md bg-primary/10 bg-gradient-to-b from-primary/10 to-background/60 p-6 shadow-xl shadow-primary/10 md:p-10"
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Form.Fieldset>
                <Label className="text-base font-bold" htmlFor="name">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  {...register("name")}
                />
                {errors.name ? (
                  <Form.ErrorMessage error={errors.name.message} />
                ) : null}
              </Form.Fieldset>
              <Form.Fieldset>
                <Label className="text-base font-bold" htmlFor="email">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  {...register("email")}
                />
                {errors.email ? (
                  <Form.ErrorMessage error={errors.email.message} />
                ) : null}
              </Form.Fieldset>
              <Form.Fieldset>
                <Label className="text-base font-bold" htmlFor="message">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  required
                  {...register("message")}
                />
                {errors.message ? (
                  <Form.ErrorMessage error={errors.message.message} />
                ) : null}
              </Form.Fieldset>
              <motion.div
                variants={homeAnimation.item}
                transition={{ duration: 0.5 }}
                className="flex w-full justify-end"
              >
                <Button
                  type="submit"
                  size="xlg"
                  disabled={isLoading || !isValid}
                >
                  {isLoading ? <Loader className="animate-spin" /> : "Submit"}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </Section.Container>
      </motion.div>
    </Section.Root>
  );
}

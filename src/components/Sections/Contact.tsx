import type { ContactSectionTypes } from "@/utils/types";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FORM_SEND_URL } from "@/utils/constants";

import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Form, Section } from "./components";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { homeAnimation } from "./animationVariants";

import { Loader } from "lucide-react";

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
      await fetch(FORM_SEND_URL!, requestOptions);
      toast.success("Message sent!");
      reset();
    } catch (error) {
      console.log(error);
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
            className="mx-auto mt-12 w-[95%] max-w-4xl overflow-hidden rounded-md bg-violet-900/10 bg-gradient-to-b from-violet-900/20 to-black/60 p-10 shadow-xl shadow-black"
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Form.Fieldset>
                <Label className="text-md font-bold" htmlFor="name">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  {...register("name")}
                />
                <Form.ErrorMessage error={errors.name?.message} />
              </Form.Fieldset>
              <Form.Fieldset>
                <Label className="text-md font-bold" htmlFor="email">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  {...register("email")}
                />
                <Form.ErrorMessage error={errors.email?.message} />
              </Form.Fieldset>
              <Form.Fieldset>
                <Label className="text-md font-bold" htmlFor="message">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  required
                  {...register("message")}
                />
                <Form.ErrorMessage error={errors.message?.message} />
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

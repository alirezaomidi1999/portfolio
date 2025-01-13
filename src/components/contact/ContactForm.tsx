"use client";
import React from "react";
import showToast from "@/components/ui/Toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import emailjs from "@emailjs/browser";

const schema = z.object({
  email: z.string().email(),
  fullName: z
    .string()
    .min(3, { message: "FullName must be at least 3 characters long" }),
  yourMessage: z
    .string()
    .min(10, { message: "Your Message must be at least 10 characters long" }),
});

type FormFields = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  const onSubmit = async (data: FormFields) => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: `${data.fullName}`,
          from_email: data.email,
          message: data.yourMessage,
        },
        publicKey,
      );
      showToast("Message has been sent successfully", "success");
    } catch (error) {
      showToast("Failed to send the message", "error");
    }
  };
  return (
    <form
      className="flex flex-col gap-6 pt-6 text-white"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="text-fs-3 font-fw-600 text-white">Contact Form</h3>
      <div className="flex flex-col gap-4 text-fs-6 sm:flex sm:flex-row">
        <div className="flex grow flex-col gap-2">
          <input
            placeholder="Full name"
            className="grow rounded-lg border border-jet bg-transparent px-6 py-3"
            {...register("fullName")}
          />
          <div className="text-red-500">{errors?.fullName?.message}</div>
        </div>
        <div className="flex grow flex-col gap-2">
          <input
            placeholder="Email address"
            className="grow rounded-lg border border-jet bg-transparent px-6 py-3"
            {...register("email")}
          />
          <div className="text-red-500">{errors?.email?.message}</div>
        </div>
      </div>
      <div className="flex grow flex-col gap-2">
        <textarea
          placeholder="Your Message"
          className="rounded-lg border border-jet bg-transparent px-6 py-3"
          {...register("yourMessage")}
        />
        <div className="text-red-500">{errors?.yourMessage?.message}</div>
      </div>

      <button
        disabled={!isValid}
        className={`relative z-[1] ml-auto flex w-max ${
          !isValid
            ? "cursor-not-allowed opacity-70"
            : "cursor-pointer opacity-100"
        } items-center justify-center gap-[10px] rounded-[14px] bg-border-gradient-onyx px-[20px] py-[13px] text-fs-6 capitalize text-orange-yellow-crayola shadow-shadow-3 duration-transition-1 ease-transition-1 before:absolute before:inset-[1px] before:z-[-1] before:rounded-[inherit] before:bg-gradient-jet before:bg-bg-gradient-jet`}
        type="submit"
      >
        {isSubmitting ? "Loading..." : "Submit"}
      </button>
    </form>
  );
}

"use client";
import { useState, FormEvent } from "react";
import Button from "../../ui/Button";
import InputField from "../../ui/InputField";

const JoinHutCarSection: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <section className="mt-5 md:px-6">
      <div className="mx-auto max-w-xl text-center">
        <h3 className="text-xl font-bold">Join CarHut</h3>
        <p className="mt-1 text-sm">
          Receive pricing updates, shopping tips & more!
        </p>
        <form className="relative mt-6 w-full" onSubmit={handleSubmit}>
          <InputField
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
          />
          <div className="absolute right-1 top-1/2 -translate-y-1/2">
            <Button
              title="Sign Up"
              type="submit"
              borderRadius="rounded-xl"
              className="bg-[#405FF2] px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default JoinHutCarSection;

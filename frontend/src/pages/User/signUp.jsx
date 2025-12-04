import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-start pt-20 min-h-screen bg-gray-50">
      <SignUp routing="path" path="/sign-up" />
    </div>
  );
}

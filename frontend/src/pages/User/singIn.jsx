import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-start pt-20 min-h-screen bg-gray-50">
      <SignIn routing="path" path="/sign-in" />
    </div>
  );
}

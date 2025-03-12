import { Icons } from "@/components/icons";
import Link from "next/link";

const FloatingSlackButton: React.FC = () => {
  return (
    <div className="fixed bottom-5 left-5 z-50 hover:scale-110 duration-300 group">
    <Link
      href="https://join.slack.com/t/keploy/shared_invite/zt-2poflru6f-_VAuvQfCBT8fDWv1WwSbkw"
      target="_blank"
      className="flex items-center justify-center w-14 h-14 bg-[#4A154B] rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      title="Join our Slack community"
    >
      <Icons.slack className="w-8 h-8 text-white" />
    </Link>
  </div>
  );
};

export default FloatingSlackButton;
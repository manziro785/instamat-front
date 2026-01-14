import { Avatar } from "@radix-ui/themes";
import img from "../assets/download.jpeg";
import { ArrowDownToLine, Heart, MessageCircle } from "lucide-react";

const Post = () => {
  return (
    <div className="border-1 border-gray-500 rounded-[10px] max-w-[700px] mb-[30px]">
      <img
        src={img}
        className="w-full max-w-[700px] max-h-[400px] object-cover rounded-tl-[10px] rounded-tr-[10px]"
      />
      <div className="p-[30px] flex gap-x-[20px]">
        <Avatar
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          fallback="A"
        />
        <div>
          <div>
            <h3 className="mt-[0px]">Title smt like gaaauuu</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their
            </p>
            <p className="mb-[2rem]">3/12/2020, 21:11 AM</p>
            <div className="flex gap-x-[15px]">
              <div className="flex gap-x-[5px]">
                <Heart /> 10
              </div>
              <div className="flex gap-x-[5px]">
                {" "}
                <MessageCircle /> 0
              </div>
              <div className="flex gap-x-[5px]">
                {" "}
                <ArrowDownToLine /> 2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Post };

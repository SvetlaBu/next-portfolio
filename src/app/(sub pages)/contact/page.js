import Image from "next/image";
import bg from "../../../../public/background/contact-background.jpg";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            призовите волшебницу
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Зайдите в круг очарования и вплетите свои слова в ткань Космоса. 
            Независимо от того, стремитесь ли вы вызвать сотрудничество, разблокировать загадки или просто делиться рассказами
            о приключениях, ваши сообщения - это заветные свитки в этой сфере. 
            Используйте форму ниже, чтобы отправить ваши послания через эфирную сеть и ждать шепота магии в ответ
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}

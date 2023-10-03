import Header from "../components/Header";
import FooterPages from "../components/Footer";

function TeamPage() {
  const sendEmail = () => {
    const email = "pizzaviacapri@gmail.com";
    const subject = "Application for the Team";
    const body = `
    Full Name: [Your Name]
    
    Tell us about yourself: [Tell about yourself]
    
    Attach your resume (PDF or Word).
    `;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };
  return (
    <>
      <Header />
      <div className="flex flex-col mx-auto mt-8 text-center w-[90%] md:w-[70%] h-max border items-center p-4 md:p-24">
        <h1 className="mb-4 text-2xl text-yellow-500 md:text-4xl font-sub_title text-primary">
          Application to Join the Team
        </h1>
        <p className="mb-4">
          Fill in the information below and send an email to:
        </p>
        <p className="mb-4 font-bold text-yellow-500">
          pizzaviacapri@gmail.com
        </p>
        <p className="mb-4">Instructions:</p>
        <ol className="text-left">
          <li>Set the "Subject" field to: Application to Join the Team</li>
          <li>
            In the email body, provide the following information:
            <ul>
              <li className="mt-4">
                Full Name: [<strong>Your Name</strong>]
              </li>
              <li>
                Tell us about yourself: [<strong>Tell about yourself</strong>]
              </li>
              <li>
                Attach your resume (<strong>PDF or Word</strong> ).
              </li>
            </ul>
          </li>
        </ol>
        <button
          onClick={sendEmail}
          className="justify-center p-2 mt-10 w-[100%] md:w-[80%] text-yellow-500 transition duration-300 bg-black rounded cursor-pointer hover:text-yellow-300 hover:scale-110"
        >
          Send Email
        </button>
      </div>
      <div className="mt-[45%] md:mt-[7%]">
        <FooterPages />
      </div>
    </>
  );
}

export default TeamPage;

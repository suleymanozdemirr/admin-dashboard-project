import { CgMoreVerticalAlt } from "react-icons/cg"

const depositData = [
  {
    logoWidth: 28,
    logoHeight: 29,
    amount: "+$4,650",
    subtitle: "Sell UI Kit",
    title: "Gumroad Account",
    logo: "https://demos.themeselection.com/materio-mui-react-nextjs-admin-template-free/images/logos/gumroad.png",
  },
  {
    logoWidth: 38,
    logoHeight: 38,
    amount: "+$92,705",
    title: "Mastercard",
    subtitle: "Wallet deposit",
    logo: "https://demos.themeselection.com/materio-mui-react-nextjs-admin-template-free/images/logos/mastercard-label.png",
  },
  {
    logoWidth: 20,
    logoHeight: 28,
    amount: "+$957",
    title: "Stripe Account",
    subtitle: "iOS Application",
    logo: " https://demos.themeselection.com/materio-mui-react-nextjs-admin-template-free/images/logos/stripe.png",
  },
  {
    logoWidth: 34,
    logoHeight: 32,
    amount: "+$6,837",
    title: "American Bank",
    subtitle: "Bank Transfer",
    logo: "https://demos.themeselection.com/materio-mui-react-nextjs-admin-template-free/images/logos/american-bank.png",
  },
  {
    logoWidth: 33,
    logoHeight: 22,
    amount: "+$446",
    title: "Bank Account",
    subtitle: "Wallet deposit",
    logo: "https://demos.themeselection.com/materio-mui-react-nextjs-admin-template-free/images/logos/citi-bank.png",
  },
]

const withdrawData = [
  {
    logoWidth: 29,
    logoHeight: 30,
    amount: "-$145",
    title: "Google Adsense",
    subtitle: "Paypal deposit",
    logo: "https://demos.themeselection.com/materio-mui-react-nextjs-admin-template-free/images/logos/google.png",
  },
  {
    logoWidth: 34,
    logoHeight: 34,
    amount: "-$1870",
    title: "Github Enterprise",
    logo: "https://demos.themeselection.com/materio-mui-react-nextjs-admin-template-free/images/logos/github.png",
    subtitle: "Security & compliance",
  },
  {
    logoWidth: 30,
    logoHeight: 30,
    amount: "-$450",
    title: "Upgrade Slack Plan",
    subtitle: "Debit card deposit",
    logo: "https://demos.themeselection.com/materio-mui-react-nextjs-admin-template-free/images/logos/slack.png",
  },
  {
    logoWidth: 30,
    logoHeight: 30,
    amount: "-$540",
    title: "Digital Ocean",
    subtitle: "Cloud Hosting",
    logo: "https://demos.themeselection.com/materio-mui-react-nextjs-admin-template-free/images/logos/digital-ocean.png",
  },
  {
    logoWidth: 36,
    logoHeight: 21,
    amount: "-$21",
    title: "AWS Account",
    logo: "https://demos.themeselection.com/materio-mui-react-nextjs-admin-template-free/images/logos/aws.png",
    subtitle: "Choosing a Cloud Platform",
  },
]

export default function Deposit() {
  return (
    <>
      <div className='h-full bg-white rounded-lg px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
        <div className='flex items-center justify-between pt-4'>
          <h3 className='text-lg font-normal'>Deposit</h3>
          <div className='rounded-full p-2 hover:bg-slate-100'>
            <CgMoreVerticalAlt size={20} />
          </div>
        </div>
        <div className='p-4 pb-5'>
          {depositData.map((item) => (
            <div key={item.title} className='flex items-center mb-6 -ml-5'>
              <div className='min-w-[38px] flex justify-center'>
                <img
                  src={item.logo}
                  alt={item.title}
                  width={item.logoWidth}
                  height={item.logoHeight}
                />
              </div>
              <div className='w-full flex flex-wrap items-center justify-between ml-4'>
                <div className='flex flex-col mr-2'>
                  <p className='font-semibold text-base'>{item.title}</p>
                  <span className='font-normal text-sm'>{item.subtitle}</span>
                </div>
                <h6 className='font-semibold text-base text-[#22bb33]'>
                  {item.amount}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className='h-full bg-white rounded-lg px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
          <div className='flex items-center justify-between pt-4'>
            <h3 className='text-lg font-normal'>Withdraw</h3>
            <div className='rounded-full p-2 hover:bg-slate-100'>
              <CgMoreVerticalAlt size={20} />
            </div>
          </div>
          <div className='p-4 pb-5'>
            {withdrawData.map((item) => (
              <div key={item.title} className='flex items-center mb-6 -ml-5'>
                <div className='min-w-[38px] flex justify-center'>
                  <img
                    src={item.logo}
                    alt={item.title}
                    width={item.logoWidth}
                    height={item.logoHeight}
                  />
                </div>
                <div className='w-full flex flex-wrap items-center justify-between ml-4'>
                  <div className='flex flex-col mr-2'>
                    <p className='font-semibold text-base'>{item.title}</p>
                    <span className='font-normal text-sm'>{item.subtitle}</span>
                  </div>
                  <h6 className='font-semibold text-base text-[#22bb33]'>
                    {item.amount}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

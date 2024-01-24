import Plan from './components/Plan'
import FAQ from './components/accordian/FAQ'
import HomeCard from './components/home/HomeCard'
import HomeItem from './components/home/HomeItem'
import HomeSlider from './components/home/HomeSlider'

const data = [
  {
    title: "What exactly is KOHO?",
    answer:
      "KOHO is a free spending and savings account where you can get instant cash back and earn interest on your entire account. You get a prepaid reloadable Mastercard that gives you all the spending power of a credit card without any fees or interest.</br></br>With a KOHO card you can only draw from funds that are already yours, unlike a credit card. This key difference makes you spend more mindfully and effectively save more. It’s connected to a smart budgeting app that simplifies day-to-day finances with spending insights and balance updates after each purchase. As a result, the average KOHO user saves 7% of whatever money they load into their account.",
  },
  {
    title: "How does KOHO work and what can I use it for?",
    answer:
      "It’s pretty simple. You add funds to your KOHO account in one of three ways: e-Transfer from your regular bank account, loading through an existing Mastercard or Visa debit, or by direct deposit. This is when you have your work’s payroll directly deposit your paycheque, or you can sign up for Canada Revenue Agency (CRA) direct deposit to receive government payments directly to your KOHO account. Plus, you can now set up Interac® Autodeposit with your personal email address too, so adding funds has never been easier!<br /><br />Once you've added funds, you can use your KOHO card, either in person or online, to make purchases just like you would with any debit or credit. KOHO runs on the Mastercard network, so merchants can treat your KOHO card just like a normal credit card transaction.<br /><br />You can use KOHO for everyday spending as well as stashing away your savings, all from one account. You can earn cash back on your spending, earn interest on your entire balance, and use in-app features that’ll help you manage your money like a pro.",
  },

  {
    title: "Okay, so where does KOHO put my money?",
    answer:
      "We’ve partnered with Peoples Trust, a federally regulated bank to hold any money you load onto your KOHO card. This means that if anything were to happen to us (and that’s a big if!), your money would be safe and you’d be able to access it through Peoples Trust. If you place your money in our interest-bearing accounts, not only will you get a high interest rate, but your funds will also be eligible for CDIC insurance.",
  },
  {
    title: "What makes KOHO different from a regular debit account?",
    answer: "The big difference is that we’re digital-first. We prioritize financially empowering our users over things like branded ATMs (though KOHO works at any ol’ ATM, and we won’t charge you for using one). Consequently, we can keep our costs low and aim to pass these savings to our users.</br></br>Plus, depending on which plan you choose, you can earn up to 2% cash back on things like your weekly shop, your Uber ride, or your sushi take-out. And up to 5% cash back when you shop with our partners.</br></br>Also, our app is pretty awesome.",
  },
  {
    title: "What makes the KOHO app awesome?",
    answer: "We’ve put in the research time to make it dead simple to use, and there are lots of built-in ways to make the most of your money.</br></br>We tweak and improve our app in order to release updates every two weeks. Which, to be frank, is not a thing banks can say. Banks usually release a new version of their apps once a year.",
  },
  {
    title: "Does using or applying for a KOHO card impact my credit score?",
    answer: "When you set up your KOHO account we run what’s called a soft credit check, which doesn’t affect your credit score (phew!). We have to do this part to adhere to strict Canadian financial regulations and in order to make sure your account is secure and protected against fraud.",
  },
];

export default function Home() {
  return (
    <div className='bg-[#f7f8fd]'>
        <HomeSlider />
        <HomeItem />
        <HomeCard />
        <Plan />
        <FAQ data={data}/>
    </div>
  )
}

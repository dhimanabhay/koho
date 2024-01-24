import React from "react";
import ACTHero from "../component/ACTHero";
import ACTReview from "../component/ACTReview";
import ACTInfo from "../component/ACTInfo";
import Plan from "../../Plan";
import FAQ from "../../accordian/FAQ";
import img1 from "../images/play.jpg";
import img2 from "../images/app.jpg";
import img3 from "../images/app.jpg";

const hero_data = {
  id: "Easy",
  heading: "Free and easy earning on the must-haves",
  description:
    "The free plan with all you need to start managing your money like a pro.",
  img1: require("../images/easy_hero1.jpg"),
  img2: require("../images/easy_hero2.jpg"),
  color: "#DC594F",
  card_img: require("../images/easy_card.jpg"),
  card_list: [
    "Making the most of your money with no monthly fees",
    "Earning 1% cash back on groceries and transportation",
    "3% interest on your entire balance, from your Spendable to your savings",
    "Up to $100K of your money earning interest is protected by CDIC",
    "Free e-Transfers, no matter how many you send",
  ],
};

const review_data = {
  bg_img: require("../images/easy_bg.jpg"),
  list: [
    "Awesome. Love all the features and no monthly fee, so simple everything is online. Just great!",
    "Everyone should have one of these cards. No fees and lot’s of benefits Love it 😍",
    "I can’t believe I’ve never heard of KOHO before until this year. This app is amazing and I definitely recommend it to any and everyone who is looking for fast and easy online.",
  ],
  img_list: [img1, img2, img3],
};

const faq_data = [
  {
    title: "Wait, so what’s CDIC protection?",
    answer:
      "The Canada Deposit Insurance Corporation, or CDIC, is a Crown Corporation that provides deposit insurance to banks and financial institutions like KOHO. It insures Canadians' deposits, held up to C$100,000, in case of a bank failure. Once you opt-in to earn interest, you can rest assured your money is safe with us.",
  },
  {
    title: "How does Credit Building work?",
    answer:
      "The Credit Building feature is available as an add-on across all plans — on the Easy plan it’s an extra $10/month. You simply take out a line of credit with KOHO and on time repayments build your credit history which can build your credit score.",
  },

  {
    title: "What does transportation include?",
    answer:
      "Cash back on transportation includes things like your transit card top-up, train or bus ticket, gas purchases, Ubers or Lyfts, and more. It’s worth noting, a flight purchase doesn’t qualify as transportation as it’s typically categorized as travel.",
  },
  {
    title: "What makes KOHO different from a regular debit account?",
    answer:
      "The big difference is that we’re digital-first. We prioritize financially empowering our users over things like branded ATMs (though KOHO works at any ol’ ATM, and we won’t charge you for using one). Consequently, we can keep our costs low and aim to pass these savings to our users.</br></br>Plus, depending on which plan you choose, you can earn up to 2% cash back on things like your weekly shop, your Uber ride, or your sushi take-out. And up to 5% cash back when you shop with our partners.</br></br>Also, our app is pretty awesome.",
  },
  {
    title: "Can I change my plan after I sign up?",
    answer:
      "You sure can. If you want to switch to another plan you can do it at the end of your next billing cycle in the app.</br> You can find a bit more on this here.",
  },
  {
    title: "When will I start earning interest?",
    answer:
      "Once you sign up for Easy you’ll need to opt in on the Interest page in-app to start earning on everything in your spending and savings account. 3% is an annual rate that’s calculated daily and paid out monthly to maximize your earnings. Once you choose to opt in, you’ll start earning right away.",
  },
  {
    title: "Are there any additional fees or limitations I should know about?",
    answer:
      "The Easy plan is totally free, so you’ll never get charged any hidden fees. But it’s worth keeping in mind that FX fees still apply and there’s a daily maximum amount of $3000 on outbound e-Transfers. Take a peek at this article if you’d like more info.",
  },
];
export default function Easy() {
  return (
    <div>
      <ACTHero data={hero_data} />
      <ACTReview data={review_data} />
      <ACTInfo />
      <Plan />
      <FAQ data={faq_data} />
    </div>
  );
}

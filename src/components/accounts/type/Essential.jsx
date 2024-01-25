import React from "react";
import ACTHero from "../component/ACTHero";
import ACTReview from "../component/ACTReview";
import ACTInfo from "../component/ACTInfo";
import Plan from "../../Plan";
import FAQ from "../../accordian/FAQ";
import img1 from "../images/play.jpg";
import img2 from "../images/app.jpg";
import img3 from "../images/app.jpg";
// #004BBE
const hero_data = {
  id: "Essential",
  heading: "Earn more on the essentials your wallet cares about",
  description:
    "The plan that gets you more from your everyday spending for just $4 per month.",
  img1: require("../images/essential_hero1.jpg"),
  img2: require("../images/essential_hero2.jpg"),
  color: "#DC594F",
  card_img: require("../images/easy_card.jpg"),
  card_list: [
    "1% cash back on groceries, eating & drinking, and transportation",
    "0.25% cash back on all other purchases",
    "5% interest on your entire balance",
    "Credit Building for $7/month instead of $10",
    "Unlimited e-Transfers",
    "Up to 5% extra cash back at selected merchants",
  ],
};

const review_data = {
  bg_img: require("../images/easy_bg.jpg"),
  list: [
    "Love KOHO! The cash back helps me a lot!",
    "I love KOHO it’s easy and convenient! It’s a great way to build your credit and earn cash back.",
    "My ride and die app is Koho!!!!",
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
export default function Essential() {
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

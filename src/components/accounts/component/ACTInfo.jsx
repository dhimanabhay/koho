import React from "react";

export default function ACTInfo() {
  return (
    <section className="flex justify-center">
      <div className="w-4/5 flex gap-5">
        <div className="flex flex-col justify-center">
          <p className="text-4xl">With every plan you can:</p>
          <ul className="pt-5 flex flex-col gap-5 w-3/4">
            <li className="flex gap-2">
            <div>
                <svg
                  fill="#2C38C0"
                  height={24}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                </svg>
              </div>
              <p className="text-2xl">Shop securely online with a virtual card</p>
            </li>
            <li className="flex gap-2">
            <div>
                <svg
                  fill="#2C38C0"
                  height={24}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                </svg>
              </div>
             <p className="text-2xl">Build your credit history with Credit Building</p>
            </li>
            <li className="flex gap-2">
              <div>
                <svg
                  fill="#2C38C0"
                  height={24}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                </svg>
              </div>
              <p className="text-2xl">Save on the app with features like RoundUps, Savings Goals, and
              Vaults</p>
            </li>
          </ul>
        </div>
        <div>
          <img
            className="h-[600px] min-w-[600px]"
            src={require("../images/info.jpg")}
            alt="card infos"
          />
        </div>
      </div>
    </section>
  );
}

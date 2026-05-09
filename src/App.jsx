import { useState } from "react";

export default function HustleHQApp() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const contentIdeas = [
    { title: "Morning Money Move Reel", platform: "TikTok", status: "Script Ready", date: "Today" },
    { title: "Affiliate Product Demo", platform: "Instagram", status: "Record", date: "Tomorrow" },
    { title: "She Stands Book Promo", platform: "Facebook", status: "Post", date: "Friday" },
  ];

  const opportunities = [
    { brand: "Beauty Brand", type: "UGC", stage: "Follow up", value: "$250" },
    { brand: "Travel Affiliate", type: "Affiliate", stage: "Applied", value: "15%" },
    { brand: "Book Promo Collab", type: "Author Brand", stage: "Pitch Sent", value: "$100" },
  ];

  const tabs = [
    { id: "dashboard", label: "Home", icon: "🏠" },
    { id: "content", label: "Content", icon: "🎬" },
    { id: "money", label: "Money", icon: "💸" },
    { id: "brands", label: "Brands", icon: "📩" },
  ];

  return (
    <div className="min-h-screen bg-[#08040d] text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md min-h-[820px] rounded-[2.5rem] border border-pink-500/30 bg-gradient-to-b from-zinc-950 via-black to-purple-950 shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 left-0 right-0 h-40 bg-pink-500/20 blur-3xl" />
        <div className="relative p-6 pb-28">
          <header className="flex items-center justify-between pt-3">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-pink-300">RachelMakesMoves615</p>
              <h1 className="text-4xl font-black mt-1">Hustle HQ</h1>
            </div>
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-2xl shadow-lg">
              ✨
            </div>
          </header>

          {activeTab === "dashboard" && (
            <main className="mt-8 space-y-5">
              <section className="rounded-3xl bg-white/10 border border-white/10 p-5 backdrop-blur">
                <p className="text-zinc-300 text-sm">Monthly Income Goal</p>
                <div className="flex items-end justify-between mt-2">
                  <h2 className="text-4xl font-black">$2,300</h2>
                  <span className="text-pink-300 font-semibold">of $5,000</span>
                </div>
                <div className="w-full h-3 bg-black/40 rounded-full mt-4 overflow-hidden">
                  <div className="h-full w-[46%] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
                </div>
              </section>

              <section className="grid grid-cols-3 gap-3">
                <div className="rounded-3xl bg-zinc-900 border border-white/10 p-4 text-center">
                  <p className="text-2xl font-black">18</p>
                  <p className="text-xs text-zinc-400 mt-1">Posts</p>
                </div>
                <div className="rounded-3xl bg-zinc-900 border border-white/10 p-4 text-center">
                  <p className="text-2xl font-black">6</p>
                  <p className="text-xs text-zinc-400 mt-1">Deals</p>
                </div>
                <div className="rounded-3xl bg-zinc-900 border border-white/10 p-4 text-center">
                  <p className="text-2xl font-black">4</p>
                  <p className="text-xs text-zinc-400 mt-1">Products</p>
                </div>
              </section>

              <section className="rounded-3xl bg-gradient-to-r from-pink-600/30 to-purple-700/30 border border-pink-400/20 p-5">
                <p className="text-sm text-pink-200">Money Move of the Day</p>
                <h3 className="text-xl font-bold mt-2">Pitch one brand before you scroll.</h3>
                <p className="text-sm text-zinc-300 mt-2">Small daily moves turn into paid opportunities.</p>
              </section>

              <section>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-xl">Today's Tasks</h3>
                  <span className="text-sm text-pink-300">3 left</span>
                </div>
                <div className="space-y-3">
                  {["Record product demo", "Follow up with 2 brands", "Post She Stands promo"].map((task) => (
                    <div key={task} className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 p-4">
                      <div className="h-5 w-5 rounded-full border border-pink-400" />
                      <p className="font-medium">{task}</p>
                    </div>
                  ))}
                </div>
              </section>
            </main>
          )}

          {activeTab === "content" && (
            <main className="mt-8 space-y-4">
              <h2 className="text-2xl font-black">Content Planner</h2>
              <button className="w-full rounded-2xl bg-pink-500 py-4 font-bold shadow-lg">+ Add New Content Idea</button>
              {contentIdeas.map((item) => (
                <div key={item.title} className="rounded-3xl bg-white/5 border border-white/10 p-5">
                  <div className="flex justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-sm text-zinc-400 mt-1">{item.platform} • {item.date}</p>
                    </div>
                    <span className="h-fit rounded-full bg-purple-500/20 text-purple-200 text-xs px-3 py-1 border border-purple-400/20">
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </main>
          )}

          {activeTab === "money" && (
            <main className="mt-8 space-y-5">
              <h2 className="text-2xl font-black">Money Tracker</h2>
              <section className="rounded-3xl bg-white/10 border border-white/10 p-5">
                <p className="text-zinc-300 text-sm">This Month</p>
                <h3 className="text-5xl font-black mt-2">$2,300</h3>
                <p className="text-sm text-emerald-300 mt-2">+ $640 from last month</p>
              </section>
              {[
                ["Affiliate Sales", "$850"],
                ["UGC / Brand Deals", "$900"],
                ["Books & Digital Products", "$550"],
              ].map(([label, amount]) => (
                <div key={label} className="flex items-center justify-between rounded-2xl bg-zinc-900 border border-white/10 p-4">
                  <span>{label}</span>
                  <strong>{amount}</strong>
                </div>
              ))}
            </main>
          )}

          {activeTab === "brands" && (
            <main className="mt-8 space-y-4">
              <h2 className="text-2xl font-black">Brand & Affiliate Tracker</h2>
              <button className="w-full rounded-2xl bg-purple-600 py-4 font-bold shadow-lg">+ Add Opportunity</button>
              {opportunities.map((item) => (
                <div key={item.brand} className="rounded-3xl bg-white/5 border border-white/10 p-5">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="font-bold text-lg">{item.brand}</h3>
                      <p className="text-sm text-zinc-400 mt-1">{item.type} • {item.stage}</p>
                    </div>
                    <span className="text-pink-300 font-black">{item.value}</span>
                  </div>
                </div>
              ))}
            </main>
          )}
        </div>

        <nav className="absolute bottom-0 left-0 right-0 bg-black/90 border-t border-white/10 backdrop-blur-xl px-4 py-4">
          <div className="grid grid-cols-4 gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-2xl py-3 text-xs font-bold transition ${
                  activeTab === tab.id
                    ? "bg-pink-500 text-white shadow-lg"
                    : "bg-white/5 text-zinc-400"
                }`}
              >
                <div className="text-lg">{tab.icon}</div>
                {tab.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}

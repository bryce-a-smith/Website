"use strict";

const personalLeaderboardArray = [
  {
    date: "1/21/2025",
    blocks: 2,
    goMiningToken: 579.66,
  },
  {
    date: "1/14/2025",
    blocks: 2,
    goMiningToken: 578.5,
  },
  {
    date: "1/07/2025",
    blocks: 0,
    goMiningToken: 0,
  },
  {
    date: "12/31/2025",
    blocks: 0,
    goMiningToken: 0,
  },
  {
    date: "12/24/2025",
    blocks: 0,
    goMiningToken: 0,
  },
  {
    date: "12/17/2025",
    blocks: 0,
    goMiningToken: 0,
  },
  {
    date: "12/10/2025",
    blocks: 0,
    goMiningToken: 0,
  },
];

const minerWarsRewardsArray = [
  {
    date: "1/20/2025",
    miners: 44,
    computingPower: 1959.25,
    meanE: 20.31,
    reward: 222.33,
    PR: 494.66,
    electricity: 199.51,
    service: 72.82,
    address: "3199",
    totalDiscount: "3.6%",
    status: "Reinvested",
    rewardMode: "minerWars",
    days: 7,
    blocks: 0,
    goMiningToken: 0,
  },
  {
    date: "1/13/2025",
    miners: 35,
    computingPower: 1651.37,
    meanE: 21.6,
    reward: 129.78,
    PR: 332.45,
    electricity: 150.88,
    service: 51.78,
    address: "3199",
    totalDiscount: "5.1%",
    status: "Reinvested",
    rewardMode: "minerWars",
    days: 7,
    blocks: 0,
    goMiningToken: 0,
  },
  {
    date: "1/6/2025",
    miners: 33,
    computingPower: 1533.86,
    meanE: 22.32,
    reward: 61.91,
    PR: 153.48,
    electricity: 68.73,
    service: 22.85,
    address: "3199",
    totalDiscount: "3%",
    status: "Reinvested",
    rewardMode: "minerWars",
    days: 7,
    blocks: 0,
    goMiningToken: 0,
  },
  {
    date: "12/30/2024",
    miners: 24,
    computingPower: 1439.2,
    meanE: 24.95,
    reward: 76.52,
    PR: 244.84,
    electricity: 129.92,
    service: 38.4,
    address: "3199",
    totalDiscount: "4.5%",
    status: "Reinvested",
    rewardMode: "minerWars",
    days: 7,
    blocks: 0,
    goMiningToken: 0,
  },
  {
    date: "12/23/2024",
    miners: 16,
    computingPower: 727.72,
    meanE: 21.31,
    reward: 116.91,
    PR: 116.91,
    electricity: 51.66,
    service: 17.97,
    address: "cdce",
    totalDiscount: "5.4%",
    status: "Reinvested",
    rewardMode: "minerWars",
    days: 7,
    blocks: 0,
    goMiningToken: 0,
  },
  {
    date: "12/16/2024",
    miners: 7,
    computingPower: 208.16,
    meanE: 19.48,
    reward: 23.17,
    PR: 23.17,
    electricity: 7.85,
    service: 2.99,
    address: "cdce",
    totalDiscount: "5.4%",
    status: "Reinvested",
    rewardMode: "minerWars",
    days: 7,
    blocks: 0,
    goMiningToken: 0,
  },
  {
    date: "12/9/2024",
    miners: 6,
    computingPower: 98.66,
    meanE: 17.36,
    reward: 8.33,
    PR: 8.33,
    electricity: 2.69,
    service: 1.15,
    address: "n709",
    totalDiscount: "12.4%",
    status: "Sent",
    rewardMode: "minerWars",
    days: 7,
    blocks: 0,
    goMiningToken: 0,
  },
];

const soloRewardsArray = [
  {
    date: "1/1/2025",
    computingPower: 1445.32,
    reward: 29.22,
    PR: 78.91,
    electricity: 37.59,
    service: 12.08,
    address: "3199",
    totalDiscount: "6.07%",
    status: "Reinvested",
    rewardMode: "solo",
    days: 1,
    blocks: 0,
    goMiningToken: 0,
  },
  {
    date: "12/31/2024",
    computingPower: 1442.3,
    reward: 27.12,
    PR: 78.13,
    electricity: 38.91,
    service: 12.1,
    address: "3199",
    totalDiscount: "5.77%",
    status: "Reinvested",
    rewardMode: "solo",
    days: 1,
    blocks: 0,
    goMiningToken: 0,
  },
  {
    date: "12/3/2024",
    computingPower: 27.2,
    reward: 1.1,
    PR: 1.62,
    electricity: 0.38,
    service: 0.16,
    address: "n709",
    totalDiscount: "21.98%",
    status: "Sent",
    rewardMode: "solo",
    days: 1,
    blocks: 0,
    goMiningToken: 0,
  },
  {
    date: "12/2/2024",
    computingPower: 27.2,
    reward: 1.13,
    PR: 1.65,
    electricity: 0.38,
    service: 0.16,
    address: "n709",
    totalDiscount: "21.89%",
    status: "Sent",
    rewardMode: "solo",
    days: 1,
    blocks: 0,
    goMiningToken: 0,
  },
  {
    date: "12/1/2024",
    computingPower: 27.2,
    reward: 1.16,
    PR: 1.68,
    electricity: 0.38,
    service: 0.16,
    address: "n709",
    totalDiscount: "21.89%",
    status: "Sent",
    rewardMode: "solo",
    days: 1,
    blocks: 0,
    goMiningToken: 0,
  },
  {
    date: "11/30/2024",
    computingPower: 27.2,
    reward: 1.11,
    PR: 1.63,
    electricity: 0.38,
    service: 0.16,
    address: "n709",
    totalDiscount: "21.89%",
    status: "Sent",
    rewardMode: "solo",
    days: 1,
    blocks: 0,
    goMiningToken: 0,
  },
  {
    date: "11/29/2024",
    computingPower: 27.2,
    reward: 1.14,
    PR: 1.66,
    electricity: 0.38,
    service: 0.16,
    address: "n709",
    totalDiscount: "21.89%",
    status: "Sent",
    rewardMode: "solo",
    days: 1,
    blocks: 0,
    goMiningToken: 0,
  },
  {
    date: "11/28/2024",
    computingPower: 27.2,
    reward: 1.12,
    PR: 1.64,
    electricity: 0.38,
    service: 0.16,
    address: "5atj",
    totalDiscount: "21.89%",
    status: "Sent",
    rewardMode: "solo",
    days: 1,
    blocks: 0,
    goMiningToken: 0,
  },
  {
    date: "11/27/2024",
    computingPower: 27.2,
    reward: 1.12,
    PR: 1.64,
    electricity: 0.38,
    service: 0.16,
    address: "5atj",
    totalDiscount: "21.89%",
    status: "Sent",
    rewardMode: "solo",
    days: 1,
    blocks: 0,
    goMiningToken: 0,
  },
  {
    date: "11/26/2024",
    computingPower: 27.2,
    reward: 1.07,
    PR: 1.59,
    electricity: 0.38,
    service: 0.16,
    address: "5atj",
    totalDiscount: "21.89%",
    status: "Sent",
    rewardMode: "solo",
    days: 1,
    blocks: 0,
    goMiningToken: 0,
  },
  {
    date: "11/25/2024",
    computingPower: 27.2,
    reward: 1.08,
    PR: 1.6,
    electricity: 0.38,
    service: 0.16,
    address: "5atj",
    totalDiscount: "21.91%",
    status: "Sent",
    rewardMode: "solo",
    days: 1,
    blocks: 0,
    goMiningToken: 0,
  },
  {
    date: "11/24/2024",
    computingPower: 27.2,
    reward: 1.13,
    PR: 1.65,
    electricity: 0.38,
    service: 0.16,
    address: "5atj",
    totalDiscount: "22.51%",
    status: "Sent",
    rewardMode: "solo",
    days: 1,
    blocks: 0,
    goMiningToken: 0,
  },
  {
    date: "11/23/2024",
    computingPower: 27.2,
    reward: 1.16,
    PR: 1.68,
    electricity: 0.38,
    service: 0.16,
    address: "5atj",
    totalDiscount: "22.21%",
    status: "Sent",
    rewardMode: "solo",
    days: 1,
    blocks: 0,
    goMiningToken: 0,
  },
  {
    date: "11/22/2024",
    computingPower: 27.2,
    reward: 1.18,
    PR: 1.7,
    electricity: 0.38,
    service: 0.16,
    address: "5atj",
    totalDiscount: "21.91%",
    status: "Sent",
    rewardMode: "solo",
    days: 1,
    blocks: 0,
    goMiningToken: 0,
  },
  {
    date: "11/21/2024",
    computingPower: 27.2,
    reward: 1.19,
    PR: 1.71,
    electricity: 0.38,
    service: 0.16,
    address: "5atj",
    totalDiscount: "22.51%",
    status: "Sent",
    rewardMode: "solo",
    days: 1,
    blocks: 0,
    goMiningToken: 0,
  },
  {
    date: "11/20/2024",
    computingPower: 27.2,
    reward: 0.83,
    PR: 1.65,
    electricity: 0.58,
    service: 0.24,
    address: "5atj",
    totalDiscount: "2.21%",
    status: "Sent",
    rewardMode: "solo",
    days: 1,
    blocks: 0,
    goMiningToken: 0,
  },
  {
    date: "11/19/2024",
    computingPower: 27.2,
    reward: 0.78,
    PR: 1.59,
    electricity: 0.58,
    service: 0.24,
    address: "5atj",
    totalDiscount: "1.91%",
    status: "Sent",
    rewardMode: "solo",
    days: 1,
    blocks: 0,
    goMiningToken: 0,
  },
];

function init() {
  //get HTML

  const miningWarsRewardsTableBody = document.querySelector("#mining-wars-rewards-table-body");

  //functions

  // Attach event listeners

  //call functions onload
}

window.onload = init;

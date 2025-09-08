// src/components/allProducts.js

// ==================== Atta Products ====================
import aashirvaadImg from "../assets/greencart_assets/aashirvaad.jpg";
import multigrainImg from "../assets/greencart_assets/Aashirvaad Atta With Multigrains, 5 kg.jpg";
import multigrain1kg from "../assets/greencart_assets/Aashirvaad Atta with Multigrains,1kg.jpg";
import multigrain11kg from "../assets/greencart_assets/Aashirvaad Atta with Multigrains,11kg.jpg";
import lalitaImg from "../assets/greencart_assets/Lalita_Atta1_5.jpg";
import annapurnaImg from "../assets/greencart_assets/AnnapurnaAtta_Farm Fresh_Chakki.jpg";
import fortuneImg from "../assets/greencart_assets/fortune_atta.webp";

export const attaProducts = [
  { id: 1001, key: "aashirvaad1kg", price: 65, originalPrice: 72, image: aashirvaadImg, inStock: true, rating: 4.5 },
  { id: 1002, key: "aashirvaad5kg", price: 305, originalPrice: 340, image: aashirvaadImg, inStock: true, rating: 4.7 },
  { id: 1003, key: "multi1kg", price: 75, originalPrice: 82, image: multigrain1kg, inStock: true, rating: 4.6 },
  { id: 1004, key: "multi5kg", price: 370, originalPrice: 410, image: multigrainImg, inStock: true, rating: 4.8 },
  { id: 1005, key: "multi11kg", price: 790, originalPrice: 850, image: multigrain11kg, inStock: false, rating: 4.4 },
  { id: 1006, key: "lalita1kg", price: 55, originalPrice: 60, image: lalitaImg, inStock: true, rating: 4.2 },
  { id: 1007, key: "lalita5kg", price: 250, originalPrice: 280, image: lalitaImg, inStock: true, rating: 4.3 },
  { id: 1008, key: "annapurna1kg", price: 60, originalPrice: 68, image: annapurnaImg, inStock: true, rating: 4.6 },
  { id: 1009, key: "annapurna5kg", price: 275, originalPrice: 305, image: annapurnaImg, inStock: true, rating: 4.7 },
  { id: 1010, key: "fortune0_5kg", price: 30, originalPrice: 35, image: fortuneImg, inStock: true, rating: 4.1 },
  { id: 1011, key: "fortune1kg", price: 60, originalPrice: 68, image: fortuneImg, inStock: true, rating: 4.4 },
  { id: 1012, key: "fortune5kg", price: 295, originalPrice: 325, image: fortuneImg, inStock: true, rating: 4.5 },
];

// ==================== Rice Products ====================
export const riceProducts = [
  { id: 2001, key: "santhamani_cc", brand: "Santhamani", type: "CC", weight: "25kg" },
  { id: 2002, key: "santhamani_hmt", brand: "Santhamani", type: "HMT", weight: "25kg" },
  { id: 2003, key: "bell_hmt", brand: "Bell", type: "HMT", weight: "25kg" },
  { id: 2004, key: "lalita_hmt", brand: "Lalita", type: "HMT", weight: "25kg" },
  { id: 2005, key: "brundhavanam_cc", brand: "Brundhavanam", type: "CC", weight: "25kg" },
  { id: 2006, key: "brundhavanam_hmt", brand: "Brundhavanam", type: "HMT", weight: "25kg" },
  { id: 2007, key: "dkr_cc", brand: "DKR", type: "CC", weight: "25kg" },
  { id: 2008, key: "dkr_cd", brand: "DKR", type: "CD", weight: "25kg" },
  { id: 2009, key: "dkr_hmt", brand: "DKR", type: "HMT", weight: "25kg" },
  { id: 2010, key: "hmt_27", brand: "27", type: "HMT", weight: "26kg" },
  { id: 2011, key: "999_cc", brand: "999", type: "CC", weight: "25kg" },
  { id: 2012, key: "999_hmt", brand: "999", type: "HMT", weight: "25kg" },
  { id: 2013, key: "scn_cc", brand: "SCN", type: "CC", weight: "25kg" },
  { id: 2014, key: "scn_hmt", brand: "SCN", type: "HMT", weight: "25kg" },
  { id: 2015, key: "akshaya_cc_5kg", brand: "Akshaya", type: "CC", weight: "5kg" },
  { id: 2016, key: "akshaya_cc_10kg", brand: "Akshaya", type: "CC", weight: "10kg" },
  { id: 2017, key: "akshaya_hmt_5kg", brand: "Akshaya", type: "HMT", weight: "5kg" },
  { id: 2018, key: "akshaya_hmt_10kg", brand: "Akshaya", type: "HMT", weight: "10kg" },
  { id: 2019, key: "akshaya_hmt_25kg", brand: "Akshaya", type: "HMT", weight: "25kg" },
];

// ==================== Whole Grains ====================
import korraluImg from "../assets/greencart_assets/korralu.jpeg";
import udaluImg from "../assets/greencart_assets/udalu.jpeg";
import samaluImg from "../assets/greencart_assets/samalu.jpeg";
import arkeluImg from "../assets/greencart_assets/arkelu.webp";
import gantiluImg from "../assets/greencart_assets/gantilu.webp";
import jonaluImg from "../assets/greencart_assets/jonalu.webp";
import andukorraluImg from "../assets/greencart_assets/andukorralu.webp";
import sajaluImg from "../assets/greencart_assets/sajjalu.webp";
import barleyImg from "../assets/greencart_assets/barley.jpeg";
import oatsImg from "../assets/greencart_assets/oatslion.jpeg";

export const wholeGrains = [
  { id: 3001, key: "korralu", name: "Foxtail Millet", size: "0.5kg", image: korraluImg, rating: 4.6, inStock: true },
  { id: 3002, key: "udalu", name: "Barnyard Millet", size: "0.5kg", image: udaluImg, rating: 4.5, inStock: true },
  { id: 3003, key: "samalu", name: "Little Millet", size: "0.5kg", image: samaluImg, rating: 4.4, inStock: true },
  { id: 3004, key: "arkelu", name: "Kodo Millet", size: "0.5kg", image: arkeluImg, rating: 4.3, inStock: true },
  { id: 3005, key: "gantilu", name: "Proso Millet", size: "0.5kg", image: gantiluImg, rating: 4.2, inStock: true },
  { id: 3006, key: "jonalu", name: "Sorghum", size: "0.5kg", image: jonaluImg, rating: 4.3, inStock: true },
  { id: 3007, key: "andukorralu", name: "Browntop Millet", size: "0.5kg", image: andukorraluImg, rating: 4.4, inStock: true },
  { id: 3008, key: "sajalu", name: "Pearl Millet", size: "0.5kg", image: sajaluImg, rating: 4.2, inStock: true },
  { id: 3009, key: "barley", name: "Barley", size: "loose", image: barleyImg, rating: 4.1, inStock: true, loose: true },
  { id: 3010, key: "oats_05", name: "Oats (Lion Brand)", size: "0.5kg", image: oatsImg, rating: 4.5, inStock: true },
  { id: 3011, key: "oats_1", name: "Oats (Lion Brand)", size: "1kg", image: oatsImg, rating: 4.6, inStock: true },
];

// ==================== Dal & Pulses ====================
import agrorichImg from "../assets/greencart_assets/agrorich.jpeg";
import kandipapuImg from "../assets/greencart_assets/kandipapu.jpeg";
import yeraKandipapuImg from "../assets/greencart_assets/yera kandipapu.jpeg";
import minapapuDoublehorseImg from "../assets/greencart_assets/minapapu_doublehorse.jpeg";
import minapapuGopuramImg from "../assets/greencart_assets/minapapu_gopuram.jpeg";
import pasaraDoublehorseImg from "../assets/greencart_assets/pasarapapu_doublehorse.jpeg";
import pasaraImg from "../assets/greencart_assets/pasarapapu.jpeg";
import channapapuShaktiImg from "../assets/greencart_assets/channapapu_shakti.jpeg";
import channapapuLooseImg from "../assets/greencart_assets/channapapu_loose.jpeg";
import kabuliImg from "../assets/greencart_assets/kabuli_chana.jpeg";
import kombuImg from "../assets/greencart_assets/kombu_chana.jpeg";
import bathaniWhiteImg from "../assets/greencart_assets/bathani_white.jpeg";
import bathaniGreenImg from "../assets/greencart_assets/bathani_green.jpeg";
import pesaluImg from "../assets/greencart_assets/pesalu.jpeg";
import minguluImg from "../assets/greencart_assets/mingulu.jpeg";
import ginguluImg from "../assets/greencart_assets/gingulu.jpeg";
import kanduluImg from "../assets/greencart_assets/kandulu.jpeg";
import kodumuluImg from "../assets/greencart_assets/Kodumulu.webp";
import soluImg from "../assets/greencart_assets/Solu.jpeg";
import chenguduluImg from "../assets/greencart_assets/chanagagudulu.jpeg";
import rajmaImg from "../assets/greencart_assets/Rajma.jpeg";
import soyabeanImg from "../assets/greencart_assets/Soyabean.jpeg";

export const dalPulses = [
  { id: 4001, key: "agrorich", name: "Kandipapu (Agrorich)", size: "1kg packet", image: agrorichImg, rating: 4.6, inStock: true },
  { id: 4002, key: "agrorich", name: "Kandipapu (Sona)", size: "1kg packet", image: kandipapuImg, rating: 4.5, inStock: true },
  { id: 4003, key: "kandipapu", name: "Kandipapu (Sona)", size: "loose", image: kandipapuImg, rating: 4.5, inStock: true, loose: true },
  { id: 4004, key: "yera_kandipapu", name: "Kandipapu (Akolla)", size: "loose", image: yeraKandipapuImg, rating: 4.4, inStock: true, loose: true },
  { id: 4005, key: "minapapu_doublehorse", name: "Minapapu (Double Horse)", size: "0.5kg packet", image: minapapuDoublehorseImg, rating: 4.4, inStock: true },
  { id: 4006, key: "minapapu_doublehorse", name: "Minapapu (Double Horse)", size: "1kg packet", image: minapapuDoublehorseImg, rating: 4.4, inStock: true },
  { id: 4007, key: "minapapu_gopuram", name: "Minapapu (Gopuram)", size: "loose", image: minapapuGopuramImg, rating: 4.3, inStock: true, loose: true },
  { id: 4008, key: "pasarapapu_doublehorse", name: "Pasarapapu (Double Horse)", size: "0.5kg packet", image: pasaraDoublehorseImg, rating: 4.3, inStock: true },
  { id: 4009, key: "pasarapapu_doublehorse", name: "Pasarapapu (Double Horse)", size: "1kg packet", image: pasaraDoublehorseImg, rating: 4.3, inStock: true },
  { id: 4010, key: "pasarapapu_thumbup", name: "Pasarapapu (Thumb Up)", size: "loose", image: pasaraImg, rating: 4.2, inStock: true, loose: true },
  { id: 4011, key: "channapapu_shakti", name: "Channapapu (Shakti)", size: "0.5kg packet", image: channapapuShaktiImg, rating: 4.4, inStock: true },
  { id: 4012, key: "channapapu_shakti", name: "Channapapu (Shakti)", size: "1kg packet", image: channapapuShaktiImg, rating: 4.4, inStock: true },
  { id: 4013, key: "channapapu_loose", name: "Channapapu (Loose Chocolate)", size: "loose", image: channapapuLooseImg, rating: 4.3, inStock: true, loose: true },
  { id: 4014, key: "kabuli", name: "Kabuli Chana", size: "250g–1kg", image: kabuliImg, rating: 4.3, inStock: true, loose: true },
  { id: 4015, key: "kombu", name: "Kombu Chana", size: "250g–1kg", image: kombuImg, rating: 4.2, inStock: true, loose: true },
  { id: 4016, key: "bathani_white", name: "Bathani White", size: "250g–1kg", image: bathaniWhiteImg, rating: 4.3, inStock: true, loose: true },
  { id: 4017, key: "bathani_green", name: "Bathani Green", size: "250g–1kg", image: bathaniGreenImg, rating: 4.3, inStock: true, loose: true },
  { id: 4018, key: "pesalu", name: "Pesalu", size: "250g–1kg", image: pesaluImg, rating: 4.3, inStock: true, loose: true },
  { id: 4019, key: "mingulu", name: "Mingulu", size: "250g–1kg", image: minguluImg, rating: 4.2, inStock: true, loose: true },
  { id: 4020, key: "gingulu", name: "Gingulu", size: "250g–1kg", image: ginguluImg, rating: 4.2, inStock: true, loose: true },
  { id: 4021, key: "kandulu", name: "Kandulu", size: "250g–1kg", image: kanduluImg, rating: 4.2, inStock: true, loose: true },
  { id: 4022, key: "kodumulu", name: "Kodumulu", size: "250g–1kg", image: kodumuluImg, rating: 4.3, inStock: true, loose: true },
  { id: 4023, key: "solu", name: "Solu", size: "250g–1kg", image: soluImg, rating: 4.1, inStock: true, loose: true },
  { id: 4024, key: "chengudulu", name: "Chengudulu", size: "250g–1kg", image: chenguduluImg, rating: 4.2, inStock: true, loose: true },
  { id: 4025, key: "rajma", name: "Rajma", size: "250g–1kg", image: rajmaImg, rating: 4.4, inStock: true, loose: true },
  { id: 4026, key: "soyabean", name: "Soyabean (Chikkudu Pikkalu)", size: "250g–1kg", image: soyabeanImg, rating: 4.3, inStock: true, loose: true }
];

// ==================== Oil & Ghee ====================
import aadhaarImg from "../assets/greencart_assets/aadhar_1kg.jpeg";
import aadhaar5kgImg from "../assets/greencart_assets/aadhar_5kg.jpeg";
import aadhaar15kgImg from "../assets/greencart_assets/aadhar_15kg.jpeg";
import freedomImg from "../assets/greencart_assets/freedom_1.jpeg";
import freedom5kgImg from "../assets/greencart_assets/freedom_5kg.jpeg";
import freedom15kgImg from "../assets/greencart_assets/freedom_15kg.jpeg";
import groundnutImg from "../assets/greencart_assets/groundnutoil.jpeg";
import formAlpha1Img from "../assets/greencart_assets/form_alpha_1.jpeg";
import formAlpha16Img from "../assets/greencart_assets/form_alpha_16.jpeg";
import formFirst1Img from "../assets/greencart_assets/form_firstklass_1l.jpeg";
import formFirst15Img from "../assets/greencart_assets/form_firstclass_15kg.jpeg";
import formPriya1Img from "../assets/greencart_assets/form_priyagold_1l.jpeg";
import formPriya15Img from "../assets/greencart_assets/form_priyagold_15kg.jpeg";
import formRuchi1Img from "../assets/greencart_assets/form_ruchigold_1l.jpeg";
import formRuchi15Img from "../assets/greencart_assets/form_ruchigold_15kg.jpeg";
import amul200Img from "../assets/greencart_assets/amul_200g.jpeg";
import amul200v2Img from "../assets/greencart_assets/amul_200g2.jpeg";
import amul500Img from "../assets/greencart_assets/amul_500g.jpeg";
import amul1kgImg from "../assets/greencart_assets/amul_1kg.jpeg";
import hatsunImg from "../assets/greencart_assets/hotson_all.jpeg";
import naniImg from "../assets/greencart_assets/nani_5r.jpeg";
import grbImg from "../assets/greencart_assets/grb_200g.jpeg";

export const oilGheeProducts = [
  { id: 5001, key: "aadhaar", name: "Aadhaar Sunflower Oil", size: "1L pouch", image: aadhaarImg, rating: 4.5, inStock: true },
  { id: 5002, key: "aadhaar", name: "Aadhaar Sunflower Oil", size: "0.5L pouch", image: aadhaarImg, rating: 4.5, inStock: true },
  { id: 5003, key: "aadhaar", name: "Aadhaar Sunflower Oil", size: "5L tin", image: aadhaar5kgImg, rating: 4.6, inStock: true },
  { id: 5004, key: "aadhaar", name: "Aadhaar Sunflower Oil", size: "15L tin", image: aadhaar15kgImg, rating: 4.6, inStock: true },
  { id: 5005, key: "freedom", name: "Freedom Oil", size: "1L packet", image: freedomImg, rating: 4.5, inStock: true },
  { id: 5006, key: "freedom", name: "Freedom Oil", size: "0.5L packet", image: freedomImg, rating: 4.5, inStock: true },
  { id: 5007, key: "freedom", name: "Freedom Oil", size: "5kg packet", image: freedom5kgImg, rating: 4.6, inStock: true },
  { id: 5008, key: "freedom", name: "Freedom Oil", size: "15kg tin box", image: freedom15kgImg, rating: 4.6, inStock: true },
  { id: 5009, key: "groundnut", name: "Groundnut Oil", size: "1L bottle", image: groundnutImg, rating: 4.4, inStock: true },
  { id: 5010, key: "form_alpha", name: "Form Oil (Alpha)", size: "1L packet", image: formAlpha1Img, rating: 4.5, inStock: true },
  { id: 5011, key: "form_alpha", name: "Form Oil (Alpha)", size: "15kg box", image: formAlpha16Img, rating: 4.6, inStock: true },
  { id: 5012, key: "form_priyagold", name: "Form Oil (Priya Gold)", size: "1L packet", image: formPriya1Img, rating: 4.4, inStock: true },
  { id: 5013, key: "form_priyagold", name: "Form Oil (Priya Gold)", size: "15kg box", image: formPriya15Img, rating: 4.5, inStock: true },
  { id: 5014, key: "form_ruchigold", name: "Form Oil (Ruchi Gold)", size: "1L packet", image: formRuchi1Img, rating: 4.4, inStock: true },
  { id: 5015, key: "form_ruchigold", name: "Form Oil (Ruchi Gold)", size: "15kg box", image: formRuchi15Img, rating: 4.5, inStock: true },
  { id: 5016, key: "form_firstclass", name: "Form Oil (First Class)", size: "1L packet", image: formFirst1Img, rating: 4.3, inStock: true },
  { id: 5017, key: "form_firstclass", name: "Form Oil (First Class)", size: "15kg box", image: formFirst15Img, rating: 4.4, inStock: true },
  { id: 5018, key: "amul", name: "Amul Ghee", size: "200g bottle", image: amul200Img, rating: 4.7, inStock: true },
  { id: 5019, key: "amul", name: "Amul Ghee", size: "200g bottle (v2)", image: amul200v2Img, rating: 4.7, inStock: true },
  { id: 5020, key: "amul", name: "Amul Ghee", size: "500g bottle", image: amul500Img, rating: 4.8, inStock: true },
  { id: 5021, key: "amul", name: "Amul Ghee", size: "1kg bottle", image: amul1kgImg, rating: 4.8, inStock: true },
  { id: 5022, key: "hatsun", name: "Hatsun Ghee", size: "100g", image: hatsunImg, rating: 4.6, inStock: true },
  { id: 5023, key: "hatsun", name: "Hatsun Ghee", size: "200g", image: hatsunImg, rating: 4.6, inStock: true },
  { id: 5024, key: "hatsun", name: "Hatsun Ghee", size: "0.5kg", image: hatsunImg, rating: 4.6, inStock: true },
  { id: 5025, key: "hatsun", name: "Hatsun Ghee", size: "1kg", image: hatsunImg, rating: 4.6, inStock: true },
  { id: 5026, key: "nani", name: "Nani Ghee", size: "₹5 packet", image: naniImg, rating: 4.5, inStock: true },
  { id: 5027, key: "nani", name: "Nani Ghee", size: "₹10 packet", image: naniImg, rating: 4.5, inStock: true },
  { id: 5028, key: "nani", name: "Nani Ghee", size: "50g packet", image: naniImg, rating: 4.5, inStock: true },
  { id: 5029, key: "nani", name: "Nani Ghee", size: "100g packet", image: naniImg, rating: 4.5, inStock: true },
  { id: 5030, key: "nani", name: "Nani Ghee", size: "200g packet", image: naniImg, rating: 4.5, inStock: true },
  { id: 5031, key: "nani", name: "Nani Ghee", size: "0.5kg packet", image: naniImg, rating: 4.5, inStock: true },
  { id: 5032, key: "nani", name: "Nani Ghee", size: "1kg packet", image: naniImg, rating: 4.5, inStock: true },
  { id: 5033, key: "grb", name: "GRB Ghee", size: "200g bottle", image: grbImg, rating: 4.6, inStock: true },
  { id: 5034, key: "grb", name: "GRB Ghee", size: "0.5kg bottle", image: grbImg, rating: 4.6, inStock: true },
  { id: 5035, key: "grb", name: "GRB Ghee", size: "1kg bottle", image: grbImg, rating: 4.6, inStock: true }
];

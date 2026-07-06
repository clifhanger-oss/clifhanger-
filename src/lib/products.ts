// AUTO-GENERATED from the DWB 2026 catalogs (Sport / Work Safety / RC).
// Regenerate via the catalog extraction pipeline; do not hand-edit rows.

export type ProductSpec = { label: string; value: string };
export type ProductWeight = { length: string; weight: string };

export type Product = {
  id: string;
  code: string;
  name: string;
  title?: string;
  category: string;
  articleNo?: string;
  type?: string | null;
  image: string;
  status: string;
  rating: string;
  available: boolean;
  description: string;
  features: string[];
  specs: ProductSpec[];
  attributes: string[];
  colors: string[];
  weights: ProductWeight[];
  weight?: string | null;
  certification?: string | null;
  origin?: string | null;
};

export const CATEGORY_ORDER: string[] = ["Belay Devices", "Carabiners & Quickdraws", "Pulleys", "Descenders & Rescue", "Hardware Accessories", "Spare Parts", "Climbing Shoes — High-End", "Climbing Shoes — Performance", "Chalk Bags", "Chalk & Accessories"];

export const PRODUCTS: Product[] = [
  {
    "id": "73742",
    "code": "73742",
    "name": "Giga Jul",
    "title": "Giga Jul",
    "category": "Belay Devices",
    "articleNo": "73742",
    "type": "ST",
    "image": "/images/products/73742.webp",
    "status": "BELAY",
    "rating": "EN 15151-2",
    "available": true,
    "description": "The most versatile ever belay device. The GIGA JUL is a standard and assisted braking tuber in one. The assisted braking function which supports the braking force can be activated or disabled by an intelligent mechanism. For situation-dependent belaying and abseiling, especially in alpine terrain.",
    "features": [
      "Small eyelet for releasing unit with a carabiner when bringing up your partner",
      "Suitable for 7.1–10.0 mm ropes",
      "Intelligent hybrid design: body made of ultra-light aluminum, areas susceptible to abrasion made of robust stainless steel",
      "Guide mode: simple and rapid abseiling and bringing up seconds plus comfortable belaying from a belay station as a doubled rope",
      "Assisted braking guide mode: brake boost for catching falls in leader mode",
      "Rope can be paid out faster in assisted braking guide mode by holding the device in the 'open' position with the thumb"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 15151-2"
      },
      {
        "label": "Material",
        "value": "Steel, Polyamide"
      },
      {
        "label": "Approved rope diameter",
        "value": "7.1–10 mm"
      },
      {
        "label": "Weight",
        "value": "121 g"
      }
    ],
    "attributes": [
      "Geometric",
      "Manual"
    ],
    "colors": [
      "slate 663"
    ],
    "weights": [],
    "weight": "121 g",
    "certification": "EN 15151-2",
    "origin": null
  },
  {
    "id": "71832",
    "code": "71832",
    "name": "Jul 2",
    "title": "Jul 2",
    "category": "Belay Devices",
    "articleNo": "71832",
    "type": "ST",
    "image": "/images/products/71832.webp",
    "status": "BELAY",
    "rating": "EN 15151-2",
    "available": true,
    "description": "Innovative belay device with high braking performance for single ropes. The optimized MEGA JUL geometry ensures easy and secure belaying even with thicker ropes.",
    "features": [
      "Body made of high-quality stainless steel",
      "Optimized geometry ensures easy operation even for beginners",
      "High braking performance assists the belayer with leader falls",
      "Rope can be paid out faster to a leader by holding device in the 'open' position with the thumb",
      "Perfect handling, even for ropes with a larger diameter",
      "Suitable for 8.9–11.0 mm single ropes"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 15151-2"
      },
      {
        "label": "Material",
        "value": "Steel"
      },
      {
        "label": "Approved rope diameter",
        "value": "8.9–11 mm"
      },
      {
        "label": "Weight",
        "value": "105 g"
      }
    ],
    "attributes": [
      "Made in Germany",
      "Geometric",
      "Manual"
    ],
    "colors": [
      "oasis 138"
    ],
    "weights": [],
    "weight": "105 g",
    "certification": "EN 15151-2",
    "origin": "Made in Germany"
  },
  {
    "id": "8271",
    "code": "8271",
    "name": "Kiwi",
    "title": "Kiwi",
    "category": "Belay Devices",
    "articleNo": "8271",
    "type": "ST",
    "image": "/images/products/8271.webp",
    "status": "BELAY",
    "rating": "EN 12275",
    "available": true,
    "description": "Light and compact oval carabiner. The oval shape optimally distributes the load on the longitudinal axis and offers a large capacity. The ideal carabiner for clearly organized gear.",
    "features": [
      "Keylock closure mechanism for optimum handling when clipping and unclipping",
      "Available as a gate or slider version"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12275"
      },
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Closure",
        "value": "Normal"
      },
      {
        "label": "Carabiner shape",
        "value": "Oval"
      },
      {
        "label": "Fmax. major axis",
        "value": "24 kN"
      },
      {
        "label": "Fmax. open",
        "value": "8 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "10 kN"
      },
      {
        "label": "Width",
        "value": "57 mm"
      },
      {
        "label": "Length",
        "value": "100 mm"
      },
      {
        "label": "Gate opening",
        "value": "23 mm"
      },
      {
        "label": "Weight",
        "value": "56 g"
      }
    ],
    "attributes": [],
    "colors": [
      "icemint 329",
      "night 017",
      "oasis 138"
    ],
    "weights": [],
    "weight": "56 g",
    "certification": "EN 12275",
    "origin": null
  },
  {
    "id": "73831",
    "code": "73831",
    "name": "Mega Jul II",
    "title": "Mega Jul II",
    "category": "Belay Devices",
    "articleNo": "73831",
    "type": "ST",
    "image": "/images/products/73831.webp",
    "status": "BELAY",
    "rating": "EN 15151-2",
    "available": true,
    "description": "Our versatile, lightweight, and durable stainless steel belay device and descender.",
    "features": [
      "Robust solid stainless steel construction",
      "The increased braking effect of the new device geometry assists the belayer when arresting a fall as a leader",
      "Faster rope payout when lead climbing thanks to the thumb-loop-based operation",
      "Additional eyelet for unlocking the device in follower mode using a carabiner",
      "Suitable for ropes with a diameter of 7.8 to 10.0 mm",
      "Suitable for belaying a leader, bringing up one or two followers, and rappelling"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 15151-2"
      },
      {
        "label": "Material",
        "value": "Steel"
      },
      {
        "label": "Approved rope diameter",
        "value": "7.8–10.0 mm"
      },
      {
        "label": "Weight",
        "value": "75 g"
      }
    ],
    "attributes": [
      "Made in Germany",
      "Geometric",
      "Manual"
    ],
    "colors": [
      "slate 663"
    ],
    "weights": [],
    "weight": "75 g",
    "certification": "EN 15151-2",
    "origin": "Made in Germany"
  },
  {
    "id": "73829",
    "code": "73829",
    "name": "Ohm II",
    "title": "Ohm II",
    "category": "Belay Devices",
    "articleNo": "73829",
    "type": "ST",
    "image": "/images/products/73829.webp",
    "status": "BELAY",
    "rating": "—",
    "available": true,
    "description": "The second generation of our innovative and successful OHM is easier to use than ever thanks to a number of updates. The assisted-braking resistor for increasing the braking effect when climbing in rope teams with major weight differences has a swivel joint that improves the device's freedom of movement. As a result, the clipping direction no longer matters when the device is clipped to the first bolt. The locking system prevents the device from opening accidentally and makes it far easier to insert the rope and remove the device when lowering.",
    "features": [
      "OHM is attached at the first bolt in the safety chain",
      "Rope handling when belaying a lead climber not affected (no additional friction when paying out rope)",
      "For single ropes from 8.9–11.0 mm",
      "Far lower forces are exerted on the belayer",
      "Lowering a heavier person in a controlled manner is far easier",
      "The device reduces the risk of a collision when falling on the first bolt",
      "Makes the belayer 25 kg heavier",
      "Minimum belayer weight: 40 kg"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Aluminium, Steel, Polyamide, LDPE"
      },
      {
        "label": "Approved rope diameter",
        "value": "8.9–11 mm"
      },
      {
        "label": "Weight",
        "value": "405 g"
      }
    ],
    "attributes": [
      "Made in Germany",
      "Manual"
    ],
    "colors": [
      "blue 300",
      "oasis-night 217",
      "violet 330"
    ],
    "weights": [],
    "weight": "405 g",
    "certification": null,
    "origin": "Made in Germany"
  },
  {
    "id": "73840",
    "code": "73840",
    "name": "Ohmega",
    "title": "Ohmega",
    "category": "Belay Devices",
    "articleNo": "73840",
    "type": "ST",
    "image": "/images/products/73840.webp",
    "status": "BELAY",
    "rating": "—",
    "available": true,
    "description": "Rethink belaying - weighing in at barely 190 g, the compact OHMEGA is a highly versatile brake assistant suitable for use by a wide target group. Whether in climbing gyms, at the crag, or on alpine sport climbing routes (when using a single rope), it offers genuine added value in terms of safety and comfort for both climbers and belayers. This benefits beginners, experienced climbers, and pros as well as rope parties with and without a weight difference. The integrated HMPE sling enables users to switch between three different braking levels with a simple hand movement to suit the weight distribution. The integrated pulley keeps the friction generated at the first bolt lower than when using a quickdraw, so users won't notice the OHMEGA when climbing or clipping, even on long and difficult routes. Thanks to the short HMPE sling and the resultant minimal activation distance, the belayer finds it easier to belay dynamically and softly, reducing the risk of impact-induced injuries. In the event of a fall, the cam brakes the fall, supporting the belayer and balancing out weight differences. As a result, the belayer won't be pulled off the ground in the event of a big fall. With falls from a low height, the braking effect of the OHMEGA reduces the risk of both the climbing partners colliding and the climber hitting the ground. The OHMEGA also brakes reliably if the climber falls into the device. Simple, light, and offering enhanced safety and comfort for both climbing partners, the OHMEGA opens up new possibilities and makes belaying a completely new experience.",
    "features": [
      "Far lower forces are exerted on the belayer",
      "Versatile brake assistant",
      "For all rope parties - from beginners to pros",
      "For climbing gyms, sport climbing crags and alpine sport climbing routes (single rope)",
      "Lightweight and compact – always in your backpack",
      "Superior belay assistance",
      "3 easy-to-adjust braking levels",
      "Brakes even when falling directly into the device (active load) and reduces the risk of collisions and hitting the ground",
      "Integrated pulley reduces friction while climbing and clipping, making the device ideal for long, difficult routes"
    ],
    "specs": [
      {
        "label": "Approved rope diameter",
        "value": "8.6–10.5 mm"
      },
      {
        "label": "Weight",
        "value": "190 g"
      }
    ],
    "attributes": [
      "Made in Germany"
    ],
    "colors": [
      "oasis 138"
    ],
    "weights": [],
    "weight": "190 g",
    "certification": null,
    "origin": "Made in Germany"
  },
  {
    "id": "73838",
    "code": "73838",
    "name": "Pinch",
    "title": "Pinch",
    "category": "Belay Devices",
    "articleNo": "73838",
    "type": "ST",
    "image": "/images/products/73838.webp",
    "status": "BELAY",
    "rating": "EN 15151-1",
    "available": true,
    "description": "Pinch - a new belaying experience with the PINCH, a new, versatile assisted braking belay device for use in sport climbing, multi-pitch climbing and rope access techniques. The PINCH is the first device on the market that can be attached directly to the central ring of the climbing harness. Thanks to its low, close-to-the-body position, the PINCH does not need to be fixed in place when releasing the rope and the brake rope can always be gripped with all fingers. In addition, the compact belay system provides an increased span, which allows the belayer to pay out 20-30 cm more rope at once. The linear rope run through the frontal steel braking grooves reduces rope tangles when lowering and abseiling. In addition to the lowering lever, the speed can be controlled by the pressure of the braking hand, which contributes to increased braking rope control, especially when using thin, soft ropes. The anti-panic function provides added safety not only for beginners. A special feature is the integrated second braking tier, which enables controlled lowering by pulling the lowering lever further when securing particularly light persons or in systems with high rope friction. Users and experienced rope access technicians can permanently deactivate the anti-panic function using a screw supplied. Another plus: When used on multi-pitch lengths, the PINCH is the only device on the market that can be attached to the belay station in four different directions in 90° increments. This means that the lowering lever can always be brought into a position in which it can be operated freely.",
    "features": [
      "Assisted braking belay device for versatile use in sport climbing, multi-pitch climbing and rope access",
      "Position close to the body due to direct harness attachment increases brake rope control and improves usability",
      "Direct harness attachment eliminates the risk of cross-loading the belay carabiner",
      "Deactivatable anti-panic function for increased safety by automatically locking the device if the lowering lever is pulled too far backwards",
      "Second braking tier if the anti-panic function is activated too frequently due to insufficient load and/or excessive rope friction",
      "Frontal steel brake grooves allow the rope to run linearly and ensure less rope tangling, increased durability and prevent unsightly discoloration that occurs when the rope rubs against aluminium",
      "Attachment to the belay station in four different directions in 90° increments",
      "Equal operation for right and left-handed users",
      "Suitable for dynamic ropes from 8.5 to 10.5 mm diameter",
      "Suitable for static ropes from 10.0 to 10.5 mm diameter (120 kg max. user weight)"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 15151-1, EN 12841-C, UIAA 129"
      },
      {
        "label": "Material",
        "value": "Steel/ALU"
      },
      {
        "label": "Approved rope diameter",
        "value": "8.5–10.5 mm"
      },
      {
        "label": "Weight",
        "value": "235 g"
      }
    ],
    "attributes": [
      "UIAA",
      "Mechanical"
    ],
    "colors": [
      "anthracite-oasis 815",
      "blue-night 314",
      "night 017",
      "violet-oasis 296"
    ],
    "weights": [],
    "weight": "235 g",
    "certification": "EN 15151-1",
    "origin": null
  },
  {
    "id": "73946",
    "code": "73946",
    "name": "Spare Ohmega Sling",
    "title": "Spare Ohmega Sling",
    "category": "Belay Devices",
    "articleNo": "73946",
    "type": "ST",
    "image": "/images/products/73946.webp",
    "status": "BELAY",
    "rating": "EN 566",
    "available": true,
    "description": "Replacement sling for the EDELRID OHMEGA.",
    "features": [],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 566"
      },
      {
        "label": "Material",
        "value": "HMPE"
      },
      {
        "label": "Minimum breaking strength",
        "value": "22 kN"
      },
      {
        "label": "Weight",
        "value": "5 g"
      }
    ],
    "attributes": [
      "Fair Wear"
    ],
    "colors": [
      "night 017"
    ],
    "weights": [],
    "weight": "5 g",
    "certification": "EN 566",
    "origin": null
  },
  {
    "id": "88272",
    "code": "88272",
    "name": "Axiom Slider",
    "title": "Axiom Slider",
    "category": "Carabiners & Quickdraws",
    "articleNo": "88272",
    "type": "ST",
    "image": "/images/products/88272.webp",
    "status": "CARABINER",
    "rating": "EN 12275 / EN 362",
    "available": true,
    "description": "Carabiner with integrated pulley in the spine. The pulley reduces rope friction to a minimum and maintains its function even under load. The optimized design of the AXIOM ensures that the rope is always ideally guided so that it can always run on the pulley. Available with a classic gate or the automatic and very compact Slider locking gate. The gate opens on the pulley side, which makes installing the rope easier.",
    "features": [
      "Very lightweight construction",
      "Available as a gate or slider version",
      "Pulley maintains its function even under load",
      "Optimized design for perfect rope guidance in the carabiner at all times",
      "Efficiency: 86 %"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12275 / EN 362"
      },
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Closure",
        "value": "Slider"
      },
      {
        "label": "Carabiner shape",
        "value": "Axiom"
      },
      {
        "label": "Fmax. major axis",
        "value": "22 kN"
      },
      {
        "label": "Fmax. open",
        "value": "7 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "8 kN"
      },
      {
        "label": "Width",
        "value": "65 mm"
      },
      {
        "label": "Length",
        "value": "100 mm"
      },
      {
        "label": "Gate opening",
        "value": "18 mm"
      },
      {
        "label": "Weight",
        "value": "68g"
      }
    ],
    "attributes": [],
    "colors": [
      "oasis 138"
    ],
    "weights": [],
    "weight": "68g",
    "certification": "EN 12275 / EN 362",
    "origin": null
  },
  {
    "id": "73811",
    "code": "73811",
    "name": "Bulletproof Screw",
    "title": "Bulletproof Screw",
    "category": "Carabiners & Quickdraws",
    "articleNo": "73811",
    "type": "ST",
    "image": "/images/products/73811.webp",
    "status": "CARABINER",
    "rating": "EN 12275 / UIAA 121",
    "available": true,
    "description": "Small, robust screwgate biner with steel insert at the apex. Prevents premature wear and burrs or sharp edges. Ideal for personal protection use, e.g. clipping into a belay anchor.",
    "features": [
      "Keylock closure mechanism for optimum handling when clipping and unclipping",
      "H-profile construction ensures best possible use of material and minimal weight",
      "Steel insert prevents premature wear from rope friction or bolt hangers"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12275 / UIAA 121"
      },
      {
        "label": "Material",
        "value": "Alu / Steel"
      },
      {
        "label": "Closure",
        "value": "Screw"
      },
      {
        "label": "Carabiner shape",
        "value": "Offset D Bulletproof"
      },
      {
        "label": "Fmax. major axis",
        "value": "27 kN"
      },
      {
        "label": "Fmax. open",
        "value": "8 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "10 kN"
      },
      {
        "label": "Width",
        "value": "60 mm"
      },
      {
        "label": "Length",
        "value": "100 mm"
      },
      {
        "label": "Gate opening",
        "value": "18 mm"
      },
      {
        "label": "Weight",
        "value": "60g"
      }
    ],
    "attributes": [
      "Keylock"
    ],
    "colors": [
      "icemint 329",
      "oasis 138"
    ],
    "weights": [],
    "weight": "60g",
    "certification": "EN 12275 / UIAA 121",
    "origin": null
  },
  {
    "id": "73805",
    "code": "73805",
    "name": "HMS Bruce Steel Screw FG II",
    "title": "HMS Bruce Steel Screw FG II",
    "category": "Carabiners & Quickdraws",
    "articleNo": "73805",
    "type": "ST",
    "image": "/images/products/73805.webp",
    "status": "CARABINER",
    "rating": "EN 12275 / EN 362",
    "available": true,
    "description": "Extremely strong steel HMS carabiner with an internal spring bar to prevent it from twisting. Ideal for situations with greater wear (belaying with a tubular belay device or top-roping).",
    "features": [
      "Keylock closure mechanism for optimum handling when clipping and unclipping",
      "Spring bar holds the carabiner in place when belaying to prevent cross loading",
      "H-profile construction ensures best possible use of material and minimal weight",
      "The HMS BRUCE STEEL FG is designed to perfectly complement the MEGA JUL's geometry"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12275 / EN 362"
      },
      {
        "label": "Material",
        "value": "Steel"
      },
      {
        "label": "Closure",
        "value": "Screw"
      },
      {
        "label": "Fmax. major axis",
        "value": "28 kN"
      },
      {
        "label": "Fmax. open",
        "value": "10 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "8 kN"
      },
      {
        "label": "Width",
        "value": "72 mm"
      },
      {
        "label": "Length",
        "value": "107 mm"
      },
      {
        "label": "Gate opening",
        "value": "22 mm"
      },
      {
        "label": "Weight",
        "value": "140g"
      }
    ],
    "attributes": [
      "Keylock"
    ],
    "colors": [
      "silver 006"
    ],
    "weights": [],
    "weight": "140g",
    "certification": "EN 12275 / EN 362",
    "origin": null
  },
  {
    "id": "73807",
    "code": "73807",
    "name": "HMS Bruce Steel Triple FG",
    "title": "HMS Bruce Steel Triple FG",
    "category": "Carabiners & Quickdraws",
    "articleNo": "73807",
    "type": "ST",
    "image": "/images/products/73807.webp",
    "status": "CARABINER",
    "rating": "EN 12275 / EN 362",
    "available": true,
    "description": "Extremely strong steel HMS carabiner with an internal spring bar to prevent it from twisting. Ideal for situations with greater wear (belaying with a tubular belay device or top-roping).",
    "features": [
      "Keylock closure mechanism for optimum handling when clipping and unclipping",
      "Available as either screwgate or Triple Lock model",
      "Spring bar holds the carabiner in place when belaying to prevent cross loading",
      "H-profile construction ensures best possible use of material and minimal weight",
      "Designed to perfectly complement the geometry of belay devices from the Jul family"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12275 / EN 362"
      },
      {
        "label": "Material",
        "value": "Steel"
      },
      {
        "label": "Closure",
        "value": "Triple"
      },
      {
        "label": "Fmax. major axis",
        "value": "28 kN"
      },
      {
        "label": "Fmax. open",
        "value": "10 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "8 kN"
      },
      {
        "label": "Width",
        "value": "72 mm"
      },
      {
        "label": "Length",
        "value": "107 mm"
      },
      {
        "label": "Gate opening",
        "value": "22 mm"
      },
      {
        "label": "Weight",
        "value": "142g"
      }
    ],
    "attributes": [
      "Keylock"
    ],
    "colors": [
      "icemint 329"
    ],
    "weights": [],
    "weight": "142g",
    "certification": "EN 12275 / EN 362",
    "origin": null
  },
  {
    "id": "73760",
    "code": "73760",
    "name": "HMS Bullet PermaLock",
    "title": "HMS Bullet PermaLock",
    "category": "Carabiners & Quickdraws",
    "articleNo": "73760",
    "type": "ST",
    "image": "/images/products/73760.webp",
    "status": "CARABINER",
    "rating": "EN 12275; EN 362",
    "available": true,
    "description": "Innovative screw gate carabiner with an additional locking mechanism on the locking sleeve. This is made possible by the smart PERMALOCK locking mechanism. Due to the integrated pressure lock, the rotating locking sleeve of the carabiner gate can be blocked and is thus secured against unintentional opening. Thus the HMS BULLET PERMALOCK combines the safety of a locking carabiner, according to category 3 of the German Alpine Club (DAV) provisions, with the user-friendliness of a normal screw or snap carabiner.",
    "features": [
      "Keylock closure mechanism for optimum handling when clipping and unclipping",
      "H-profile construction ensures best possible use of material and minimal weight",
      "Locking carabiner, according to category 3 of the German Alpine Club (DAV) provisions on locking carabiners",
      "Red indicator on the gate shows whether the carabiner is completely closed",
      "Improved safety combined with the customary ease of use of a regular screw gate carabiner"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12275; EN 362"
      },
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Closure",
        "value": "PermaLock"
      },
      {
        "label": "Carabiner shape",
        "value": "HMS"
      },
      {
        "label": "Fmax. major axis",
        "value": "26 kN"
      },
      {
        "label": "Fmax. open",
        "value": "9 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "10 kN"
      },
      {
        "label": "Width",
        "value": "75 mm"
      },
      {
        "label": "Length",
        "value": "110 mm"
      },
      {
        "label": "Gate opening",
        "value": "24 mm"
      },
      {
        "label": "Weight",
        "value": "75g"
      }
    ],
    "attributes": [],
    "colors": [
      "night 017",
      "silver 006"
    ],
    "weights": [],
    "weight": "75g",
    "certification": "EN 12275; EN 362",
    "origin": null
  },
  {
    "id": "73816",
    "code": "73816",
    "name": "HMS Bullet Screw",
    "title": "HMS Bullet Screw",
    "category": "Carabiners & Quickdraws",
    "articleNo": "73816",
    "type": "ST",
    "image": "/images/products/73816.webp",
    "status": "CARABINER",
    "rating": "EN 12275; EN 362",
    "available": true,
    "description": "Robust HMS carabiner with Keylock closure. Ideal for use with EDELRID belay devices.",
    "features": [
      "Keylock closure mechanism for optimum handling when clipping and unclipping",
      "Available as either screwgate or Triple Lock model",
      "H-profile construction ensures best possible use of material and minimal weight"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12275; EN 362"
      },
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Closure",
        "value": "Screw"
      },
      {
        "label": "Carabiner shape",
        "value": "HMS"
      },
      {
        "label": "Fmax. major axis",
        "value": "26 kN"
      },
      {
        "label": "Fmax. open",
        "value": "9 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "10 kN"
      },
      {
        "label": "Width",
        "value": "75 mm"
      },
      {
        "label": "Length",
        "value": "110 mm"
      },
      {
        "label": "Gate opening",
        "value": "24 mm"
      },
      {
        "label": "Weight",
        "value": "74g"
      }
    ],
    "attributes": [],
    "colors": [
      "black 010",
      "oasis 138"
    ],
    "weights": [],
    "weight": "74g",
    "certification": "EN 12275; EN 362",
    "origin": null
  },
  {
    "id": "73763",
    "code": "73763",
    "name": "HMS Bullet Screw RFID",
    "title": "HMS Bullet Screw RFID",
    "category": "Carabiners & Quickdraws",
    "articleNo": "73763",
    "type": "ST",
    "image": "/images/products/73763.webp",
    "status": "CARABINER",
    "rating": "EN 362; EN 12275 H",
    "available": true,
    "description": "The robust HMS carabiner HMS BULLET with integrated RFID chip. This makes the operational documentation of the equipment child's play.",
    "features": [
      "Keylock closure mechanism for optimum handling when clipping and unclipping",
      "H-profile construction ensures best possible use of material and minimal weight"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 362; EN 12275 H"
      },
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Closure",
        "value": "Screw"
      },
      {
        "label": "RFID",
        "value": "Yes"
      },
      {
        "label": "Carabiner shape",
        "value": "HMS"
      },
      {
        "label": "Fmax. major axis",
        "value": "26 kN"
      },
      {
        "label": "Fmax. open",
        "value": "9 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "10 kN"
      },
      {
        "label": "Width",
        "value": "75 mm"
      },
      {
        "label": "Length",
        "value": "110 mm"
      },
      {
        "label": "Gate opening",
        "value": "24 mm"
      },
      {
        "label": "Weight",
        "value": "74g"
      }
    ],
    "attributes": [],
    "colors": [
      "oasis 138"
    ],
    "weights": [],
    "weight": "74g",
    "certification": "EN 362; EN 12275 H",
    "origin": null
  },
  {
    "id": "73817",
    "code": "73817",
    "name": "HMS Bullet Triple",
    "title": "HMS Bullet Triple",
    "category": "Carabiners & Quickdraws",
    "articleNo": "73817",
    "type": "ST",
    "image": "/images/products/73817.webp",
    "status": "CARABINER",
    "rating": "EN 12275; EN 362",
    "available": true,
    "description": "Robust HMS carabiner with Keylock closure. Ideal for use with EDELRID belay devices.",
    "features": [
      "Keylock closure mechanism for optimum handling when clipping and unclipping",
      "Available as either screwgate or Triple Lock model",
      "H-profile construction ensures best possible use of material and minimal weight"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12275; EN 362"
      },
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Closure",
        "value": "Triple"
      },
      {
        "label": "Carabiner shape",
        "value": "HMS"
      },
      {
        "label": "Fmax. major axis",
        "value": "26 kN"
      },
      {
        "label": "Fmax. open",
        "value": "9 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "10 kN"
      },
      {
        "label": "Width",
        "value": "75 mm"
      },
      {
        "label": "Length",
        "value": "110 mm"
      },
      {
        "label": "Gate opening",
        "value": "24 mm"
      },
      {
        "label": "Weight",
        "value": "79g"
      }
    ],
    "attributes": [],
    "colors": [
      "icemint 329",
      "silver 006"
    ],
    "weights": [],
    "weight": "79g",
    "certification": "EN 12275; EN 362",
    "origin": null
  },
  {
    "id": "73764",
    "code": "73764",
    "name": "HMS Bullet Triple RFID",
    "title": "HMS Bullet Triple RFID",
    "category": "Carabiners & Quickdraws",
    "articleNo": "73764",
    "type": "ST",
    "image": "/images/products/73764.webp",
    "status": "CARABINER",
    "rating": "EN 362; EN 12275 H",
    "available": true,
    "description": "The robust HMS carabiner HMS BULLET with integrated RFID chip. This makes the operational documentation of the equipment child's play.",
    "features": [
      "Keylock closure mechanism for optimum handling when clipping and unclipping",
      "H-profile construction ensures best possible use of material and minimal weight"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 362; EN 12275 H"
      },
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Closure",
        "value": "Triple"
      },
      {
        "label": "RFID",
        "value": "Yes"
      },
      {
        "label": "Carabiner shape",
        "value": "HMS"
      },
      {
        "label": "Fmax. major axis",
        "value": "26 kN"
      },
      {
        "label": "Fmax. open",
        "value": "9 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "10 kN"
      },
      {
        "label": "Width",
        "value": "75 mm"
      },
      {
        "label": "Length",
        "value": "110 mm"
      },
      {
        "label": "Gate opening",
        "value": "24 mm"
      },
      {
        "label": "Weight",
        "value": "74g"
      }
    ],
    "attributes": [],
    "colors": [
      "icemint 329"
    ],
    "weights": [],
    "weight": "74g",
    "certification": "EN 362; EN 12275 H",
    "origin": null
  },
  {
    "id": "73799",
    "code": "73799",
    "name": "HMS Magnum Screw",
    "title": "HMS Magnum Screw",
    "category": "Carabiners & Quickdraws",
    "articleNo": "73799",
    "type": "ST",
    "image": "/images/products/73799.webp",
    "status": "CARABINER",
    "rating": "EN 12275; EN 362",
    "available": true,
    "description": "HMS carabiner with a larger design. The screw gate can be operated quickly, one-handedly and intuitively. Ideal for stances, belaying, and rappelling.",
    "features": [
      "Keylock closure mechanism for optimum handling when clipping and unclipping",
      "H-profile construction ensures best possible use of material and minimal weight",
      "Extra-large gate opening and generous inner dimensions",
      "Large inner radius minimizes rope wear",
      "Available with a screw, twist, or triple lock"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12275; EN 362"
      },
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Closure",
        "value": "Screw"
      },
      {
        "label": "Carabiner shape",
        "value": "HMS"
      },
      {
        "label": "Fmax. major axis",
        "value": "24 kN"
      },
      {
        "label": "Fmax. open",
        "value": "9 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "8 kN"
      },
      {
        "label": "Width",
        "value": "76 mm"
      },
      {
        "label": "Length",
        "value": "120 mm"
      },
      {
        "label": "Gate opening",
        "value": "22 mm"
      },
      {
        "label": "Weight",
        "value": "82g"
      }
    ],
    "attributes": [],
    "colors": [
      "slate 663"
    ],
    "weights": [],
    "weight": "82g",
    "certification": "EN 12275; EN 362",
    "origin": null
  },
  {
    "id": "73818",
    "code": "73818",
    "name": "HMS Magnum Triple",
    "title": "HMS Magnum Triple",
    "category": "Carabiners & Quickdraws",
    "articleNo": "73818",
    "type": "ST",
    "image": "/images/products/73818.webp",
    "status": "CARABINER",
    "rating": "EN 12275 / EN 362",
    "available": true,
    "description": "HMS carabiner with a larger design. Comes with a triple lock locking mechanism for maximum safety. Ideal for stances, belaying and rappelling.",
    "features": [
      "Keylock closure mechanism for optimum handling when clipping and unclipping",
      "H-profile construction ensures best possible use of material and minimal weight",
      "Extra-large gate opening and generous inner dimensions",
      "Large inner radius minimizes rope wear",
      "Available with a screw, twist, or triple lock"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12275 / EN 362"
      },
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Closure",
        "value": "Triple"
      },
      {
        "label": "Carabiner shape",
        "value": "HMS"
      },
      {
        "label": "Fmax. major axis",
        "value": "24 kN"
      },
      {
        "label": "Fmax. open",
        "value": "9 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "8 kN"
      },
      {
        "label": "Width",
        "value": "76 mm"
      },
      {
        "label": "Length",
        "value": "120 mm"
      },
      {
        "label": "Gate opening",
        "value": "22 mm"
      },
      {
        "label": "Weight",
        "value": "89g"
      }
    ],
    "attributes": [
      "Keylock"
    ],
    "colors": [
      "night 017",
      "oasis 138"
    ],
    "weights": [],
    "weight": "89g",
    "certification": "EN 12275 / EN 362",
    "origin": null
  },
  {
    "id": "73800",
    "code": "73800",
    "name": "HMS Magnum Twist",
    "title": "HMS Magnum Twist",
    "category": "Carabiners & Quickdraws",
    "articleNo": "73800",
    "type": "ST",
    "image": "/images/products/73800.webp",
    "status": "CARABINER",
    "rating": "EN 12275 / EN 362",
    "available": true,
    "description": "HMS carabiner with larger design. Ideal for stances, belaying and rappelling.",
    "features": [
      "Keylock closure mechanism for optimum handling when clipping and unclipping",
      "H-profile construction ensures best possible use of material and minimal weight",
      "Extra-large gate opening and generous inner dimensions",
      "Large inner radius minimizes rope wear",
      "Available with a screw, twist, or triple lock"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12275 / EN 362"
      },
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Closure",
        "value": "Twist"
      },
      {
        "label": "Carabiner shape",
        "value": "HMS"
      },
      {
        "label": "Fmax. major axis",
        "value": "24 kN"
      },
      {
        "label": "Fmax. open",
        "value": "9 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "8 kN"
      },
      {
        "label": "Width",
        "value": "76 mm"
      },
      {
        "label": "Length",
        "value": "120 mm"
      },
      {
        "label": "Gate opening",
        "value": "22 mm"
      },
      {
        "label": "Weight",
        "value": "88g"
      }
    ],
    "attributes": [
      "Keylock"
    ],
    "colors": [
      "oasis 138"
    ],
    "weights": [],
    "weight": "88g",
    "certification": "EN 12275 / EN 362",
    "origin": null
  },
  {
    "id": "73772",
    "code": "73772",
    "name": "HMS Strike Screw FG II",
    "title": "HMS Strike Screw FG II",
    "category": "Carabiners & Quickdraws",
    "articleNo": "73772",
    "type": "ST",
    "image": "/images/products/73772.webp",
    "status": "CARABINER",
    "rating": "EN 12275",
    "available": true,
    "description": "Compact HMS carabiner with an integrated spring bar to prevent it from twisting.",
    "features": [
      "Keylock closure mechanism for optimum handling when clipping and unclipping",
      "Spring bar holds the carabiner in place when belaying to prevent cross loading",
      "H-profile construction ensures best possible use of material and minimal weight",
      "Available as a slider, screw, or triple lock version"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12275"
      },
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Closure",
        "value": "Screw"
      },
      {
        "label": "Carabiner shape",
        "value": "HMS"
      },
      {
        "label": "Fmax. major axis",
        "value": "22 kN"
      },
      {
        "label": "Fmax. open",
        "value": "7 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "8 kN"
      },
      {
        "label": "Width",
        "value": "67 mm"
      },
      {
        "label": "Length",
        "value": "98 mm"
      },
      {
        "label": "Gate opening",
        "value": "19 mm"
      },
      {
        "label": "Weight",
        "value": "62g"
      }
    ],
    "attributes": [],
    "colors": [
      "silver 006"
    ],
    "weights": [],
    "weight": "62g",
    "certification": "EN 12275",
    "origin": null
  },
  {
    "id": "73769",
    "code": "73769",
    "name": "HMS Strike Screw II",
    "title": "HMS Strike Screw II",
    "category": "Carabiners & Quickdraws",
    "articleNo": "73769",
    "type": "ST",
    "image": "/images/products/73769.webp",
    "status": "CARABINER",
    "rating": "EN 12275; EN 362",
    "available": true,
    "description": "Very compact and lightweight HMS carabiner. Ideal for alpine climbing.",
    "features": [
      "Available with a screw, slider, triple or twist lock",
      "Keylock closure mechanism for optimum handling when clipping and unclipping",
      "H-profile construction ensures best possible use of material and minimal weight"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12275; EN 362"
      },
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Closure",
        "value": "Screw"
      },
      {
        "label": "Carabiner shape",
        "value": "HMS"
      },
      {
        "label": "Fmax. major axis",
        "value": "22 kN"
      },
      {
        "label": "Fmax. open",
        "value": "7 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "8 kN"
      },
      {
        "label": "Width",
        "value": "67 mm"
      },
      {
        "label": "Length",
        "value": "98 mm"
      },
      {
        "label": "Gate opening",
        "value": "19 mm"
      },
      {
        "label": "Weight",
        "value": "57g"
      }
    ],
    "attributes": [],
    "colors": [
      "icemint 329",
      "oasis 138",
      "silver 006"
    ],
    "weights": [],
    "weight": "57g",
    "certification": "EN 12275; EN 362",
    "origin": null
  },
  {
    "id": "73774",
    "code": "73774",
    "name": "HMS Strike Slider FG II",
    "title": "HMS Strike Slider FG II",
    "category": "Carabiners & Quickdraws",
    "articleNo": "73774",
    "type": "ST",
    "image": "/images/products/73774.webp",
    "status": "CARABINER",
    "rating": "EN 12275",
    "available": true,
    "description": "The combination of our HMS STRIKE SLIDER with the STRIKE FG. Ideal for use with all types of belay device.",
    "features": [
      "Keylock closure mechanism for optimum handling when clipping and unclipping",
      "Spring bar holds the carabiner in place when belaying to prevent cross loading",
      "H-profile construction ensures best possible use of material and minimal weight",
      "Available as a slider, screw, or triple lock version"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12275"
      },
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Closure",
        "value": "Slider"
      },
      {
        "label": "Carabiner shape",
        "value": "HMS"
      },
      {
        "label": "Fmax. major axis",
        "value": "22 kN"
      },
      {
        "label": "Fmax. open",
        "value": "7 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "8 kN"
      },
      {
        "label": "Width",
        "value": "67 mm"
      },
      {
        "label": "Length",
        "value": "98 mm"
      },
      {
        "label": "Gate opening",
        "value": "19 mm"
      },
      {
        "label": "Weight",
        "value": "60g"
      }
    ],
    "attributes": [],
    "colors": [
      "oasis 138"
    ],
    "weights": [],
    "weight": "60g",
    "certification": "EN 12275",
    "origin": null
  },
  {
    "id": "73771",
    "code": "73771",
    "name": "HMS Strike Slider II",
    "title": "HMS Strike Slider II",
    "category": "Carabiners & Quickdraws",
    "articleNo": "73771",
    "type": "ST",
    "image": "/images/products/73771.webp",
    "status": "CARABINER",
    "rating": "EN 12275",
    "available": true,
    "description": "Innovative HMS carabiner with automatic locking mechanism.",
    "features": [
      "Locking slide-gate mechanism minimizes risk of accidental gate opening",
      "Easy-operation slide-gate mechanism for fast clipping",
      "Available with a screw, slider, triple or twist lock",
      "Keylock closure mechanism for optimum handling when clipping and unclipping",
      "H-profile construction ensures best possible use of material and minimal weight",
      "Carabiner can move freely in all (belay/anchor) situations"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12275"
      },
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Closure",
        "value": "Slider"
      },
      {
        "label": "Carabiner shape",
        "value": "HMS"
      },
      {
        "label": "Fmax. major axis",
        "value": "22 kN"
      },
      {
        "label": "Fmax. open",
        "value": "7 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "8 kN"
      },
      {
        "label": "Width",
        "value": "67 mm"
      },
      {
        "label": "Length",
        "value": "98 mm"
      },
      {
        "label": "Gate opening",
        "value": "19 mm"
      },
      {
        "label": "Weight",
        "value": "55g"
      }
    ],
    "attributes": [],
    "colors": [
      "slate 663"
    ],
    "weights": [],
    "weight": "55g",
    "certification": "EN 12275",
    "origin": null
  },
  {
    "id": "73773",
    "code": "73773",
    "name": "HMS Strike Triple FG II",
    "title": "HMS Strike Triple FG II",
    "category": "Carabiners & Quickdraws",
    "articleNo": "73773",
    "type": "ST",
    "image": "/images/products/73773.webp",
    "status": "CARABINER",
    "rating": "EN 12275",
    "available": true,
    "description": "Compact HMS carabiner with an integrated spring bar to prevent it from twisting.",
    "features": [
      "Keylock closure mechanism for optimum handling when clipping and unclipping",
      "Spring bar holds the carabiner in place when belaying to prevent cross loading",
      "H-profile construction ensures best possible use of material and minimal weight",
      "Available as a slider, screw, or triple lock version"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12275"
      },
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Closure",
        "value": "Triple"
      },
      {
        "label": "Carabiner shape",
        "value": "HMS"
      },
      {
        "label": "Fmax. major axis",
        "value": "22 kN"
      },
      {
        "label": "Fmax. open",
        "value": "7 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "8 kN"
      },
      {
        "label": "Width",
        "value": "67 mm"
      },
      {
        "label": "Length",
        "value": "98 mm"
      },
      {
        "label": "Gate opening",
        "value": "19 mm"
      },
      {
        "label": "Weight",
        "value": "67g"
      }
    ],
    "attributes": [],
    "colors": [
      "icemint 329"
    ],
    "weights": [],
    "weight": "67g",
    "certification": "EN 12275",
    "origin": null
  },
  {
    "id": "73770",
    "code": "73770",
    "name": "HMS Strike Triple II",
    "title": "HMS Strike Triple II",
    "category": "Carabiners & Quickdraws",
    "articleNo": "73770",
    "type": "ST",
    "image": "/images/products/73770.webp",
    "status": "CARABINER",
    "rating": "EN 12275; EN 362",
    "available": true,
    "description": "Very compact and lightweight HMS carabiner. Ideal for alpine climbing.",
    "features": [
      "Available with a screw, slider, triple or twist lock",
      "Keylock closure mechanism for optimum handling when clipping and unclipping",
      "H-profile construction ensures best possible use of material and minimal weight"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12275; EN 362"
      },
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Closure",
        "value": "Triple"
      },
      {
        "label": "Carabiner shape",
        "value": "HMS"
      },
      {
        "label": "Fmax. major axis",
        "value": "22 kN"
      },
      {
        "label": "Fmax. open",
        "value": "7 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "8 kN"
      },
      {
        "label": "Width",
        "value": "67 mm"
      },
      {
        "label": "Length",
        "value": "98 mm"
      },
      {
        "label": "Gate opening",
        "value": "19 mm"
      },
      {
        "label": "Weight",
        "value": "62g"
      }
    ],
    "attributes": [],
    "colors": [
      "night 017",
      "silver 006"
    ],
    "weights": [],
    "weight": "62g",
    "certification": "EN 12275; EN 362",
    "origin": null
  },
  {
    "id": "73819",
    "code": "73819",
    "name": "HMS Strike Twist II",
    "title": "HMS Strike Twist II",
    "category": "Carabiners & Quickdraws",
    "articleNo": "73819",
    "type": "ST",
    "image": "/images/products/73819.webp",
    "status": "CARABINER",
    "rating": "EN 12275",
    "available": true,
    "description": "Very compact and lightweight HMS carabiner. Ideal for alpine climbing.",
    "features": [
      "Available with a screw, slider, triple or twist lock",
      "Keylock closure mechanism for optimum handling when clipping and unclipping",
      "H-profile construction ensures best possible use of material and minimal weight"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12275"
      },
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Closure",
        "value": "Twist"
      },
      {
        "label": "Carabiner shape",
        "value": "HMS"
      },
      {
        "label": "Fmax. major axis",
        "value": "22 kN"
      },
      {
        "label": "Fmax. open",
        "value": "7 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "8 kN"
      },
      {
        "label": "Width",
        "value": "67 mm"
      },
      {
        "label": "Length",
        "value": "98 mm"
      },
      {
        "label": "Gate opening",
        "value": "19 mm"
      },
      {
        "label": "Weight",
        "value": "64g"
      }
    ],
    "attributes": [],
    "colors": [
      "oasis 138"
    ],
    "weights": [],
    "weight": "64g",
    "certification": "EN 12275",
    "origin": null
  },
  {
    "id": "85214",
    "code": "85214",
    "name": "Kiwi Captive",
    "title": "Kiwi Captive",
    "category": "Carabiners & Quickdraws",
    "articleNo": "85214",
    "type": "ST",
    "image": "/images/products/85214.webp",
    "status": "CARABINER",
    "rating": "—",
    "available": true,
    "description": "The KIWI CAPTIVE prevents the carabiner from being unfavourably twisted in the system so as to avoid dangerous cross loading. It can be quickly and easily attached/detached with a single screw. The KIWI CAPTIVE is the perfect fit for the KIWI carabiners.",
    "features": [],
    "specs": [],
    "attributes": [],
    "colors": [
      "night 017"
    ],
    "weights": [],
    "weight": null,
    "certification": null,
    "origin": null
  },
  {
    "id": "73765",
    "code": "73765",
    "name": "Kiwi Screw",
    "title": "Kiwi Screw",
    "category": "Carabiners & Quickdraws",
    "articleNo": "73765",
    "type": "ST",
    "image": "/images/products/73765.webp",
    "status": "CARABINER",
    "rating": "EN 12275 / EN 362",
    "available": true,
    "description": "Light and compact oval carabiner. The oval shape optimally distributes the load on the longitudinal axis and offers a large capacity. The ideal carabiner for clearly organized gear.",
    "features": [
      "Keylock closure mechanism for optimum handling when clipping and unclipping",
      "Available as a slider, screw, or triple lock version"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12275 / EN 362"
      },
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Closure",
        "value": "Screw"
      },
      {
        "label": "Carabiner shape",
        "value": "Oval"
      },
      {
        "label": "Fmax. major axis",
        "value": "24 kN"
      },
      {
        "label": "Fmax. open",
        "value": "8 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "10 kN"
      },
      {
        "label": "Width",
        "value": "60 mm"
      },
      {
        "label": "Length",
        "value": "100 mm"
      },
      {
        "label": "Gate opening",
        "value": "20 mm"
      },
      {
        "label": "Weight",
        "value": "60g"
      }
    ],
    "attributes": [
      "Keylock"
    ],
    "colors": [
      "anthracite 069"
    ],
    "weights": [],
    "weight": "60g",
    "certification": "EN 12275 / EN 362",
    "origin": null
  },
  {
    "id": "73755",
    "code": "73755",
    "name": "Kiwi Slider",
    "title": "Kiwi Slider",
    "category": "Carabiners & Quickdraws",
    "articleNo": "73755",
    "type": "ST",
    "image": "/images/products/73755.webp",
    "status": "CARABINER",
    "rating": "EN 12275 / EN 362",
    "available": true,
    "description": "Light and compact oval carabiner. The oval shape optimally distributes the load on the longitudinal axis and offers a large capacity. The ideal carabiner for clearly organized gear.",
    "features": [
      "Keylock closure mechanism for optimum handling when clipping and unclipping",
      "Available as a slider, screw, or triple lock version"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12275 / EN 362"
      },
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Closure",
        "value": "Slider"
      },
      {
        "label": "Carabiner shape",
        "value": "Oval"
      },
      {
        "label": "Fmax. major axis",
        "value": "24 kN"
      },
      {
        "label": "Fmax. open",
        "value": "8 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "10 kN"
      },
      {
        "label": "Width",
        "value": "60 mm"
      },
      {
        "label": "Length",
        "value": "100 mm"
      },
      {
        "label": "Gate opening",
        "value": "20 mm"
      },
      {
        "label": "Weight",
        "value": "59g"
      }
    ],
    "attributes": [
      "Keylock"
    ],
    "colors": [
      "anthracite 069",
      "icemint 329",
      "night 017",
      "oasis 138"
    ],
    "weights": [],
    "weight": "59g",
    "certification": "EN 12275 / EN 362",
    "origin": null
  },
  {
    "id": "73767",
    "code": "73767",
    "name": "Kiwi Triple",
    "title": "Kiwi Triple",
    "category": "Carabiners & Quickdraws",
    "articleNo": "73767",
    "type": "ST",
    "image": "/images/products/73767.webp",
    "status": "CARABINER",
    "rating": "EN 12275 / EN 362",
    "available": true,
    "description": "Small and lightweight oval carabiner with triple-lock closure mechanism. The oval shape offers a large capacity and makes it easier to position equipment optimally.",
    "features": [
      "Keylock closure mechanism for optimum handling when clipping and unclipping",
      "Available as a slider, screw, or triple lock version",
      "17 mm gate opening"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12275 / EN 362"
      },
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Closure",
        "value": "Triple"
      },
      {
        "label": "Carabiner shape",
        "value": "Oval"
      },
      {
        "label": "Fmax. major axis",
        "value": "24 kN"
      },
      {
        "label": "Fmax. open",
        "value": "8 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "10 kN"
      },
      {
        "label": "Width",
        "value": "60 mm"
      },
      {
        "label": "Length",
        "value": "100 mm"
      },
      {
        "label": "Gate opening",
        "value": "17 mm"
      },
      {
        "label": "Weight",
        "value": "62g"
      }
    ],
    "attributes": [
      "Keylock"
    ],
    "colors": [
      "night 017",
      "silver 006"
    ],
    "weights": [],
    "weight": "62g",
    "certification": "EN 12275 / EN 362",
    "origin": null
  },
  {
    "id": "73758",
    "code": "73758",
    "name": "Mission Sixpack II",
    "title": "Mission Sixpack II",
    "category": "Carabiners & Quickdraws",
    "articleNo": "73758",
    "type": "V6",
    "image": "/images/products/73758.webp",
    "status": "CARABINER",
    "rating": "EN 12275",
    "available": true,
    "description": "Pack of six MISSION carabiners in an assortment of colors, all with a bent gate for maximum clipping convenience.",
    "features": [
      "Very lightweight construction",
      "The color scheme fits the established camming devices"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12275"
      },
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Carabiner shape",
        "value": "Offset D"
      },
      {
        "label": "Fmax. major axis",
        "value": "20 kN"
      },
      {
        "label": "Fmax. open",
        "value": "7 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "7 kN"
      },
      {
        "label": "Gate opening",
        "value": "20 mm"
      },
      {
        "label": "Weight",
        "value": "174g"
      }
    ],
    "attributes": [],
    "colors": [
      "assorted colours 900"
    ],
    "weights": [],
    "weight": "174g",
    "certification": "EN 12275",
    "origin": null
  },
  {
    "id": "71806",
    "code": "71806",
    "name": "Nineteen G Sixpack",
    "title": "Nineteen G Sixpack",
    "category": "Carabiners & Quickdraws",
    "articleNo": "71806",
    "type": "V6",
    "image": "/images/products/71806.webp",
    "status": "CARABINER",
    "rating": "EN 12275",
    "available": true,
    "description": "The lightest carabiner in the world in a sixpack.",
    "features": [
      "Very lightweight construction",
      "Lightweight wire gates reduce the whiplash effect in the event of a fall",
      "Strong aluminium alloy, special hardening treatment",
      "Compact shape and minimal pack size",
      "The color scheme fits the established camming devices"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12275"
      },
      {
        "label": "Material",
        "value": "Aluminium, Dyneema(R)"
      },
      {
        "label": "Carabiner shape",
        "value": "Offset D"
      },
      {
        "label": "Fmax. major axis",
        "value": "20 kN"
      },
      {
        "label": "Fmax. open",
        "value": "7 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "7 kN"
      },
      {
        "label": "Width",
        "value": "50 mm"
      },
      {
        "label": "Length",
        "value": "78 mm"
      },
      {
        "label": "Gate opening",
        "value": "17 mm"
      },
      {
        "label": "Weight",
        "value": "114g"
      }
    ],
    "attributes": [],
    "colors": [
      "assorted colours 900"
    ],
    "weights": [],
    "weight": "114g",
    "certification": "EN 12275",
    "origin": null
  },
  {
    "id": "85203",
    "code": "85203",
    "name": "Oval Power 2500 Permalock",
    "title": "Oval Power 2500 Permalock",
    "category": "Carabiners & Quickdraws",
    "articleNo": "85203",
    "type": "ST",
    "image": "/images/products/85203.webp",
    "status": "CARABINER",
    "rating": "EN 12275 / EN 362",
    "available": true,
    "description": "Innovative screw gate carabiner with additional sleeve locking through the use of the smart PermaLock locking mechanism. Due to the integrated pressure lock, the carabiner's rotating sleeve can be blocked and is thus secured against unintentional opening. The OVAL POWER 2500 PERMALOCK therefore combines the safety of a locking carabiner according to category 3 of the German Alpine Club (DAV) provisions with the user-friendliness of a normal screw or snap carabiner. The oval shape makes it ideal for attaching rigging plates, pulleys, and ascenders, as well as for setting up anchor points.",
    "features": [
      "Keylock closure mechanism for optimum handling when clipping and unclipping",
      "Oval shape for optimum gear positioning",
      "Available as a screwgate, Triple Lock, or Permalock version"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12275 / EN 362"
      },
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Closure",
        "value": "PermaLock"
      },
      {
        "label": "Carabiner shape",
        "value": "Oval"
      },
      {
        "label": "Fmax. major axis",
        "value": "25 kN"
      },
      {
        "label": "Fmax. open",
        "value": "7 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "9 kN"
      },
      {
        "label": "Width",
        "value": "64 mm"
      },
      {
        "label": "Length",
        "value": "110 mm"
      },
      {
        "label": "Gate opening",
        "value": "20 mm"
      },
      {
        "label": "Weight",
        "value": "73g"
      }
    ],
    "attributes": [
      "Keylock"
    ],
    "colors": [
      "night 017",
      "silver 006"
    ],
    "weights": [],
    "weight": "73g",
    "certification": "EN 12275 / EN 362",
    "origin": null
  },
  {
    "id": "85204",
    "code": "85204",
    "name": "Oval Power 2500 Screw",
    "title": "Oval Power 2500 Screw",
    "category": "Carabiners & Quickdraws",
    "articleNo": "85204",
    "type": "ST",
    "image": "/images/products/85204.webp",
    "status": "CARABINER",
    "rating": "EN 12275 / EN 362",
    "available": true,
    "description": "Oval carabiner with a very slim locking sleeve. Ideal for clipping rigging plates, pulleys, rope clamps and for positioning anchor points.",
    "features": [
      "Keylock closure mechanism for optimum handling when clipping and unclipping",
      "Oval shape for optimum gear positioning",
      "Available as a screwgate, Triple Lock, or Permalock version"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12275 / EN 362"
      },
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Closure",
        "value": "Screw"
      },
      {
        "label": "Carabiner shape",
        "value": "Oval"
      },
      {
        "label": "Fmax. major axis",
        "value": "25 kN"
      },
      {
        "label": "Fmax. open",
        "value": "7 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "9 kN"
      },
      {
        "label": "Width",
        "value": "64 mm"
      },
      {
        "label": "Length",
        "value": "110 mm"
      },
      {
        "label": "Gate opening",
        "value": "20 mm"
      },
      {
        "label": "Weight",
        "value": "71g"
      }
    ],
    "attributes": [
      "Keylock"
    ],
    "colors": [
      "night 017",
      "oasis 138",
      "silver 006"
    ],
    "weights": [],
    "weight": "71g",
    "certification": "EN 12275 / EN 362",
    "origin": null
  },
  {
    "id": "85205",
    "code": "85205",
    "name": "Oval Power 2500 Triple",
    "title": "Oval Power 2500 Triple",
    "category": "Carabiners & Quickdraws",
    "articleNo": "85205",
    "type": "ST",
    "image": "/images/products/85205.webp",
    "status": "CARABINER",
    "rating": "EN 12275 / EN 362",
    "available": true,
    "description": "Oval carabiner with a very slim locking sleeve. Ideal for clipping rigging plates, pulleys, rope clamps and for positioning anchor points.",
    "features": [
      "Keylock closure mechanism for optimum handling when clipping and unclipping",
      "Oval shape for optimum gear positioning",
      "Available as a screwgate, Triple Lock, or Permalock version"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12275 / EN 362"
      },
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Closure",
        "value": "Triple"
      },
      {
        "label": "Carabiner shape",
        "value": "Oval"
      },
      {
        "label": "Fmax. major axis",
        "value": "25 kN"
      },
      {
        "label": "Fmax. open",
        "value": "7 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "9 kN"
      },
      {
        "label": "Width",
        "value": "64 mm"
      },
      {
        "label": "Length",
        "value": "110 mm"
      },
      {
        "label": "Gate opening",
        "value": "20 mm"
      },
      {
        "label": "Weight",
        "value": "76g"
      }
    ],
    "attributes": [
      "Keylock"
    ],
    "colors": [
      "icemint 329",
      "night 017",
      "silver 006"
    ],
    "weights": [],
    "weight": "76g",
    "certification": "EN 12275 / EN 362",
    "origin": null
  },
  {
    "id": "85217",
    "code": "85217",
    "name": "Oval Power 2500 Triple NFC",
    "title": "Oval Power 2500 Triple NFC",
    "category": "Carabiners & Quickdraws",
    "articleNo": "85217",
    "type": "ST",
    "image": "/images/products/85217.webp",
    "status": "CARABINER",
    "rating": "EN 12275 / EN 362",
    "available": true,
    "description": "The popular oval aluminum carabiner OVAL POWER 2500 is now also available with an integrated NFC chip. This simplifies the operational documentation of the equipment.",
    "features": [
      "Keylock closure mechanism for optimum handling when clipping and unclipping",
      "Oval shape for optimum gear positioning",
      "NFC inside"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12275 / EN 362"
      },
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Closure",
        "value": "Triple"
      },
      {
        "label": "Carabiner shape",
        "value": "Oval"
      },
      {
        "label": "Fmax. major axis",
        "value": "24 kN"
      },
      {
        "label": "Fmax. open",
        "value": "8 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "12 kN"
      },
      {
        "label": "Width",
        "value": "64 mm"
      },
      {
        "label": "Length",
        "value": "110 mm"
      },
      {
        "label": "Gate opening",
        "value": "21 mm"
      },
      {
        "label": "Weight",
        "value": "76g"
      }
    ],
    "attributes": [
      "Keylock",
      "NFC inside"
    ],
    "colors": [
      "icemint 329"
    ],
    "weights": [],
    "weight": "76g",
    "certification": "EN 12275 / EN 362",
    "origin": null
  },
  {
    "id": "73779",
    "code": "73779",
    "name": "Pure Screw III",
    "title": "Pure Screw III",
    "category": "Carabiners & Quickdraws",
    "articleNo": "73779",
    "type": "ST",
    "image": "/images/products/73779.webp",
    "status": "CARABINER",
    "rating": "EN 12275 / EN 362",
    "available": true,
    "description": "Robust and versatile all-round locking carabiner for all vertical activities. The special geometry of the nose combined with the keylock closure ensures optimal handling when hooking and unhooking. The large rope contact area reduces material wear, and its high open strength is an additional safety feature.",
    "features": [
      "Keylock closure mechanism for optimum handling when clipping and unclipping",
      "H-profile construction ensures best possible use of material and minimal weight",
      "Available as a slider, screw, or triple lock version"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12275 / EN 362"
      },
      {
        "label": "Material",
        "value": "Aluminium 7075 T6"
      },
      {
        "label": "Closure",
        "value": "Screw"
      },
      {
        "label": "Carabiner shape",
        "value": "Offset D"
      },
      {
        "label": "Fmax. major axis",
        "value": "22 kN"
      },
      {
        "label": "Fmax. open",
        "value": "8 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "8 kN"
      },
      {
        "label": "Width",
        "value": "60 mm"
      },
      {
        "label": "Length",
        "value": "97 mm"
      },
      {
        "label": "Gate opening",
        "value": "19 mm"
      },
      {
        "label": "Weight",
        "value": "50g"
      }
    ],
    "attributes": [
      "Keylock"
    ],
    "colors": [
      "icemint 329",
      "night 017",
      "oasis 138",
      "silver 006"
    ],
    "weights": [],
    "weight": "50g",
    "certification": "EN 12275 / EN 362",
    "origin": null
  },
  {
    "id": "73780",
    "code": "73780",
    "name": "Pure Slider III",
    "title": "Pure Slider III",
    "category": "Carabiners & Quickdraws",
    "articleNo": "73780",
    "type": "ST",
    "image": "/images/products/73780.webp",
    "status": "CARABINER",
    "rating": "EN 12275 / EN 362",
    "available": true,
    "description": "Robust and versatile all-round carabiner with locking slide gate for all vertical activities. The special geometry of the nose combined with the keylock closure ensures optimal handling when hooking and unhooking. The large rope contact area reduces material wear, and its high open strength is an additional safety feature.",
    "features": [
      "Keylock closure mechanism for optimum handling when clipping and unclipping",
      "H-profile construction ensures best possible use of material and minimal weight",
      "Available as a slider, screw, or triple lock version"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12275 / EN 362"
      },
      {
        "label": "Material",
        "value": "Aluminium 7075 T6"
      },
      {
        "label": "Closure",
        "value": "Slider"
      },
      {
        "label": "Carabiner shape",
        "value": "Offset D"
      },
      {
        "label": "Fmax. major axis",
        "value": "22 kN"
      },
      {
        "label": "Fmax. open",
        "value": "8 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "8 kN"
      },
      {
        "label": "Width",
        "value": "60 mm"
      },
      {
        "label": "Length",
        "value": "97 mm"
      },
      {
        "label": "Gate opening",
        "value": "19 mm"
      },
      {
        "label": "Weight",
        "value": "47g"
      }
    ],
    "attributes": [
      "Keylock"
    ],
    "colors": [
      "icemint 329",
      "night 017",
      "oasis 138"
    ],
    "weights": [],
    "weight": "47g",
    "certification": "EN 12275 / EN 362",
    "origin": null
  },
  {
    "id": "73778",
    "code": "73778",
    "name": "Pure Triple III",
    "title": "Pure Triple III",
    "category": "Carabiners & Quickdraws",
    "articleNo": "73778",
    "type": "ST",
    "image": "/images/products/73778.webp",
    "status": "CARABINER",
    "rating": "EN 12275 / EN 362",
    "available": true,
    "description": "Robust and versatile all-round triple-lock carabiner with wire gate for all vertical activities. The special geometry of the nose combined with the keylock closure ensures optimal handling when hooking and unhooking. The large rope contact area reduces material wear, and its high open strength is an additional safety feature.",
    "features": [
      "Keylock closure mechanism for optimum handling when clipping and unclipping",
      "H-profile construction ensures best possible use of material and minimal weight",
      "Available as a slider, screw, or triple lock version"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12275 / EN 362"
      },
      {
        "label": "Material",
        "value": "Aluminium 7075 T6"
      },
      {
        "label": "Closure",
        "value": "Triple"
      },
      {
        "label": "Carabiner shape",
        "value": "Offset D"
      },
      {
        "label": "Fmax. major axis",
        "value": "22 kN"
      },
      {
        "label": "Fmax. open",
        "value": "8 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "8 kN"
      },
      {
        "label": "Width",
        "value": "60 mm"
      },
      {
        "label": "Length",
        "value": "97 mm"
      },
      {
        "label": "Gate opening",
        "value": "19 mm"
      },
      {
        "label": "Weight",
        "value": "55g"
      }
    ],
    "attributes": [
      "Keylock"
    ],
    "colors": [
      "icemint 329",
      "silver 006"
    ],
    "weights": [],
    "weight": "55g",
    "certification": "EN 12275 / EN 362",
    "origin": null
  },
  {
    "id": "88291",
    "code": "88291",
    "name": "Steel HMS Screw",
    "title": "Steel HMS Screw",
    "category": "Carabiners & Quickdraws",
    "articleNo": "88291",
    "type": "ST",
    "image": "/images/products/88291.webp",
    "status": "CARABINER",
    "rating": "EN 12275 / EN 362 / UIAA 121",
    "available": true,
    "description": "HMS carabiner made of hardened steel for maximum protection. Ideal for top roping, outdoor centres, high ropes courses, climbing gyms or for other uses where a regular strain is placed on the carabiner.",
    "features": [
      "Keylock closure mechanism for optimum handling when clipping and unclipping",
      "Brass sleeve ensures optimum gate strength"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12275 / EN 362 / UIAA 121"
      },
      {
        "label": "Material",
        "value": "Steel"
      },
      {
        "label": "Closure",
        "value": "Screw"
      },
      {
        "label": "Carabiner shape",
        "value": "HMS"
      },
      {
        "label": "Fmax. major axis",
        "value": "40 kN"
      },
      {
        "label": "Fmax. open",
        "value": "15 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "15 kN"
      },
      {
        "label": "Width",
        "value": "74 mm"
      },
      {
        "label": "Length",
        "value": "110 mm"
      },
      {
        "label": "Gate opening",
        "value": "23 mm"
      },
      {
        "label": "Weight",
        "value": "236g"
      }
    ],
    "attributes": [
      "Keylock"
    ],
    "colors": [
      "silver 006"
    ],
    "weights": [],
    "weight": "236g",
    "certification": "EN 12275 / EN 362 / UIAA 121",
    "origin": null
  },
  {
    "id": "72050",
    "code": "72050",
    "name": "Ultralight Junior III",
    "title": "Ultralight Junior III",
    "category": "Carabiners & Quickdraws",
    "articleNo": "72050",
    "type": "ST",
    "image": "/images/products/72050.webp",
    "status": "CARABINER",
    "rating": "EN 12492, UIAA 106",
    "available": true,
    "description": "The Junior version of the ULTRALIGHT has also had a make-over. It provides the same features as the ULTRALIGHT.",
    "features": [
      "Extremely robust and impact-resistant polypropylene shell",
      "Headlamp attachment option",
      "Fully adjustable, replaceable, and washable head and chin strap for optimum fit",
      "Various vents for continuous air exchange",
      "One size: fits a head circumference of 48–58 cm",
      "Comfortably padded carrying system with antibacterial webbing"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12492, UIAA 106"
      },
      {
        "label": "Material",
        "value": "EPS, Polypropylen, Polaymide, PU leather"
      },
      {
        "label": "Head size",
        "value": "48 - 58"
      },
      {
        "label": "Weight",
        "value": "380g"
      }
    ],
    "attributes": [
      "UIAA",
      "Kids"
    ],
    "colors": [
      "icemint 329",
      "red 200",
      "snow 047"
    ],
    "weights": [],
    "weight": "380g",
    "certification": "EN 12492, UIAA 106",
    "origin": null
  },
  {
    "id": "85401",
    "code": "85401",
    "name": "Flux",
    "title": "Flux",
    "category": "Pulleys",
    "articleNo": "85401",
    "type": "ST",
    "image": "/images/products/85401.webp",
    "status": "PULLEY",
    "rating": "EN 12278",
    "available": true,
    "description": "The FLUX is a small, practical, ball-bearing pulley for block and tackles as well as directional anchors with fabric ropes and medium loads. The movable side pieces enable quick and easy installation. The large carabiner hole fits all conventional EDELRID carabiners.",
    "features": [
      "Compact, lightweight construction",
      "Flexible side pieces for easy rigging and removal",
      "Ball-bearing-mounted pulley for high efficiency",
      "Roller made from anodized aluminum"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Width",
        "value": "50 mm"
      },
      {
        "label": "Height",
        "value": "75 mm"
      },
      {
        "label": "Efficiency",
        "value": "94 %"
      },
      {
        "label": "Working Load Limit",
        "value": "500 kg"
      },
      {
        "label": "Approved rope diameter",
        "value": "6 - 13 mm"
      },
      {
        "label": "Minimum breaking strength",
        "value": "26 kN"
      },
      {
        "label": "Weight",
        "value": "96g"
      }
    ],
    "attributes": [],
    "colors": [
      "icemint 329"
    ],
    "weights": [],
    "weight": "96g",
    "certification": "EN 12278",
    "origin": null
  },
  {
    "id": "85400",
    "code": "85400",
    "name": "Neelix",
    "title": "Neelix",
    "category": "Pulleys",
    "articleNo": "85400",
    "type": "ST",
    "image": "/images/products/85400.webp",
    "status": "PULLEY",
    "rating": "EN 12278",
    "available": true,
    "description": "The NEELIX is a small, robust pulley with fixed side pieces. The ball-bearing-mounted pulley offers outstanding efficiency and is multifunctional, for example for tree care or use in cable car systems. The spacer provided prevents the side pieces from drawing together when used with ropes or slings.",
    "features": [
      "Compact, lightweight construction",
      "Ball-bearing-mounted pulley for high efficiency",
      "Roller made from anodized aluminum"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Width",
        "value": "48 mm"
      },
      {
        "label": "Height",
        "value": "99 mm"
      },
      {
        "label": "Efficiency",
        "value": "94 %"
      },
      {
        "label": "Working Load Limit",
        "value": "600 kg"
      },
      {
        "label": "Approved rope diameter",
        "value": "6 - 13 mm"
      },
      {
        "label": "Minimum breaking strength",
        "value": "30 kN"
      },
      {
        "label": "Weight",
        "value": "122g"
      }
    ],
    "attributes": [],
    "colors": [
      "icemint 329"
    ],
    "weights": [],
    "weight": "122g",
    "certification": "EN 12278",
    "origin": null
  },
  {
    "id": "85403",
    "code": "85403",
    "name": "Pike Rescue",
    "title": "Pike Rescue",
    "category": "Pulleys",
    "articleNo": "85403",
    "type": "ST",
    "image": "/images/products/85403.webp",
    "status": "PULLEY",
    "rating": "EN 12278",
    "available": true,
    "description": "The PIKE RESCUE is a large pulley used in simple and more complex block and tackle systems for rescue operations. It has a particularly high breaking load. The large carabiner opening offers enough space for two carabiners while a locking carabiner with a gate can be fully rotated in it.",
    "features": [
      "Ball-bearing-mounted pulley for high efficiency",
      "Rollers made from anodized aluminum",
      "Eyelet for up to two carabiners",
      "Larger wrap angle"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Width",
        "value": "72 mm"
      },
      {
        "label": "Height",
        "value": "120 mm"
      },
      {
        "label": "Efficiency",
        "value": "98 %"
      },
      {
        "label": "Working Load Limit",
        "value": "900 kg"
      },
      {
        "label": "Approved rope diameter",
        "value": "6 - 13 mm"
      },
      {
        "label": "Minimum breaking strength",
        "value": "46 kN"
      },
      {
        "label": "Weight",
        "value": "262g"
      }
    ],
    "attributes": [],
    "colors": [
      "anthracite 069"
    ],
    "weights": [],
    "weight": "262g",
    "certification": "EN 12278",
    "origin": null
  },
  {
    "id": "85404",
    "code": "85404",
    "name": "Pike Rescue Double",
    "title": "Pike Rescue Double",
    "category": "Pulleys",
    "articleNo": "85404",
    "type": "ST",
    "image": "/images/products/85404.webp",
    "status": "PULLEY",
    "rating": "EN 12278",
    "available": true,
    "description": "The PIKE RESCUE DOUBLE is a large double pulley used in simple and more complex block and tackle systems for rescue operations. It has a particularly high breaking load. The large eyelet at the top can fit two carabiners while a further carabiner can be clipped into the lower eyelet.",
    "features": [
      "Rollers made from anodized aluminum",
      "Larger wrap angle",
      "Two ball-bearing-mounted rollers for high efficiency",
      "Top eyelet for two carabiners and bottom eyelet for one carabiner"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12278"
      },
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Width",
        "value": "78 mm"
      },
      {
        "label": "Height",
        "value": "150 mm"
      },
      {
        "label": "Efficiency",
        "value": "98 %"
      },
      {
        "label": "Working Load Limit",
        "value": "900 kg"
      },
      {
        "label": "Approved rope diameter",
        "value": "6 - 13 mm"
      },
      {
        "label": "Minimum breaking strength",
        "value": "46 kN"
      },
      {
        "label": "Weight",
        "value": "461g"
      }
    ],
    "attributes": [],
    "colors": [
      "anthracite 069"
    ],
    "weights": [],
    "weight": "461g",
    "certification": "EN 12278",
    "origin": null
  },
  {
    "id": "85405",
    "code": "85405",
    "name": "Puck",
    "title": "Puck",
    "category": "Pulleys",
    "articleNo": "85405",
    "type": "ST",
    "image": "/images/products/85405.webp",
    "status": "PULLEY",
    "rating": "EN 12278",
    "available": true,
    "description": "Special pulley for tree care. Suitable for use either in friction hitch systems or as a rigging plate with a pulley if multiple anchor points are required. The rounded edges make it particularly gentle on ropes. Ideal for auxiliary cable cars, block and tackle systems, or rigging systems.",
    "features": [
      "Compact, lightweight construction",
      "Ball-bearing-mounted pulley for high efficiency",
      "Roller made from anodized aluminum",
      "Special tree care pulley"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Width",
        "value": "68 mm"
      },
      {
        "label": "Height",
        "value": "98 mm"
      },
      {
        "label": "Efficiency",
        "value": "94 %"
      },
      {
        "label": "Working Load Limit",
        "value": "800 kg"
      },
      {
        "label": "Approved rope diameter",
        "value": "< 13 mm"
      },
      {
        "label": "Minimum breaking strength",
        "value": "40 kN"
      },
      {
        "label": "Weight",
        "value": "164g"
      }
    ],
    "attributes": [],
    "colors": [
      "icemint 329"
    ],
    "weights": [],
    "weight": "164g",
    "certification": "EN 12278",
    "origin": null
  },
  {
    "id": "73743",
    "code": "73743",
    "name": "Spoc",
    "title": "Spoc",
    "category": "Pulleys",
    "articleNo": "73743",
    "type": "ST",
    "image": "/images/products/73743.webp",
    "status": "PULLEY",
    "rating": "EN 12278, EN 567",
    "available": true,
    "description": "Ultra-light pulley with backstop. Designed for lifting loads, crevasse rescue operations, or as an emergency ascender.",
    "features": [
      "The backstop can be fixed in the open position in order to use the device as a simple pulley",
      "Pulley diameter: 20 mm",
      "Ball bearing pulleys for high efficiency (92 %)",
      "Cams for optimal grip on iced or muddy ropes",
      "Suitable for ropes with a diameter of 7.0 to 11.0 mm as well as for the EDELRID RAP LINE"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Aluminium, Steel, Polyamide"
      },
      {
        "label": "Minimum breaking strength",
        "value": "15 kN"
      },
      {
        "label": "Weight",
        "value": "60g"
      }
    ],
    "attributes": [
      "Made in Germany",
      "Technologies"
    ],
    "colors": [
      "oasis 138"
    ],
    "weights": [],
    "weight": "60g",
    "certification": "EN 12278, EN 567",
    "origin": "Made in Germany"
  },
  {
    "id": "88250",
    "code": "88250",
    "name": "Foot Cruiser right",
    "title": "Foot Cruiser right",
    "category": "Descenders & Rescue",
    "articleNo": "88250",
    "type": "ST",
    "image": "/images/products/88250.webp",
    "status": "RESCUE",
    "rating": "—",
    "available": true,
    "description": "Sophisticated foot ascender that enables efficient and low-fatigue climbing on the rope. A pre-installed but removable rope safety device prevents unintentional release. The locking mechanism of the FOOT CRUISER is easy to operate - even with your feet. The ascent loop is fitted with an abrasion protector. The FOOT CRUISER is available for right or left feet.",
    "features": [
      "For 8.0–13.0 mm diameter kernmantle ropes",
      "Cam with self-cleaning slots for optimum grip on frozen or muddy ropes",
      "Pre-installed but removable rope safety device to prevent unintentional release",
      "Ascent loop fitted with abrasion protector"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Approved rope diameter",
        "value": "8 - 13mm"
      },
      {
        "label": "Weight",
        "value": "105g"
      }
    ],
    "attributes": [],
    "colors": [
      "night 017"
    ],
    "weights": [],
    "weight": "105g",
    "certification": null,
    "origin": null
  },
  {
    "id": "88332",
    "code": "88332",
    "name": "Megawatt",
    "title": "Megawatt",
    "category": "Descenders & Rescue",
    "articleNo": "88332",
    "type": "ST",
    "image": "/images/products/88332.webp",
    "status": "RESCUE",
    "rating": "EN 12841-C, EN 341-2A, ANSI/ASSE Z359.4, EN 15151-1/8",
    "available": true,
    "description": "MEGAWATT is a universal descender device for industrial climbers and rescue operations with a payload of up to 230 kg. The intelligent transmission mechanics of the descent lever facilitate a large operating range and exact adjustment of the speed at minimum force. The short lever always automatically returns to the parking position and makes the device extremely compact. This prevents entanglement. The ergonomic lever design with rubber coated grip inserts allows intuitive active and passive operation with the left or right hand. The four-way safety lock allows inserting the rope without having to separate the device from the karabiner. Steel inserts in the especially burdened spots increase the service life of the device. The risk of uncontrolled travel along the rope is reduced by the anti-panic function. It can also be triggered deliberately to reverse the sense of operation of the lever. This allows optimum handling in any application and position. All this makes the MEGAWATT the most versatile descender device in the market at a weight of only 495 g.",
    "features": [
      "Steel inserts on the abrasion-prone areas increase service life",
      "Precision operation of the lever at minimum exertion",
      "Short lever and compact design prevent entanglement",
      "Automatic parking position of the control lever",
      "Ergonomic lever with rubber-coated grip inserts for intuitive handling with the left or right hand in active and passive applications",
      "Four-way safety lock allows inserting the rope without having to separate the device from the karabiner",
      "Large karabiner hole allows 360° rotation of the karabiner",
      "Anti-panic function reduces the risk of uncontrolled descent movements and creates additional operating options",
      "Interlocking bolt supplied with the lever allows use as a closed system",
      "Descent of heavy loads of up to 230 kg",
      "For a rope diameter of 8.9 to 11.8 mm",
      "Meets the standards EN 12841-C, EN 341-2A, EN 15151-1/8 and ANSI/ASSE Z359.4",
      "Integrated NFC chip for simplified operational documentation"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12841-C, EN 341-2A, ANSI/ASSE Z359.4, EN 15151-1/8"
      },
      {
        "label": "Approved rope diameter",
        "value": "8,9-11,8mm"
      },
      {
        "label": "Weight",
        "value": "495g"
      }
    ],
    "attributes": [
      "NFC",
      "Anti-panic",
      "Technologies"
    ],
    "colors": [
      "night 017"
    ],
    "weights": [],
    "weight": "495g",
    "certification": "EN 12841-C, EN 341-2A, ANSI/ASSE Z359.4, EN 15151-1/8",
    "origin": null
  },
  {
    "id": "88942",
    "code": "88942",
    "name": "Mini Rig",
    "title": "Mini Rig",
    "category": "Descenders & Rescue",
    "articleNo": "88942",
    "type": "ST",
    "image": "/images/products/88942.webp",
    "status": "RESCUE",
    "rating": "CNB/P 11.114 PfE",
    "available": true,
    "description": "Small, lightweight aluminium rigging plate suitable for extending from one to three anchor points.",
    "features": [
      "Hole diameter: 20 mm",
      "Central opening can take up to three carabiners",
      "Wrought construction for optimum material utilisation. Low weight and high strength",
      "6 mm thick",
      "Maximum breaking strength: 36 kN"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "CNB/P 11.114 PfE"
      },
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Minimum breaking strength",
        "value": "30kN"
      },
      {
        "label": "Weight",
        "value": "62g"
      }
    ],
    "attributes": [],
    "colors": [
      "orange 227"
    ],
    "weights": [],
    "weight": "62g",
    "certification": "CNB/P 11.114 PfE",
    "origin": null
  },
  {
    "id": "88920",
    "code": "88920",
    "name": "Rescue 8",
    "title": "Rescue 8",
    "category": "Descenders & Rescue",
    "articleNo": "88920",
    "type": "ST",
    "image": "/images/products/88920.webp",
    "status": "RESCUE",
    "rating": "EN 15151-2",
    "available": true,
    "description": "Large aluminium descender with ears for belay, descent and positioning.",
    "features": [],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 15151-2"
      },
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Width",
        "value": "170mm"
      },
      {
        "label": "Length",
        "value": "170mm"
      },
      {
        "label": "Approved rope diameter",
        "value": "7,8 - 12,0mm"
      },
      {
        "label": "Weight",
        "value": "240g"
      }
    ],
    "attributes": [],
    "colors": [
      "blue 300",
      "night 017"
    ],
    "weights": [],
    "weight": "240g",
    "certification": "EN 15151-2",
    "origin": null
  },
  {
    "id": "84037",
    "code": "84037",
    "name": "Cupid Swivel Mini",
    "title": "Cupid Swivel Mini",
    "category": "Hardware Accessories",
    "articleNo": "84037",
    "type": "ST",
    "image": "/images/products/84037.webp",
    "status": "HARDWARE",
    "rating": "PPE-R/11.135",
    "available": true,
    "description": "The ball-bearing-mounted swivel for connecting rope elements, slings, and metal components is ideal for rope bridges, directly tying in haul bags, and creating connections for uses where the shortest possible system length is required. The centering geometrics ensure that loads on the CUPID SWIVEL MINI are ideally positioned at all times.",
    "features": [
      "Small, ball-bearing-mounted swivel rotates reliably even under high loads"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "PPE-R/11.135"
      },
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Minimum breaking strength",
        "value": "23 kN"
      }
    ],
    "attributes": [],
    "colors": [
      "icemint-night 377"
    ],
    "weights": [],
    "weight": null,
    "certification": "PPE-R/11.135",
    "origin": null
  },
  {
    "id": "88253",
    "code": "88253",
    "name": "Hand Cruiser Left",
    "title": "Hand Cruiser Left",
    "category": "Hardware Accessories",
    "articleNo": "88253",
    "type": "ST",
    "image": "/images/products/88253.webp",
    "status": "HARDWARE",
    "rating": "EN 12841-B; EN 567",
    "available": true,
    "description": "Ergonomically shaped hand ascender for a comfortable ascent on the rope. The curved design increases comfort and reduces friction in the system. A large eyelet allows several carabiners to be attached; a smaller eyelet slightly higher is ideal for setting up a directional anchor. Besides, the secondary hand can comfortably grasp the HAND CRUISER at the top during ascent.",
    "features": [
      "For 8.0–13.0 mm diameter kernmantle ropes",
      "Right-hand/left-hand version in different colors for easy identification",
      "Cams for optimal grip on iced or muddy ropes",
      "The upper part of the ascender can be grasped with the other hand for two-handed ascents"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12841-B; EN 567"
      },
      {
        "label": "Approved rope diameter",
        "value": "8 - 13 mm"
      },
      {
        "label": "Weight",
        "value": "200g"
      }
    ],
    "attributes": [],
    "colors": [
      "silver 006"
    ],
    "weights": [],
    "weight": "200g",
    "certification": "EN 12841-B; EN 567",
    "origin": null
  },
  {
    "id": "88254",
    "code": "88254",
    "name": "Hand Cruiser Right",
    "title": "Hand Cruiser Right",
    "category": "Hardware Accessories",
    "articleNo": "88254",
    "type": "ST",
    "image": "/images/products/88254.webp",
    "status": "HARDWARE",
    "rating": "EN 12841-B; EN 567",
    "available": true,
    "description": "Ergonomically shaped hand ascender for a comfortable ascent on the rope. The curved design increases comfort and reduces friction in the system. A large eyelet allows several carabiners to be attached; a smaller eyelet slightly higher is ideal for setting up a directional anchor. Besides, the secondary hand can comfortably grasp the HAND CRUISER at the top during ascent.",
    "features": [
      "For 8.0–13.0 mm diameter kernmantle ropes",
      "Right-hand/left-hand version in different colors for easy identification",
      "Cams for optimal grip on iced or muddy ropes",
      "The upper part of the ascender can be grasped with the other hand for two-handed ascents"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12841-B; EN 567"
      },
      {
        "label": "Approved rope diameter",
        "value": "8 - 13 mm"
      },
      {
        "label": "Weight",
        "value": "200g"
      }
    ],
    "attributes": [],
    "colors": [
      "night 017"
    ],
    "weights": [],
    "weight": "200g",
    "certification": "EN 12841-B; EN 567",
    "origin": null
  },
  {
    "id": "71879",
    "code": "71879",
    "name": "Hudson Hammer",
    "title": "Hudson Hammer",
    "category": "Hardware Accessories",
    "articleNo": "71879",
    "type": "ST",
    "image": "/images/products/71879.webp",
    "status": "HARDWARE",
    "rating": "—",
    "available": true,
    "description": "The perfect big wall hammer.",
    "features": [
      "Shock-absorbing hickory shaft",
      "Well-weighted head with point for levering pegs",
      "Hammer holster (sold separately)"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Steel, Hickory"
      },
      {
        "label": "Weight",
        "value": "670g"
      }
    ],
    "attributes": [
      "Made in Germany"
    ],
    "colors": [
      "no color 000"
    ],
    "weights": [],
    "weight": "670g",
    "certification": null,
    "origin": "Made in Germany"
  },
  {
    "id": "85402",
    "code": "85402",
    "name": "Warp",
    "title": "Warp",
    "category": "Hardware Accessories",
    "articleNo": "85402",
    "type": "ST",
    "image": "/images/products/85402.webp",
    "status": "HARDWARE",
    "rating": "EN 12278",
    "available": true,
    "description": "The WARP is a highly efficient, ball-bearing double pulley. Made from stainless steel, the wear-resistant rollers are optimized for use with steel ropes but also work perfectly in systems with fabric ropes. The large opening offers enough space for two carabiners. The connection point at the top enables use in a redundant system with double rope guidance. The WARP is primarily intended for use in adventure parks and on auxiliary cable cars.",
    "features": [
      "Stainless steel rollers",
      "Ball-bearing double pulley for outstanding efficiency",
      "Large attachment eyelet for two carabiners",
      "Top eyelet enables double rope guidance as a redundant system"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 12278"
      },
      {
        "label": "Material",
        "value": "Aluminium/Steel"
      },
      {
        "label": "Width",
        "value": "100 mm"
      },
      {
        "label": "Height",
        "value": "85 mm"
      },
      {
        "label": "Efficiency",
        "value": "92 %"
      },
      {
        "label": "Working Load Limit",
        "value": "1000 kg"
      },
      {
        "label": "Approved rope diameter",
        "value": "< 13 mm"
      },
      {
        "label": "Minimum breaking strength",
        "value": "32 kN"
      },
      {
        "label": "Weight",
        "value": "303g"
      }
    ],
    "attributes": [],
    "colors": [
      "oasis 138"
    ],
    "weights": [],
    "weight": "303g",
    "certification": "EN 12278",
    "origin": null
  },
  {
    "id": "88943",
    "code": "88943",
    "name": "Master Rig II",
    "title": "Master Rig II",
    "category": "Spare Parts",
    "articleNo": "88943",
    "type": "ST",
    "image": "/images/products/88943.webp",
    "status": "SPARE",
    "rating": "CNB/P 11.114 PfE",
    "available": true,
    "description": "Large, robust aluminium rigging plate for use in complex systems.",
    "features": [
      "7 mm thick",
      "Hole diameter: 20 mm",
      "Central opening can take up to three carabiners",
      "Wrought construction for optimum material utilisation. Low weight and high strength",
      "Dimensions: 98 x 149 x 7 mm"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "CNB/P 11.114 PfE"
      },
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Minimum breaking strength",
        "value": "40kN"
      },
      {
        "label": "Weight",
        "value": "165g"
      }
    ],
    "attributes": [],
    "colors": [
      "night 017"
    ],
    "weights": [],
    "weight": "165g",
    "certification": "CNB/P 11.114 PfE",
    "origin": null
  },
  {
    "id": "84006",
    "code": "84006",
    "name": "Ring Alu",
    "title": "Ring Alu",
    "category": "Spare Parts",
    "articleNo": "84006",
    "type": "ST",
    "image": "/images/products/84006.webp",
    "status": "SPARE",
    "rating": "CE",
    "available": true,
    "description": "Lightweight aluminum ring for rope bridges, for example on tree-care harnesses but also for installing anchor points.",
    "features": [
      "Outer diameter: 64 mm",
      "Inner diameter: 40 mm"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "CE"
      },
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Minimum breaking strength",
        "value": "30kN"
      },
      {
        "label": "Weight",
        "value": "55g"
      }
    ],
    "attributes": [],
    "colors": [
      "night 017",
      "oasis 138"
    ],
    "weights": [],
    "weight": "55g",
    "certification": "CE",
    "origin": null
  },
  {
    "id": "35707",
    "code": "35707",
    "name": "Mystix",
    "title": "Mystix",
    "category": "Climbing Shoes — High-End",
    "articleNo": "35707",
    "type": "PA",
    "image": "/images/products/35707.webp",
    "status": "HIGH-END",
    "rating": "—",
    "available": true,
    "description": "Another member to our High-End range that was developed in close cooperation with our top athletes. The MYSTIX is a high-end climbing shoe with a powerful downturn for steep to extreme overhanging routes in the climbing gym and at the crag. Built on an aggressive and pointed last, the shoe allows very precise footwork on vertical and overhanging terrain. It offers great support on small edges while remaining flexible enough to impress in modern bouldering gyms which often possess many large volumes and slopers. In order to achieve these properties, the MYSTIX features a midsole which was specially developed using CAD Software. In addition, the strong downturn optimally supports the foot muscles in steep terrain. The crossed Velcro strap closure system permits individual adjustment with one quick pull. The MYSTIX is quick to take on and off without compromising on performance. In order to achieve even more feeling when stepping onto a hold, the toe area has been designed to be particularly soft. Additionally, the shoe features an extra sensitive Vibram XS Grip sole (4.0 mm). The toe area is made partially from leather, so that this part adjusts even more to the individual toe shape. The fit of the MYSTIX corresponds to your street shoe size. Performance-oriented climbers can also choose the MYSTIX max. one size smaller. For an optimal fit, we recommend measuring your feet with the help of our sizing chart.",
    "features": [
      "Powerful downturn",
      "High-end bouldering and climbing shoe for steep to extreme overhanging routes in the climbing gym and at the crag",
      "Especially soft forefoot with extra sensitive Vibram XS Grip sole (4.0 mm) for even more feeling when stepping or hooking",
      "Individual adjustment to the foot and toe shape thanks to crossed fasteners and leather in the toe area",
      "Specially designed 2-zone midsole",
      "UK sizes 3 – 12"
    ],
    "specs": [
      {
        "label": "Sole",
        "value": "Vibram XS Grip"
      },
      {
        "label": "Downturn",
        "value": "ambitious"
      },
      {
        "label": "Shoe shape",
        "value": "strongly asymmetric"
      },
      {
        "label": "Upper",
        "value": "Microfiber"
      },
      {
        "label": "Midsole",
        "value": "RC-FLEX"
      },
      {
        "label": "Last shape",
        "value": "strongly asymmetric"
      },
      {
        "label": "Closing System",
        "value": "Single Lace"
      },
      {
        "label": "Midsole Material",
        "value": "RX-FLEX"
      },
      {
        "label": "Rubber front",
        "value": "Vibram XS Grip 4,0mm"
      },
      {
        "label": "Rubber back/heel",
        "value": "Vibram XS Grip 3,5mm"
      },
      {
        "label": "Rubber rand",
        "value": "RX-1 ALLROUND 2,0mm"
      },
      {
        "label": "Toe patch",
        "value": "RX-1 Allround 2,0mm, moulded"
      },
      {
        "label": "Weight (Size UK 7,5)",
        "value": "252g"
      },
      {
        "label": "Tongue",
        "value": "Elastic Mesh"
      },
      {
        "label": "Rubber",
        "value": "Vibram XS Grip"
      }
    ],
    "attributes": [
      "Fair Wear"
    ],
    "colors": [
      "snow 047"
    ],
    "weights": [
      {
        "length": "3",
        "weight": "340g"
      },
      {
        "length": "3,5",
        "weight": "400g"
      },
      {
        "length": "4",
        "weight": "420g"
      },
      {
        "length": "4,5",
        "weight": "430g"
      },
      {
        "length": "5",
        "weight": "450g"
      },
      {
        "length": "5,5",
        "weight": "460g"
      },
      {
        "length": "6",
        "weight": "476g"
      },
      {
        "length": "6,5",
        "weight": "490g"
      },
      {
        "length": "7",
        "weight": "500g"
      },
      {
        "length": "7,5",
        "weight": "520g"
      },
      {
        "length": "8",
        "weight": "537g"
      },
      {
        "length": "8,5",
        "weight": "555g"
      },
      {
        "length": "9",
        "weight": "570g"
      },
      {
        "length": "9,5",
        "weight": "590g"
      },
      {
        "length": "10",
        "weight": "600g"
      },
      {
        "length": "10,5",
        "weight": "620g"
      },
      {
        "length": "11",
        "weight": "640g"
      },
      {
        "length": "11,5",
        "weight": "660g"
      },
      {
        "length": "12",
        "weight": "678g"
      }
    ],
    "weight": null,
    "certification": null,
    "origin": null
  },
  {
    "id": "35720",
    "code": "35720",
    "name": "Sensor",
    "title": "Sensor",
    "category": "Climbing Shoes — High-End",
    "articleNo": "35720",
    "type": "PA",
    "image": "/images/products/35720.webp",
    "status": "HIGH-END",
    "rating": "—",
    "available": true,
    "description": "When it comes to the SENSOR, the name says it all: it is the most sensitive shoe in our range and has been specially developed for climbing and bouldering on artificial holds as well as for competitions. The combination of a minimalistic midsole, high asymmetry, and a powerful downturn makes the SENSOR a highly sensitive and performance-oriented climbing shoe. An innovative system with a double slingshot prevents the pre-tensioning from waning over time. The Vibram XS Grip sole and a large toe patch provide outstanding grip exactly where it is needed. And that is not the only thing that is special about the sole: we have also varied the thickness from 1 to 4 mm to aid sensitivity—with lots of rubber where you need it and less where a good sense of feel is key. Thanks to the somewhat narrower, performance-oriented cut, the SENSOR fits the foot snuggly. The SENSOR runs small. Therefore, choose one size larger than your street shoe size. For the best fit, we recommend measuring your feet with the help of our sizing chart.",
    "features": [
      "Powerful downturn",
      "UK sizes 3 – 12",
      "High-end bouldering and climbing shoe for steep to extreme overhanging routes in the climbing gym and at the crag",
      "Particularly sensitive forefoot with a shaped Vibram XS Grip sole for even more feeling when stepping or hooking",
      "Double slingshot preserves pre-tensioning"
    ],
    "specs": [
      {
        "label": "Sole",
        "value": "Vibram XS Grip"
      },
      {
        "label": "Downturn",
        "value": "aggressive"
      },
      {
        "label": "Shoe shape",
        "value": "strongly asymmetric"
      },
      {
        "label": "Upper",
        "value": "Microfiber 2,0mm"
      },
      {
        "label": "Midsole",
        "value": "RC-SENSE"
      },
      {
        "label": "Lining",
        "value": "Leather Heel"
      },
      {
        "label": "Last shape",
        "value": "strongly asymmetric"
      },
      {
        "label": "Closing System",
        "value": "Single VCR"
      },
      {
        "label": "Midsole Material",
        "value": "RC-SENSE"
      },
      {
        "label": "Rubber back/heel",
        "value": "Vibram XS Grip"
      },
      {
        "label": "Rubber rand",
        "value": "RX-1 ALLROUND 2,0mm"
      },
      {
        "label": "Toe patch",
        "value": "RX-1 ALLROUND 2,0mm-1,0mm / 50° shore, moulded"
      },
      {
        "label": "Weight (Size UK 7,5)",
        "value": "256g"
      },
      {
        "label": "Footbed",
        "value": "Microfiber / Suede leather (Toe Box / Heel)"
      },
      {
        "label": "Tongue",
        "value": "Elastic Mesh"
      },
      {
        "label": "Rubber",
        "value": "Vibram XS Grip"
      }
    ],
    "attributes": [
      "Fair Wear"
    ],
    "colors": [
      "petrol 404"
    ],
    "weights": [
      {
        "length": "3",
        "weight": "384g"
      },
      {
        "length": "3,5",
        "weight": "393g"
      },
      {
        "length": "4",
        "weight": "403g"
      },
      {
        "length": "4,5",
        "weight": "412g"
      },
      {
        "length": "5",
        "weight": "422g"
      },
      {
        "length": "5,5",
        "weight": "431g"
      },
      {
        "length": "6",
        "weight": "441g"
      },
      {
        "length": "6,5",
        "weight": "450g"
      },
      {
        "length": "7",
        "weight": "460g"
      },
      {
        "length": "7,5",
        "weight": "470g"
      },
      {
        "length": "8",
        "weight": "487g"
      },
      {
        "length": "8,5",
        "weight": "505g"
      },
      {
        "length": "9",
        "weight": "520g"
      },
      {
        "length": "9,5",
        "weight": "540g"
      },
      {
        "length": "10",
        "weight": "558g"
      },
      {
        "length": "10,5",
        "weight": "570g"
      },
      {
        "length": "11",
        "weight": "590g"
      },
      {
        "length": "11,5",
        "weight": "610g"
      },
      {
        "length": "12",
        "weight": "630g"
      }
    ],
    "weight": null,
    "certification": null,
    "origin": null
  },
  {
    "id": "35739",
    "code": "35739",
    "name": "Voltage III",
    "title": "Voltage III",
    "category": "Climbing Shoes — High-End",
    "articleNo": "35739",
    "type": "PA",
    "image": "/images/products/35739.webp",
    "status": "HIGH-END",
    "rating": "—",
    "available": true,
    "description": "The VOLTAGE is a high-end shoe that offers outstanding precision, maximum power transfer, and excellent sensitivity. Its wide, anatomically designed last shape offers plenty of toe room while aggressive pre-tensioning and asymmetry transmit impressive force to the toes. The tried-and-tested, anatomically shaped heel design of the VOLTAGE range enables rock-solid heel hooks. Just in case, the shoe also features a large toe patch. The fit can be adjusted using the two VCR straps, with the large, main strap holding the heel securely in place while the offset smaller strap enables a snug midfoot fit. The two-part elasticated material offers different levels of tension to make the shoe easier to put on and take off. The VOLTAGE is the perfect choice for advanced and professional climbers looking for a precise shoe for sport climbing and bouldering for demanding overhangs and highly technical routes.",
    "features": [],
    "specs": [
      {
        "label": "Sole",
        "value": "Vibram XS Grip"
      },
      {
        "label": "Downturn",
        "value": "aggressive"
      },
      {
        "label": "Shoe shape",
        "value": "strongly asymmetric"
      },
      {
        "label": "Upper",
        "value": "Microfiber 2,0mm"
      },
      {
        "label": "Midsole",
        "value": "RC-TENSION"
      },
      {
        "label": "Last shape",
        "value": "strongly asymmetric"
      },
      {
        "label": "Closing System",
        "value": "Double Velcro"
      },
      {
        "label": "Midsole Material",
        "value": "RC-TENSION"
      },
      {
        "label": "Rubber front",
        "value": "Vibram XS Grip 4,0mm"
      },
      {
        "label": "Rubber back/heel",
        "value": "RX-1 Allround 3,0mm"
      },
      {
        "label": "Rubber rand",
        "value": "RX-1 ALLROUND 2,0mm"
      },
      {
        "label": "Toe patch",
        "value": "RX-1 ALLROUND 2,0mm"
      },
      {
        "label": "Footbed",
        "value": "Suede leather"
      },
      {
        "label": "Rubber",
        "value": "Vibram XS Grip"
      }
    ],
    "attributes": [
      "Fair Wear"
    ],
    "colors": [
      "topaz 094"
    ],
    "weights": [
      {
        "length": "3",
        "weight": "501g"
      },
      {
        "length": "3,5",
        "weight": "508g"
      },
      {
        "length": "4",
        "weight": "515g"
      },
      {
        "length": "4,5",
        "weight": "522g"
      },
      {
        "length": "5",
        "weight": "529g"
      },
      {
        "length": "5,5",
        "weight": "536g"
      },
      {
        "length": "6",
        "weight": "543g"
      },
      {
        "length": "6,5",
        "weight": "550g"
      },
      {
        "length": "7",
        "weight": "557g"
      },
      {
        "length": "7,5",
        "weight": "564g"
      },
      {
        "length": "8",
        "weight": "571g"
      },
      {
        "length": "8,5",
        "weight": "578g"
      },
      {
        "length": "9",
        "weight": "585g"
      },
      {
        "length": "9,5",
        "weight": "592g"
      },
      {
        "length": "10",
        "weight": "599g"
      },
      {
        "length": "10,5",
        "weight": "606g"
      },
      {
        "length": "11",
        "weight": "613g"
      },
      {
        "length": "11,5",
        "weight": "620g"
      },
      {
        "length": "12",
        "weight": "627g"
      }
    ],
    "weight": null,
    "certification": null,
    "origin": null
  },
  {
    "id": "35727",
    "code": "35727",
    "name": "Voltage LV II",
    "title": "Voltage LV II",
    "category": "Climbing Shoes — High-End",
    "articleNo": "35727",
    "type": "PA",
    "image": "/images/products/35727.webp",
    "status": "HIGH-END",
    "rating": "—",
    "available": true,
    "description": "The trusted fit and all the features of the VOLTAGE, but for less voluminous, slimmer feet, especially in the forefoot—that's what the VOLTAGE LV offers! Its powerful downturn combined with the claw shape in the toe area ensures the perfect move on an overhang. The perfectly tuned midsole supports the toes when standing on the smallest footholds, but at the same time is soft enough to significantly increase friction even in modern volume bouldering. Offset VCR straps allow the shoe to be quickly adjusted to your foot. The sock-like shaft design prevents rubbing and pressure points and makes the VOLTAGE LV comfortable despite its aggressive shape. The tongue on the VOLTAGE LV is made of breathable and elastic knitted fabric and starts below the outer ankle to prevent friction points here as well. The fit of the VOLTAGE LV corresponds to your street shoe size. Performance-oriented climbers can also choose the VOLTAGE LV max. one size smaller. For an optimal fit, we recommend measuring your feet with the help of our sizing chart.",
    "features": [
      "Powerful downturn",
      "Low volume — especially shaped for slimmer feet",
      "UK sizes 3 - 8",
      "High-end bouldering and climbing shoe for steep to extreme overhanging routes in the climbing gym and at the crag",
      "Two offset VCR straps for optimal adjustment",
      "Specially shaped, sock-like upper construction",
      "High-quality leather footbed, upper made of dimensionally stable microfiber fabric",
      "Vibram XS Grip sole (4 mm) for even more feeling when stepping",
      "Perfectly matched midsole at forefoot (RC-TENSION)",
      "Breathable fine knit tongue"
    ],
    "specs": [
      {
        "label": "Sole",
        "value": "Vibram XS Grip"
      },
      {
        "label": "Downturn",
        "value": "aggressive"
      },
      {
        "label": "Shoe shape",
        "value": "strongly asymmetric"
      },
      {
        "label": "Upper",
        "value": "Microfiber 2,0mm"
      },
      {
        "label": "Midsole",
        "value": "RC-TENSION"
      },
      {
        "label": "Last shape",
        "value": "strongly asymmetric"
      },
      {
        "label": "Closing System",
        "value": "Double VCR"
      },
      {
        "label": "Midsole Material",
        "value": "RC-TENSION"
      },
      {
        "label": "Rubber front",
        "value": "Vibram XS Grip 4,0mm"
      },
      {
        "label": "Rubber back/heel",
        "value": "Vibram XS Grip 4,0mm"
      },
      {
        "label": "Rubber rand",
        "value": "RX-1 ALLROUND 2,0mm"
      },
      {
        "label": "Toe patch",
        "value": "RX-1 ALLROUND 2,0mm"
      },
      {
        "label": "Weight (Size UK 7,5)",
        "value": "237g"
      },
      {
        "label": "Footbed",
        "value": "Microfiber 2,0mm / Suede leather (Toe Box)"
      },
      {
        "label": "Tongue",
        "value": "Polyester Knit"
      },
      {
        "label": "Rubber",
        "value": "Vibram XS Grip"
      }
    ],
    "attributes": [
      "Fair Wear",
      "Low Volume"
    ],
    "colors": [
      "neon pink 104"
    ],
    "weights": [
      {
        "length": "3",
        "weight": "362g"
      },
      {
        "length": "3,5",
        "weight": "370g"
      },
      {
        "length": "4",
        "weight": "390g"
      },
      {
        "length": "4,5",
        "weight": "400g"
      },
      {
        "length": "5",
        "weight": "420g"
      },
      {
        "length": "5,5",
        "weight": "436g"
      },
      {
        "length": "6",
        "weight": "450g"
      },
      {
        "length": "6,5",
        "weight": "465g"
      },
      {
        "length": "7",
        "weight": "480g"
      },
      {
        "length": "7,5",
        "weight": "490g"
      },
      {
        "length": "8",
        "weight": "510g"
      }
    ],
    "weight": null,
    "certification": null,
    "origin": null
  },
  {
    "id": "35708",
    "code": "35708",
    "name": "Voltage Lace",
    "title": "Voltage Lace",
    "category": "Climbing Shoes — High-End",
    "articleNo": "35708",
    "type": "PA",
    "image": "/images/products/35708.webp",
    "status": "HIGH-END",
    "rating": "—",
    "available": true,
    "description": "With the fit of the VOLTAGE, the model VOLTAGE LACE is slightly stiffer and thus offers more support at the forefoot. This makes it particularly suitable for difficult routes on steep and overhanging crags. The wide, anatomically designed last with a powerful downturn remains. This optimally supports the foot when standing on small footholds. Additionally, the leather parts in the footbed adjust themselves to the toe shape. A thin lining in the toe box increases comfort and prevents the stretching of the upper material. The asymmetrical lacing makes individual adjustment possible and allows a better pressure distribution on the instep. In addition, this arrangement provides more space for the large toe patch, which remains flexible thanks to well thought-out cuts. The lacing system can be tightened evenly with a single pull and is reinforced at neuralgic points. The overlapping tongue, which covers the instep, avoids unpleasant pressure points. The fit of the VOLTAGE LACE corresponds to your street shoe size. Performance-oriented climbers can also choose the VOLTAGE LACE max. one size smaller. For an optimal fit, we recommend measuring your feet with the help of our sizing chart.",
    "features": [
      "Powerful downturn",
      "High-end bouldering and climbing shoe for steep to extreme overhanging terrain",
      "Asymmetric lacing for quick and individual adjustment",
      "Special overlapping tongue construction for more comfort",
      "Upper made of high-quality leather and microfiber mix",
      "UK sizes 3 – 12"
    ],
    "specs": [
      {
        "label": "Sole",
        "value": "Vibram XS Grip"
      },
      {
        "label": "Downturn",
        "value": "aggressive"
      },
      {
        "label": "Shoe shape",
        "value": "strongly asymmetric"
      },
      {
        "label": "Upper",
        "value": "Suede leather | Microfiber 2,0mm"
      },
      {
        "label": "Midsole",
        "value": "RC-TENSION"
      },
      {
        "label": "Lining",
        "value": "Microfiber 0,5mm"
      },
      {
        "label": "Last shape",
        "value": "strongly asymmetric"
      },
      {
        "label": "Closing System",
        "value": "Lace"
      },
      {
        "label": "Midsole Material",
        "value": "RC-TENSION"
      },
      {
        "label": "Rubber front",
        "value": "Vibram XS Grip 4,0mm"
      },
      {
        "label": "Rubber back/heel",
        "value": "RX-1 Allround 3,0mm"
      },
      {
        "label": "Rubber rand",
        "value": "RX-1 ALLROUND 2,0mm"
      },
      {
        "label": "Toe patch",
        "value": "RX-1 Allround 2,0mm, moulded"
      },
      {
        "label": "Weight (Size UK 7,5)",
        "value": "267g"
      },
      {
        "label": "Footbed",
        "value": "Microfiber 2,0mm / Suede leather (Toe Box)"
      },
      {
        "label": "Tongue",
        "value": "Suede leather 2,0mm"
      },
      {
        "label": "Rubber",
        "value": "Vibram XS Grip"
      }
    ],
    "attributes": [
      "Fair Wear"
    ],
    "colors": [
      "wasabi 036"
    ],
    "weights": [
      {
        "length": "3",
        "weight": "390g"
      },
      {
        "length": "3,5",
        "weight": "410g"
      },
      {
        "length": "4",
        "weight": "420g"
      },
      {
        "length": "4,5",
        "weight": "440g"
      },
      {
        "length": "5",
        "weight": "450g"
      },
      {
        "length": "5,5",
        "weight": "460g"
      },
      {
        "length": "6",
        "weight": "480g"
      },
      {
        "length": "6,5",
        "weight": "490g"
      },
      {
        "length": "7",
        "weight": "500g"
      },
      {
        "length": "7,5",
        "weight": "520g"
      },
      {
        "length": "8",
        "weight": "536g"
      },
      {
        "length": "8,5",
        "weight": "550g"
      },
      {
        "length": "9",
        "weight": "565g"
      },
      {
        "length": "9,5",
        "weight": "580g"
      },
      {
        "length": "10",
        "weight": "600g"
      },
      {
        "length": "10,5",
        "weight": "610g"
      },
      {
        "length": "11",
        "weight": "630g"
      },
      {
        "length": "11,5",
        "weight": "640g"
      },
      {
        "length": "12",
        "weight": "660g"
      }
    ],
    "weight": null,
    "certification": null,
    "origin": null
  },
  {
    "id": "35735",
    "code": "35735",
    "name": "Voltage X",
    "title": "Voltage X",
    "category": "Climbing Shoes — High-End",
    "articleNo": "35735",
    "type": "PA",
    "image": "/images/products/35735.webp",
    "status": "HIGH-END",
    "rating": "—",
    "available": true,
    "description": "The VOLTAGE X is a sensitive, high-end shoe that has been fully tailored to the needs of modern, dynamic bouldering and climbing, whether large volumes, steep climbs, roofs, hooks, or jumps. The newly developed RC-TENSION S midsole enables the combination of an aggressive tension system with a soft, sensitive shoe design. The Vibram XS Grip split sole furthermore provides good grip. The large toe patch and anatomically shaped heel enable optimum power transfer when hooking. The relatively wide rand provides a secure yet comfortable fit compatible with many feet shapes. The fast-lacing system with a VCR strap enables individual adjustment with one quick hand movement. The VOLTAGE X is a comfortable, high-end shoe for both crags and gyms.",
    "features": [],
    "specs": [
      {
        "label": "Sole",
        "value": "Vibram XS Grip"
      },
      {
        "label": "Downturn",
        "value": "aggressive"
      },
      {
        "label": "Shoe shape",
        "value": "strongly asymmetric"
      },
      {
        "label": "Midsole",
        "value": "RC-TENSION S"
      },
      {
        "label": "Last shape",
        "value": "strongly asymmetric"
      },
      {
        "label": "Closing System",
        "value": "Speed lace"
      },
      {
        "label": "Rubber front",
        "value": "Vibram XS Grip 4,0mm"
      },
      {
        "label": "Rubber back/heel",
        "value": "Vibram XS Grip 4,0mm"
      },
      {
        "label": "Rubber rand",
        "value": "RX-1 ALLROUND 2,0mm"
      },
      {
        "label": "Toe patch",
        "value": "RX-1 ALLROUND 2,0mm"
      },
      {
        "label": "Footbed",
        "value": "Microfiber 2,0mm"
      },
      {
        "label": "Tongue",
        "value": "Elastic Webbing"
      },
      {
        "label": "Rubber",
        "value": "Vibram XS Grip"
      }
    ],
    "attributes": [
      "Fair Wear"
    ],
    "colors": [
      "red-marine 269"
    ],
    "weights": [
      {
        "length": "3",
        "weight": "370g"
      },
      {
        "length": "3,5",
        "weight": "390g"
      },
      {
        "length": "4",
        "weight": "410g"
      },
      {
        "length": "4,5",
        "weight": "430g"
      },
      {
        "length": "5",
        "weight": "450g"
      },
      {
        "length": "5,5",
        "weight": "470g"
      },
      {
        "length": "6",
        "weight": "490g"
      },
      {
        "length": "6,5",
        "weight": "510g"
      },
      {
        "length": "7",
        "weight": "530g"
      },
      {
        "length": "7,5",
        "weight": "550g"
      },
      {
        "length": "8",
        "weight": "570g"
      },
      {
        "length": "8,5",
        "weight": "590g"
      },
      {
        "length": "9",
        "weight": "610g"
      },
      {
        "length": "9,5",
        "weight": "630g"
      },
      {
        "length": "10",
        "weight": "650g"
      },
      {
        "length": "10,5",
        "weight": "670g"
      },
      {
        "length": "11",
        "weight": "690g"
      },
      {
        "length": "11,5",
        "weight": "710g"
      },
      {
        "length": "12",
        "weight": "730g"
      }
    ],
    "weight": null,
    "certification": null,
    "origin": null
  },
  {
    "id": "35730",
    "code": "35730",
    "name": "Clue",
    "title": "Clue",
    "category": "Climbing Shoes — Performance",
    "articleNo": "35730",
    "type": "PA",
    "image": "/images/products/35730.webp",
    "status": "PERFORMANCE",
    "rating": "—",
    "available": true,
    "description": "Got no clue? We got it! With its particularly sensitive and strongly performance-oriented construction and lots of rubber, the CLUE is the ideal choice for bouldering problems, slabs and demanding overhang climbing. The aggressive shape brings a great deal of tension despite the particularly soft Vibram XS sole for optimal sensitivity. The stretch tongue allows for a comfortable step-in and still keeps the shoe reliably on the foot. With its timeless design, the CLUE is the perfect shoe to be fired up for sending today.",
    "features": [
      "UK sizes 3 – 12",
      "Sensitive performance slipper with 1 VCR and big toe patch for bouldering and climbing indoors and on rock",
      "RC-SENSE midsole for edge stability with maximum sensitivity and best clawing properties",
      "Vibram XS grip sole for a lot of feeling when starting and high friction values",
      "Slightly asymmetrical",
      "Aggressive downturn and pretension"
    ],
    "specs": [
      {
        "label": "Sole",
        "value": "Vibram XS Grip"
      },
      {
        "label": "Downturn",
        "value": "aggressive"
      },
      {
        "label": "Shoe shape",
        "value": "slightly asymmetric"
      },
      {
        "label": "Upper",
        "value": "Microfibre 2,0mm"
      },
      {
        "label": "Midsole",
        "value": "RC-SENSE"
      },
      {
        "label": "Lining",
        "value": "Microfibre 0,8mm"
      },
      {
        "label": "Last shape",
        "value": "slightly asymmetric"
      },
      {
        "label": "Closing System",
        "value": "Slipper Single VCR"
      },
      {
        "label": "Midsole Material",
        "value": "RC-SENSE"
      },
      {
        "label": "Rubber front",
        "value": "Vibram XS Grip 4,0mm"
      },
      {
        "label": "Rubber back/heel",
        "value": "RX-1 Allround 3,0mm"
      },
      {
        "label": "Rubber rand",
        "value": "RX-1 ALLROUND 2,0mm"
      },
      {
        "label": "Toe patch",
        "value": "RX-1 ALLROUND 2,0mm"
      },
      {
        "label": "Footbed",
        "value": "Microfiber 2,0mm"
      },
      {
        "label": "Tongue",
        "value": "Elastic Webbing"
      },
      {
        "label": "Rubber",
        "value": "Vibram XS Grip"
      }
    ],
    "attributes": [
      "Fair Wear",
      "Vegan friendly"
    ],
    "colors": [
      "night-snow 921"
    ],
    "weights": [
      {
        "length": "3",
        "weight": "310g"
      },
      {
        "length": "3,5",
        "weight": "330g"
      },
      {
        "length": "4",
        "weight": "340g"
      },
      {
        "length": "4,5",
        "weight": "350g"
      },
      {
        "length": "5",
        "weight": "370g"
      },
      {
        "length": "5,5",
        "weight": "380g"
      },
      {
        "length": "6",
        "weight": "390g"
      },
      {
        "length": "6,5",
        "weight": "400g"
      },
      {
        "length": "7",
        "weight": "418g"
      },
      {
        "length": "7,5",
        "weight": "430g"
      },
      {
        "length": "8",
        "weight": "456g"
      },
      {
        "length": "8,5",
        "weight": "468g"
      },
      {
        "length": "9",
        "weight": "480g"
      },
      {
        "length": "9,5",
        "weight": "490g"
      },
      {
        "length": "10",
        "weight": "500g"
      },
      {
        "length": "10,5",
        "weight": "520g"
      },
      {
        "length": "11",
        "weight": "530g"
      },
      {
        "length": "11,5",
        "weight": "540g"
      },
      {
        "length": "12",
        "weight": "556g"
      }
    ],
    "weight": null,
    "certification": null,
    "origin": null
  },
  {
    "id": "35722",
    "code": "35722",
    "name": "Fusion II",
    "title": "Fusion II",
    "category": "Climbing Shoes — Performance",
    "articleNo": "35722",
    "type": "PA",
    "image": "/images/products/35722.webp",
    "status": "PERFORMANCE",
    "rating": "—",
    "available": true,
    "description": "The new FUSION has been completely overhauled. The rand has more downturn and a slightly wider forefoot. A further new feature is the innovative fastening system, which combines the benefits of VCR and laces to enable rapid and customized adjustment to the feet. The laces are made of extremely strong and abrasion-resistant Technora aramid fibers left over in our production department and normally used for paragliders. The tongue made of 3 mm thick neoprene improves the comfort and distributes the closure forces more evenly. Thanks to these features, the FUSION offers enhanced performance and a more individual fit while still remaining a versatile all-rounder. This is further highlighted by the full-surface RX-1 ALLROUND sole, which impresses with particularly well-balanced properties with regard to friction, sensitivity, durability, and edge stability. The fit of the FUSION corresponds to your street shoe size. Performance-oriented climbers can also choose the FUSION max. half a size smaller. For an optimal fit, we recommend measuring your feet with the help of our sizing chart.",
    "features": [
      "UK sizes 3 – 12",
      "Low volume — especially shaped for slimmer feet",
      "A sporty all-rounder for long sessions in the climbing gym, multi-pitch routes and alpine tours",
      "Toe box made of microfiber material minimizes the fabric stretch and ensures high dimensional stability",
      "Innovative, combined VCR and lace closure enables a rapid and customized fit"
    ],
    "specs": [
      {
        "label": "Downturn",
        "value": "ambitious"
      },
      {
        "label": "Shoe shape",
        "value": "slightly asymmetric"
      },
      {
        "label": "Upper",
        "value": "Forefoot: Microfiber 2,0mm | Hindfoot: Suede leather 2,0mm"
      },
      {
        "label": "Midsole",
        "value": "RC-SUPPORT"
      },
      {
        "label": "Lining",
        "value": "Microfiber 0,5mm / 0,8mm"
      },
      {
        "label": "Last shape",
        "value": "slightly asymmetric"
      },
      {
        "label": "Closing System",
        "value": "Speed lace"
      },
      {
        "label": "Midsole Material",
        "value": "RC-SUPPORT"
      },
      {
        "label": "Rubber rand",
        "value": "RX-1 ALLROUND 2,0mm"
      },
      {
        "label": "Weight (Size UK 7,5)",
        "value": "269g"
      },
      {
        "label": "Footbed",
        "value": "Microfiber 2,0mm / Suede leather (Toe Box)"
      },
      {
        "label": "Tongue",
        "value": "Neoprene 3,0mm"
      },
      {
        "label": "Rubber",
        "value": "RX-1 ALLROUND"
      }
    ],
    "attributes": [
      "Fair Wear"
    ],
    "colors": [
      "oasis 138"
    ],
    "weights": [
      {
        "length": "3",
        "weight": "410g"
      },
      {
        "length": "3,5",
        "weight": "420g"
      },
      {
        "length": "4",
        "weight": "430g"
      },
      {
        "length": "4,5",
        "weight": "440g"
      },
      {
        "length": "5",
        "weight": "450g"
      },
      {
        "length": "5,5",
        "weight": "460g"
      },
      {
        "length": "6",
        "weight": "470g"
      },
      {
        "length": "6,5",
        "weight": "480g"
      },
      {
        "length": "7",
        "weight": "490g"
      },
      {
        "length": "7,5",
        "weight": "500g"
      },
      {
        "length": "8",
        "weight": "524g"
      },
      {
        "length": "8,5",
        "weight": "540g"
      },
      {
        "length": "9",
        "weight": "563g"
      },
      {
        "length": "9,5",
        "weight": "580g"
      },
      {
        "length": "10",
        "weight": "600g"
      },
      {
        "length": "10,5",
        "weight": "620g"
      },
      {
        "length": "11",
        "weight": "640g"
      },
      {
        "length": "11,5",
        "weight": "660g"
      },
      {
        "length": "12",
        "weight": "680g"
      }
    ],
    "weight": null,
    "certification": null,
    "origin": null
  },
  {
    "id": "35723",
    "code": "35723",
    "name": "Fusion LV II",
    "title": "Fusion LV II",
    "category": "Climbing Shoes — Performance",
    "articleNo": "35723",
    "type": "PA",
    "image": "/images/products/35723.webp",
    "status": "PERFORMANCE",
    "rating": "—",
    "available": true,
    "description": "The FUSION LV has been completely overhauled. The low volume version of the FUSION has a slimmer overall cut, making it particularly ideal for a more feminine foot or narrower fit. The rand has more downturn and a slightly wider forefoot. A further new feature is the innovative fastening system, which combines the benefits of VCR and laces to enable rapid and customized adjustment to the feet. The laces are made of extremely strong and abrasion-resistant Technora aramid fibers left over in our production department and normally used for paragliders. The tongue made of 3 mm thick neoprene improves the comfort and distributes the closure forces more evenly. Thanks to these features, the FUSION LV offers enhanced performance and a more individual fit while still remaining a versatile all-rounder. This is further highlighted by the full-surface RX-1 ALLROUND sole, which impresses with particularly well-balanced properties with regard to friction, sensitivity, durability, and edge stability. The fit of the FUSION LV corresponds to your street shoe size. Performance-oriented climbers can also choose the FUSION LV max. half a size smaller. For an optimal fit, we recommend measuring your feet with the help of our sizing chart.",
    "features": [
      "Low volume — especially shaped for slimmer feet",
      "UK sizes 3 - 8",
      "A sporty all-rounder for long sessions in the climbing gym, multi-pitch routes and alpine tours",
      "Toe box made of microfiber material minimizes the fabric stretch and ensures high dimensional stability",
      "Innovative, combined VCR and lace closure enables a rapid and customized fit"
    ],
    "specs": [
      {
        "label": "Downturn",
        "value": "ambitious"
      },
      {
        "label": "Shoe shape",
        "value": "slightly asymmetric"
      },
      {
        "label": "Upper",
        "value": "Forefoot: Microfiber 2,0mm | Hindfoot: Suede leather 2,0mm"
      },
      {
        "label": "Midsole",
        "value": "RC-SUPPORT"
      },
      {
        "label": "Lining",
        "value": "Microfiber 0,5mm / 0,8mm"
      },
      {
        "label": "Last shape",
        "value": "slightly asymmetric"
      },
      {
        "label": "Closing System",
        "value": "Speed lace"
      },
      {
        "label": "Midsole Material",
        "value": "RC-SUPPORT"
      },
      {
        "label": "Rubber rand",
        "value": "RX-1 ALLROUND 2,0mm"
      },
      {
        "label": "Weight (Size UK 7,5)",
        "value": "233g"
      },
      {
        "label": "Footbed",
        "value": "Microfiber 2,0mm / Suede leather (Toe Box)"
      },
      {
        "label": "Tongue",
        "value": "Neoprene 3,0mm"
      },
      {
        "label": "Rubber",
        "value": "RX-1 ALLROUND 4,5mm"
      }
    ],
    "attributes": [
      "Fair Wear",
      "Low Volume"
    ],
    "colors": [
      "raspberry 222"
    ],
    "weights": [
      {
        "length": "3",
        "weight": "422g"
      },
      {
        "length": "3,5",
        "weight": "436g"
      },
      {
        "length": "4",
        "weight": "450g"
      },
      {
        "length": "4,5",
        "weight": "464g"
      },
      {
        "length": "5",
        "weight": "478g"
      },
      {
        "length": "5,5",
        "weight": "492g"
      },
      {
        "length": "6",
        "weight": "506g"
      },
      {
        "length": "6,5",
        "weight": "520g"
      },
      {
        "length": "7",
        "weight": "534g"
      },
      {
        "length": "7,5",
        "weight": "548g"
      },
      {
        "length": "8",
        "weight": "562g"
      }
    ],
    "weight": null,
    "certification": null,
    "origin": null
  },
  {
    "id": "35728",
    "code": "35728",
    "name": "Magnet II",
    "title": "Magnet II",
    "category": "Climbing Shoes — Performance",
    "articleNo": "35728",
    "type": "PA",
    "image": "/images/products/35728.webp",
    "status": "PERFORMANCE",
    "rating": "—",
    "available": true,
    "description": "The MAGNET is THE specialist for small slats and increases your attractive force when sport climbing or on multi-pitch routes. It is a performance-oriented climbing shoe that also offers outstanding comfort. The RC-TENSION midsole offers stability across the entire shoe. Once again, we specifically adapted the midsole design to the MAGNET to create the perfect balance of sensitivity and support when standing on small footholds. The last with moderate pre-tensioning combined with the sock-like upper design ensures that the MAGNET still remains comfortable even when worn for longer periods. The tongue is made from breathable knitted fabric comprising recycled yarn. The fit of the MAGNET corresponds to your street shoe size. Performance-oriented climbers can also choose the MAGNET max. half a size smaller. For an optimal fit, we recommend measuring your feet with the help of our sizing chart.",
    "features": [],
    "specs": [
      {
        "label": "Sole",
        "value": "Vibram XS Grip"
      },
      {
        "label": "Downturn",
        "value": "ambitious"
      },
      {
        "label": "Shoe shape",
        "value": "slightly asymmetric"
      },
      {
        "label": "Upper",
        "value": "Microfiber 2,0mm"
      },
      {
        "label": "Midsole",
        "value": "RC-TENSION"
      },
      {
        "label": "Last shape",
        "value": "slightly asymmetric"
      },
      {
        "label": "Closing System",
        "value": "Double VCR"
      },
      {
        "label": "Midsole Material",
        "value": "RC-SUPPORT"
      },
      {
        "label": "Rubber front",
        "value": "Vibram XS Grip 4,0mm"
      },
      {
        "label": "Rubber back/heel",
        "value": "RX-2 TECHGRIP 4,0mm"
      },
      {
        "label": "Rubber rand",
        "value": "RX-2 TECHGRIP 2,0mm"
      },
      {
        "label": "Weight (Size UK 7,5)",
        "value": "269g"
      },
      {
        "label": "Footbed",
        "value": "Microfiber 2,0mm | Suede leather (Toe Box)"
      },
      {
        "label": "Tongue",
        "value": "Recycled Polyester Knit"
      },
      {
        "label": "Rubber",
        "value": "Vibram XS Grip"
      }
    ],
    "attributes": [
      "Fair Wear"
    ],
    "colors": [
      "dark blue 054"
    ],
    "weights": [
      {
        "length": "3",
        "weight": "410g"
      },
      {
        "length": "3,5",
        "weight": "420g"
      },
      {
        "length": "4",
        "weight": "433g"
      },
      {
        "length": "4,5",
        "weight": "445g"
      },
      {
        "length": "5",
        "weight": "456g"
      },
      {
        "length": "5,5",
        "weight": "468g"
      },
      {
        "length": "6",
        "weight": "479g"
      },
      {
        "length": "6,5",
        "weight": "490g"
      },
      {
        "length": "7",
        "weight": "500g"
      },
      {
        "length": "7,5",
        "weight": "510g"
      },
      {
        "length": "8",
        "weight": "526g"
      },
      {
        "length": "8,5",
        "weight": "537g"
      },
      {
        "length": "9",
        "weight": "537g"
      },
      {
        "length": "9,5",
        "weight": "548g"
      },
      {
        "length": "10",
        "weight": "549g"
      },
      {
        "length": "10,5",
        "weight": "560g"
      },
      {
        "length": "11",
        "weight": "610g"
      },
      {
        "length": "11,5",
        "weight": "626g"
      },
      {
        "length": "12",
        "weight": "637g"
      }
    ],
    "weight": null,
    "certification": null,
    "origin": null
  },
  {
    "id": "35738",
    "code": "35738",
    "name": "Magnet Lace",
    "title": "Magnet Lace",
    "category": "Climbing Shoes — Performance",
    "articleNo": "35738",
    "type": "PA",
    "image": "/images/products/35738.webp",
    "status": "PERFORMANCE",
    "rating": "—",
    "available": true,
    "description": "The MAGNET LACE is a performance-oriented yet outstandingly comfortable climbing shoe. Like the MAGNET, the MAGNET LACE is a specialist for small ledges. The lace system enables a particularly good fit while midsole design offers the perfect balance between sensitivity and support to provide the necessary pressure on small footholds and enable precise footwork. The special last shape with moderate pre-tensioning ensures that the MAGNET LACE still remains comfortable even when worn for extended periods. The breathable microfiber upper and lined knitted tongue further enhance the comfortable feel while the tried-and-tested Vibram XS Grip sole provides plenty of friction for all areas of use. The MAGNET LACE is a versatile climbing shoe for ambitious and performance-oriented climbers who undertake a range of disciplines such as sport, multi-pitch, and trad climbing, and want a mixture of precision, edge stability, and comfort.",
    "features": [],
    "specs": [
      {
        "label": "Sole",
        "value": "Vibram XS Grip"
      },
      {
        "label": "Downturn",
        "value": "ambitious"
      },
      {
        "label": "Shoe shape",
        "value": "slightly asymmetric"
      },
      {
        "label": "Upper",
        "value": "Microfiber 2,0mm"
      },
      {
        "label": "Midsole",
        "value": "RC-SUPPORT"
      },
      {
        "label": "Last shape",
        "value": "slightly asymmetric"
      },
      {
        "label": "Closing System",
        "value": "Lace"
      },
      {
        "label": "Midsole Material",
        "value": "RC-SUPPORT"
      },
      {
        "label": "Rubber front",
        "value": "Vibram XS Grip 4,0mm"
      },
      {
        "label": "Rubber back/heel",
        "value": "RX-2 TECHGRIP 4,0mm"
      },
      {
        "label": "Rubber rand",
        "value": "RX-2 TECHGRIP 2,0mm"
      },
      {
        "label": "Footbed",
        "value": "Microfiber / Suede leather (Toe Box / Heel)"
      },
      {
        "label": "Rubber",
        "value": "Vibram XS Grip"
      }
    ],
    "attributes": [
      "Fair Wear"
    ],
    "colors": [
      "stoneblue-grass 307"
    ],
    "weights": [
      {
        "length": "3",
        "weight": "445g"
      },
      {
        "length": "3,5",
        "weight": "452g"
      },
      {
        "length": "4",
        "weight": "459g"
      },
      {
        "length": "4,5",
        "weight": "466g"
      },
      {
        "length": "5",
        "weight": "473g"
      },
      {
        "length": "5,5",
        "weight": "480g"
      },
      {
        "length": "6",
        "weight": "487g"
      },
      {
        "length": "6,5",
        "weight": "494g"
      },
      {
        "length": "7",
        "weight": "501g"
      },
      {
        "length": "7,5",
        "weight": "508g"
      },
      {
        "length": "8",
        "weight": "515g"
      },
      {
        "length": "8,5",
        "weight": "522g"
      },
      {
        "length": "9",
        "weight": "529g"
      },
      {
        "length": "9,5",
        "weight": "536g"
      },
      {
        "length": "10",
        "weight": "543g"
      },
      {
        "length": "10,5",
        "weight": "550g"
      },
      {
        "length": "11",
        "weight": "557g"
      },
      {
        "length": "11,5",
        "weight": "564g"
      },
      {
        "length": "12",
        "weight": "571g"
      }
    ],
    "weight": null,
    "certification": null,
    "origin": null
  },
  {
    "id": "72177",
    "code": "72177",
    "name": "Boulder Bag Herkules",
    "title": "Boulder Bag Herkules",
    "category": "Chalk Bags",
    "articleNo": "72177",
    "type": "ST",
    "image": "/images/products/72177.webp",
    "status": "CHALK",
    "rating": "—",
    "available": true,
    "description": "Large, spacious chalk bag for high demands in bouldering. Thanks to its large contact surface, it stands on its own.",
    "features": [
      "Various brush holders",
      "Made of bluesign®-certified materials",
      "100% dustproof roll closure",
      "Zipped pocket with key clip for a cell phone and accessories",
      "Large mesh bag",
      "Carrying handle"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Polyester"
      },
      {
        "label": "Diameter",
        "value": "190 mm"
      },
      {
        "label": "Depth",
        "value": "21 cm"
      },
      {
        "label": "Weight",
        "value": "166 g"
      }
    ],
    "attributes": [
      "bluesign®",
      "Climb Green",
      "Fair Wear"
    ],
    "colors": [
      "dolphin 038",
      "flame 024"
    ],
    "weights": [],
    "weight": "166 g",
    "certification": null,
    "origin": null
  },
  {
    "id": "71762",
    "code": "71762",
    "name": "Bud",
    "title": "Bud",
    "category": "Chalk Bags",
    "articleNo": "71762",
    "type": "ST",
    "image": "/images/products/71762.webp",
    "status": "CHALK",
    "rating": "EN 15151-2",
    "available": true,
    "description": "The EDELRID classic in a new design. No further explanation required. For universal usage such as abseiling and belaying.",
    "features": [
      "Suitable for single ropes from 7.8–12.0 mm"
    ],
    "specs": [
      {
        "label": "Certification",
        "value": "EN 15151-2"
      },
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Width",
        "value": "76 mm"
      },
      {
        "label": "Length",
        "value": "130 mm"
      },
      {
        "label": "Approved rope diameter",
        "value": "7.8–12 mm"
      },
      {
        "label": "Weight",
        "value": "110 g"
      }
    ],
    "attributes": [
      "Manual"
    ],
    "colors": [
      "royal 360",
      "slate 663"
    ],
    "weights": [],
    "weight": "110 g",
    "certification": "EN 15151-2",
    "origin": null
  },
  {
    "id": "72198",
    "code": "72198",
    "name": "Chalk Bag Ambassador II",
    "title": "Chalk Bag Ambassador II",
    "category": "Chalk Bags",
    "articleNo": "72198",
    "type": "ST",
    "image": "/images/products/72198.webp",
    "status": "CHALK",
    "rating": "—",
    "available": true,
    "description": "A particularly light chalk bag with a sporty design that not only reflects our high-end ACE harness from a visual perspective—including the brush holders—but is also made from the same material. The AMBASSADOR has a particularly small pack size and can be quickly and securely sealed with a single movement using the drawcord.",
    "features": [
      "Drawcord closure for easy tightening",
      "Two brush holders",
      "Light chalk bag with a small pack size",
      "Sporty ACE design"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Polyamide, Polyester"
      },
      {
        "label": "Weight",
        "value": "71 g"
      }
    ],
    "attributes": [
      "Fair Wear"
    ],
    "colors": [
      "neon green 499",
      "night 017"
    ],
    "weights": [],
    "weight": "71 g",
    "certification": null,
    "origin": null
  },
  {
    "id": "72179",
    "code": "72179",
    "name": "Chalk Bag Monoblock",
    "title": "Chalk Bag Monoblock",
    "category": "Chalk Bags",
    "articleNo": "72179",
    "type": "ST",
    "image": "/images/products/72179.webp",
    "status": "CHALK",
    "rating": "—",
    "available": true,
    "description": "Casual chalk bag that offers plenty of space for not just chalk but also three brushes and your keys. The drawcord enables it to be quickly and securely sealed in a single movement.",
    "features": [
      "Made of bluesign®-certified materials",
      "3 brush holders",
      "Drawcord closure for easy tightening",
      "VCR key pocket"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Polyester"
      },
      {
        "label": "Diameter",
        "value": "14 mm"
      },
      {
        "label": "Depth",
        "value": "16 cm"
      },
      {
        "label": "Weight",
        "value": "93 g"
      }
    ],
    "attributes": [
      "bluesign®",
      "Climb Green",
      "Fair Wear"
    ],
    "colors": [
      "red-stone 943",
      "royal-pebbles 052",
      "stoneblue-grass 307",
      "vinered-amber 873"
    ],
    "weights": [],
    "weight": "93 g",
    "certification": null,
    "origin": null
  },
  {
    "id": "72182",
    "code": "72182",
    "name": "Chalk Bag Muffin",
    "title": "Chalk Bag Muffin",
    "category": "Chalk Bags",
    "articleNo": "72182",
    "type": "ST",
    "image": "/images/products/72182.webp",
    "status": "CHALK",
    "rating": "—",
    "available": true,
    "description": "Little chalk bag with a cool image. Optimized for children's hands.",
    "features": [
      "Made of bluesign®-certified materials",
      "Drawcord closure for easy tightening",
      "Two brush holders"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Polyester"
      },
      {
        "label": "Diameter",
        "value": "10 mm"
      },
      {
        "label": "Depth",
        "value": "12 cm"
      },
      {
        "label": "Weight",
        "value": "63 g"
      }
    ],
    "attributes": [
      "bluesign®",
      "Kids",
      "Climb Green",
      "Fair Wear"
    ],
    "colors": [
      "chute green 459",
      "polar 065"
    ],
    "weights": [],
    "weight": "63 g",
    "certification": null,
    "origin": null
  },
  {
    "id": "72185",
    "code": "72185",
    "name": "Chalk Bag Rodeo TC",
    "title": "Chalk Bag Rodeo TC",
    "category": "Chalk Bags",
    "articleNo": "72185",
    "type": "ST",
    "image": "/images/products/72185.webp",
    "status": "CHALK",
    "rating": "—",
    "available": true,
    "description": "Stylish, fleece-lined chalk bag with a drawcord. The namesake Tommy Caldwell (TC) is not only a professional climber but also a passionate environmentalist. Together, we are supporting the organization POW (Protect Our Winters) by donating 1% of the worldwide revenue from the sale of this chalk bag.",
    "features": [
      "Made of bluesign®-certified materials",
      "Drawcord closure for easy tightening",
      "Two brush holders"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Polyester"
      },
      {
        "label": "Diameter",
        "value": "13.5 mm"
      },
      {
        "label": "Depth",
        "value": "17 cm"
      },
      {
        "label": "Weight",
        "value": "84 g"
      }
    ],
    "attributes": [
      "bluesign®",
      "Climb Green",
      "Fair Wear"
    ],
    "colors": [
      "beetroot 158",
      "black 010"
    ],
    "weights": [],
    "weight": "84 g",
    "certification": null,
    "origin": null
  },
  {
    "id": "72181",
    "code": "72181",
    "name": "Chalk Bag Rodeo large",
    "title": "Chalk Bag Rodeo large",
    "category": "Chalk Bags",
    "articleNo": "72181",
    "type": "ST",
    "image": "/images/products/72181.webp",
    "status": "CHALK",
    "rating": "—",
    "available": true,
    "description": "Stylish, fleece-lined chalk bag with a drawcord and two brush holders.",
    "features": [
      "Made of bluesign®-certified materials",
      "Drawcord closure for easy tightening",
      "Two brush holders"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Polyester"
      },
      {
        "label": "Diameter",
        "value": "13.5 mm"
      },
      {
        "label": "Depth",
        "value": "17 cm"
      },
      {
        "label": "Weight",
        "value": "85 g"
      }
    ],
    "attributes": [
      "bluesign®",
      "Climb Green",
      "Fair Wear"
    ],
    "colors": [
      "light pacific 304",
      "navy 331",
      "stone blue 043",
      "vinered 207"
    ],
    "weights": [],
    "weight": "85 g",
    "certification": null,
    "origin": null
  },
  {
    "id": "72180",
    "code": "72180",
    "name": "Chalk Bag Rodeo small",
    "title": "Chalk Bag Rodeo small",
    "category": "Chalk Bags",
    "articleNo": "72180",
    "type": "ST",
    "image": "/images/products/72180.webp",
    "status": "CHALK",
    "rating": "—",
    "available": true,
    "description": "Stylish fleece-lined chalk bag with a drawcord and two brush holders in a smaller version for slimmer hands.",
    "features": [
      "Made of bluesign®-certified materials",
      "Drawcord closure for easy tightening",
      "Two brush holders"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Polyester"
      },
      {
        "label": "Diameter",
        "value": "11 mm"
      },
      {
        "label": "Depth",
        "value": "15 cm"
      },
      {
        "label": "Weight",
        "value": "63 g"
      }
    ],
    "attributes": [
      "bluesign®",
      "Climb Green",
      "Fair Wear"
    ],
    "colors": [
      "pine green 045",
      "rose 003",
      "stone blue 043"
    ],
    "weights": [],
    "weight": "63 g",
    "certification": null,
    "origin": null
  },
  {
    "id": "72178",
    "code": "72178",
    "name": "Chalk Bag Splitter Twist",
    "title": "Chalk Bag Splitter Twist",
    "category": "Chalk Bags",
    "articleNo": "72178",
    "type": "ST",
    "image": "/images/products/72178.webp",
    "status": "CHALK",
    "rating": "—",
    "available": true,
    "description": "Extravagant, spacious chalk bag with a dustproof twist closure. Small items can be stowed in the zippered outer pocket with a key clip, while the brush holders make brushes quickly accessible. Comes in a cool color-block design.",
    "features": [
      "Made of bluesign®-certified materials",
      "Zipped pocket with key clip for a cell phone and accessories",
      "100% dustproof twist closure",
      "3 brush holders"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Polyester"
      },
      {
        "label": "Diameter",
        "value": "13.5 mm"
      },
      {
        "label": "Depth",
        "value": "19 cm"
      },
      {
        "label": "Weight",
        "value": "110 g"
      }
    ],
    "attributes": [
      "bluesign®",
      "Climb Green",
      "Fair Wear"
    ],
    "colors": [
      "hokkaido 625",
      "ocean grey 115",
      "rhubarb red 125"
    ],
    "weights": [],
    "weight": "110 g",
    "certification": null,
    "origin": null
  },
  {
    "id": "72207",
    "code": "72207",
    "name": "Sit Start III",
    "title": "Sit Start III",
    "category": "Chalk Bags",
    "articleNo": "72207",
    "type": "ST",
    "image": "/images/products/72207.webp",
    "status": "CHALK",
    "rating": "—",
    "available": true,
    "description": "The EDELRID start pad with integrated foot mat for tricky sit starts or supplementing larger pads.",
    "features": [
      "High-quality PE foam for excellent cushioning properties",
      "Integrated foot mat",
      "Robust cover made from 600D polyester"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "100% Polyester"
      },
      {
        "label": "Width",
        "value": "550 mm"
      },
      {
        "label": "Height",
        "value": "50 mm"
      },
      {
        "label": "Length",
        "value": "900 mm"
      },
      {
        "label": "Bulky Good",
        "value": "1"
      },
      {
        "label": "Weight",
        "value": "720 g"
      }
    ],
    "attributes": [
      "Fair Wear"
    ],
    "colors": [
      "night-oasis 219"
    ],
    "weights": [],
    "weight": "720 g",
    "certification": null,
    "origin": null
  },
  {
    "id": "73731",
    "code": "73731",
    "name": "Antitwist",
    "title": "Antitwist",
    "category": "Chalk & Accessories",
    "articleNo": "73731",
    "type": "V10",
    "image": "/images/products/73731.webp",
    "status": "ACCESSORY",
    "rating": "—",
    "available": true,
    "description": "The ANTITWIST fixes the lower carabiner and sling preventing unwanted rotation of the biner during use. Available for webbing with a width of 11 and 16 mm. Package contents: 10 pcs.",
    "features": [],
    "specs": [
      {
        "label": "Material",
        "value": "TPU"
      }
    ],
    "attributes": [],
    "colors": [
      "night 017",
      "oasis 138"
    ],
    "weights": [
      {
        "length": "11 MM",
        "weight": "30g"
      },
      {
        "length": "16 MM",
        "weight": "30g"
      }
    ],
    "weight": null,
    "certification": null,
    "origin": null
  },
  {
    "id": "74341",
    "code": "74341",
    "name": "Cable Kit VI",
    "title": "Cable Kit VI",
    "category": "Chalk & Accessories",
    "articleNo": "74341",
    "type": "ST",
    "image": "/images/products/74341.webp",
    "status": "ACCESSORY",
    "rating": "EN 958, EN 12275",
    "available": true,
    "description": "This EDELRID classic has a very compact design and wear-resistant, elasticated webbing arms. It conforms to the new European safety standard for via ferrata sets. The new, far more compact shock absorber enables pleasant handling.",
    "features": [
      "Rest loop situated directly at shock absorber",
      "Elasticated webbing keeps carabiners close to hand",
      "Optimized OneTouch II carabiners prevent fingers getting pinched between the carabiner gate and steel cable",
      "Energy absorber conforms to EN 958: 2017: low impact force for all weight classes",
      "Complies with EN standard 958: 2017, even in the event of 180° incorrect use",
      "Includes practical packing bag for storage and stowing in the backpack"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Aluminium, Steel, HMPE, Polyamide"
      },
      {
        "label": "Carabiner type",
        "value": "OneTouch II"
      },
      {
        "label": "Weight Category",
        "value": "40 - 120 kg"
      },
      {
        "label": "Weight",
        "value": "514g"
      }
    ],
    "attributes": [
      "Bypass-save",
      "Made in Germany",
      "Fair Wear",
      "Technologies"
    ],
    "colors": [
      "oasis 138"
    ],
    "weights": [],
    "weight": "514g",
    "certification": "EN 958, EN 12275",
    "origin": "Made in Germany"
  },
  {
    "id": "72703",
    "code": "72703",
    "name": "Chalk Block II",
    "title": "Chalk Block II",
    "category": "Chalk & Accessories",
    "articleNo": "72703",
    "type": "V8",
    "image": "/images/products/72703.webp",
    "status": "ACCESSORY",
    "rating": "—",
    "available": true,
    "description": "High-quality magnesium carbonate block for top performance at the crag or in the gym. The chalk blocks are delivered in a box, which can be used as a counter display. Package contents: 8 pcs.",
    "features": [],
    "specs": [
      {
        "label": "Material",
        "value": "Magnesium Carbonate"
      },
      {
        "label": "Weight",
        "value": "448g"
      }
    ],
    "attributes": [],
    "colors": [
      "snow 047"
    ],
    "weights": [],
    "weight": "448g",
    "certification": null,
    "origin": null
  },
  {
    "id": "73826",
    "code": "73826",
    "name": "Jim Steel Set II",
    "title": "Jim Steel Set II",
    "category": "Chalk & Accessories",
    "articleNo": "73826",
    "type": "V5",
    "image": "/images/products/73826.webp",
    "status": "ACCESSORY",
    "rating": "EN 566, EN 12275",
    "available": true,
    "description": "Extremely robust climbing gym quickdraw set with steel carabiner. Package contents: 5 pcs.",
    "features": [
      "Flat webbing of robust and durable polyester",
      "Internal wear indicator made of red polyester",
      "Rubber abrasion protector minimizes noise",
      "Abrasion protector acts as a spacer and minimizes sling wear",
      "Jim Steel Set with innovative hanger plate: minimizes wall wear, prevents trapped fingers, and reduces noise"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Steel"
      },
      {
        "label": "Closure",
        "value": "Bent"
      },
      {
        "label": "Fmax. major axis",
        "value": "30 kN"
      },
      {
        "label": "Fmax. open",
        "value": "3 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "10 kN"
      },
      {
        "label": "Gate opening",
        "value": "27 mm"
      },
      {
        "label": "Weight",
        "value": "1750g"
      }
    ],
    "attributes": [
      "Made in Germany",
      "Technologies"
    ],
    "colors": [
      "night 017"
    ],
    "weights": [],
    "weight": "1750g",
    "certification": "EN 566, EN 12275",
    "origin": "Made in Germany"
  },
  {
    "id": "73827",
    "code": "73827",
    "name": "Jim Steel Wire Set II",
    "title": "Jim Steel Wire Set II",
    "category": "Chalk & Accessories",
    "articleNo": "73827",
    "type": "V5",
    "image": "/images/products/73827.webp",
    "status": "ACCESSORY",
    "rating": "EN 566, EN 12275",
    "available": true,
    "description": "Extremely robust climbing gym quickdraw set with steel carabiner. Available with either a full gate or wire gate carabiner. Package contents: 5 pcs.",
    "features": [
      "Flat webbing of robust and durable polyester",
      "Internal wear indicator made of red polyester",
      "Rubber abrasion protector minimizes noise",
      "Abrasion protector acts as a spacer and minimizes sling wear",
      "Jim Steel Wire Set with 8 mm screw link"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Steel"
      },
      {
        "label": "Closure",
        "value": "Wire"
      },
      {
        "label": "Fmax. major axis",
        "value": "30 kN"
      },
      {
        "label": "Fmax. open",
        "value": "10 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "10 kN"
      },
      {
        "label": "Gate opening",
        "value": "27 mm"
      }
    ],
    "attributes": [
      "Made in Germany",
      "Technologies"
    ],
    "colors": [
      "night 017"
    ],
    "weights": [
      {
        "length": "10 CM",
        "weight": "1150g"
      },
      {
        "length": "18 CM",
        "weight": "1210g"
      }
    ],
    "weight": null,
    "certification": "EN 566, EN 12275",
    "origin": "Made in Germany"
  },
  {
    "id": "74942",
    "code": "74942",
    "name": "Joker III",
    "title": "Joker III",
    "category": "Chalk & Accessories",
    "articleNo": "74942",
    "type": "ST",
    "image": "/images/products/74942.webp",
    "status": "ACCESSORY",
    "rating": "EN 12277 Typ C, UIAA 105",
    "available": true,
    "description": "The JOKER is a highly adjustable sit harness with a polyamide central ring that is ideal for courses and rental usage. The harness is primarily made from polyester, which makes it particularly robust and durable. For enhanced safety during rental usage, the gear loop is made from load-bearing material.",
    "features": [
      "Stitched webbing terminations designed so that straps cannot be completely unthreaded",
      "Integrated RFID-Chip",
      "Classic design made from 45 mm polyester webbing",
      "Central ring made from polyamide",
      "Slide Block buckles on the waist belt and leg loops offer infinite adjustability and make the harness easy to put on and take off",
      "Right/left leg loop markings and replaceable, elasticated bum straps make it easier to put on the harness correctly",
      "Red wear indicator in all load-bearing straps on the waist belt and leg loops",
      "High-strength gear loop for additional safety in the rental sector"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Polyester"
      },
      {
        "label": "Weight",
        "value": "485g"
      }
    ],
    "attributes": [
      "UIAA",
      "Indicator",
      "Adjustable leg loops",
      "Fair Wear",
      "Technologies"
    ],
    "colors": [
      "night-oasis 219"
    ],
    "weights": [],
    "weight": "485g",
    "certification": "EN 12277 Typ C, UIAA 105",
    "origin": null
  },
  {
    "id": "74943",
    "code": "74943",
    "name": "Joker Junior III",
    "title": "Joker Junior III",
    "category": "Chalk & Accessories",
    "articleNo": "74943",
    "type": "ST",
    "image": "/images/products/74943.webp",
    "status": "ACCESSORY",
    "rating": "EN 12277 Typ C, UIAA 105",
    "available": true,
    "description": "The JOKER JUNIOR is a highly adjustable sit harness with a polyamide central ring that is ideal for courses and rental usage. The harness is primarily made from polyester, which makes it particularly robust and durable. For enhanced safety during rental usage, the gear loop is made from load-bearing material.",
    "features": [
      "Stitched webbing terminations designed so that straps cannot be completely unthreaded",
      "Integrated RFID-Chip",
      "Classic design made from 45 mm polyester webbing",
      "Central ring made from polyamide",
      "Slide Block buckles on the waist belt and leg loops offer infinite adjustability and make the harness easy to put on and take off",
      "Right/left leg loop markings and replaceable, elasticated bum straps make it easier to put on the harness correctly",
      "Red wear indicator in all load-bearing straps on the waist belt and leg loops",
      "High-strength gear loop for additional safety in the rental sector"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "100% Polyester"
      },
      {
        "label": "Weight",
        "value": "410g"
      }
    ],
    "attributes": [
      "UIAA",
      "Indicator",
      "Kids",
      "Adjustable leg loops",
      "Fair Wear",
      "Technologies"
    ],
    "colors": [
      "night-icemint 749"
    ],
    "weights": [],
    "weight": "410g",
    "certification": "EN 12277 Typ C, UIAA 105",
    "origin": null
  },
  {
    "id": "72190",
    "code": "72190",
    "name": "Liquid Chalk II",
    "title": "Liquid Chalk II",
    "category": "Chalk & Accessories",
    "articleNo": "72190",
    "type": "ST",
    "image": "/images/products/72190.webp",
    "status": "ACCESSORY",
    "rating": "—",
    "available": true,
    "description": "Liquid chalk for heroics at the crag or in the gym.",
    "features": [
      "Safety notice: Product inflammable"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Isopropoanol, Magnesiumcarbonatehydroxide"
      },
      {
        "label": "Weight",
        "value": "100 g"
      }
    ],
    "attributes": [],
    "colors": [
      "snow 047"
    ],
    "weights": [],
    "weight": "100 g",
    "certification": null,
    "origin": null
  },
  {
    "id": "73791",
    "code": "73791",
    "name": "Pure Set Sixpack",
    "title": "Pure Set Sixpack",
    "category": "Chalk & Accessories",
    "articleNo": "73791",
    "type": "V6",
    "image": "/images/products/73791.webp",
    "status": "ACCESSORY",
    "rating": "EN 566, EN 12275",
    "available": true,
    "description": "The robust PURE SET in a sixpack.",
    "features": [
      "Two robust PURE carabiners with Keylock closure system for optimal handling when clipping and unclipping",
      "16 mm polyester sling with ANTITWIST fixing on lower carabiner"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Aluminium, Polyamide, TPR"
      },
      {
        "label": "Closure",
        "value": "Straight/Bent"
      },
      {
        "label": "Carabiner shape",
        "value": "Offset D"
      },
      {
        "label": "Fmax. major axis",
        "value": "23 kN"
      },
      {
        "label": "Fmax. open",
        "value": "8 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "8 kN"
      },
      {
        "label": "Width",
        "value": "60 mm"
      },
      {
        "label": "Length",
        "value": "97 mm"
      },
      {
        "label": "Gate opening",
        "value": "20 mm"
      },
      {
        "label": "Weight",
        "value": "630g"
      }
    ],
    "attributes": [],
    "colors": [
      "slate-oasis 627"
    ],
    "weights": [],
    "weight": "630g",
    "certification": "EN 566, EN 12275",
    "origin": null
  },
  {
    "id": "73793",
    "code": "73793",
    "name": "Pure Wire Set Sixpack",
    "title": "Pure Wire Set Sixpack",
    "category": "Chalk & Accessories",
    "articleNo": "73793",
    "type": "V6",
    "image": "/images/products/73793.webp",
    "status": "ACCESSORY",
    "rating": "EN 566, EN 12275",
    "available": true,
    "description": "The PURE WIRE SET in a sixpack.",
    "features": [
      "16 mm polyester sling with ANTITWIST fixing on lower carabiner",
      "Carabiners with wire gate to keep weight to a minimum"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Aluminium, Polyester"
      },
      {
        "label": "Closure",
        "value": "Straight/Wire"
      },
      {
        "label": "Carabiner shape",
        "value": "Offset D"
      },
      {
        "label": "Fmax. major axis",
        "value": "23 kN"
      },
      {
        "label": "Fmax. open",
        "value": "8 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "8 kN"
      },
      {
        "label": "Width",
        "value": "60 mm"
      },
      {
        "label": "Length",
        "value": "97 mm"
      },
      {
        "label": "Gate opening",
        "value": "24 mm"
      },
      {
        "label": "Weight",
        "value": "582g"
      }
    ],
    "attributes": [],
    "colors": [
      "slate-icemint 602"
    ],
    "weights": [],
    "weight": "582g",
    "certification": "EN 566, EN 12275",
    "origin": null
  },
  {
    "id": "72025",
    "code": "72025",
    "name": "Rescue Canyoning Knife",
    "title": "Rescue Canyoning Knife",
    "category": "Chalk & Accessories",
    "articleNo": "72025",
    "type": "ST",
    "image": "/images/products/72025.webp",
    "status": "ACCESSORY",
    "rating": "—",
    "available": true,
    "description": "Rescue and rope knife for cutting rope and webbing when using personal fall protection equipment.",
    "features": [
      "Ergonomically-shaped handle with finger hole for a secure grip when swinging",
      "High-quality stainless steel serrated blade",
      "Rounded point for additional safety",
      "Robust plastic holder for attachment to a canyoning harness",
      "With safety leash"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Stainless Steel, ABS, Nylon"
      },
      {
        "label": "Weight",
        "value": "110g"
      }
    ],
    "attributes": [],
    "colors": [
      "oasis 138"
    ],
    "weights": [],
    "weight": "110g",
    "certification": null,
    "origin": null
  },
  {
    "id": "73470",
    "code": "73470",
    "name": "Rope Tooth Einhandmesser",
    "title": "Rope Tooth Einhandmesser",
    "category": "Chalk & Accessories",
    "articleNo": "73470",
    "type": "ST",
    "image": "/images/products/73470.webp",
    "status": "ACCESSORY",
    "rating": "—",
    "available": true,
    "description": "High-quality stainless steel knife.",
    "features": [
      "Large swivel hole for attaching to a harness or backpack with a carabiner",
      "Sharp, locking blade (partly serrated)"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Stainless Steel, ABS"
      },
      {
        "label": "Weight",
        "value": "48g"
      }
    ],
    "attributes": [],
    "colors": [
      "night-oasis 219"
    ],
    "weights": [],
    "weight": "48g",
    "certification": null,
    "origin": null
  },
  {
    "id": "73798",
    "code": "73798",
    "name": "Screwlink 10mm",
    "title": "Screwlink 10mm",
    "category": "Chalk & Accessories",
    "articleNo": "73798",
    "type": "ST",
    "image": "/images/products/73798.webp",
    "status": "ACCESSORY",
    "rating": "EN 12275, EN 362",
    "available": true,
    "description": "Certified oval steel screw link.",
    "features": [],
    "specs": [
      {
        "label": "Material",
        "value": "Steel"
      },
      {
        "label": "Closure",
        "value": "Screw"
      },
      {
        "label": "Carabiner shape",
        "value": "Oval"
      },
      {
        "label": "Fmax. major axis",
        "value": "55 kN"
      },
      {
        "label": "Fmax. open",
        "value": "35 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "10 kN"
      },
      {
        "label": "Width",
        "value": "45 mm"
      },
      {
        "label": "Length",
        "value": "90 mm"
      },
      {
        "label": "Weight",
        "value": "137g"
      }
    ],
    "attributes": [],
    "colors": [
      "silver 006"
    ],
    "weights": [],
    "weight": "137g",
    "certification": "EN 12275, EN 362",
    "origin": null
  },
  {
    "id": "73806",
    "code": "73806",
    "name": "Screwlink 8mm II",
    "title": "Screwlink 8mm II",
    "category": "Chalk & Accessories",
    "articleNo": "73806",
    "type": "ST",
    "image": "/images/products/73806.webp",
    "status": "ACCESSORY",
    "rating": "EN 12275, EN 362",
    "available": true,
    "description": "Certified oval steel screw link.",
    "features": [],
    "specs": [
      {
        "label": "Material",
        "value": "Steel"
      },
      {
        "label": "Closure",
        "value": "Screw"
      },
      {
        "label": "Carabiner shape",
        "value": "Oval"
      },
      {
        "label": "Fmax. major axis",
        "value": "55 kN"
      },
      {
        "label": "Fmax. open",
        "value": "35 kN"
      },
      {
        "label": "Fmax. minor axis",
        "value": "10 kN"
      },
      {
        "label": "Width",
        "value": "36 mm"
      },
      {
        "label": "Length",
        "value": "73 mm"
      },
      {
        "label": "Weight",
        "value": "77g"
      }
    ],
    "attributes": [],
    "colors": [
      "silver 006"
    ],
    "weights": [],
    "weight": "77g",
    "certification": "EN 12275, EN 362",
    "origin": null
  },
  {
    "id": "84506",
    "code": "84506",
    "name": "X-Tube 25mm Loop NFC",
    "title": "X-Tube 25mm Loop NFC",
    "category": "Chalk & Accessories",
    "articleNo": "84506",
    "type": "ST",
    "image": "/images/products/84506.webp",
    "status": "ACCESSORY",
    "rating": "EN 354, EN 566, EN 795 Typ B",
    "available": true,
    "description": "25 mm wide, sewn webbing sling with a sensational 30 kN breaking strength, available in various lengths.",
    "features": [
      "NFC inside"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Polyamide"
      },
      {
        "label": "Width",
        "value": "25 mm"
      },
      {
        "label": "Minimum breaking strength",
        "value": "30 kN"
      }
    ],
    "attributes": [
      "Fair Wear",
      "Technologies"
    ],
    "colors": [
      "icemint 329",
      "night 017",
      "oasis 138",
      "red 200"
    ],
    "weights": [
      {
        "length": "60 CM",
        "weight": "57g"
      },
      {
        "length": "80 CM",
        "weight": "72g"
      },
      {
        "length": "120 CM",
        "weight": "108g"
      },
      {
        "length": "150 CM",
        "weight": "135g"
      },
      {
        "length": "200 CM",
        "weight": "180g"
      }
    ],
    "weight": null,
    "certification": "EN 354, EN 566, EN 795 Typ B",
    "origin": null
  }
];

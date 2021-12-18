// 3
type Shoe = {
  purpose: string;
};
class BalletFlat implements Shoe {
  purpose = "dancing";
}
class Boot implements Shoe {
  purpose = "woodcutting";
}
class Sneaker implements Shoe {
  purpose = "walking";
}

type ShoeFactory = {
  create(type: "balletFlat"): BalletFlat;
  create(type: "boot"): Boot;
  create(type: "sneaker"): Sneaker;
};

let Shoe: ShoeFactory = {
  create(type) {
    switch (type) {
      case "balletFlat":
        return new BalletFlat();
      case "boot":
        return new Boot();
      case "sneaker":
        return new Sneaker();
    }
  },
};

const boot = Shoe.create("boot"); // Shoe
const balletFlat = Shoe.create("balletFlat"); // BalletFlat
const sneaker = Shoe.create("sneaker"); // Sneaker

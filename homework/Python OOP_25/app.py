class BankAccount:
    def __init__(self, owner):
        self.owner = owner
        self.balance = 0

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            return True
        return False

    def withdraw(self, amount):
        if 0 < amount <= self.balance:
            self.balance -= amount
            return True
        return False

    def show_info(self):
        print(f"{self.owner} -> Balans: {self.balance}")

accounts = {}

while True:
    print("\n1 — Steghcel hashiv")
    print("2 — Mutqagrel gumar")
    print("3 — Hanel gumar")
    print("4 — Poxancel gumar")
    print("5 — Cuyc tal mek hashiv")
    print("6 — Cuyc tal bolor hashivnery")
    print("7 — Jnjel hashiv")
    print("8 — Cuyc tal amenaharust hachaxordin")
    print("9 — Cuyc tal vichakagrutyuny")
    print("0 — Eleq")

    yntrutyun = input("\nEntreq gorcoghutyuny: ")

    if yntrutyun == "1":
        anun = input("Hachaxordi anuny: ")
        if anun in accounts:
            print("Hashivn arden ka")
        else:
            accounts[anun] = BankAccount(anun)
            print(f"Hashiv {anun}-i hamar stexcvec")

    elif yntrutyun == "2":
        anun = input("Anuny: ")
        if anun in accounts:
            gumar = float(input("Gumar: "))
            if accounts[anun].deposit(gumar):
                print("Gumar avelacvec")
            else:
                print("Sxal gumar")
        else:
            print("Hashiv chi gtnvel")

    elif yntrutyun == "3":
        anun = input("Anuny: ")
        if anun in accounts:
            gumar = float(input("Gumar: "))
            if accounts[anun].withdraw(gumar):
                print("Gumar hanvec")
            else:
                print("Bavarar gumar chka kam sxal tiv")
        else:
            print("Hashiv chi gtnvel")

    elif yntrutyun == "4":
        anun1 = input("Um ic (anun): ")
        anun2 = input("Um (anun): ")
        if anun1 in accounts and anun2 in accounts:
            gumar = float(input("Gumar: "))
            if accounts[anun1].withdraw(gumar):
                accounts[anun2].deposit(gumar)
                print("Poxancum katarvec")
            else:
                print("Anhnar e poxancel")
        else:
            print("Hashivneric meky chi gtnvel")

    elif yntrutyun == "5":
        anun = input("Anuny: ")
        if anun in accounts:
            accounts[anun].show_info()
        else:
            print("Hashiv chi gtnvel")

    elif yntrutyun == "6":
        for acc in accounts.values():
            acc.show_info()

    elif yntrutyun == "7":
        anun = input("Anuny: ")
        if anun in accounts:
            del accounts[anun]
            print("Hashiv jnjvec")
        else:
            print("Hashiv chi gtnvel")

    elif yntrutyun == "8":
        if accounts:
            harust = max(accounts.values(), key=lambda x: x.balance)
            print(f"Amenaharusty: {harust.owner} ({harust.balance})")

    elif yntrutyun == "9":
        if accounts:
            qanak = len(accounts)
            gumar_bolor = sum(a.balance for a in accounts.values())
            mijin = gumar_bolor / qanak
            zero = len([a for a in accounts.values() if a.balance == 0])
            print(f"Qanak: {qanak}, Yndhanur: {gumar_bolor}, Mijin: {mijin}, Zero: {zero}")

    elif yntrutyun == "0":
        break
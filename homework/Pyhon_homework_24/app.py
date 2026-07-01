def hashvel_mijinn(gnahatakanner):
    if not gnahatakanner:
        return None
    return sum(gnahatakanner) / len(gnahatakanner)

usanoghner = {}

while True:
    print("\n1 — Avelacnel usanogh")
    print("2 — Avelacnel gnahatakan")
    print("3 — Cuyc tal bolor usanoghnerin")
    print("4 — Cuyc tal vichakagrutyuny")
    print("5 — Nshel lavaguyn usanoghin")
    print("6 — Jnjel usanogh")
    print("7 — Jnjel gnahatakan")
    print("8 — Sortavorel usanoghnerin")
    print("9 — Pntrel mijiny cacr usanoghner")
    print("0 — Eleq")

    yntrutyun = input("\nEntreq gorcoghutyuny: ")

    if yntrutyun == "1":
        anun = input("Usanoghi anuny: ")
        if anun in usanoghner:
            print(f"{anun} arden ka")
        else:
            usanoghner[anun] = []
            print(f"Nor usanogh {anun} avelacvec")

    elif yntrutyun == "2":
        anun = input("Usanoghi anuny: ")
        if anun in usanoghner:
            try:
                gnahatakan = int(input("Gnahatakany (0-100): "))
                if 0 <= gnahatakan <= 100:
                    usanoghner[anun].append(gnahatakan)
                    print(f"{anun}in avelacvec gnahatakan {gnahatakan}")
                else:
                    print("Gnahatakany petq e lini 0-100")
            except ValueError:
                print("Grel miayn tiv")
        else:
            print("Usanoghy chi gtnvel")

    elif yntrutyun == "3":
        for anun, gnahatakanner in usanoghner.items():
            mijin = hashvel_mijinn(gnahatakanner)
            mijin_str = f"{mijin:.1f}" if mijin is not None else "N/A"
            print(f"{anun} -> {gnahatakanner} -> Mijin: {mijin_str}")

    elif yntrutyun == "4":
        qanak = len(usanoghner)
        bolor_mijinner = [hashvel_mijinn(g) for g in usanoghner.values() if hashvel_mijinn(g) is not None]
        khmbi_mijin = sum(bolor_mijinner) / len(bolor_mijinner) if bolor_mijinner else 0
        gerazancikner = len([g for g in usanoghner.values() if hashvel_mijinn(g) and hashvel_mijinn(g) > 90])
        aranc_gnahat = len([g for g in usanoghner.values() if not g])
        
        print(f"Yndhanur usanoghner: {qanak}")
        print(f"Khmbi mijin gnahatakany: {khmbi_mijin:.1f}")
        print(f"Gerazancikner: {gerazancikner}")
        print(f"Usanoghner aranc gnahatakani: {aranc_gnahat}")

    elif yntrutyun == "5":
        lavaguynner = []
        max_mijin = -1
        for anun, gnahatakanner in usanoghner.items():
            mijin = hashvel_mijinn(gnahatakanner)
            if mijin is not None:
                if mijin > max_mijin:
                    max_mijin = mijin
                    lavaguynner = [(anun, mijin)]
                elif mijin == max_mijin:
                    lavaguynner.append((anun, mijin))
        
        for anun, mijin in lavaguynner:
            print(f"Lavaguyn usanogh(ner): {anun} (mijin {mijin:.1f})")

    elif yntrutyun == "6":
        anun = input("Anuny: ")
        if anun in usanoghner:
            del usanoghner[anun]
            print(f"{anun} jnjvec")
        else:
            print(f"Usanogh {anun} chi gtnvel")

    elif yntrutyun == "7":
        anun = input("Anuny: ")
        if anun in usanoghner and usanoghner[anun]:
            print(f"Gnahatakanner: {usanoghner[anun]}")
            try:
                g = int(input("Vor gnahatakany jnjel: "))
                if g in usanoghner[anun]:
                    usanoghner[anun].remove(g)
                    print(f"{anun}ic jnjvec gnahatakan {g}")
                else:
                    print("Gnahatakany chi gtnvel")
            except ValueError:
                print("Sxal tiv")
        else:
            print("Usanoghy kam chuni gnahatakanner")

    elif yntrutyun == "8":
        sorted_list = []
        for anun, gnahatakanner in usanoghner.items():
            mijin = hashvel_mijinn(gnahatakanner)
            sorted_list.append((anun, mijin if mijin is not None else -1))
        
        sorted_list.sort(key=lambda x: x[1], reverse=True)
        for i, (anun, mijin) in enumerate(sorted_list, 1):
            m_str = f"{mijin:.1f}" if mijin != -1 else "N/A"
            print(f"{i}. {anun} -> Mijin {m_str}")

    elif yntrutyun == "9":
        try:
            limit = float(input("Mijin < qani: "))
            print(f"Usanoghner mijin < {limit}:")
            for anun, gnahatakanner in usanoghner.items():
                mijin = hashvel_mijinn(gnahatakanner)
                if mijin is None or mijin < limit:
                    m_str = f"{mijin:.1f}" if mijin is not None else "N/A"
                    print(f"- {anun} -> Mijin {m_str}")
        except ValueError:
            print("Sxal tiv")

    elif yntrutyun == "0":
        break
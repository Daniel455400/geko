first_name = input()
last_name = input()
age = int(input())

print(f"Անուն: {first_name}")
print(f"Ազգանուն: {last_name}")
print(f"Տարիք: {age}")


daily_salary = int(input())
days_worked = int(input())

total_income = daily_salary * days_worked
print(total_income)


password = input()

if len(password) >= 8:
    print("Ճիշտ գաղտնաբառ")
else:
    print("Սխալ գաղտնաբառ")


username = input()
password = input()

if username == "admin" and password == "1234":
    print("Մուտքը հաջողվեց")
else:
    print("Մուտքը մերժվեց")


price = float(input())

if price > 10000:
    price = price * 0.9

print(int(price) if price.is_integer() else price)


wins = int(input())
draws = int(input())

total_points = (wins * 3) + (draws * 1)
print(total_points)


distance = float(input())
consumption = float(input())

required_fuel = (distance * consumption) / 100
print(required_fuel)


item_price = int(input())
quantity = int(input())

total_cost = item_price * quantity
print(total_cost)


todo_list = ["Python", "React", "Sport", "Read", "Sleep"]

for task in todo_list:
    print(task)


sales = [12000, 15000, 8000, 22000]

total_sales = sum(sales)
print(total_sales)
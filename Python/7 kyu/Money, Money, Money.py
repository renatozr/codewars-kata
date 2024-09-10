def calculate_years(principal, interest_rate, tax_rate, desired):
    years = 0

    while principal < desired:
        interest = principal * interest_rate
        tax = interest * tax_rate
        principal += interest - tax
        years += 1

    return years

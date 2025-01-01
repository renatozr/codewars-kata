def evaporator(content, evap_per_day, threshold):
    days = 0
    percentage = 100

    while percentage > threshold:
        percentage -= percentage * (evap_per_day / 100)
        days += 1

    return days

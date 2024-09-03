def race(v1, v2, g):
    v_dif = v2 - v1

    if v_dif <= 0:
        return None

    hours_to_catch = g / v_dif
    seconds_to_catch = int(hours_to_catch * 60 * 60)

    seconds = seconds_to_catch % 60
    minutes = seconds_to_catch // 60 % 60
    hours = seconds_to_catch // 60 // 60 % 60

    return [hours, minutes, seconds]

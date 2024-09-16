def chromosome_check(chromosome):
    return (
        "Congratulations! You're going to have a daughter."
        if chromosome == "XX"
        else "Congratulations! You're going to have a son."
    )

def stock_list(list_of_art, list_of_cat):
    if len(list_of_art) == 0:
        return ""

    book_count_by_category = {category: 0 for category in list_of_cat}

    for book in list_of_art:
        book_category = book[0]

        if book_category not in list_of_cat:
            continue

        book_count = int(book.split()[1])
        book_count_by_category[book_category] += book_count

    result = ""

    for category, count in book_count_by_category.items():
        result += f"({category} : {count}) - "

    return result[0:-3]

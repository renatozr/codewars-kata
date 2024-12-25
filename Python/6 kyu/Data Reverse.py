def data_reverse(data):
    segments = [data[i : i + 8] for i in range(0, len(data), 8)]
    reversed_segments = segments[::-1]
    return [bit for segment in reversed_segments for bit in segment]

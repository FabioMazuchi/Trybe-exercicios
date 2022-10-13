def max_time_stable(list: int):
    count = 0
    max = 0
    for i in range(len(list)):
        if list[i] == 1:
            count += 1
        else:
            if count > max:
                max = count
    return max


if __name__ == "__main__":
    list1 = [0, 1, 1, 1, 0, 0, 1, 1]  # 3
    list2 = [1, 1, 1, 1, 0, 0, 1, 1]  # 4

    print(max_time_stable(list1))
    print(max_time_stable(list2))

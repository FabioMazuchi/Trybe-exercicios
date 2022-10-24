def word_count(words, chars):  # O(n²)
    ans = 0
    alphabet = {}
    for char in chars:
        if char not in alphabet:
            alphabet[char] = 1
        else:
            alphabet[char] += 1

    for word in words:
        str_count = {}
        for char in word:
            if char not in alphabet:
                break

            if char not in str_count:
                str_count[char] = 1
            else:
                str_count[char] += 1

                if str_count[char] > alphabet[char]:
                    break
        else:
            ans += len(word)
    return ans


if __name__ == "__main__":
    words1 = ["cat", "bt", "hat", "tree"]
    words2 = ["hello", "world", "students"]
    chars1 = "atach"
    chars2 = "welldonehoneyr"

    print(word_count(words1, chars1))
    print(word_count(words2, chars2))

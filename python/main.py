from itertools import product
from pprint import pprint


def find_combination(sq: str) -> dict:
    required_amount = 200
    sq = list(sq)
    result = {'count': 0, 'combinations': []}
    comb_list = [digit + sign for digit, sign in product(sq[:-2], ('', '+', '-'))]
    comb_list = [comb_list[i:i + 3] for i in range(0, len(comb_list), 3)]
    comb_list.append([sq[-2]])
    for i in product(*comb_list):
        if (eval("".join(i))) == required_amount:
            result['count'] += 1
            result['combinations'].append("".join(i))
    return result


pprint(find_combination('9876543210'))

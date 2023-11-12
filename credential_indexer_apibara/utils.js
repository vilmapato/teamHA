import { FieldElement } from '@apibara/starknet'

// const encoded =  {
//     loLo: 332481695008573172,
//     loHi: 10275357600199264326,
//     hiLo: 4962358456359875611,
//     hiHi: 1540996537167924679
// }

const encoded = {
    loLo: 133938249470339151,
    loHi: 17739438901215615244,
    hiLo: 2386401987289599947,
    hiHi: 6993195617597113108
}



// converts the encoded value to bigint
console.log(FieldElement.toBigInt(encoded))

// converts the field element to hex
console.log(FieldElement.toHex(encoded))

// encodes the bigint into a field element
// console.log(FieldElement.fromBigInt(encoded))
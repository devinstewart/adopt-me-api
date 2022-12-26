'use strict';

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const seed = async () => {
    const bird = await prisma.animals.create({ data: { name: 'Bird' } });
    const cat = await prisma.animals.create({ data: { name: 'Cat' } });
    const dog = await prisma.animals.create({ data: { name: 'Dog' } });
    const rabbit = await prisma.animals.create({ data: { name: 'Rabbit' } });
    const reptile = await prisma.animals.create({ data: { name: 'Reptile' } });

    await prisma.breeds.create({ data: { name: 'Cockatiel', animalId: bird.id } });
    const cockatoo = await prisma.breeds.create({ data: { name: 'Cockatoo', animalId: bird.id } });
    await prisma.breeds.create({ data: { name: 'Parakeet Grey', animalId: bird.id } });
    await prisma.breeds.create({ data: { name: 'Macaw', animalId: bird.id } });
    const budgie = await prisma.breeds.create({ data: { name: 'Budgie', animalId: bird.id } });
    await prisma.breeds.create({ data: { name: 'Parrot', animalId: bird.id } });
    const africanGrey = await prisma.breeds.create({ data: { name: 'African Grey', animalId: bird.id } });
    const americanShorthair = await prisma.breeds.create({ data: { name: 'American Shorthair', animalId: cat.id } });
    const americanLonghair = await prisma.breeds.create({ data: { name: 'American Longhair', animalId: cat.id } });
    const britishShorthair = await prisma.breeds.create({ data: { name: 'British Shorthair', animalId: cat.id } });
    const domesticShorthair = await prisma.breeds.create({ data: { name: 'Domestic Shorthair', animalId: cat.id } });
    const tabby = await prisma.breeds.create({ data: { name: 'Tabby', animalId: cat.id } });
    await prisma.breeds.create({ data: { name: 'Siamese', animalId: cat.id } });
    await prisma.breeds.create({ data: { name: 'Maine Coon', animalId: cat.id } });
    await prisma.breeds.create({ data: { name: 'Cornish Rex', animalId: cat.id } });
    const charteux = await prisma.breeds.create({ data: { name: 'Charteux', animalId: cat.id } });
    const havanese = await prisma.breeds.create({ data: { name: 'Havanese', animalId: dog.id } });
    await prisma.breeds.create({ data: { name: 'German Sheppard', animalId: dog.id } });
    const dachshund = await prisma.breeds.create({ data: { name: 'Daschund', animalId: dog.id } });
    const frenchBullDog = await prisma.breeds.create({ data: { name: 'French Bulldog', animalId: dog.id } });
    const labrador = await prisma.breeds.create({ data: { name: 'Labrador', animalId: dog.id } });
    const husky = await prisma.breeds.create({ data: { name: 'Husky', animalId: dog.id } });
    const shihTzu = await prisma.breeds.create({ data: { name: 'Shih Tzu', animalId: dog.id } });
    const pitBull = await prisma.breeds.create({ data: { name: 'Pit Bull', animalId: dog.id } });
    const jackRussellTerrier = await prisma.breeds.create({ data: { name: 'Jack Russell Terrier', animalId: dog.id } });
    const boxer = await prisma.breeds.create({ data: { name: 'Boxer', animalId: dog.id } });
    const dalmation = await prisma.breeds.create({ data: { name: 'Dalmation', animalId: dog.id } });
    const pekingese = await prisma.breeds.create({ data: { name: 'Pekingese', animalId: dog.id } });
    const weimaraner = await prisma.breeds.create({ data: { name: 'Weimaraner', animalId: dog.id } });
    const goldenDoodle = await prisma.breeds.create({ data: { name: 'Golden Doodle', animalId: dog.id } });
    const wheatenTerrier = await prisma.breeds.create({ data: { name: 'Wheaten Terrier', animalId: dog.id } });
    const austrailianShepherd = await prisma.breeds.create({
        data: { name: 'Austrailian Shepherd', animalId: dog.id }
    });
    const american = await prisma.breeds.create({ data: { name: 'American', animalId: rabbit.id } });
    const angora = await prisma.breeds.create({ data: { name: 'Angora', animalId: rabbit.id } });
    const belgianHare = await prisma.breeds.create({ data: { name: 'Belgian Hare', animalId: rabbit.id } });
    const dutch = await prisma.breeds.create({ data: { name: 'Dutch', animalId: rabbit.id } });
    const iguana = await prisma.breeds.create({ data: { name: 'Iguana', animalId: reptile.id } });
    const hornedLizard = await prisma.breeds.create({ data: { name: 'Horned Lizard', animalId: reptile.id } });

    const al = await prisma.states.create({ data: { name: 'AL' } });
    await prisma.states.create({ data: { name: 'AK' } });
    const az = await prisma.states.create({ data: { name: 'AZ' } });
    await prisma.states.create({ data: { name: 'AR' } });
    const ca = await prisma.states.create({ data: { name: 'CA' } });
    const co = await prisma.states.create({ data: { name: 'CO' } });
    const ct = await prisma.states.create({ data: { name: 'CT' } });
    await prisma.states.create({ data: { name: 'DE' } });
    const fl = await prisma.states.create({ data: { name: 'FL' } });
    const ga = await prisma.states.create({ data: { name: 'GA' } });
    const hi = await prisma.states.create({ data: { name: 'HI' } });
    await prisma.states.create({ data: { name: 'ID' } });
    const il = await prisma.states.create({ data: { name: 'IL' } });
    await prisma.states.create({ data: { name: 'IN' } });
    await prisma.states.create({ data: { name: 'KS' } });
    await prisma.states.create({ data: { name: 'IA' } });
    const ky = await prisma.states.create({ data: { name: 'KY' } });
    const la = await prisma.states.create({ data: { name: 'LA' } });
    await prisma.states.create({ data: { name: 'ME' } });
    const md = await prisma.states.create({ data: { name: 'MD' } });
    await prisma.states.create({ data: { name: 'MA' } });
    await prisma.states.create({ data: { name: 'MI' } });
    const mn = await prisma.states.create({ data: { name: 'MN' } });
    await prisma.states.create({ data: { name: 'MS' } });
    const mo = await prisma.states.create({ data: { name: 'MO' } });
    await prisma.states.create({ data: { name: 'MT' } });
    await prisma.states.create({ data: { name: 'NE' } });
    await prisma.states.create({ data: { name: 'NV' } });
    const nh = await prisma.states.create({ data: { name: 'NH' } });
    await prisma.states.create({ data: { name: 'NJ' } });
    await prisma.states.create({ data: { name: 'NM' } });
    const ny = await prisma.states.create({ data: { name: 'NY' } });
    const nc = await prisma.states.create({ data: { name: 'NC' } });
    await prisma.states.create({ data: { name: 'ND' } });
    const oh = await prisma.states.create({ data: { name: 'OH' } });
    await prisma.states.create({ data: { name: 'OK' } });
    const or = await prisma.states.create({ data: { name: 'OR' } });
    const pa = await prisma.states.create({ data: { name: 'PA' } });
    await prisma.states.create({ data: { name: 'RI' } });
    const sc = await prisma.states.create({ data: { name: 'SC' } });
    await prisma.states.create({ data: { name: 'SD' } });
    const tn = await prisma.states.create({ data: { name: 'TN' } });
    const tx = await prisma.states.create({ data: { name: 'TX' } });
    const ut = await prisma.states.create({ data: { name: 'UT' } });
    await prisma.states.create({ data: { name: 'VT' } });
    await prisma.states.create({ data: { name: 'VA' } });
    const wa = await prisma.states.create({ data: { name: 'WA' } });
    await prisma.states.create({ data: { name: 'WV' } });
    const wi = await prisma.states.create({ data: { name: 'WI' } });
    await prisma.states.create({ data: { name: 'WY' } });

    const seatle = await prisma.cities.create({ data: { name: 'Seatle', stateId: wa.id } });
    const minneapolis = await prisma.cities.create({ data: { name: 'Minneapolis', stateId: mn.id } });
    const denver = await prisma.cities.create({ data: { name: 'Denver', stateId: co.id } });
    const carolStream = await prisma.cities.create({ data: { name: 'Carol Stream', stateId: il.id } });
    const bridgeport = await prisma.cities.create({ data: { name: 'Bridgeport', stateId: ct.id } });
    const charlotte = await prisma.cities.create({ data: { name: 'Charlotte', stateId: nc.id } });
    const springfield = await prisma.cities.create({ data: { name: 'Springfield', stateId: il.id } });
    const tuscon = await prisma.cities.create({ data: { name: 'Tuscon', stateId: az.id } });
    const portland = await prisma.cities.create({ data: { name: 'Portland', stateId: or.id } });
    const cincinnati = await prisma.cities.create({ data: { name: 'Cincinnati', stateId: oh.id } });
    const beaufort = await prisma.cities.create({ data: { name: 'Beaufort', stateId: sc.id } });
    const chicago = await prisma.cities.create({ data: { name: 'Chicago', stateId: il.id } });
    const saltLakeCity = await prisma.cities.create({ data: { name: 'Salt Lake City', stateId: ut.id } });
    const kansascity = await prisma.cities.create({ data: { name: 'Kansas City', stateId: mo.id } });
    const pensicola = await prisma.cities.create({ data: { name: 'Pensicola', stateId: fl.id } });
    const harrisburg = await prisma.cities.create({ data: { name: 'Harrisburg', stateId: pa.id } });
    const greenville = await prisma.cities.create({ data: { name: 'Greenville', stateId: sc.id } });
    const tacoma = await prisma.cities.create({ data: { name: 'Tacoma', stateId: wa.id } });
    const lehighAcres = await prisma.cities.create({ data: { name: 'Lehigh Acres', stateId: fl.id } });
    const newHaven = await prisma.cities.create({ data: { name: 'New Haven', stateId: ct.id } });
    const houston = await prisma.cities.create({ data: { name: 'Houston', stateId: tx.id } });
    const riverside = await prisma.cities.create({ data: { name: 'Riverside', stateId: ca.id } });
    const losAngeles = await prisma.cities.create({ data: { name: 'Los Angeles', stateId: ca.id } });
    const nashville = await prisma.cities.create({ data: { name: 'Nashville', stateId: tn.id } });
    const jacksonville = await prisma.cities.create({ data: { name: 'Jacksonville', stateId: fl.id } });
    const columbia = await prisma.cities.create({ data: { name: 'Columbia', stateId: sc.id } });
    const honolulu = await prisma.cities.create({ data: { name: 'Honolulu', stateId: hi.id } });
    const shreveport = await prisma.cities.create({ data: { name: 'Shreveport', stateId: la.id } });
    const mountVernon = await prisma.cities.create({ data: { name: 'Mount Vernon', stateId: wa.id } });
    const madison = await prisma.cities.create({ data: { name: 'Madison', stateId: wi.id } });
    const tampa = await prisma.cities.create({ data: { name: 'Tampa', stateId: fl.id } });
    const buffalo = await prisma.cities.create({ data: { name: 'Buffalo', stateId: ny.id } });
    const baltimore = await prisma.cities.create({ data: { name: 'Baltimore', stateId: md.id } });
    const manchester = await prisma.cities.create({ data: { name: 'Manchester', stateId: nh.id } });
    const augusta = await prisma.cities.create({ data: { name: 'Augusta', stateId: ga.id } });
    const philadelphia = await prisma.cities.create({ data: { name: 'Philadelphia', stateId: pa.id } });
    const saintPeterburg = await prisma.cities.create({ data: { name: 'Saint Peterburg', stateId: fl.id } });
    const newYork = await prisma.cities.create({ data: { name: 'New York', stateId: ny.id } });
    const beaverton = await prisma.cities.create({ data: { name: 'Beaverton', stateId: or.id } });
    const lexington = await prisma.cities.create({ data: { name: 'Lexington', stateId: ky.id } });
    const dallas = await prisma.cities.create({ data: { name: 'Dallas', stateId: tx.id } });
    const huntingtonBeach = await prisma.cities.create({ data: { name: 'Huntington Beach', stateId: ca.id } });
    const tuscaloosa = await prisma.cities.create({ data: { name: 'Tuscaloosa', stateId: al.id } });

    const luna = await prisma.pets.create({
        data: {
            name: 'Luna',
            breedId: havanese.id,
            cityId: seatle.id,
            description:
                "Luna is actually the most adorable dog in the world. Her hobbies include yelling at squirrels, aggressively napping on her owners' laps, and asking to be fed two hours before IT'S DAMN WELL TIME LUNA. Luna is beloved by her puppy parents and lazily resides currently in Seattle, Washington."
        }
    });
    const bunnahabhain = await prisma.pets.create({
        data: {
            name: 'bunnahabhain',
            breedId: goldenDoodle.id,
            cityId: minneapolis.id,
            description:
                'Bunnahabhain is a 3 year old Goldendoodle who loves to play fetch, go on walks, and eat treats. He is a very sweet and loving dog who loves to cuddle and give kisses. He is a very smart dog who knows how to sit, lay down, shake, and roll over'
        }
    });
    const olive = await prisma.pets.create({
        data: {
            name: 'Olive',
            breedId: boxer.id,
            cityId: minneapolis.id,
            description:
                'Olive is a 3 year old Boxer who loves to play fetch, go on walks, and eat treats. She is a very sweet and loving dog who loves to cuddle and give kisses. She is a very smart dog who knows how to sit, lay down, shake, and roll over'
        }
    });
    const sudo = await prisma.pets.create({
        data: {
            name: 'Sudo',
            breedId: boxer.id,
            cityId: denver.id,
            description:
                'Sudo is a 3 year old Boxer who loves to play fetch, go on walks, and eat treats. He is a very sweet and loving dog who loves to cuddle and give kisses. He is a very smart dog who knows how to sit, lay down, shake, and roll over'
        }
    });
    const beem = await prisma.pets.create({
        data: {
            name: 'Beem',
            breedId: wheatenTerrier.id,
            cityId: denver.id,
            description:
                'Beem is a 3 year old Boxer who loves to play fetch, go on walks, and eat treats. He is a very sweet and loving dog who loves to cuddle and give kisses. He is a very smart dog who knows how to sit, lay down, shake, and roll over'
        }
    });
    const gizela = await prisma.pets.create({
        data: {
            name: 'Gizela',
            breedId: cockatoo.id,
            cityId: carolStream.id,
            description: 'Gizela just moved in to the Refuge. Please come visit and maybe you were meant to be....'
        }
    });
    const laughton = await prisma.pets.create({
        data: {
            name: 'Laughton',
            breedId: hornedLizard.id,
            cityId: bridgeport.id,
            description: 'Laughton is a horned lizard. He can inflate myself to a larger size.'
        }
    });
    const si = await prisma.pets.create({
        data: {
            name: 'Si',
            breedId: shihTzu.id,
            cityId: charlotte.id,
            description:
                'Si is a 2 year old shih tzu who loves to play fetch, go on walks, and eat treats. He is a very sweet and loving dog who loves to cuddle and give kisses. He is a very smart dog who knows how to sit, lay down, shake, and roll over'
        }
    });
    const lyda = await prisma.pets.create({
        data: {
            name: 'Lyda',
            breedId: american.id,
            cityId: springfield.id,
            description:
                'Lyda is a 6 month old rabbit who to express happiness, will sometimes jump around and flick her head and feet.'
        }
    });
    const jackquelin = await prisma.pets.create({
        data: {
            name: 'Jackquelin',
            breedId: labrador.id,
            cityId: tuscon.id,
            description:
                'Jackquelin is a 3 year old labrador who loves to play fetch, go on walks, and eat treats. She is a very sweet and loving dog who loves to cuddle and give kisses. She is a very smart dog who knows how to sit, lay down, shake, and roll over'
        }
    });
    const charyl = await prisma.pets.create({
        data: {
            name: 'Charyl',
            breedId: budgie.id,
            cityId: portland.id,
            description: 'Charyl just moved in to the Refuge. Please come visit and maybe you were meant to be...'
        }
    });
    const sullivan = await prisma.pets.create({
        data: {
            name: 'Sullivan',
            breedId: africanGrey.id,
            cityId: cincinnati.id,
            description: 'Sullivan just moved in to the Refuge. Please come visit and maybe you were meant to be....'
        }
    });
    const vera = await prisma.pets.create({
        data: {
            name: 'Vera',
            breedId: charteux.id,
            cityId: minneapolis.id,
            description: "Vera is a 2 year old sweetie-pie! She's playful and curious and loves attention!"
        }
    });
    const carolan = await prisma.pets.create({
        data: {
            name: 'Carolan',
            breedId: americanLonghair.id,
            cityId: kansascity.id,
            description: "Carolan is a 2 year old sweetie-pie! She's playful and curious and loves attention!"
        }
    });
    const zara = await prisma.pets.create({
        data: {
            name: 'Zara',
            breedId: domesticShorthair.id,
            cityId: harrisburg.id,
            description: "Zara is a 2 year old sweetie-pie! She's playful and curious and loves attention!"
        }
    });
    const del = await prisma.pets.create({
        data: {
            name: 'Del',
            breedId: domesticShorthair.id,
            cityId: greenville.id,
            description: "Del is a 2 year old sweetie-pie! He's playful and curious and loves attention!"
        }
    });
    const jobi = await prisma.pets.create({
        data: {
            name: 'Jobi',
            breedId: tabby.id,
            cityId: greenville.id,
            description: "Jobi is a 2 year old sweetie-pie! He's playful and curious and loves attention!"
        }
    });
    const kelsey = await prisma.pets.create({
        data: {
            name: 'Kelsey',
            breedId: tabby.id,
            cityId: houston.id,
            description: "Kesly is a 2 year old sweetie-pie! He's playful and curious and loves attention!"
        }
    });
    const faulkner = await prisma.pets.create({
        data: {
            name: 'Faulkner',
            breedId: americanShorthair.id,
            cityId: cincinnati.id,
            description: "Del is a 2 year old sweetie-pie! He's playful and curious and loves attention!"
        }
    });
    const jonell = await prisma.pets.create({
        data: {
            name: 'Jonell',
            breedId: tabby.id,
            cityId: riverside.id,
            description: "Jonell is a 2 year old sweetie-pie! She's playful and curious and loves attention!"
        }
    });
    const valentino = await prisma.pets.create({
        data: {
            name: 'Valentino',
            breedId: britishShorthair.id,
            cityId: pensicola.id,
            description: "Valentino is a 2 year old sweetie-pie! He's playful and curious and loves attention!"
        }
    });
    const cheston = await prisma.pets.create({
        data: {
            name: 'Cheston',
            breedId: americanShorthair.id,
            cityId: beaufort.id,
            description: "Cheston is a 2 year old sweetie-pie! He's playful and curious and loves attention!"
        }
    });
    const ade = await prisma.pets.create({
        data: {
            name: 'Ade',
            breedId: americanShorthair.id,
            cityId: chicago.id,
            description: "Ade is a 2 year old sweetie-pie! He's is playful and curious and loves attention!"
        }
    });
    const talbert = await prisma.pets.create({
        data: {
            name: 'Talbert',
            breedId: americanShorthair.id,
            cityId: saltLakeCity.id,
            description: "Talbert is a 2 year old sweetie-pie! He's playful and curious and loves attention!"
        }
    });
    const elinor = await prisma.pets.create({
        data: {
            name: 'Elinor',
            breedId: domesticShorthair.id,
            cityId: tacoma.id,
            description: "Elinor is a 2 year old sweetie-pie! She's is playful and curious and loves attention!"
        }
    });
    const linette = await prisma.pets.create({
        data: {
            name: 'Linette',
            breedId: domesticShorthair.id,
            cityId: lehighAcres.id,
            description: "Linette is a 2 year old sweetie-pie! She's playful and curious and loves attention!"
        }
    });
    const robinette = await prisma.pets.create({
        data: {
            name: 'Robinette',
            breedId: pitBull.id,
            cityId: madison.id,
            description:
                'Robinette is a 2 year pit bull who loves to play fetch, go on walks, and eat treats. She is a very sweet and loving dog who loves to cuddle and give kisses. She is a very smart dog who knows how to sit, lay down, shake, and roll over'
        }
    });
    const angeline = await prisma.pets.create({
        data: {
            name: 'Angeline',
            breedId: husky.id,
            cityId: newHaven.id,
            description:
                'Angeline is a 2 year old husky who loves to play fetch, go on walks, and eat treats. She is a very sweet and loving dog who loves to cuddle and give kisses. She is a very smart dog who knows how to sit, lay down, shake, and roll over'
        }
    });
    const sheff = await prisma.pets.create({
        data: {
            name: 'Sheff',
            breedId: havanese.id,
            cityId: losAngeles.id,
            description:
                'Sheff is a 2 year old havanese who loves to play fetch, go on walks, and eat treats. He is a very sweet and loving dog who loves to cuddle and give kisses. He is a very smart dog who knows how to sit, lay down, shake, and roll over'
        }
    });
    const josephine = await prisma.pets.create({
        data: {
            name: 'Josephine',
            breedId: dachshund.id,
            cityId: nashville.id,
            description:
                'Josephine is a 2 year old dachshund who loves to play fetch, go on walks, and eat treats. She is a very sweet and loving dog who loves to cuddle and give kisses. She is a very smart dog who knows how to sit, lay down, shake, and roll over'
        }
    });
    const roldan = await prisma.pets.create({
        data: {
            name: 'Roldan',
            breedId: frenchBullDog.id,
            cityId: jacksonville.id,
            description:
                'Roldan is a 2 year old french bulldog who loves to play fetch, go on walks, and eat treats. He is a very sweet and loving dog who loves to cuddle and give kisses. He is a very smart dog who knows how to sit, lay down, shake, and roll over'
        }
    });
    const niven = await prisma.pets.create({
        data: {
            name: 'Niven',
            breedId: frenchBullDog.id,
            cityId: columbia.id,
            description:
                'Niven is a 2 year old french bulldog who loves to play fetch, go on walks, and eat treats. He is a very sweet and loving dog who loves to cuddle and give kisses. He is a very smart dog who knows how to sit, lay down, shake, and roll over'
        }
    });
    const errick = await prisma.pets.create({
        data: {
            name: 'Errick',
            breedId: labrador.id,
            cityId: honolulu.id,
            description:
                'Errick is a 2 year old labrador who loves to play fetch, go on walks, and eat treats. He is a very sweet and loving dog who loves to cuddle and give kisses. He is a very smart dog who knows how to sit, lay down, shake, and roll over'
        }
    });
    const ashley = await prisma.pets.create({
        data: {
            name: 'Ashley',
            breedId: husky.id,
            cityId: shreveport.id,
            description:
                'Ashley is a 2 year old husky who loves to play fetch, go on walks, and eat treats. She is a very sweet and loving dog who loves to cuddle and give kisses. She is a very smart dog who knows how to sit, lay down, shake, and roll over'
        }
    });
    const nester = await prisma.pets.create({
        data: {
            name: 'Nester',
            breedId: husky.id,
            cityId: mountVernon.id,
            description:
                'Nester is a 2 year old husky who loves to play fetch, go on walks, and eat treats. He is a very sweet and loving dog who loves to cuddle and give kisses. He is a very smart dog who knows how to sit, lay down, shake, and roll over'
        }
    });
    const fairleigh = await prisma.pets.create({
        data: {
            name: 'Fairleigh',
            breedId: pitBull.id,
            cityId: tampa.id,
            description:
                'Fairleigh is a 2 year old pit bull who loves to play fetch, go on walks, and eat treats. He is a very sweet and loving dog who loves to cuddle and give kisses. He is a very smart dog who knows how to sit, lay down, shake, and roll over'
        }
    });
    const dalston = await prisma.pets.create({
        data: {
            name: 'Dalston',
            breedId: pitBull.id,
            cityId: buffalo.id,
            description:
                'Dalston is a 2 year old pit bull who loves to play fetch, go on walks, and eat treats. He is a very sweet and loving dog who loves to cuddle and give kisses. He is a very smart dog who knows how to sit, lay down, shake, and roll over'
        }
    });
    const kippy = await prisma.pets.create({
        data: {
            name: 'Kippy',
            breedId: jackRussellTerrier.id,
            cityId: baltimore.id,
            description:
                'Kippy is a 2 year old jack russel terrier who loves to play fetch, go on walks, and eat treats. He is a very sweet and loving dog who loves to cuddle and give kisses. He is a very smart dog who knows how to sit, lay down, shake, and roll over'
        }
    });
    const bernard = await prisma.pets.create({
        data: {
            name: 'Bernard',
            breedId: jackRussellTerrier.id,
            cityId: manchester.id,
            description:
                'Bernard is a 2 year old jack russel terrier who loves to play fetch, go on walks, and eat treats. He is a very sweet and loving dog who loves to cuddle and give kisses. He is a very smart dog who knows how to sit, lay down, shake, and roll over'
        }
    });
    const heriberto = await prisma.pets.create({
        data: {
            name: 'Heriberto',
            breedId: jackRussellTerrier.id,
            cityId: augusta.id,
            description:
                'Heriberto is a 2 year old jack russel terrier who loves to play fetch, go on walks, and eat treats. He is a very sweet and loving dog who loves to cuddle and give kisses. He is a very smart dog who knows how to sit, lay down, shake, and roll over'
        }
    });
    const meaghan = await prisma.pets.create({
        data: {
            name: 'Meaghan',
            breedId: jackRussellTerrier.id,
            cityId: jacksonville.id,
            description:
                'Meaghan is a 2 year old jack russel terrier who loves to play fetch, go on walks, and eat treats. She is a very sweet and loving dog who loves to cuddle and give kisses. She is a very smart dog who knows how to sit, lay down, shake, and roll over'
        }
    });
    const pace = await prisma.pets.create({
        data: {
            name: 'Pace',
            breedId: boxer.id,
            cityId: philadelphia.id,
            description:
                'Pace is a 2 year old boxer who loves to play fetch, go on walks, and eat treats. He is a very sweet and loving dog who loves to cuddle and give kisses. He is a very smart dog who knows how to sit, lay down, shake, and roll over'
        }
    });
    const julietta = await prisma.pets.create({
        data: {
            name: 'Julietta',
            breedId: dalmation.id,
            cityId: saltLakeCity.id,
            description:
                'Julietta is a 2 year old dalmation who loves to play fetch, go on walks, and eat treats. She is a very sweet and loving dog who loves to cuddle and give kisses. She is a very smart dog who knows how to sit, lay down, shake, and roll over'
        }
    });
    const alexis = await prisma.pets.create({
        data: {
            name: 'Alexis',
            breedId: dalmation.id,
            cityId: saintPeterburg.id,
            description:
                'Alexis is a 2 year old dalmation who loves to play fetch, go on walks, and eat treats. She is a very sweet and loving dog who loves to cuddle and give kisses. She is a very smart dog who knows how to sit, lay down, shake, and roll over'
        }
    });
    const fairleighNy = await prisma.pets.create({
        data: {
            name: 'Fairleigh',
            breedId: pekingese.id,
            cityId: newYork.id,
            description:
                'Fairleigh is a 2 year old pekingese who loves to play fetch, go on walks, and eat treats. He is a very sweet and loving dog who loves to cuddle and give kisses. He is a very smart dog who knows how to sit, lay down, shake, and roll over'
        }
    });
    const saunderson = await prisma.pets.create({
        data: {
            name: 'Saunderson',
            breedId: weimaraner.id,
            cityId: cincinnati.id,
            description:
                'Saunderson is a 2 year old weimaraner who loves to play fetch, go on walks, and eat treats. He is a very sweet and loving dog who loves to cuddle and give kisses. He is a very smart dog who knows how to sit, lay down, shake, and roll over'
        }
    });
    const zedekiah = await prisma.pets.create({
        data: {
            name: 'Zedekiah',
            breedId: austrailianShepherd.id,
            cityId: beaverton.id,
            description:
                'Zedekiah is a 2 year old austrailian shepherd who loves to play fetch, go on walks, and eat treats. He is a very sweet and loving dog who loves to cuddle and give kisses. He is a very smart dog who knows how to sit, lay down, shake, and roll over'
        }
    });
    const charisse = await prisma.pets.create({
        data: {
            name: 'Charisse',
            breedId: dutch.id,
            cityId: lexington.id,
            description:
                'Charisse is a 6 month old rabbit who to express happiness, will sometimes jump around and flick her head and feet.'
        }
    });
    const maitilde = await prisma.pets.create({
        data: {
            name: 'Maitilde',
            breedId: angora.id,
            cityId: dallas.id,
            description:
                'Maitilde is a 6 month old rabbit who to express happiness, will sometimes jump around and flick her head and feet.'
        }
    });
    const natalina = await prisma.pets.create({
        data: {
            name: 'Natalina',
            breedId: belgianHare.id,
            cityId: tampa.id,
            description:
                'Natalina is a 6 month old rabbit who to express happiness, will sometimes jump around and flick her head and feet.'
        }
    });
    const annamarie = await prisma.pets.create({
        data: {
            name: 'Annamarie',
            breedId: iguana.id,
            cityId: huntingtonBeach.id,
            description:
                'Annamarie is a 1 year old iguana who likes to eat turnip greens, alfalfa hay, bok choy, kale and parsley.'
        }
    });
    const michail = await prisma.pets.create({
        data: {
            name: 'Michail',
            breedId: iguana.id,
            cityId: tuscaloosa.id,
            description:
                'Michail is a 1 year old iguana who likes to eat turnip greens, alfalfa hay, bok choy, kale and parsley.'
        }
    });

    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/dog25.jpg', petId: luna.id } });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/dog26.jpg', petId: luna.id } });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/dog27.jpg', petId: luna.id } });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/dog28.jpg', petId: luna.id } });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/dog29.jpg', petId: luna.id } });
    await prisma.images.create({
        data: { url: 'https://pets-images.dev-apis.com/pets/dog31.jpg', petId: bunnahabhain.id }
    });
    await prisma.images.create({
        data: { url: 'https://pets-images.dev-apis.com/pets/dog30.jpg', petId: bunnahabhain.id }
    });
    await prisma.images.create({
        data: { url: 'https://pets-images.dev-apis.com/pets/dog32.jpg', petId: bunnahabhain.id }
    });
    await prisma.images.create({
        data: { url: 'https://pets-images.dev-apis.com/pets/dog33.jpg', petId: bunnahabhain.id }
    });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/dog34.jpg', petId: olive.id } });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/dog37.jpg', petId: sudo.id } });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/dog38.jpg', petId: sudo.id } });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/dog39.jpg', petId: sudo.id } });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/dog35.jpg', petId: beem.id } });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/dog36.jpg', petId: beem.id } });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/bird2.jpg', petId: gizela.id } });
    await prisma.images.create({
        data: { url: 'https://pets-images.dev-apis.com/pets/reptile2.jpg', petId: laughton.id }
    });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/dog0.jpg', petId: si.id } });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/rabbit3.jpg', petId: lyda.id } });
    await prisma.images.create({
        data: { url: 'https://pets-images.dev-apis.com/pets/dog1.jpg', petId: jackquelin.id }
    });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/bird0.jpg', petId: charyl.id } });
    await prisma.images.create({
        data: { url: 'https://pets-images.dev-apis.com/pets/bird1.jpg', petId: sullivan.id }
    });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/cat1.jpg', petId: vera.id } });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/cat2.jpg', petId: carolan.id } });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/cat3.jpg', petId: zara.id } });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/cat4.jpg', petId: del.id } });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/cat5.jpg', petId: jobi.id } });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/cat6.jpg', petId: faulkner.id } });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/cat7.jpg', petId: kelsey.id } });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/cat8.jpg', petId: jonell.id } });
    await prisma.images.create({
        data: { url: 'https://pets-images.dev-apis.com/pets/cat9.jpg', petId: valentino.id }
    });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/cat10.jpg', petId: cheston.id } });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/cat11.jpg', petId: ade.id } });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/cat13.jpg', petId: talbert.id } });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/cat12.jpg', petId: elinor.id } });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/cat14.jpg', petId: linette.id } });
    await prisma.images.create({
        data: { url: 'https://pets-images.dev-apis.com/pets/dog2.jpg', petId: robinette.id }
    });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/dog3.jpg', petId: angeline.id } });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/dog22.jpg', petId: sheff.id } });
    await prisma.images.create({
        data: { url: 'https://pets-images.dev-apis.com/pets/dog11.jpg', petId: josephine.id }
    });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/dog8.jpg', petId: roldan.id } });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/dog21.jpg', petId: niven.id } });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/dog15.jpg', petId: errick.id } });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/dog9.jpg', petId: ashley.id } });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/dog10.jpg', petId: nester.id } });
    await prisma.images.create({
        data: { url: 'https://pets-images.dev-apis.com/pets/dog6.jpg', petId: fairleigh.id }
    });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/dog16.jpg', petId: dalston.id } });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/dog4.jpg', petId: kippy.id } });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/dog5.jpg', petId: bernard.id } });
    await prisma.images.create({
        data: { url: 'https://pets-images.dev-apis.com/pets/dog18.jpg', petId: heriberto.id }
    });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/dog20.jpg', petId: meaghan.id } });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/dog7.jpg', petId: pace.id } });
    await prisma.images.create({
        data: { url: 'https://pets-images.dev-apis.com/pets/dog12.jpg', petId: julietta.id }
    });
    await prisma.images.create({ data: { url: 'https://pets-images.dev-apis.com/pets/dog17.jpg', petId: alexis.id } });
    await prisma.images.create({
        data: { url: 'https://pets-images.dev-apis.com/pets/dog13.jpg', petId: fairleighNy.id }
    });
    await prisma.images.create({
        data: { url: 'https://pets-images.dev-apis.com/pets/dog14.jpg', petId: saunderson.id }
    });
    await prisma.images.create({
        data: { url: 'https://pets-images.dev-apis.com/pets/dog19.jpg', petId: zedekiah.id }
    });
    await prisma.images.create({
        data: { url: 'https://pets-images.dev-apis.com/pets/rabbit0.jpg', petId: charisse.id }
    });
    await prisma.images.create({
        data: { url: 'https://pets-images.dev-apis.com/pets/rabbit1.jpg', petId: maitilde.id }
    });
    await prisma.images.create({
        data: { url: 'https://pets-images.dev-apis.com/pets/rabbit2.jpg', petId: natalina.id }
    });
    await prisma.images.create({
        data: { url: 'https://pets-images.dev-apis.com/pets/reptile0.jpg', petId: annamarie.id }
    });
    await prisma.images.create({
        data: { url: 'https://pets-images.dev-apis.com/pets/reptile1.jpg', petId: michail.id }
    });
};

seed()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });

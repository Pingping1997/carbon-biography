import type { PersonProfile } from '../types/models'

export const pingpingProfile: PersonProfile = {
  id: 'pingping-demo',
  name: 'Pingping',
  birthYear: 1997,
  flag: '🇨🇳',
  tagline: 'Rural Shandong → Chinese cities → Vienna',
  status: 'demo',
  stages: [
    {
      id: 'pp-1997-2008',
      startYear: 1997,
      endYear: 2008,
      label: 'Village childhood',
      place: 'Fangjia / Dongying',
      region: 'Shandong',
      countryCode: 'CHN',
      coordinates: { lat: 37.43, lon: 118.67 },
      lifeStage: 'Childhood & primary school',
      narrative: 'Very low material consumption and mobility; coal heating was one of the more important direct household sources.',
      inputs: {
        settlement: 'rural', householdResources: 'very_limited', dwelling: 'family home',
        heating: 'coal stove', cookingFuel: 'LPG / compressed gas', schoolOrWorkMobility: 'walking', privateCar: false,
        flightsPerYear: 0, foodPattern: 'basic household diet', shoppingPattern: 'very limited'
      },
      estimate: { central: 1.0, low: 0.7, high: 1.3, confidence: 'medium', status: 'illustrative',
        breakdown: { home: 0.34, food: 0.38, everyday_mobility: 0.04, long_distance_travel: 0.01, goods_leisure: 0.05, shared_society: 0.18 } }
    },
    {
      id: 'pp-2008-2015', startYear: 2008, endYear: 2015, label: 'Urbanizing teenager', place: 'Dongying', region: 'Shandong', countryCode: 'CHN',
      coordinates: { lat: 37.43, lon: 118.67 }, lifeStage: 'Middle & high school',
      narrative: 'Boarding-school life and car-free mobility kept the footprint relatively low as urban infrastructure and consumption became more accessible.',
      inputs: { settlement: 'urban', householdResources: 'modest', dwelling: 'school dormitory / urban village', heating: 'central / local', schoolOrWorkMobility: 'walking / electric tricycle', privateCar: false, flightsPerYear: 0, foodPattern: 'school canteen', shoppingPattern: 'limited' },
      estimate: { central: 1.7, low: 1.3, high: 2.2, confidence: 'medium', status: 'illustrative',
        breakdown: { home: 0.41, food: 0.60, everyday_mobility: 0.15, long_distance_travel: 0.03, goods_leisure: 0.17, shared_society: 0.34 } }
    },
    {
      id: 'pp-2015-2019', startYear: 2015, endYear: 2019, label: 'University', place: 'Chengdu', region: 'Sichuan', countryCode: 'CHN',
      coordinates: { lat: 30.57, lon: 104.07 }, lifeStage: 'Bachelor study',
      narrative: 'Long-distance mobility entered ordinary life. Shared student housing still moderated residential impacts.',
      inputs: { settlement: 'urban', householdResources: 'modest', dwelling: '6-person dormitory / shared apartment', cooling: 'AC', heating: 'none', schoolOrWorkMobility: 'public transport / walking', privateCar: false, flightsPerYear: 4, foodPattern: 'canteen + restaurants', shoppingPattern: 'online / mall', monthlySpendingEur: 450 },
      estimate: { central: 3.8, low: 3.0, high: 5.0, confidence: 'medium', status: 'illustrative',
        breakdown: { home: 0.49, food: 0.84, everyday_mobility: 0.28, long_distance_travel: 1.29, goods_leisure: 0.37, shared_society: 0.53 } }
    },
    {
      id: 'pp-2019-2022', startYear: 2019, endYear: 2022, label: 'Master study', place: 'Beijing / Langfang', countryCode: 'CHN',
      coordinates: { lat: 39.75, lon: 116.55 }, lifeStage: 'Master study & COVID',
      narrative: 'Urban services, heating, rail/taxi mobility and flights raised the baseline, with a temporary mobility dip during COVID.',
      inputs: { settlement: 'urban', householdResources: 'modest', dwelling: 'dormitory / apartment', heating: 'district heating', cooling: 'AC', schoolOrWorkMobility: 'rail / subway / taxi', privateCar: false, flightsPerYear: 2, foodPattern: 'canteen + restaurants + delivery', shoppingPattern: 'online / mall', monthlySpendingEur: 450 },
      estimate: { central: 3.4, low: 2.7, high: 4.3, confidence: 'medium', status: 'illustrative',
        breakdown: { home: 0.68, food: 0.85, everyday_mobility: 0.50, long_distance_travel: 0.35, goods_leisure: 0.51, shared_society: 0.51 } }
    },
    {
      id: 'pp-2022-now', startYear: 2022, endYear: 2026, label: 'Vienna PhD', place: 'Vienna', countryCode: 'AUT',
      coordinates: { lat: 48.21, lon: 16.37 }, lifeStage: 'PhD / adult',
      narrative: 'Lower-carbon everyday infrastructure coexists with much greater international mobility and discretionary consumption.',
      inputs: { settlement: 'urban', householdResources: 'comfortable', dwelling: 'student / shared apartment', heating: 'building heating', cooling: 'none', schoolOrWorkMobility: 'public transport / walking', privateCar: false, flightsPerYear: 8, foodPattern: 'home cooking + restaurants', shoppingPattern: 'moderate', monthlySpendingEur: 1250 },
      estimate: { central: 6.8, low: 5.0, high: 9.0, confidence: 'low', status: 'illustrative',
        breakdown: { home: 0.75, food: 1.09, everyday_mobility: 0.35, long_distance_travel: 3.20, goods_leisure: 0.61, shared_society: 0.80 } }
    }
  ]
}

export const davidePlaceholder: PersonProfile = {
  id: 'davide',
  name: 'Davide',
  birthYear: 1993,
  flag: '🇮🇹',
  tagline: 'Italian life-course comparison profile',
  status: 'draft',
  stages: [
    {
      id: 'dv-childhood-imperia',
      startYear: 1993,
      endYear: 2012,
      label: 'Childhood and teenager',
      place: 'Imperia, Liguria, Italy',
      countryCode: 'ITA',
      coordinates: { lat: 43.89, lon: 8.03 },
      lifeStage: 'Childhood / teenager',
      narrative:
        'Grew up in the family hometown near Imperia in an independent villa. Daily life was strongly car-oriented because the family home was outside the city center. Both parents owned cars. Weekend activities included sports-club training, visiting nearby towns and friends, usually by car. Family holidays occurred at least once per year, using an RV, train or flights.',
      inputs: {
        householdResources: 'comfortable',
        housingType: 'independent_villa',
        householdSize: 'family_household',

        cookingFuel: 'gas',
        heating: 'unknown',
        airConditioning: true,

        appliances: [
          'oven',
          'washing_machine'
        ],

        householdCars: 2,
        carDependence: 'high',
        dailyMobility: [
          'family_car'
        ],

        schoolTransport: 'car_or_other',
        weekendMobility: [
          'car',
          'sports_club',
          'nearby_city_visits',
          'friends_visits'
        ],

        holidayFrequency: 'at_least_once_per_year',
        holidayModes: [
          'rv',
          'train',
          'flight'
        ],

        longDistanceTravel: 'regular_family_holiday'
      }
    },

    {
      id: 'dv-university-genova',
      startYear: 2012,
      endYear: 2015,
      label: 'University',
      place: 'Genova, Liguria, Italy',
      countryCode: 'ITA',
      coordinates: { lat: 44.41, lon: 8.93 },
      lifeStage: 'University student',
      narrative:
        'Studied in Genova. Travel between Genova and the family home in Imperia was frequent, typically every weekend, by car or train. Holiday trips with friends within Italy or elsewhere in Europe occurred around one to two times per year.',
      inputs: {
        householdResources: 'student_supported',

        housingType: 'unknown',
        cookingPattern: 'unknown',

        intercityMobility: [
          'car',
          'train'
        ],

        familyVisitFrequency: 'weekly',
        familyVisitRoute: 'Genova–Imperia',

        localMobility: [
          'public_transport',
          'walking',
          'car'
        ],

        holidayFrequency: '1_to_2_times_per_year',
        holidayGeography: [
          'italy',
          'europe'
        ],

        longDistanceTravel: 'moderate'
      }
    },

    {
      id: 'dv-work-milan',
      startYear: 2015,
      endYear: 2019,
      label: 'Early career in Milan',
      place: 'Milan, Lombardy, Italy',
      countryCode: 'ITA',
      coordinates: { lat: 45.46, lon: 9.19 },
      lifeStage: 'Young professional',
      narrative:
        'Worked in Milan and lived alone. Cooking was simple. Returned to Imperia approximately once per month, mainly by car. Within Milan, public transport was used for daily mobility. Holiday trips with friends in Italy or elsewhere in Europe occurred around one to two times per year. This period also included a short stay in Ireland.',
      inputs: {
        householdResources: 'young_professional',

        housingType: 'single_person_apartment',
        livingAlone: true,
        cookingPattern: 'simple_home_cooking',

        localMobility: [
          'public_transport',
          'walking'
        ],

        familyVisitFrequency: 'monthly',
        familyVisitRoute: 'Milan–Imperia',
        familyVisitMode: 'car',

        holidayFrequency: '1_to_2_times_per_year',
        holidayGeography: [
          'italy',
          'europe'
        ],

        internationalStay: [
          'Ireland'
        ],

        longDistanceTravel: 'moderate'
      }
    },

    {
      id: 'dv-work-vienna',
      startYear: 2019,
      endYear: 2022,
      label: 'Work in Vienna',
      place: 'Vienna, Austria',
      countryCode: 'AUT',
      coordinates: { lat: 48.21, lon: 16.37 },
      lifeStage: 'Professional',
      narrative:
        'Moved to Vienna for work. Maintained regular travel between Vienna and Italy, alongside trips within Austria, Italy and other European cities. Leisure travel occurred roughly two to three times per year.',
      inputs: {
        householdResources: 'professional',

        housingType: 'unknown',
        cookingPattern: 'unknown',

        localMobility: [
          'public_transport',
          'walking'
        ],

        internationalMobility: [
          'Austria–Italy'
        ],

        holidayFrequency: '2_to_3_times_per_year',
        holidayGeography: [
          'austria',
          'italy',
          'europe'
        ],

        longDistanceTravel: 'moderate_to_high'
      }
    },

    {
      id: 'dv-shared-vienna',
      startYear: 2023,
      endYear: 2026,
      label: 'Shared life in Vienna',
      place: 'Vienna, Austria',
      countryCode: 'AUT',
      coordinates: { lat: 48.21, lon: 16.37 },
      lifeStage: 'Adult / shared household',
      narrative:
        'From 2023 onward, Davide and Pingping increasingly share the same household and present-day infrastructure in Vienna. Their current lifestyles partly converge, while their childhood environments, mobility systems, household resources and cumulative carbon histories remain very different.',
      inputs: {
        householdResources: 'shared_professional_household',

        housingType: 'shared_household',
        livingWithPartner: true,

        localMobility: [
          'public_transport',
          'walking'
        ],

        internationalMobility: [
          'italy',
          'europe'
        ],

        sharedLifeStage: true,

        longDistanceTravel: 'moderate_to_high'
      }
    }
  ]
}

export const demoProfiles = [pingpingProfile, davidePlaceholder]

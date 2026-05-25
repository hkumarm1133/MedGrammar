/* =============================================
   MedGrammar — Quiz Data (from Excel)
   ============================================= */

const ARTICLE_ERRORS = [
  {
    "reasoning": "The definite article \"the\" is needed before \"patient's\" for correct noun phrase construction.",
    "error": "\"as songs from patient's late teens to early twenties tend to resonate most deeply\" ",
    "correction": " \"as songs from the patient's late teens to early twenties tend to resonate most deeply\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The noun phrase \"outreach clinic\" requires the article \"an.\"",
    "error": "\"at outreach clinic in Axxx closer to home for convenience.\" ",
    "correction": " \"at an outreach clinic in Axxx closer to home for convenience.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The noun phrase needs an article (\"the\") and the standard form is \"side effect profile,\" not \"side effects profile.\"",
    "error": "\"Potential side effects profile is similar to donepezil\" ",
    "correction": " \"The potential side effect profile is similar to donepezil\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The noun \"option\" requires the article \"a\" in this context.",
    "error": "\"which is new option.\" ",
    "correction": " \"which is a new option.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun phrase requires an article; \"An\" is needed before \"information brochure.\"",
    "error": "\"Information brochure on DBS will be provided to him today.\" ",
    "correction": " \"An information brochure on DBS will be provided to him today.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " Incorrect use of the article \"An\" with the plural noun \"issues.\"",
    "error": "\"An ear issues or stroke in the balance center of the brain can cause vertigo.\" ",
    "correction": " \"Ear issues or a stroke in the balance center of the brain can cause vertigo.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing an article before \"last check\" and \"recheck,\" and a comma is needed before \"and\" to join independent clauses.",
    "error": "\"Last check in 2023 revealed some values were slightly elevated and recheck is recommended.\" ",
    "correction": " \"The last check in 2023 revealed some values were slightly elevated, and a recheck is recommended.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The phrase \"on higher dose\" is missing the article \"a,\" and \"bone\" should be pluralized and set off with a comma for correct grammar.",
    "error": "\"It was discussed that the initial higher dose of steroid was to see how he would respond, but being on higher dose will eventually do more harm to his body including his bone and skin.\" ",
    "correction": " \"It was discussed that the initial higher dose of steroid was to see how he would respond, but being on a higher dose will eventually do more harm to his body, including his bones and skin.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"the\" before \"diabetes\" is unnecessary and ungrammatical in this general statement.",
    "error": "\"Explained that the diabetes and blood sugar abnormalities are the most common causes of neuropathy\" ",
    "correction": " \"Explained that diabetes and blood sugar abnormalities are the most common causes of neuropathy\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The definite article \"the\" is required before \"last visit.\"",
    "error": "\"The Keppra dosage was decreased at last visit.\" ",
    "correction": " \"The Keppra dosage was decreased at the last visit.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "Incorrect preposition and missing article; it should be \"use the ... option on the website.\"",
    "error": "\"mother was encouraged to find-a-physician option in the Tourette's website\" ",
    "correction": " \"mother was encouraged to use the find-a-physician option on the Tourette's website\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The noun \"pharmacy\" requires the definite article \"the\" here.",
    "error": "\"to minimize her number of visits to pharmacy.\" ",
    "correction": " \"to minimize her number of visits to the pharmacy.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " Missing article \"the\" before \"cervical spine\" and missing comma after \"Dr. Axxx.\"",
    "error": "\"An MRI of cervical spine showed disc bulging, but this was not felt by the neurosurgeon, Dr. Axxx to be the primary cause.\" ",
    "correction": " \"An MRI of the cervical spine showed disc bulging, but this was not felt by the neurosurgeon, Dr. Axxx, to be the primary cause.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " Missing article \"the\" before \"weakness\" in the phrase \"around the time the weakness began.\"",
    "error": "\"The right arm weakness is believed to be related to a small brain finding described as a microbleed, consistent with a stroke, likely occurring around the time of weakness began in 03/2025 or 04/2024.\" ",
    "correction": " \"The right arm weakness is believed to be related to a small brain finding described as a microbleed, consistent with a stroke, likely occurring around the time the weakness began in 03/2025 or 04/2024.\"  ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"CPAP machine\" for correct noun phrase construction.",
    "error": "\"CPAP machine is not regularly utilized.\" ",
    "correction": " \"The CPAP machine is not regularly utilized.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"an\" is needed before \"increased tendency\" for correct grammar.",
    "error": "\"There is increased tendency for OCD, anxiety issues, and ADHD with Tourette's.\" ",
    "correction": " \"There is an increased tendency for OCD, anxiety issues, and ADHD with Tourette's.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"last visit\" in this context.",
    "error": "\"INTERVAL:  Since last visit, he has been doing well overall.\" ",
    "correction": " \"INTERVAL:  Since the last visit, he has been doing well overall.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The indefinite article \"a\" is appropriate here rather than the definite article \"the\" unless a specific hot tub was previously identified.",
    "error": "\"He has bought the hot tub, which was advised at a previous visit.\" ",
    "correction": " \"He has bought a hot tub, which was advised at a previous visit.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The noun \"issue\" needs an article or should be made plural for correct grammar.",
    "error": "\"He does not have prostate issue.\" ",
    "correction": " \"He does not have a prostate issue.\" or \"He does not have prostate issues.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The noun phrase is missing the article \"a,\" and a comma is needed before \"and this\" to separate the clauses.",
    "error": "\"He has been using large amount of MiraLAX, resulting in liquid stools and this is his only resort to empty his bowels.\" ",
    "correction": " \"He has been using a large amount of MiraLAX, resulting in liquid stools, and this is his only resort to empty his bowels.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "Missing article \"the\" before \"symptom\" and the phrase \"for long\" should be \"for a long time.\"",
    "error": "\"She states that symptom has been ongoing for long, and she is adapting to it.\" ",
    "correction": " \"She states that the symptom has been ongoing for a long time, and she is adapting to it.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "Missing article \"the\" before \"lower limit of normal.\"",
    "error": "\"She was evaluated at Sxxx Hospital and was found to be normal other than the short-term memory, which was at lower limit of normal.\" ",
    "correction": " \"She was evaluated at Sxxx Hospital and was found to be normal other than the short-term memory, which was at the lower limit of normal.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The article \"a\" is incorrect before an uncountable noun phrase and should be removed.",
    "error": "\"a repeat neuropsychological testing will be considered\" ",
    "correction": " \"repeat neuropsychological testing will be considered\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The preposition and article are incorrect for an occupation; \"as an administrator\" is grammatically correct.",
    "error": "\"He works in an Administrator and spends a lot of time on the computer.\" ",
    "correction": " \"He works as an administrator and spends a lot of time on the computer.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The definite article \"the\" is needed before a specific season.",
    "error": "\"In fall of 2022, he sought treatment\" ",
    "correction": " \"In the fall of 2022, he sought treatment\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The subject \"he\" and the article \"a\" are needed for correct grammar.",
    "error": "\"He tried to avoid those exercises, so started on cardio workout.\" ",
    "correction": " \"He tried to avoid those exercises, so he started on a cardio workout.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"a\" is needed before \"varied diet.\"",
    "error": "\"She consumes varied diet including sandwiches, soup, eggs, salmon, and regular family meals on Sunday.\" ",
    "correction": " \"She consumes a varied diet including sandwiches, soup, eggs, salmon, and regular family meals on Sunday.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The noun \"intention\" requires an article (\"an\") in this context.",
    "error": "\"She reports intention to perform stretching exercises at home.\" ",
    "correction": " \"She reports an intention to perform stretching exercises at home.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The article \"a\" is needed before \"few years ago.\"",
    "error": "\"evaluated by this provider few years ago\" ",
    "correction": " \"evaluated by this provider a few years ago\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"the\" is needed before \"use of the sling\" for correct noun phrase construction.",
    "error": "\"which he is unsure if it is related to use of the sling.\" ",
    "correction": " \"which he is unsure if it is related to the use of the sling.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"his\" is needed to make the time reference grammatically correct.",
    "error": "\"Since last visit, he has undergone shoulder surgery and stopped prednisone.\" ",
    "correction": " \"Since his last visit, he has undergone shoulder surgery and stopped prednisone.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"last visit,\" and a comma after \"frequency\" improves clause separation.",
    "error": "\"Since last visit, she reports improvement in headache frequency with minimal headaches over the past 30 days.\" ",
    "correction": " \"Since the last visit, she reports improvement in headache frequency, with minimal headaches over the past 30 days.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The definite article \"the\" is required before \"last visit.\"",
    "error": "\"Since last visit, she has moved in with her daughter due to increased fear and anxiety\" ",
    "correction": " \"Since the last visit, she has moved in with her daughter due to increased fear and anxiety\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"last visit\" in this context.",
    "error": "\"Her symptoms have remained stable since last visit.\" ",
    "correction": " \"Her symptoms have remained stable since the last visit.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"last visit.\"",
    "error": "\"since last visit\" ",
    "correction": " \"since the last visit\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"last visit\" for correct grammar.",
    "error": "\"INTERVAL:  Since last visit, she experienced severe side effects from Topamax,\" ",
    "correction": " \"INTERVAL:  Since the last visit, she experienced severe side effects from Topamax,\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing the verb \"had,\" \"episode\" should be plural, and \"tongue\" requires the definite article \"the.\"",
    "error": "\"During the first and the second episode, he never any episodes of urinary incontinence or biting of tongue during sleep.\" ",
    "correction": " \"During the first and the second episodes, he never had any episodes of urinary incontinence or biting of the tongue during sleep.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The noun phrase \"last visit\" requires the definite article \"the\" in this context.",
    "error": "\"INTERVAL:  Since last visit, she has not experienced any seizures or significant health changes.\" ",
    "correction": " \"INTERVAL:  Since the last visit, she has not experienced any seizures or significant health changes.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The noun phrase is missing the indefinite article \"a.\"",
    "error": "\"She does drive and possesses driver's license.\" ",
    "correction": " \"She does drive and possesses a driver's license.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"last visit\" for correct grammar.",
    "error": "\"Since last visit, she has gained 40 pounds and continues to experience knee dislocations.\" ",
    "correction": " \"Since the last visit, she has gained 40 pounds and continues to experience knee dislocations.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "Missing article \"an\" before \"appointment.\"",
    "error": "\"He had scheduled appointment with Dr. Cxxx.\" ",
    "correction": " \"He had scheduled an appointment with Dr. Cxxx.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "Missing comma after \"rather\" and missing article \"the\" before \"area.\"",
    "error": "\"The ENT specialist stated that it is not paralyzed; rather a lesion may be obstructing area.\" ",
    "correction": " \"The ENT specialist stated that it is not paralyzed; rather, a lesion may be obstructing the area.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "Missing article \"the\" before \"last visit.\"",
    "error": "\"Since last visit, the patient has shown improvement in right arm weakness and overall lab results.\" ",
    "correction": " \"Since the last visit, the patient has shown improvement in right arm weakness and overall lab results.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"last visit.\"",
    "error": "\"Since last visit, the patient has experienced\" ",
    "correction": " \"Since the last visit, the patient has experienced\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The definite article \"the\" is required before \"UK.\"",
    "error": "\"and comes from UK.\" ",
    "correction": " \"and comes from the UK.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The article \"a\" is needed before the singular noun phrase \"tingling sensation.\"",
    "error": "\"tingling sensation in his fingers and toes\" ",
    "correction": " \"a tingling sensation in his fingers and toes\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"last visit\" for correct grammar.",
    "error": "\"Since last visit, she reports that her benign essential tremors have remained mostly stable but are sometimes more pronounced.\" ",
    "correction": " \"Since the last visit, she reports that her benign essential tremors have remained mostly stable but are sometimes more pronounced.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"last visit\" for correct grammar.",
    "error": "\"Since last visit, he has not had any more episodes of seizure.\" ",
    "correction": " \"Since the last visit, he has not had any more episodes of seizure.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The clause is missing the subject \"she\" and article \"the,\" making it grammatically incomplete.",
    "error": "\"as she experiences occasional pain during daytime and also pain when uses phone at night.\" ",
    "correction": " \"as she experiences occasional pain during the daytime and also pain when she uses her phone at night.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The noun \"inability\" requires an article (\"an\") in this context.",
    "error": "\"resulting in inability to teach during 2025.\" ",
    "correction": " \"resulting in an inability to teach during 2025.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " Extraneous article \"the\" before \"bedtime\" and missing article \"the\" before \"affected area.\"",
    "error": "\"By the bedtime, she usually feels tightening in affected area,\" ",
    "correction": " \"By bedtime, she usually feels tightening in the affected area,\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"last visit\" for correct grammar.",
    "error": "\"INTERVAL:  Since last visit, she has not experienced any falls and has not noticed any changes in her gait.\" ",
    "correction": " \"INTERVAL:  Since the last visit, she has not experienced any falls and has not noticed any changes in her gait.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"last visit\" for correct grammar.",
    "error": "\"Since last visit, Topamax was titrated to 100 mg without improvement in migraine frequency or intensity.\" ",
    "correction": " \"Since the last visit, Topamax was titrated to 100 mg without improvement in migraine frequency or intensity.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The indefinite article \"a\" is required before \"partial hysterectomy.\"",
    "error": "\"She has had partial hysterectomy.\" ",
    "correction": " \"She has had a partial hysterectomy.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"last visit\" to make the phrase grammatically correct.",
    "error": "\"INTERVAL:  Since last visit, he reports ongoing fatigue and gait instability but no clearly new neurological symptoms.\" ",
    "correction": " \"INTERVAL:  Since the last visit, he reports ongoing fatigue and gait instability but no clearly new neurological symptoms.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"last visit\" for correct grammar.",
    "error": "\"INTERVAL:  Since last visit, he has experienced balance issues and a decrease in the use of his right hand.\" ",
    "correction": " \"INTERVAL:  Since the last visit, he has experienced balance issues and a decrease in the use of his right hand.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The noun phrase is incorrect; it needs either a plural noun (\"issues\") or an article (\"a\") before the singular noun.",
    "error": "\"he began experiencing leg issue.\" ",
    "correction": " \"he began experiencing leg issues.\" or \"he began experiencing a leg issue.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " This is a comma splice and lacks a subject and article in the second clause; adding a semicolon, subject, and article resolves the grammatical errors.",
    "error": "\"Reyvow  Not taking, patient unsure if currently has medication at home\" ",
    "correction": " \"Reyvow  Not taking; patient is unsure if she currently has the medication at home\" ",
    "section": "MEDICATIONS"
  },
  {
    "reasoning": "The phrasal verb \"come up with\" requires the particle \"up\" to be grammatically and idiomatically correct.",
    "error": "\"she came with four out of the five\" ",
    "correction": " \"she came up with four out of the five\"",
    "section": "PHYSICAL EXAM"
  },
  {
    "reasoning": " The preposition \"in\" and article \"the\" are needed for grammatical completeness.",
    "error": "\"Light Touch, Vibration and Proprioception:  Position sense toes intact.\" ",
    "correction": " \"Light Touch, Vibration and Proprioception:  Position sense in the toes intact.\" ",
    "section": "PHYSICAL EXAM"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"normal range\" in this context.",
    "error": "\"Thiamine levels were within normal range.\" ",
    "correction": " \"Thiamine levels were within the normal range.\"",
    "section": "RESULTS"
  },
  {
    "reasoning": "The noun \"cat\" is missing the article \"a.\"",
    "error": "\"recently due to tripping over cat.\" ",
    "correction": " \"recently due to tripping over a cat.\"",
    "section": "REVIEW OF SYSTEMS"
  },
  {
    "reasoning": " The preposition and article are incorrect for an occupation; \"as an administrator\" is grammatically correct.",
    "error": "\"Occupations:  Works in an Administrator\" ",
    "correction": " \"Occupations: Works as an administrator\" ",
    "section": "SOCIAL HISTORY"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"mother\" for correct grammar.",
    "error": "\"Advised mother to continue frequent feedings throughout the day,\" -",
    "correction": "\"Advised the mother to continue frequent feedings throughout the day,\": The definite article \"the\" is needed before \"mother\" for correct grammar.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"mother\" for correct grammar.",
    "error": "\"Advised mother to continue soaking the affected area\" -",
    "correction": "\"Advised the mother to continue soaking the affected area\" : The definite article \"the\" is needed before \"mother\" for correct grammar.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"current temperature\" for correct grammar.",
    "error": "\"and current temperature is borderline at 100.6.\" -",
    "correction": "\"and the current temperature is borderline at 100.6.\" : The definite article \"the\" is needed before \"current temperature\" for correct grammar.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"recommendations.\"",
    "error": "\"based on recommendations of Baker Hughes.\" -",
    "correction": "\"based on the recommendations of Baker Hughes.\": The definite article \"the\" is needed before \"recommendations.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"mother\" for correct grammar.",
    "error": "\"Encouraged mother to file the infant's nails if she feels comfortable doing so.\" -",
    "correction": "\"Encouraged the mother to file the infant's nails if she feels comfortable doing so.\": The definite article \"the\" is needed before \"mother\" for correct grammar.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The phrase \"cause development of spots\" is missing the article \"the\" before \"development.\"",
    "error": "\"Excessive consumption of carrots can cause the skin color to turn orange, and increased vitamin A can cause development of spots on the eyes.\" -",
    "correction": "\"Excessive consumption of carrots can cause the skin color to turn orange, and increased vitamin A can cause the development of spots on the eyes.\" : The phrase \"cause development of spots\" is missing the article \"the\" before \"development.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The noun phrase requires an article (\"an\") before \"18-month well-child visit\" to be grammatically correct.",
    "error": "\"Follow-up:  The patient will follow up in 3 months for 18-month well-child visit.\" -",
    "correction": "\"Follow-up: The patient will follow up in 3 months for an 18-month well-child visit.\": The noun phrase requires an article (\"an\") before \"18-month well-child visit\" to be grammatically correct.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The noun \"father\" here needs the definite article \"the\" for correct grammar.",
    "error": "\"Given the family history of walnut allergy in father, peanuts should not be the first food introduced\" -",
    "correction": "\"Given the family history of walnut allergy in the father, peanuts should not be the first food introduced\": The noun \"father\" here needs the definite article \"the\" for correct grammar.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"pharmacy\" for correct grammar.",
    "error": "\"has been provided and sent to pharmacy.\" -",
    "correction": "\"has been provided and sent to the pharmacy.\": The definite article \"the\" is needed before \"pharmacy\" for correct grammar.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The noun \"mother\" should take the definite article \"the\" in this context.",
    "error": "\"If crusting occurs only once a day and does not persist, mother can leave it alone.\" -",
    "correction": "\"If crusting occurs only once a day and does not persist, the mother can leave it alone.\": The noun \"mother\" should take the definite article \"the\" in this context.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing a subject (\"it is\") and the noun \"decongestant\" needs an article.",
    "error": "\"If tests are negative, recommended to take real Mucinex, which contains decongestant, in combination with Tylenol.\" -",
    "correction": "\"If tests are negative, it is recommended to take real Mucinex, which contains a decongestant, in combination with Tylenol.\" : The sentence is missing a subject (\"it is\") and the noun \"decongestant\" needs an article.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The original phrasing is grammatically awkward and missing an article; this is a clearer and grammatically correct construction.",
    "error": "\"If there is presence of strep in the throat\" -",
    "correction": "\"If strep is present in the throat\": The original phrasing is grammatically awkward and missing an article; this is a clearer and grammatically correct construction.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The noun \"condition\" needs the definite article \"the\" in this context.",
    "error": "\"inform parents if condition worsens.\" -",
    "correction": "\"inform parents if the condition worsens.\": The noun \"condition\" needs the definite article \"the\" in this context.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing an article before \"nasal swab\"; adding \"a\" makes it grammatically correct.",
    "error": "\"Nasal swab was obtained.\" -",
    "correction": "\"A nasal swab was obtained.\" : The sentence is missing an article before \"nasal swab\"; adding \"a\" makes it grammatically correct.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The definite article \"the\" is needed, and the pronoun \"it\" clarifies the subject of \"can be received early.\"",
    "error": "\"Noted that he will require meningitis vaccine when he is in seventh grade but can be received early.\" -",
    "correction": "\"Noted that he will require the meningitis vaccine when he is in seventh grade, but it can be received early.\": The definite article \"the\" is needed, and the pronoun \"it\" clarifies the subject of \"can be received early.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing an article before \"physical exam.\"",
    "error": "\"Physical exam was performed.\" -",
    "correction": "\"A physical exam was performed.\" : The sentence is missing an article before \"physical exam.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The original is a sentence fragment lacking a subject and verb, and \"every six-hour breathing treatments\" needs an article and hyphenation for correct grammatical construction.",
    "error": "\"Prescribed prednisone to be used for 3 days if symptoms of cough and congestion persist after the Z-Pak and every six-hour breathing treatments.\" -",
    "correction": "\"Prednisone was prescribed to be used for 3 days if symptoms of cough and congestion persist after the Z-Pak and the every-six-hour breathing treatments.\" : The original is a sentence fragment lacking a subject and verb, and \"every six-hour breathing treatments\" needs an article and hyphenation for correct grammatical construction.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing a subject (\"He\") and needs the definite article \"the\" before \"HPV vaccine.\"",
    "error": "\"Received the Tdap, MenQuadfi, and influenza vaccines today but can wait on HPV vaccine.\" -",
    "correction": "\"He received the Tdap, MenQuadfi, and influenza vaccines today but can wait on the HPV vaccine.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"pharmacy.\"",
    "error": "\"Send a prescription to pharmacy for liquid Z-Pak\" -",
    "correction": "\"Send a prescription to the pharmacy for liquid Z-Pak\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The article \"an\" is needed before \"EGG allergy.\"",
    "error": "\"She has had EGG allergy but has been consuming EGGS without issues.\" -",
    "correction": "\"She has had an EGG allergy but has been consuming EGGS without issues.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"a\" before \"maladaptive eating behavior\" is unnecessary and ungrammatical in this context.",
    "error": "\"She saw Dr. Bxxx on 11/14/2025 for a maladaptive eating behavior and is scheduled to see her again on 01/15/2026.\" -",
    "correction": "\"She saw Dr. Bxxx on 11/14/2025 for maladaptive eating behavior and is scheduled to see her again on 01/15/2026.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"nose.\"",
    "error": "\"Small, raised bumps on nose, likely milia, were observed.\" -",
    "correction": "\"Small, raised bumps on the nose, likely milia, were observed.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "Missing article \"the\" makes the phrase grammatically incomplete.",
    "error": "\"The congestion at this age could be due to weather changing.\" -",
    "correction": "\"The congestion at this age could be due to the weather changing.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"external environment\" for correct grammar.",
    "error": "\"The transition from amniotic fluid to external environment may be causing the chapped lips,\" -",
    "correction": "\"The transition from amniotic fluid to the external environment may be causing the chapped lips,\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"third cycle.\"",
    "error": "\"This is third cycle, and it is still ongoing.\" -",
    "correction": "\"This is the third cycle, and it is still ongoing.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The phrase \"mild temperature\" requires the article \"a\" to be grammatically correct.",
    "error": "\"Tylenol will be provided for use in case of mild temperature of 99 or fussiness post-vaccination.\" -",
    "correction": "\"Tylenol will be provided for use in case of a mild temperature of 99 or fussiness post-vaccination.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"a\" before \"lead exposure\" is unnecessary and ungrammatical in this context.",
    "error": "\"unless there is a concern for a lead exposure.\" -",
    "correction": "\"unless there is concern for lead exposure.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The phrase \"in similar situation\" is missing the article \"a,\" and the construction \"based on age to continue\" is ungrammatical and needs restructuring.",
    "error": "\"The current guidelines recommend that male patients who are in similar situation and based on age to continue taking Eliquis.\" ",
    "correction": " \"The current guidelines recommend that male patients who are in a similar situation and of his age continue taking Eliquis.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun \"aim\" requires the definite article \"the.\"",
    "error": "\"Exercise is crucial in preventing atrial fibrillation, so aim should be for 30 minutes of moderate to strenuous exercise daily.\" ",
    "correction": " \"Exercise is crucial in preventing atrial fibrillation, so the aim should be for 30 minutes of moderate to strenuous exercise daily.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun \"recommendation\" requires the definite article \"the.\"",
    "error": "\"If atrial fibrillation recurs for more than an hour, recommendation will be to resume the blood thinner for a month.\" ",
    "correction": " \"If atrial fibrillation recurs for more than an hour, the recommendation will be to resume the blood thinner for a month.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"a\" is needed before \"similar situation.\"",
    "error": "\"male patients who are in similar situation\" ",
    "correction": " \"male patients who are in a similar situation\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The possessive pronoun \"their\" and the article \"their\" before \"primary care physician\" improve grammatical correctness.",
    "error": "\"the patient should contact primary care physician or cardiologist for a referral back to sleep medicine.\" ",
    "correction": " \"the patient should contact their primary care physician or cardiologist for a referral back to sleep medicine.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The phrase is missing the article \"the,\" and \"with Aldactazide\" is the more appropriate preposition than \"on Aldactazide\" in this context.",
    "error": "\"Potassium levels are stable; monitor potassium twice a year due to potential for high potassium on Aldactazide.\" ",
    "correction": " \"Potassium levels are stable; monitor potassium twice a year due to the potential for high potassium with Aldactazide.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing an initial article, needs a comma before \"and,\" and is missing the article \"a\" before \"nonspecific T wave abnormality.\"",
    "error": "\"T wave represents the heart's relaxation phase, which is typically upright in the EKG and a flat T wave is described as non-specific T wave abnormality.\" ",
    "correction": " \"The T wave represents the heart's relaxation phase, which is typically upright on the EKG, and a flat T wave is described as a nonspecific T wave abnormality.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original sentence has a comma splice and is missing necessary articles, making the structure grammatically incorrect.",
    "error": "\"EKG shows nonspecific T wave abnormalities, likely due to medication, the flecainide, not indicative of heart disease as patient is asymptomatic.\" ",
    "correction": " \"EKG shows nonspecific T wave abnormalities, likely due to the medication flecainide and not indicative of heart disease, as the patient is asymptomatic.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original sentence is grammatically awkward (\"Emphasized regarding\") and is missing necessary articles (\"a\" and \"the\") before \"CT scan\" and \"chest.\"",
    "error": "\"Emphasized regarding the importance of obtaining CT scan of chest, abdomen, and pelvis for catheter placement.\" ",
    "correction": " \"Emphasized the importance of obtaining a CT scan of the chest, abdomen, and pelvis for catheter placement.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"a\" is needed before \"slight reduction.\"",
    "error": "\"it contributes to slight reduction in blood pressure.\" ",
    "correction": " \"it contributes to a slight reduction in blood pressure.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"medication regimen\" for correct noun phrase construction.",
    "error": "\"medication regimen will be reassessed.\" ",
    "correction": " \"the medication regimen will be reassessed.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The article \"an\" and the preposition \"in\" are needed for correct noun phrase and prepositional use.",
    "error": "\"Reports increase of heart rate to 95 bpm.\" ",
    "correction": " \"Reports an increase in heart rate to 95 bpm.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The article \"a\" is needed before \"statin\" for correct noun usage.",
    "error": "\"Trial of an alternative cholesterol-lowering medication other than statin was discussed.\" ",
    "correction": " \"Trial of an alternative cholesterol-lowering medication other than a statin was discussed.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " A comma after \"recheck\" and the article \"the\" before \"ablation\" are needed for correct grammar and clarity.",
    "error": "\"However, on recheck ablation appears to be adequate today.\" ",
    "correction": " \"However, on recheck, the ablation appears to be adequate today.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun \"nephrologist\" requires the definite article \"the\" in this context.",
    "error": "\"Advised to consult with nephrologist for further management.\" ",
    "correction": " \"Advised to consult with the nephrologist for further management.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun \"nephrologist\" requires the definite article \"the\" in this context.",
    "error": "\"Advised to consult with nephrologist for guidance on managing fluid overload without compromising kidney function.\" ",
    "correction": " \"Advised to consult with the nephrologist for guidance on managing fluid overload without compromising kidney function.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun phrase is missing the definite article \"the,\" which is needed for correct grammar in this context.",
    "error": "\"the possibility of discontinuing blood thinner 5 to 7 days prior to surgery.\" ",
    "correction": " \"the possibility of discontinuing the blood thinner 5 to 7 days prior to surgery.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is missing before \"patient,\" making the phrase grammatically incorrect.",
    "error": "\"which could indicate that patient is receiving an excessive dose of Bumex.\" ",
    "correction": " \"which could indicate that the patient is receiving an excessive dose of Bumex.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" before \"medication adherence\" is unnecessary and ungrammatical here.",
    "error": "\"idiosyncratic and selective approach to the medication adherence raises concern\" ",
    "correction": " \"idiosyncratic and selective approach to medication adherence raises concern\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun phrase \"high-risk procedure\" requires the article \"a\" for correct grammar.",
    "error": "\"perform high-risk procedure like valve replacement\" ",
    "correction": " \"perform a high-risk procedure like valve replacement\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The nouns \"statin\" and \"chance\" require the articles \"a\" and \"the\" for correct grammatical usage.",
    "error": "\"Taking statin after TAVR will reduce chance of recurrent stenosis of the valve.\" ",
    "correction": " \"Taking a statin after TAVR will reduce the chance of recurrent stenosis of the valve.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " Missing definite article \"the\" before \"tracing feature,\" and \"Watch\" should be capitalized as part of the proper noun \"Axxx Watch.\"",
    "error": "\"Informed that tracing feature of atrial fibrillation in an Axxx Watch is not as accurate as with a loop recorder.\" ",
    "correction": " \"Informed that the tracing feature of atrial fibrillation in an Axxx Watch is not as accurate as with a loop recorder.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing an explicit subject and article, making it grammatically incomplete.",
    "error": "\"Informed that her PVCs are controlled on very low dosage of diltiazem.\" ",
    "correction": " \"She was informed that her PVCs are controlled on a very low dosage of diltiazem.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing an explicit subject and the definite article \"the\" before \"heart,\" making it grammatically incomplete.",
    "error": "\"Reassured that this is likely due to the anatomical positioning of the artery near the ear canal and not related to heart or blood pressure.\" ",
    "correction": " \"She was reassured that this is likely due to the anatomical positioning of the artery near the ear canal and not related to the heart or blood pressure.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"the\" is needed before \"hospital stay\" for correct noun phrase construction.",
    "error": "\"Low potassium level was noted during hospital stay and was treated appropriately.\" ",
    "correction": " \"Low potassium level was noted during the hospital stay and was treated appropriately.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"pharmacy\" for correct grammar.",
    "error": "\"Refills for medications have been sent to pharmacy.\" ",
    "correction": " \"Refills for medications have been sent to the pharmacy.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"office\" for correct grammar.",
    "error": "\"office should be contacted so that medication options such as Florinef and midodrine can be considered.\" ",
    "correction": " \"the office should be contacted so that medication options such as Florinef and midodrine can be considered.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"a\" is incorrect in this construction and should be omitted.",
    "error": "\"especially since swelling is relatively a new issue for her.\" ",
    "correction": " \"especially since swelling is relatively new for her.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "Missing articles \"an\" and \"a\" make the sentence grammatically incomplete.",
    "error": "\"No significant structural or valvular problems were noted on echocardiogram few years ago.\" ",
    "correction": " \"No significant structural or valvular problems were noted on an echocardiogram a few years ago.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " \"The cardiology\" is incorrect usage here; the article \"the\" should be removed when referring to the specialty in this context.",
    "error": "\"Follow-up: The patient will follow up with the cardiology once the heart rate has stabilized.\" ",
    "correction": " \"Follow-up:  The patient will follow up with cardiology once the heart rate has stabilized.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is needed before the singular noun \"anesthesiologist\" to make the phrase grammatically complete.",
    "error": "\"A note with specific recommendations will be provided to anesthesiologist for managing potential intraoperative complications,\" ",
    "correction": " \"A note with specific recommendations will be provided to the anesthesiologist for managing potential intraoperative complications,\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"a\" is needed before \"clearance visit\" for correct grammar.",
    "error": "\"Today’s visit may serve as clearance visit.\" ",
    "correction": " \"Today’s visit may serve as a clearance visit.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing an article and a verb to be grammatically complete.",
    "error": "\"- Information on low-fat diet provided.\" ",
    "correction": " \"- Information on a low-fat diet was provided.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The singular countable noun phrase \"cholesterol level check\" requires an article (\"a\").",
    "error": "\"- Given his age, with no evidence of vascular blockage or diabetes, cholesterol level check is deemed unnecessary.\" ",
    "correction": " \"- Given his age, with no evidence of vascular blockage or diabetes, a cholesterol level check is deemed unnecessary.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " Indefinite articles (\"an\" and \"a\") are needed before the singular countable nouns \"electrophysiologist\" and \"provider assistant.\"",
    "error": "\"- The patient was seen by electrophysiologist on 03/27/2025 and by provider assistant on 01/08/2025.\" ",
    "correction": " \"- The patient was seen by an electrophysiologist on 03/27/2025 and by a provider assistant on 01/08/2025.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The phrase \"help with reducing the cholesterol\" is wordy and ungrammatical; \"help reduce cholesterol\" is the correct verb construction and article use.",
    "error": "\"- Praluent might help with reducing the cholesterol.\" ",
    "correction": " \"- Praluent might help reduce cholesterol.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"last echocardiogram\" for correct grammar.",
    "error": "\"Ejection fraction has shown improvement on last echocardiogram.\" ",
    "correction": " \"Ejection fraction has shown improvement on the last echocardiogram.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The noun \"pharmacy\" requires the definite article \"the\" in this context.",
    "error": "\"A call will be made to pharmacy to ensure the medication is supplied.\" ",
    "correction": " \"A call will be made to the pharmacy to ensure the medication is supplied.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing necessary articles (\"a\" and \"the\") and a comma after \"Previously\" for correct grammar.",
    "error": "\"Previously nuclear stress test was performed, and option of CAT scan of the arteries was discussed.\" ",
    "correction": " \"Previously, a nuclear stress test was performed, and the option of a CAT scan of the arteries was discussed.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"a\" is needed before \"disk issue,\" and the verb \"is\" is needed for correct clause structure.",
    "error": "\"- The back pain appears to be musculoskeletal in nature and could be disk issue, but not cardiovascular related.\" ",
    "correction": " \"- The back pain appears to be musculoskeletal in nature and could be a disk issue, but is not cardiovascular related.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"The\" is needed before \"patient,\" and \"mid-next week\" is not a standard grammatical construction.",
    "error": "\"Patient will be contacted by mid-next week to finalize the treatment plan.\" ",
    "correction": " \"The patient will be contacted by the middle of next week to finalize the treatment plan.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " Articles are missing before \"hospital visit\" and \"patient's wife,\" and the phrase \"wife review\" is ungrammatical without \"to\" or a possessive construction.",
    "error": "\"Summary of hospital visit will be provided for patient's wife review.\" ",
    "correction": " \"Summary of the hospital visit will be provided for the patient's wife to review.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun \"decline\" in this context requires the article \"a.\"",
    "error": "\"GFR has shown decline from prior values of approximately 55 and 60.\" ",
    "correction": " \"GFR has shown a decline from prior values of approximately 55 and 60.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun \"beginning\" requires the definite article \"the\" in this context.",
    "error": "\"indicating beginning of coronary artery disease.\" ",
    "correction": " \"indicating the beginning of coronary artery disease.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun phrase \"pain management specialist\" needs the article \"a\" to be grammatically correct.",
    "error": "\"- Nerve block was performed by pain management specialist, which resulted in remarkable improvement of her pain.\" ",
    "correction": " \"- Nerve block was performed by a pain management specialist, which resulted in remarkable improvement of her pain.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The definite article \"the\" before \"cholesterol management\" is unnecessary and ungrammatical in this context.",
    "error": "\"- A new medication for the cholesterol management has been initiated after the catheterization.\" ",
    "correction": " \"- A new medication for cholesterol management has been initiated after the catheterization.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "Subject-verb agreement error (\"Ranexa and Lasix\" is plural and requires \"do,\" and the definite article \"the\" before \"Ranexa\" is unnecessary).",
    "error": "\"Entresto, eplerenone, Jardiance, and carvedilol will improve the heart function the most, whereas the Ranexa and Lasix does not improve the heart function much.\" ",
    "correction": " \"Entresto, eplerenone, Jardiance, and carvedilol will improve the heart function the most, whereas Ranexa and Lasix do not improve the heart function much.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun \"aorta\" requires the definite article \"the\" in this context.",
    "error": "\"Noncontrast CT scan measured aorta at 3.5 cm, within normal limits for body surface area and gender.\" ",
    "correction": " \"Noncontrast CT scan measured the aorta at 3.5 cm, within normal limits for body surface area and gender.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"a\" is needed before \"stroke,\" and a comma is needed before \"or\" in a list of three items.",
    "error": "\"Explained that she has a 5% annual risk of developing stroke, TIA or embolism.\" ",
    "correction": " \"Explained that she has a 5% annual risk of developing a stroke, TIA, or embolism.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " Missing preposition and article; \"during shower\" should be \"during showers,\" and punctuation improves clause separation.",
    "error": "\"Instructions provided that she can wear it all the time sleeping, walking, working except during shower.\" ",
    "correction": " \"Instructions provided that she can wear it all the time—sleeping, walking, working—except during showers.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"last 3 months\" for correct grammar.",
    "error": "\"- Had 2 episodes of chest pain in last 3 months.\" ",
    "correction": " \"- Had 2 episodes of chest pain in the last 3 months.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " \"Immune system\" should be singular in this context, and the article \"the\" is needed for grammatical correctness.",
    "error": "\"This would help with boosting energy and immune systems as well.\" ",
    "correction": " \"This would help with boosting energy and the immune system as well.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is missing before \"patient.\"",
    "error": "\"However, patient is in renal failure, currently stable, and asymptomatic.\" ",
    "correction": " \"However, the patient is in renal failure, currently stable, and asymptomatic.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"patient,\" and the second clause should include \"that\" for proper parallel structure.",
    "error": "\"Informed patient that it is not common for individuals to wake up in the middle of the night with atrial fibrillation and patient appears to be more sensitive compared to others.\" ",
    "correction": " \"Informed the patient that it is not common for individuals to wake up in the middle of the night with atrial fibrillation and that the patient appears to be more sensitive compared to others.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The phrase is missing an article and the compound adjective \"30-day\" requires a hyphen.",
    "error": "\"Continue current management and 30 day monitor for any recurrence of symptoms.\" ",
    "correction": " \"Continue current management and a 30-day monitor for any recurrence of symptoms.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"next follow-up visit\" for correct grammar.",
    "error": "\"prior to next follow-up visit or probably sooner than that\" ",
    "correction": " \"prior to the next follow-up visit or probably sooner than that\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The noun phrase \"specialty pharmacy\" requires an article (\"a\") in the singular form or should be made plural for correct grammar.",
    "error": "\"can be procured through specialty pharmacy at a cheaper cost.\" ",
    "correction": " \"can be procured through a specialty pharmacy at a cheaper cost.\" or \"can be procured through specialty pharmacies at a cheaper cost.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The noun form \"cutoff\" should be written as one word, and the definite article \"the\" is needed before \"creatinine cutoff.\"",
    "error": "\"Currently, creatinine cut off is 1.27, which is at the borderline of the cut off based on body composition.\" ",
    "correction": " \"Currently, the creatinine cutoff is 1.27, which is at the borderline of the cutoff based on body composition.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"patient.\"",
    "error": "\"- A note will be provided for school regarding the monitor and allowing patient to continue with usual activities.\" ",
    "correction": " \"- A note will be provided for school regarding the monitor and allowing the patient to continue with usual activities.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing an article and a linking verb, and the word order should be adjusted for correct grammar.",
    "error": "\"Coronary calcium score test recommended also to assess for potential calcium buildup in coronary arteries.\" ",
    "correction": " \"A coronary calcium score test is also recommended to assess for potential calcium buildup in coronary arteries.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original sentence lacks a clear subject and article (\"a\") before \"small dose,\" and is missing a period at the end.",
    "error": "\"- If symptoms such as a racing heart occur, advised to inform for initiation of small dose of metoprolol, as metoprolol may suppress cardiac activity and reduce palpitations, though it may not fully address associated anxiety\" ",
    "correction": " \"- If symptoms such as a racing heart occur, he is advised to inform us for initiation of a small dose of metoprolol, as metoprolol may suppress cardiac activity and reduce palpitations, though it may not fully address associated anxiety.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"patient\" for correct grammar.",
    "error": "\"- Discussed the option of adding Pepcid at night if symptoms worsen, but patient prefers to wait.\" ",
    "correction": " \"- Discussed the option of adding Pepcid at night if symptoms worsen, but the patient prefers to wait.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"the\" is needed before \"lab,\" and a comma and article before \"frequency\" improve grammatical completeness.",
    "error": "\"- If polyps are found during colonoscopy, they would be sent to lab for analysis and frequency of the procedure may increase to every year or every 3 years.\" ",
    "correction": " \"- If polyps are found during colonoscopy, they would be sent to the lab for analysis, and the frequency of the procedure may increase to every year or every 3 years.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun phrase \"GI standpoint\" is missing the definite article \"the.\"",
    "error": "\"It was communicated that trying the anxiety medication would be acceptable from GI standpoint,\" ",
    "correction": " \"It was communicated that trying the anxiety medication would be acceptable from the GI standpoint,\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"a\" is needed before \"diet\" to make the sentence grammatically correct.",
    "error": "\"Recommended to continue eating diet rich in iron.\" ",
    "correction": " \"Recommended to continue eating a diet rich in iron.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The semicolon is unnecessary before \"but,\" and the article \"the\" is needed before \"anesthesia team\" for correct grammar.",
    "error": "\"Abstain from aspirin for at least 3 days prior to the procedure as per the paperwork to prevent the risk of bleeding; but anesthesia team allows medication intake up to 1 day prior.\" ",
    "correction": " \"Abstain from aspirin for at least 3 days prior to the procedure as per the paperwork to prevent the risk of bleeding, but the anesthesia team allows medication intake up to 1 day prior.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"a\" is missing before \"message,\" and the verb tense should match the surrounding future tense (\"will be sent\" instead of \"would be sent\").",
    "error": "\"and message would be sent to the patient portal.\" ",
    "correction": " \"and a message will be sent to the patient portal.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original is a fragment with no subject and is missing the article \"the\" before \"body.\"",
    "error": "\"Cautioned it might result in some bloating at first while body adjusts to the fiber.\" ",
    "correction": " \"She was cautioned that it might result in some bloating at first while the body adjusts to the fiber.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The article \"a\" is needed before \"few\" to be grammatically correct in this context.",
    "error": "\"On the left side there are few gastrointestinal organs\" ",
    "correction": " \"On the left side there are a few gastrointestinal organs\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"a\" is needed before \"GI standpoint\" for correct grammar.",
    "error": "\"from GI standpoint.\" ",
    "correction": " \"from a GI standpoint.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The word \"Then\" should be capitalized to start a new sentence, and \"half cap\" requires the article \"a\" for correct grammar.",
    "error": "\"for the first day or two for a 'flush-out.' then maintain half cap daily\" ",
    "correction": " \"for the first day or two for a 'flush-out.' Then maintain half a cap daily\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is required before \"gallbladder,\" and the verb \"is\" is needed for proper subject-verb construction in the second clause.",
    "error": "\"Moderate probability that gallbladder is causing symptoms; further investigation needed to rule out stones in the bile duct.\" ",
    "correction": " \"Moderate probability that the gallbladder is causing symptoms; further investigation is needed to rule out stones in the bile duct.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The noun \"colonoscopy\" needs an article (\"a\") in this context.",
    "error": "\"Dr. Txxx had ordered colonoscopy at regular intervals after age 50, but the minimum age requirement for getting a colonoscopy done is now 45 years of age.\" ",
    "correction": " \"Dr. Txxx had ordered a colonoscopy at regular intervals after age 50, but the minimum age requirement for getting a colonoscopy done is now 45 years of age.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The noun \"pharmacy\" requires the definite article \"the\" in this sentence.",
    "error": "\"Prescription for Amitiza, to be taken twice daily, will be sent to pharmacy.\" ",
    "correction": " \"Prescription for Amitiza, to be taken twice daily, will be sent to the pharmacy.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"the\" is needed before \"next\" to make the phrase grammatically correct.",
    "error": "\"including a full panel for vitamin deficiencies in next routine lab monitoring.\" ",
    "correction": " \"including a full panel for vitamin deficiencies in the next routine lab monitoring.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing both an article before \"scheduling team\" and an object indicating who will be contacted.",
    "error": "\"Scheduling team will contact to arrange procedures.\" ",
    "correction": " \"The scheduling team will contact him to arrange procedures.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " \"Gall bladder\" should be one word in this context, and the definite article \"the\" is needed before \"recent past\" for correct grammar.",
    "error": "\"Gall bladder removal in recent past.\" ",
    "correction": " \"Gallbladder removal in the recent past.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " A comma after \"well\" and the article \"the\" before \"current symptoms\" are needed for proper grammar and clarity.",
    "error": "\"IBS can cause constipation as well but current symptoms align more with diarrhea type\" ",
    "correction": " \"IBS can cause constipation as well, but the current symptoms align more with diarrhea type\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The indefinite article \"a\" is needed before \"dietitian.\"",
    "error": "\"Discussed referral to dietitian to manage nutrition in the setting of diabetes, reflux, and constipation.\" ",
    "correction": " \"Discussed referral to a dietitian to manage nutrition in the setting of diabetes, reflux, and constipation.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The indefinite article \"a\" is needed before \"hiatal hernia,\" and a comma before \"which\" improves grammatical correctness.",
    "error": "\"Endoscopy revealed hiatal hernia which increases the risk of reflux due to impairment of the diaphragm's normal pinching effect.\" ",
    "correction": " \"Endoscopy revealed a hiatal hernia, which increases the risk of reflux due to impairment of the diaphragm's normal pinching effect.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " Missing definite article \"the\" before \"pancreas.\"",
    "error": "\"flushing pancreas with fluid,\" ",
    "correction": " \"flushing the pancreas with fluid,\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " Missing definite articles \"the\" before \"bile duct\" and \"liver.\"",
    "error": "\"if bile duct descends from liver,\" ",
    "correction": " \"if the bile duct descends from the liver,\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " Missing definite article \"the\" before \"stent.\"",
    "error": "\"only a small hole just large enough for stent is left.\" ",
    "correction": " \"only a small hole just large enough for the stent is left.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"a\" is needed before \"colonoscopy\" to make the sentence grammatically correct.",
    "error": "\"Ensure adequate hydration by drinking plenty of water in order to have colonoscopy without issues.\" ",
    "correction": " \"Ensure adequate hydration by drinking plenty of water in order to have a colonoscopy without issues.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The article \"a\" is needed before \"family history\" for correct noun phrase usage.",
    "error": "\"For individuals at average risk, those without family history of colorectal cancer and without prior polyps, colonoscopy is not required every 3 years.\" ",
    "correction": " \"For individuals at average risk, those without a family history of colorectal cancer and without prior polyps, colonoscopy is not required every 3 years.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The article \"A\" is needed before \"pediatric colonoscope\" to form a correct noun phrase.",
    "error": "\"Pediatric colonoscope is generally reserved for true narrowing of the colon.\" ",
    "correction": " \"A pediatric colonoscope is generally reserved for true narrowing of the colon.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"The\" is needed before \"procedure\" to form a complete noun phrase.",
    "error": "\"Procedure carries a risk of 1 in 10,000.\" ",
    "correction": " \"The procedure carries a risk of 1 in 10,000.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The noun phrase \"current condition\" requires the definite article \"the.\"",
    "error": "\"as it would have clearly exacerbated current condition and worsened overall symptoms.\" ",
    "correction": " \"as it would have clearly exacerbated the current condition and worsened overall symptoms.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing both an article before \"scheduler\" and an object after \"contact,\" making it grammatically incomplete.",
    "error": "\"Scheduler will contact to set a tentative date for the procedure.\" ",
    "correction": " \"The scheduler will contact her to set a tentative date for the procedure.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " Missing definite article \"the\" before \"night\" makes the phrase grammatically incorrect.",
    "error": "\"urge to defecate in the middle of night.\" ",
    "correction": " \"urge to defecate in the middle of the night.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"small intestine,\" and the verb should agree with the plural noun \"stools\" (\"are\" instead of \"is\").",
    "error": "\"Bacterial overgrowth in small intestine causes loose stools, which is hydrogen predominant.\" ",
    "correction": " \"Bacterial overgrowth in the small intestine causes loose stools, which are hydrogen predominant.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " \"Follow-up\" used as a noun should be hyphenated, and the article \"a\" is needed before \"telehealth visit.\"",
    "error": "\"Follow up appointment can be telehealth visit as well.\" ",
    "correction": " \"Follow-up appointment can be a telehealth visit as well.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is missing before \"presence.\"",
    "error": "\"- Physical examination of the anal area to be performed in presence of a chaperone to check for any abnormalities.\" ",
    "correction": " \"- Physical examination of the anal area to be performed in the presence of a chaperone to check for any abnormalities.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " Commas are needed around the phrase \"if left untreated,\" and the article \"a\" should precede \"stomach ulcer.\"",
    "error": "\"- Repeat EGD in approximately 3 months (around 02/2026) to ensure the ulcer has healed as sometimes the stomach ulcer if left untreated can lead to stomach cancer.\" ",
    "correction": " \"- Repeat EGD in approximately 3 months (around 02/2026) to ensure the ulcer has healed, as sometimes a stomach ulcer, if left untreated, can lead to stomach cancer.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"the\" is missing, and the passive clause requires \"is\" to be grammatically correct.",
    "error": "\"Contact provided number if no communication received regarding the procedure.\" ",
    "correction": " \"Contact the provided number if no communication is received regarding the procedure.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The article \"a\" is needed before \"normal digestive system,\" and the verb \"digest\" is required to make the sentence complete and meaningful.",
    "error": "\"people with normal digestive system are able to eggs within about 2 hours\" ",
    "correction": " \"people with a normal digestive system are able to digest eggs within about 2 hours\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing a subject article (\"The\") and an object (\"her\") for the verb \"contact.\"",
    "error": "\"Radiology department will contact within a week to schedule the procedure.\" ",
    "correction": " \"The Radiology department will contact her within a week to schedule the procedure.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The article \"a\" is needed before \"further treatment plan\" for correct noun phrase usage.",
    "error": "\"Follow up in 4 weeks to formulate further treatment plan.\" ",
    "correction": " \"Follow up in 4 weeks to formulate a further treatment plan.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun \"drug\" should be preceded by the definite article \"the\" to be grammatically complete in this context.",
    "error": "\"Monitoring calprotectin levels provides an assessment of response to drug at therapeutic drug levels,\" ",
    "correction": " \"Monitoring calprotectin levels provides an assessment of response to the drug at therapeutic drug levels,\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " Missing article \"the\" before \"dietitian\" and missing comma before the coordinating conjunction \"and.\"",
    "error": "\"Dietitian will be consulted to determine if any adjustments are needed and the same will be conveyed via MyChart.\" ",
    "correction": " \"The dietitian will be consulted to determine if any adjustments are needed, and the same will be conveyed via MyChart.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"the\" is missing before \"presence,\" and \"presence autoimmune disease\" is ungrammatical without \"of.\"",
    "error": "\"Elevated calprotectin levels alone do not necessarily indicate presence autoimmune disease.\" ",
    "correction": " \"Elevated calprotectin levels alone do not necessarily indicate the presence of autoimmune disease.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The noun phrase \"mail-order pharmacy\" requires an article.",
    "error": "\"Informed that mail-order pharmacy works more effectively with the patient's insurance provider...\" ",
    "correction": " \"Informed that the mail-order pharmacy works more effectively with the patient's insurance provider...\" or \"that a mail-order pharmacy works more effectively...\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The gerund phrase \"approaching differently\" is incomplete without specifying what is being approached, and the sentence is missing the article \"the\" before \"feeding therapist\" and \"an\" before \"OT.\"",
    "error": "\"At times, speech therapy and occupational therapy approaching differently could be beneficial since feeding therapist can either be OT or a speech therapist.\" ",
    "correction": " \"At times, speech therapy and occupational therapy approaching feeding differently could be beneficial, since the feeding therapist can be either an OT or a speech therapist.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"A\" is needed before \"high dose.\"",
    "error": "\"High dose of PPI or oral steroids can be used to manage the symptoms.\" ",
    "correction": " \"A high dose of PPI or oral steroids can be used to manage the symptoms.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing an article and a verb; adding \"The\" and \"is\" completes the sentence.",
    "error": "\"Procedure to be performed under general anesthesia and will take approximately 5 minutes.\" ",
    "correction": " \"The procedure is to be performed under general anesthesia and will take approximately 5 minutes.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"The\" is needed before \"scheduler,\" and an object (e.g., \"him\") is required after \"contact.\"",
    "error": "\"Scheduler will contact to confirm the procedure.\" ",
    "correction": " \"The scheduler will contact him to confirm the procedure.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing the article \"a\" before \"recommendation\" and needs a comma after \"Previously\" as an introductory adverb.",
    "error": "\"Previously recommendation was made to repeat the endoscopy in 2 months.\" ",
    "correction": " \"Previously, a recommendation was made to repeat the endoscopy in 2 months.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing an article before \"phone call\" and requires a comma to set off the conditional clause.",
    "error": "\"Results will be updated in the portal and if there are any abnormal results, phone call will be made.\" ",
    "correction": " \"Results will be updated in the portal and, if there are any abnormal results, a phone call will be made.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing the definite article \"the\" before \"gastroenterologist.\"",
    "error": "\"Gastroenterologist was seen on 11/08/2025 and is in the process of setting up for scopes.\" ",
    "correction": " \"The gastroenterologist was seen on 11/08/2025 and is in the process of setting up for scopes.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing the definite article \"the\" before \"Medicaid visit.\"",
    "error": "\"Medicaid visit is done annually and was performed on 10/25/2025.\" ",
    "correction": " \"The Medicaid visit is done annually and was performed on 10/25/2025.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing the article \"an\" before \"annual Medicaid visit.\"",
    "error": "\"The patient will follow up in 09/2026 for annual Medicaid visit or sooner as needed.\" ",
    "correction": " \"The patient will follow up in 09/2026 for an annual Medicaid visit or sooner as needed.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing the definite article \"the\" before \"gastroenterologist.\"",
    "error": "\"Gastroenterologist was seen on 11/08/2025\" ",
    "correction": " \"The gastroenterologist was seen on 11/08/2025\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun phrase \"over head\" is missing the definite article \"the.\"",
    "error": "\"- Managed with Tylenol, ibuprofen, peppermint oil on the temples, or an ice pack over head.\" ",
    "correction": " \"- Managed with Tylenol, ibuprofen, peppermint oil on the temples, or an ice pack over the head.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The second clause is missing a verb and an article, causing incorrect tense and sentence structure.",
    "error": "\"Testosterone is no longer being taken and removed from medication list with last refill in 01/2025.\" ",
    "correction": " \"Testosterone is no longer being taken and was removed from the medication list, with the last refill in 01/2025.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"primary care physician\" for correct grammar.",
    "error": "\"after which a follow-up with primary care physician is recommended.\" ",
    "correction": " \"after which a follow-up with the primary care physician is recommended.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The phrase \"over head\" is missing the definite article \"the.\"",
    "error": "\"- Managed with Tylenol, ibuprofen, peppermint oil on temples, or an ice pack over head.\" ",
    "correction": " \"- Managed with Tylenol, ibuprofen, peppermint oil on temples, or an ice pack over the head.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The noun phrase \"primary care physician\" requires the definite article \"the.\"",
    "error": "\"- Testosterone should not be used together with estrogen-containing birth control. A prescription for fludrocortisone 0.1 mg twice daily will be provided for a trial period of 3 months, after which a follow-up with primary care physician is recommended.\" ",
    "correction": " \"- Testosterone should not be used together with estrogen-containing birth control. A prescription for fludrocortisone 0.1 mg twice daily will be provided for a trial period of 3 months, after which a follow-up with the primary care physician is recommended.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" before \"sleep\" is unnecessary and ungrammatical in this context.",
    "error": "\"Taking gabapentin 300 mg at night, which helps with the sleep.\" ",
    "correction": " \"Taking gabapentin 300 mg at night, which helps with sleep.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing a subject and an article before \"influenza vaccine.\"",
    "error": "\"- Will receive influenza vaccine today.\" ",
    "correction": " \"- She will receive the influenza vaccine today.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun phrase is missing the definite article \"the,\" and a comma is needed after \"reviewed\" to set off the participial phrase.",
    "error": "\"School attendance restrictions were reviewed including requirement for exclusion from school for 24 hours following initiation of antibiotic therapy.\" ",
    "correction": " \"School attendance restrictions were reviewed, including the requirement for exclusion from school for 24 hours following initiation of antibiotic therapy.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "\"Blood work\" is an uncountable noun and should not be preceded by the article \"a.\"",
    "error": "\"A metabolic panel and CBC along with a fasting blood work will be ordered today.\" ",
    "correction": " \"A metabolic panel and CBC along with fasting blood work will be ordered today.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " \"Blood work\" is an uncountable noun and should not be preceded by \"A\"; the sentence also needs articles and commas for correct grammar.",
    "error": "\"A fasting blood work including metabolic panel, CBC will be ordered today.\" ",
    "correction": " \"Fasting blood work, including a metabolic panel and CBC, will be ordered today.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The article \"A\" is not needed before \"fasting blood work,\" \"metabolic panel\" needs an article, and the commas should set off the phrase \"including a metabolic panel and CBC.\"",
    "error": "\"A fasting blood work including metabolic panel, and CBC will be ordered today.\" ",
    "correction": " \"Fasting blood work, including a metabolic panel and CBC, will be ordered today.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"a\" is needed before \"preventive service\" for correct grammar.",
    "error": "\"Discussed that Medicaid now covers tetanus vaccine as preventive service.\" ",
    "correction": " \"Discussed that Medicaid now covers tetanus vaccine as a preventive service.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun \"x-ray\" requires the article \"an\" before it in this context.",
    "error": "\"It was discussed that x-ray is not a preferred exam for this case as it does not show hydronephrosis.\" ",
    "correction": " \"It was discussed that an x-ray is not a preferred exam for this case as it does not show hydronephrosis.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"a\" before \"low testosterone\" is incorrect and \"testosterone level\" needs the article \"the\" for proper grammar.",
    "error": "\"On the other hand, with a low testosterone and elevated estrogen, typically testosterone level increases with lowering of the estrogen.\" ",
    "correction": " \"On the other hand, with low testosterone and elevated estrogen, typically the testosterone level increases with lowering of the estrogen.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun \"kidney stone\" requires the article \"a\" in this context.",
    "error": "\"Was reportedly diagnosed with kidney stone following an MRI 8 months ago.\" ",
    "correction": " \"Was reportedly diagnosed with a kidney stone following an MRI 8 months ago.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The noun \"knee\" requires an article (\"the\") and should agree with the earlier reference to \"bilateral knees.\"",
    "error": "\"Physical therapy for knee will be initiated\" ",
    "correction": " \"Physical therapy for the knee will be initiated\" or \"Physical therapy for the knees will be initiated\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The noun \"pharmacy\" requires the definite article \"the\" in this context.",
    "error": "\"The prescription will be sent to pharmacy.\" ",
    "correction": " \"The prescription will be sent to the pharmacy.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"transition\" in this context.",
    "error": "\"both medications may be taken simultaneously during transition due to a lack of significant interaction between different drug classes.\" ",
    "correction": " \"both medications may be taken simultaneously during the transition due to a lack of significant interaction between different drug classes.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"electrophysiologist.\"",
    "error": "\"An upcoming appointment with electrophysiologist has been scheduled later this month.\" ",
    "correction": " \"An upcoming appointment with the electrophysiologist has been scheduled later this month.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The article \"an\" is needed before \"epidural injection,\" \"her\" is needed before \"rheumatologist,\" and the subject of \"was advised\" must be clarified.",
    "error": "\"- Epidural injection was administered by rheumatologist and was advised to wait a week for it to take full effect.\" ",
    "correction": " \"- An epidural injection was administered by her rheumatologist, and she was advised to wait a week for it to take full effect.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is missing before \"left big toe.\"",
    "error": "\"The numbness is localized to the inner part of left big toe and has been present for a couple of months.\" ",
    "correction": " \"The numbness is localized to the inner part of the left big toe and has been present for a couple of months.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun phrase \"short‑acting booster\" requires the article \"a\" to be grammatically complete.",
    "error": "\"Discussed switching to Adderall and plan to begin with long‑acting therapy and adjust with short‑acting booster based on response.\" ",
    "correction": " \"Discussed switching to Adderall and plan to begin with long‑acting therapy and adjust with a short‑acting booster based on response.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The noun \"appointment\" requires the article \"an\" in this context.",
    "error": "\"Recommended to contact Dr. Mxxx's office today in person regarding scheduling appointment.\" ",
    "correction": " \"Recommended to contact Dr. Mxxx's office today in person regarding scheduling an appointment.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun \"plateau\" needs an article (\"a\") to be grammatically correct.",
    "error": "\"If response diminishes or plateau occurs after 4, 8, or 12 weeks\" ",
    "correction": " \"If response diminishes or a plateau occurs after 4, 8, or 12 weeks\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The subject \"average\" is singular and needs a singular verb (\"is\"), and the sentence is missing the article \"An\" at the beginning.",
    "error": "\"Average of 4-6 ounce bottles are considered ideal as he does not require additional breast milk.\" ",
    "correction": " \"An average of 4–6-ounce bottles is considered ideal, as he does not require additional breast milk.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original is a sentence fragment missing an article and a verb; this correction makes it a complete sentence.",
    "error": "\"Working mechanism of vaccines explained.\" ",
    "correction": " \"The working mechanism of vaccines was explained.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The phrase needs articles and correct passive verb form (\"is not received\").",
    "error": "\"advised to contact clinic if call not receive within 2 to 3 weeks\" ",
    "correction": " \"advised to contact the clinic if a call is not received within 2 to 3 weeks\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The article \"a\" before \"ringing\" is unnecessary, and \"ears\" and \"right ear\" need appropriate possessive and definite articles.",
    "error": "\"Reports a ringing in ears, but predominantly in right ear\" ",
    "correction": " \"Reports ringing in her ears, but predominantly in the right ear\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The article \"the\" is needed before \"expectation\" for correct grammar.",
    "error": "\"up to three times daily with expectation that it should not be required more than that.\" ",
    "correction": " \"up to three times daily with the expectation that it should not be required more than that.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " \"Running nose\" should be \"runny nose,\" and the sentence requires articles, pronouns, and linking verbs to be grammatically correct.",
    "error": "\"Explained that when running nose and headache occur, typically with the pain in one eye, eye that will hurt that a cluster headache but that would not last these many days.\" ",
    "correction": " \"Explained that when a runny nose and headache occur, typically with pain in one eye—the eye that will hurt—that is a cluster headache, but it would not last this many days.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " A comma is needed before \"which,\" and the article \"the\" is required before \"presence.\"",
    "error": "\"Proprioception and vestibular balance are off which indicates presence of vertigo.\" ",
    "correction": " \"Proprioception and vestibular balance are off, which indicates the presence of vertigo.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb should be in the past tense to match the narrative, and an object (\"her\") and article (\"a\") are needed.",
    "error": "\"Reassure that complex migraine is not present.\" ",
    "correction": " \"Reassured her that a complex migraine is not present.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"a\" is required before the singular countable noun \"rowing machine.\"",
    "error": "\"Engages in balance exercises using rowing machine for lower body conditioning.\" ",
    "correction": " \"Engages in balance exercises using a rowing machine for lower body conditioning.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " Missing articles (\"the\") and possessive pronoun (\"her\"), and a comma is needed before \"and\" to separate the clauses correctly.",
    "error": "\"Up-to-date with tetanus vaccination, having received the vaccination with birth of 5-year-old or 8-year-old child and this would be valid for 10 years.\" ",
    "correction": " \"Up-to-date with tetanus vaccination, having received the vaccination with the birth of her 5-year-old or 8-year-old child, and this would be valid for 10 years.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The article \"the\" is needed before \"pharmacy.\"",
    "error": "\"A prescription refill for ramipril has been sent to pharmacy.\" ",
    "correction": " \"A prescription refill for ramipril has been sent to the pharmacy.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The article \"the\" is needed before \"pharmacy.\"",
    "error": "\"A prescription refill for Xanax has been sent to pharmacy.\" ",
    "correction": " \"A prescription refill for Xanax has been sent to the pharmacy.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The article \"the\" is needed before \"last one\" for grammatical correctness.",
    "error": "\"as last one was conducted in 2022.\" ",
    "correction": " \"as the last one was conducted in 2022.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"system\" for correct grammar.",
    "error": "\"Records will be requested to ensure system is up to date.\" ",
    "correction": " \"Records will be requested to ensure the system is up to date.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The article \"a\" is required before \"couple\" to form the standard phrase \"a couple of times.\"",
    "error": "\"- Advised to continue this regimen and monitor her blood pressure and heart rate at home couple of times a week.\" ",
    "correction": " \"- Advised to continue this regimen and monitor her blood pressure and heart rate at home a couple of times a week.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The subject \"it\" and article \"the\" before \"25 mg dose\" are needed for grammatical completeness and clarity.",
    "error": "\"Advised to monitor for any side effects and report them via MyChart message, at which point can be switched to 25 mg dose.\" ",
    "correction": " \"Advised to monitor for any side effects and report them via MyChart message, at which point it can be switched to the 25 mg dose.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"the\" before \"assessment\" is unnecessary and makes the noun phrase awkward.",
    "error": "\"Home health is scheduled to visit tomorrow for evaluation and the assessment and will initiate referrals for speech, physical, and occupational therapy.\" ",
    "correction": " \"Home health is scheduled to visit tomorrow for evaluation and assessment and will initiate referrals for speech, physical, and occupational therapy.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is required before \"next visit\" for correct grammar.",
    "error": "\"otherwise, it will be scheduled for next visit.\" ",
    "correction": " \"otherwise, it will be scheduled for the next visit.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The article \"The\" is needed before \"side effect\" for correct grammar.",
    "error": "\"- Influenza and pneumonia vaccines will be administered during this visit. Side effect of mild achiness was explained.\" ",
    "correction": " \"- Influenza and pneumonia vaccines will be administered during this visit. The side effect of mild achiness was explained.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"risk\" for correct grammar.",
    "error": "\"prophylaxis increases risk of resistance over time.\" ",
    "correction": " \"prophylaxis increases the risk of resistance over time.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The article \"the\" is needed before \"infection\" for correct grammar.",
    "error": "\"once infection has resolved\" ",
    "correction": " \"once the infection has resolved\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is required before \"pharmacy.\"",
    "error": "\"A refill for Xanax will be sent to pharmacy.\" ",
    "correction": " \"A refill for Xanax will be sent to the pharmacy.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"abdomen,\" and \"the\" before \"brief episodes\" is unnecessary.",
    "error": "\"Reports occasional postprandial sensations of fluttering in abdomen accompanied by the brief episodes of faintness.\" ",
    "correction": " \"Reports occasional postprandial sensations of fluttering in the abdomen accompanied by brief episodes of faintness.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is needed, and the plural subject (\"tightness and soreness\") requires the plural verb \"are.\"",
    "error": "\"- Persistent tightness and soreness in neck and shoulders is reported.\" ",
    "correction": " \"- Persistent tightness and soreness in the neck and shoulders are reported.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"heel.\"",
    "error": "\"- Received a steroid injection in heel from a foot and ankle doctor, which has helped significantly.\" ",
    "correction": " \"- Received a steroid injection in the heel from a foot and ankle doctor, which has helped significantly.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is a fragment and needs a verb (\"is\") and an article (\"a\") to be grammatically complete.",
    "error": "\"Dinner taken earlier followed by 12-hour fasting gap.\" ",
    "correction": " \"Dinner is taken earlier, followed by a 12-hour fasting gap.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"portal.\"",
    "error": "\"Informed that portal now shows an additional location.\" ",
    "correction": " \"Informed that the portal now shows an additional location.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The noun \"pharmacy\" should take the definite article \"the\" in this context.",
    "error": "\"An antibiotic prescription was provided and sent to pharmacy.\" ",
    "correction": " \"An antibiotic prescription was provided and sent to the pharmacy.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original sentence has an awkward verb tense shift and is missing the definite article \"the\" before \"chemotherapy regimen.\"",
    "error": "\"The headaches have been daily and leading to nausea and vomiting since chemotherapy regimen was resumed.\" ",
    "correction": " \"The headaches have been daily and have been leading to nausea and vomiting since the chemotherapy regimen was resumed.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"a\" is duplicated, which is a grammatical error.",
    "error": "\"Treated with a a liquid steroid and Benadryl at the urgent care.\" ",
    "correction": " \"Treated with a liquid steroid and Benadryl at the urgent care.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The article \"the\" is unnecessary here and makes the phrase grammatically incorrect in this context.",
    "error": "\"interfere with the sleep\" ",
    "correction": " \"interfere with sleep\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The clause \"would not need another one\" is missing a subject (\"she\"), and \"Pap\" requires the definite article \"the\" for grammatical completeness.",
    "error": "\"- Advised to schedule a Pap smear before 05/2026 explaining that if Pap was normal, would not need another one for three to five years.\" ",
    "correction": " \"- Advised to schedule a Pap smear before 05/2026, explaining that if the Pap was normal, she would not need another one for three to five years.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " This is a sentence fragment missing a clear subject and necessary articles (\"the specialist,\" \"the clinic\") and needs to be completed for correct grammar.",
    "error": "\"To contact specialist and notify clinic if difficulty scheduling.\" ",
    "correction": " \"The patient is to contact the specialist and notify the clinic if there is difficulty scheduling.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing the article \"the\" before \"patient\" and an explicit subject for \"should inform.\"",
    "error": "\"If patient wishes to discontinue Lexapro, should inform the office so that a weaning plan can be implemented.\" ",
    "correction": " \"If the patient wishes to discontinue Lexapro, he should inform the office so that a weaning plan can be implemented.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"an\" is needed before \"SSRI,\" \"medication\" should be singular to agree with \"this type of,\" and the plural subject \"option ... and the risks and benefits\" requires the plural verb \"were.\"",
    "error": "\"The option of using SSRI and risks and benefits associated with this type of medications was discussed with the patient.\" ",
    "correction": " \"The option of using an SSRI and the risks and benefits associated with this type of medication were discussed with the patient.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is required before \"next visit.\"",
    "error": "\"- If it is tolerated well, the dosage will be increased at next visit.\" ",
    "correction": " \"- If it is tolerated well, the dosage will be increased at the next visit.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun \"provider\" requires an article (\"a\") to be grammatically correct in this context.",
    "error": "\"However, it has been difficult to obtain dental care due to retired provider and insurance limitations.\" ",
    "correction": " \"However, it has been difficult to obtain dental care due to a retired provider and insurance limitations.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun phrase \"repeat sleep study\" needs the article \"a\" to be grammatically correct.",
    "error": "\"Advised to establish with Dr. Axxx's office and get repeat sleep study at home.\" ",
    "correction": " \"Advised to establish with Dr. Axxx's office and get a repeat sleep study at home.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"pharmacy.\"",
    "error": "\"Prescriptions for valsartan and rosuvastatin have been renewed for the year and sent to pharmacy.\" ",
    "correction": " \"Prescriptions for valsartan and rosuvastatin have been renewed for the year and sent to the pharmacy.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun \"reduction\" needs an article (\"a\") for correct grammar.",
    "error": "\"Advised reduction of duloxetine to 1 capsule daily in order to assess whether symptoms become less significant compared to current status.\" ",
    "correction": " \"Advised a reduction of duloxetine to 1 capsule daily in order to assess whether symptoms become less significant compared to current status.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun \"ophthalmologist\" requires an article (\"an\") for correct grammar.",
    "error": "\"- Advised to see ophthalmologist sooner than the scheduled appointment in 01/2026 if the blurry vision persists.\" ",
    "correction": " \"- Advised to see an ophthalmologist sooner than the scheduled appointment in 01/2026 if the blurry vision persists.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"the\" is unnecessary before the abstract noun \"sobriety.\"",
    "error": "\"- Appreciated for quitting alcohol and maintaining the sobriety.\" ",
    "correction": " \"- Appreciated for quitting alcohol and maintaining sobriety.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original is a sentence fragment missing a subject, uses the incorrect phrase \"in advanced\" instead of \"in advance,\" includes an unnecessary article before \"Honor Health,\" and omits the article before \"actual paper order.\"",
    "error": "\"- Informed that the order for the blood test had already been placed in advanced and can go to the Honor Health and does not need actual paper as it is electronically sent to them.\" ",
    "correction": " \"- He was informed that the order for the blood test had already been placed in advance and that he can go to Honor Health and does not need an actual paper order, as it is sent to them electronically.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The noun \"oncologist\" needs the article \"an\" for correct grammar.",
    "error": "\"- Referred to oncologist for a bone marrow biopsy due to low iron levels.\" ",
    "correction": " \"- Referred to an oncologist for a bone marrow biopsy due to low iron levels.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The noun \"allergist\" needs the article \"an\" for correct grammar.",
    "error": "\"Referral to allergist, Dr. Sxxx at Cxxx Street, has been provided.\" ",
    "correction": " \"Referral to an allergist, Dr. Sxxx at Cxxx Street, has been provided.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"next visit.\"",
    "error": "\"Hemoglobin A1c levels will be reassessed at next visit.\" ",
    "correction": " \"Hemoglobin A1c levels will be reassessed at the next visit.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The adjective form should be \"properly sized\" rather than \"proper sized,\" and an article (\"a\") is needed before \"properly sized pillow.\"",
    "error": "\"Recommended to utilize proper sized pillow such that it is not smaller than the measurement from ear to shoulder.\" ",
    "correction": " \"Recommended to utilize a properly sized pillow such that it is not smaller than the measurement from ear to shoulder.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " Articles are missing before the nouns, and \"orthopedic\" should be changed to the correct noun form \"orthopedist.\"",
    "error": "\"If there is no improvement, a consultation with sports medicine specialist or orthopedic will be considered for further imaging and evaluation.\" ",
    "correction": " \"If there is no improvement, a consultation with a sports medicine specialist or an orthopedist will be considered for further imaging and evaluation.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "An article (\"a\") or plural form is needed before \"biomarker\" for correct grammar.",
    "error": "\"Agree with obtaining biomarker for early diagnosis.\" ",
    "correction": " \"Agree with obtaining a biomarker for early diagnosis.\" or \"Agree with obtaining biomarkers for early diagnosis.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing the article \"the\" before \"plan\" and needs a comma before \"and\" to correctly join two independent clauses.",
    "error": "\"Discussion included options for different dermatology offices and plan is to verify insurance acceptance and send referral accordingly, unless a specific preference is indicated.\" ",
    "correction": " \"Discussion included options for different dermatology offices, and the plan is to verify insurance acceptance and send the referral accordingly, unless a specific preference is indicated.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun \"appointment\" requires the definite article \"the\" in this context.",
    "error": "\"A 30-day supply of mirtazapine 15 mg will be sent to the pharmacy to last until next appointment with the psychiatrist.\" ",
    "correction": " \"A 30-day supply of mirtazapine 15 mg will be sent to the pharmacy to last until the next appointment with the psychiatrist.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"office.\"",
    "error": "\"If the lesion enlarges or additional spots appear, office should be informed.\" ",
    "correction": " \"If the lesion enlarges or additional spots appear, the office should be informed.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"office.\"",
    "error": "\"If there is no improvement after 6 weeks of physical therapy, office should be contacted and further treatment options will be considered.\" ",
    "correction": " \"If there is no improvement after 6 weeks of physical therapy, the office should be contacted and further treatment options will be considered.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun \"pharmacy\" requires the definite article \"the\" in this context.",
    "error": "\"- A prescription for topical antifungal nail polish will be provided and sent to pharmacy.\" ",
    "correction": " \"- A prescription for topical antifungal nail polish will be provided and sent to the pharmacy.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "A comma is needed after \"reading,\" and an article (\"a\") is needed before \"low-dose estrogen patch.\"",
    "error": "\"After further review and reading treatment with low-dose estrogen patch will be considered\" ",
    "correction": " \"After further review and reading, treatment with a low-dose estrogen patch will be considered\" or \"After further review and reading, treatment with low-dose estrogen patches will be considered\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing \"that\" and an article, making it grammatically incomplete.",
    "error": "\"Discussed estrogen patch is not sufficient to overcome ovulation.\" ",
    "correction": " \"Discussed that the estrogen patch is not sufficient to overcome ovulation.\" or \"Discussed that an estrogen patch is not sufficient to overcome ovulation.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"removed\" needs an auxiliary (\"was\") for correct tense, and \"medication list\" should take the definite article \"the\" in this context.",
    "error": "\"Crestor is not taken and removed from medication list.\" ",
    "correction": " \"Crestor is not taken and was removed from the medication list.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun \"fall\" in this context should be preceded by the article \"a.\"",
    "error": "\"Hospitalized from 11/27/2025 to 12/03/2025 due to fall, resulting in rib fractures and a hematoma on his buttocks.\" ",
    "correction": " \"Hospitalized from 11/27/2025 to 12/03/2025 due to a fall, resulting in rib fractures and a hematoma on his buttocks.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun phrase \"hemoglobin A1c test\" requires the definite article \"the\" for grammatical correctness.",
    "error": "\"- A repeat of hemoglobin A1c test will be conducted to monitor prediabetes.\" ",
    "correction": " \"- A repeat of the hemoglobin A1c test will be conducted to monitor prediabetes.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing a subject and the article \"a\" before \"local pharmacy.\"",
    "error": "\"Encouraged to receive the COVID-19 vaccine at local pharmacy as it will provide secondary protection for the baby at home.\" ",
    "correction": " \"He was encouraged to receive the COVID-19 vaccine at a local pharmacy as it will provide secondary protection for the baby at home.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"a\" is needed before \"physical examination\" for correct grammar.",
    "error": "\"- Advised to schedule physical examination in 1 to 2 months once current symptoms subside.\" ",
    "correction": " \"- Advised to schedule a physical examination in 1 to 2 months once current symptoms subside.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"a\" is needed before \"work-related injury.\"",
    "error": "\"as it is work-related injury\" ",
    "correction": " \"as it is a work-related injury\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is required before \"treatment plan.\"",
    "error": "\"Counseling is recommended as the next step in treatment plan.\" ",
    "correction": " \"Counseling is recommended as the next step in the treatment plan.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun phrase \"ultrasound appointment\" is missing an article, and a comma improves clause separation.",
    "error": "\"A small growth was identified on his kidney for which ultrasound appointment is awaited.\" ",
    "correction": " \"A small growth was identified on his kidney, for which an ultrasound appointment is awaited.\" or \"A small growth was identified on his kidney, and an ultrasound appointment is awaited.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is missing before \"patient,\" which is required for correct grammar.",
    "error": "\"If patient plans to conceive, the treatment plan will need to be adjusted as these medications are not suitable for pregnancy.\" ",
    "correction": " \"If the patient plans to conceive, the treatment plan will need to be adjusted, as these medications are not suitable for pregnancy.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"the\" is unnecessary before the proper noun and makes the phrase ungrammatical.",
    "error": "\"Advised to contact the Abrazo Health Care Psychiatry to schedule an appointment.\" ",
    "correction": " \"Advised to contact Abrazo Health Care Psychiatry to schedule an appointment.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The article \"a\" is needed before \"couple\" for correct grammar.",
    "error": "\"- Discussed that irregular sleep patterns over couple of days in a row can lead to the body forming a new circadian rhythm.\" ",
    "correction": " \"- Discussed that irregular sleep patterns over a couple of days in a row can lead to the body forming a new circadian rhythm.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun \"urologist\" needs the article \"the,\" the name should be set off with commas, and the phrase \"down the time\" is incorrect; the standard expression is \"down the line.\"",
    "error": "\"Encouraged to keep up the appointment with urologist, Dr. Pxxx and get the stone issue addressed in order to prevent a potential ER visit down the time.\" ",
    "correction": " \"Encouraged to keep up the appointment with the urologist, Dr. Pxxx, and get the stone issue addressed in order to prevent a potential ER visit down the line.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun phrase \"printed order\" needs the article \"a.\"",
    "error": "\"If there are any issues with the pharmacy, printed order will be provided, which can be presented to them.\" ",
    "correction": " \"If there are any issues with the pharmacy, a printed order will be provided, which can be presented to them.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The preposition \"in\" is required after \"occur,\" and \"family history\" needs the article \"a.\"",
    "error": "\"Noted that it can occur postmenopausal Caucasian individuals with family history of osteoporosis\" ",
    "correction": " \"Noted that it can occur in postmenopausal Caucasian individuals with a family history of osteoporosis\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The definite article \"the\" is needed before the singular noun \"pharmacy.\"",
    "error": "\"A refill for the blood pressure medication will be sent to pharmacy, with advice to continue taking half of the 20 mg tablet.\" ",
    "correction": " \"A refill for the blood pressure medication will be sent to the pharmacy, with advice to continue taking half of the 20 mg tablet.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The indefinite article \"an\" is needed before the singular noun \"alternative.\"",
    "error": "\"Metamucil may be used as alternative if needed.\" ",
    "correction": " \"Metamucil may be used as an alternative if needed.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing the article \"The\" at the beginning, and \"impaired\" should be the noun \"impairment\" in this context.",
    "error": "\"Question of history of substance use by the applicant and the degree of impaired from the substance use for fostering children was discussed.\" ",
    "correction": " \"The question of history of substance use by the applicant and the degree of impairment from the substance use for fostering children was discussed.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"emergency room visit.\"",
    "error": "\"The patient was prescribed amlodipine during emergency room visit due to elevated blood pressure\" ",
    "correction": " \"The patient was prescribed amlodipine during the emergency room visit due to elevated blood pressure\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun phrase \"menstrual cycle\" needs the definite article \"the,\" and \"mid to late 40s\" reads more clearly and grammatically with \"the.\"",
    "error": "\"Reassured that it is normal for menstrual cycle to fluctuate around the age of mid to late 40s.\" ",
    "correction": " \"Reassured that it is normal for the menstrual cycle to fluctuate around the age of the mid to late 40s.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun phrase needs the definite article \"the\" to be grammatically complete.",
    "error": "\"Right foot previously demonstrated areas of devitalized tissue.\" ",
    "correction": " \"The right foot previously demonstrated areas of devitalized tissue.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"a\" is missing before \"walking mat.\"",
    "error": "\"Advised to engage in regular physical activity, such as using walking mat at home.\" ",
    "correction": " \"Advised to engage in regular physical activity, such as using a walking mat at home.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"is\" and article \"the\" are missing, making the sentence a fragment.",
    "error": "\"Blood pressure not at threshold requiring pharmacologic management.\" ",
    "correction": " \"Blood pressure is not at the threshold requiring pharmacologic management.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun phrase \"hospital stay\" requires the definite article \"the\" in this context.",
    "error": "\"- Vyvanse was given instead of Adderall during hospital stay.\" ",
    "correction": " \"- Vyvanse was given instead of Adderall during the hospital stay.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "A singular countable noun (\"eyedrop\") requires an article (\"an\") in this context.",
    "error": "\"Antibiotic eyedrop will be prescribed.\" ",
    "correction": " \"An antibiotic eyedrop will be prescribed.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"risk\" to be grammatically correct.",
    "error": "\"which could increase risk of falls.\" ",
    "correction": " \"which could increase the risk of falls.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The phrase is missing the definite article \"the\" to be grammatically correct.",
    "error": "\"noted to be warm to touch.\" ",
    "correction": " \"noted to be warm to the touch.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The indefinite article \"an\" is missing before \"oral surgeon.\"",
    "error": "\"Recently visited with the dentist but was advised to go to oral surgeon.\" ",
    "correction": " \"Recently visited with the dentist but was advised to go to an oral surgeon.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is required before \"next annual visit.\"",
    "error": "\"to ensure coverage through next annual visit.\" ",
    "correction": " \"to ensure coverage through the next annual visit.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " \"Eyes exam\" should be \"eye exam,\" and the second clause needs an explicit subject (\"she\") and an article (\"an\") before \"eye exam.\"",
    "error": "\"- Received pneumonia, influenza, and COVID-19 vaccines. Eyes exam was performed and was informed that there are slight cataracts but no immediate issues.\" ",
    "correction": " \"- Received pneumonia, influenza, and COVID-19 vaccines. An eye exam was performed, and she was informed that there are slight cataracts but no immediate issues.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The singular count noun \"test\" requires an article (\"an\") before \"A1c test.\"",
    "error": "\"An order for A1c test has been placed to be obtained in 6 months.\" ",
    "correction": " \"An order for an A1c test has been placed to be obtained in 6 months.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The singular count noun \"test\" requires an article (\"a\") before \"cholesterol test.\"",
    "error": "\"An order for cholesterol test has been placed to be performed in 6 months.\" ",
    "correction": " \"An order for a cholesterol test has been placed to be performed in 6 months.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The articles \"a\" are needed before \"different provider\" and \"breach of contract,\" and a comma is needed before \"which\" in this nonrestrictive clause.",
    "error": "\"as it goes to different provider which would result in breach of contract.\" ",
    "correction": " \"as it goes to a different provider, which would result in a breach of contract.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun \"inhaler\" requires a definite article \"the\" in this context.",
    "error": "\"Previously, inhaler was not beneficial.\" ",
    "correction": " \"Previously, the inhaler was not beneficial.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The subject \"he\" and article \"the\" before \"clinic\" are needed for correct grammar.",
    "error": "\"- If the redness begins to spread even after the antibiotic treatment, should inform clinic immediately.\" ",
    "correction": " \"- If the redness begins to spread even after the antibiotic treatment, he should inform the clinic immediately.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"pharmacy\" to make the sentence grammatically correct.",
    "error": "\"A refill for hydroxychloroquine will be sent to pharmacy.\" ",
    "correction": " \"A refill for hydroxychloroquine will be sent to the pharmacy.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The phrase \"mailed to home\" is grammatically incomplete; an article or possessive is needed before \"home.\"",
    "error": "\"A Cologuard test will be mailed to home for colon cancer screening.\" ",
    "correction": " \"A Cologuard test will be mailed to the home for colon cancer screening.\" or \"A Cologuard test will be mailed to the patient's home for colon cancer screening.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The noun \"portal\" requires the definite article \"the\" in this context.",
    "error": "\"Results will be provided through portal.\" ",
    "correction": " \"Results will be provided through the portal.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"next dental appointment.\"",
    "error": "\"during next dental appointment.\" ",
    "correction": " \"during the next dental appointment.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing a subject and possessive pronoun, and needs the article \"a\" before \"few months ago.\"",
    "error": "\"Reported burning the tongue few months ago while eating something hot.\" ",
    "correction": " \"He reported burning his tongue a few months ago while eating something hot.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The phrase \"in few weeks\" is missing the article \"a.\"",
    "error": "\"which should improve on its own in few weeks.\" ",
    "correction": " \"which should improve on its own in a few weeks.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The original is a sentence fragment missing a verb and needed article.",
    "error": "\"Almost four months since initial visit the wrist discomfort persists.\" ",
    "correction": " \"It has been almost four months since the initial visit, and the wrist discomfort persists.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The original is missing the article \"an\" and the verb \"is.\"",
    "error": "\"If symptoms continue, MRI recommended.\" ",
    "correction": " \"If symptoms continue, an MRI is recommended.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original is missing the article \"The\" before \"specialist,\" and \"or not\" is unnecessary and ungrammatical in this context.",
    "error": "\"Specialist can determine if an arthrogram is required or not.\" ",
    "correction": " \"The specialist can determine if an arthrogram is required.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The definite article \"the\" and the preposition \"of\" are needed for correct phrasing.",
    "error": "\"- Blood work will be conducted on morning 11/20/2025.\" ",
    "correction": " \"- Blood work will be conducted on the morning of 11/20/2025.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " With \"either,\" the following nouns should not usually take a definite article here.",
    "error": "\"did not initiate either the rosuvastatin or the Zetia.\" ",
    "correction": " \"did not initiate either rosuvastatin or Zetia.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is incorrect here; the possessive \"her\" is needed to refer to the patient's sleep.",
    "error": "\"The pain is manageable and does not disrupt the sleep.\" ",
    "correction": " \"The pain is manageable and does not disrupt her sleep.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The phrase is missing articles (\"the\" and \"an\"), and the conjunction \"because\" is misused; restructuring the sentence and adding \"a\" before \"refill\" corrects the grammar.",
    "error": "\"Discussed that usually refills are not provided because in case patient needs adjustment but as the medication is working, refill will be added.\" ",
    "correction": " \"Discussed that usually refills are not provided in case the patient needs an adjustment, but as the medication is working, a refill will be added.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is required before \"worst case,\" and a comma improves grammatical correctness after the introductory phrase.",
    "error": "\"in worst case all three can be taken.\" ",
    "correction": " \"in the worst case, all three can be taken.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The compound noun should be hyphenated as \"follow-up,\" and the definite article \"the\" is needed before \"presence.\"",
    "error": "\"- Up to date with colonoscopy and is due for a follow up in 3 years due to presence of colon polyps.\" ",
    "correction": " \"- Up to date with colonoscopy and is due for a follow-up in 3 years due to the presence of colon polyps.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"prostate\" for correct grammar.",
    "error": "\"Blood work for prostate and a complete blood count will be conducted during the next set of labs.\" ",
    "correction": " \"Blood work for the prostate and a complete blood count will be conducted during the next set of labs.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" before \"heart health\" is unnecessary and ungrammatical in this context.",
    "error": "\"The blood pressure is on the lower end, which is beneficial for the heart health.\" ",
    "correction": " \"The blood pressure is on the lower end, which is beneficial for heart health.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun \"app\" requires the definite article \"the,\" and \"refills\" is the more appropriate plural form in this context.",
    "error": "\"App can be used for medication refill.\" ",
    "correction": " \"The app can be used for medication refills.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun \"decrease\" requires the article \"a\" in this context.",
    "error": "\"Reports appetite suppression while on this medication. Discussed that Ozempic injection also causes decrease in appetite.\" ",
    "correction": " \"Reports appetite suppression while on this medication. Discussed that Ozempic injection also causes a decrease in appetite.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " \"Discussed about\" is incorrect; it should be rephrased, and \"wound clinic\" needs an article.",
    "error": "\"The left leg swelling is likely due to lymphedema rather than cellulitis, as there are no signs of infection. Discussed about referring to wound clinic.\" ",
    "correction": " \"The left leg swelling is likely due to lymphedema rather than cellulitis, as there are no signs of infection. Referral to a wound clinic was discussed.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The phrase is missing the article \"a\" before \"few days.\"",
    "error": "\"If the inquiry had been referred to cardiology, few days might be required before further communication is received.\" ",
    "correction": " \"If the inquiry had been referred to cardiology, a few days might be required before further communication is received.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"the\" is needed before \"endocrinologist\" to make the noun phrase grammatically correct.",
    "error": "\"- Currently taking metformin twice daily as prescribed by endocrinologist.\" ",
    "correction": " \"- Currently taking metformin twice daily as prescribed by the endocrinologist.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The article \"a\" is needed before \"hand surgeon\" to make the noun phrase grammatically correct.",
    "error": "\"Encouraged to call us if a referral to hand surgeon is needed.\" ",
    "correction": " \"Encouraged to call us if a referral to a hand surgeon is needed.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The noun \"pharmacy\" requires the definite article \"the\" in this context.",
    "error": "\"- A prescription for meloxicam, a 90-day supply with 3 refills, will be sent to pharmacy.\" ",
    "correction": " \"- A prescription for meloxicam, a 90-day supply with 3 refills, will be sent to the pharmacy.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun \"dose\" needs the definite article \"the\" in this context.",
    "error": "\"If insurance requires approval, dose will be changed to once daily until consulting the specialist.\" ",
    "correction": " \"If insurance requires approval, the dose will be changed to once daily until consulting the specialist.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"the\" is needed before \"patient,\" and \"send a message\" avoids the incorrect and repetitive use of \"inform\" as both verb and implied noun.",
    "error": "\"Informed patient to inform via MyChart if the Flonase stops working.\" ",
    "correction": " \"Informed the patient to send a message via MyChart if the Flonase stops working.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"an\" is needed before \"annual physical\" for correct grammar.",
    "error": "\"as part of annual physical, which include blood counts\" ",
    "correction": " \"as part of an annual physical, which include blood counts\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"penis\" for correct grammar.",
    "error": "\"Reports a healed lesion on penis and a palpable lymph node in the inguinal area.\" ",
    "correction": " \"Reports a healed lesion on the penis and a palpable lymph node in the inguinal area.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing an article (\"the\") and would be grammatically correct with \"a possible\" before \"pulmonary etiology.\"",
    "error": "\"Symptoms reviewed in context of possible pulmonary etiology, including pneumonia or pleurisy.\" ",
    "correction": " \"Symptoms reviewed in the context of a possible pulmonary etiology, including pneumonia or pleurisy.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The pronoun \"it\" is incorrect because \"results\" is plural, so it should be \"them,\" and the article \"an\" is needed for grammatical correctness.",
    "error": "\"Complete results and the explanation of it will be updated in MyChart.\" ",
    "correction": " \"Complete results and an explanation of them will be updated in MyChart.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"pharmacy\" to be grammatically correct.",
    "error": "\"Prescriptions for metoprolol 5 mg in the morning and at night and 50 mg at bedtime, Colestid 1 g four times a day, azelastine nasal spray, desonide cream 15 g, and atorvastatin will be renewed and sent to pharmacy.\" ",
    "correction": " \"Prescriptions for metoprolol 5 mg in the morning and at night and 50 mg at bedtime, Colestid 1 g four times a day, azelastine nasal spray, desonide cream 15 g, and atorvastatin will be renewed and sent to the pharmacy.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The original sentence is missing articles (\"an,\" \"her\") and a subject/auxiliary verb (\"was\") for correct grammar and clarity.",
    "error": "\"Meloxicam discontinued after 2 days due to unusual sensation in brain but plans to re-initiate in wintertime for worsening pain.\" ",
    "correction": " \"Meloxicam was discontinued after 2 days due to an unusual sensation in her brain but she plans to re-initiate it in the wintertime for worsening pain.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The subject \"she\" is missing after \"if,\" and the phrase \"a sudden inability\" needs an article for correct grammar.",
    "error": "\"This can be normal, but if experiences sudden inability to talk or difficulty getting words out, further evaluation will be necessary.\" ",
    "correction": " \"This can be normal, but if she experiences a sudden inability to talk or difficulty getting words out, further evaluation will be necessary.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The noun phrase \"IUI process\" is missing the definite article \"the.\"",
    "error": "\"considering she is undergoing IUI process.\" ",
    "correction": " \"considering she is undergoing the IUI process.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The noun phrase \"lab issue\" requires an article (\"a\") to be grammatically correct.",
    "error": "\"The previous abnormality in potassium is felt to be related to lab issue.\" ",
    "correction": " \"The previous abnormality in potassium is felt to be related to a lab issue.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The definite article \"the\" is unnecessary and ungrammatical in this context.",
    "error": "\"Mild postpartum depression typically improves within the six weeks postpartum.\" ",
    "correction": " \"Mild postpartum depression typically improves within six weeks postpartum.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The infinitive requires “to monitor,” and “for the long term” needs the definite article; “and” clarifies the list.",
    "error": "\"Advised to continue monitor weight with apps, calorie counting for long term.\" ",
    "correction": " \"Advised to continue to monitor weight with apps and calorie counting for the long term.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The singular count noun \"pharmacy\" requires the article \"the\" in this context.",
    "error": "\"sent to pharmacy.\" ",
    "correction": " \"sent to the pharmacy.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun phrase \"specific type\" requires the article \"a\" for grammatical completeness.",
    "error": "\"meclizine is effective only for specific type of dizziness.\" ",
    "correction": " \"meclizine is effective only for a specific type of dizziness.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"the\" is needed before \"dental appointment.\"",
    "error": "\"- A prescription for clindamycin has been provided, with instructions to take 2 pills 1 hour prior to dental appointment on 11/04/2025.\" ",
    "correction": " \"- A prescription for clindamycin has been provided, with instructions to take 2 pills 1 hour prior to the dental appointment on 11/04/2025.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " Missing article \"the\" before \"pharmacy\" and missing subject \"she\" in the clause \"if not feeling well.\"",
    "error": "\"- A prescription for olmesartan has been refilled and sent to pharmacy, which can be taken if not feeling well.\" ",
    "correction": " \"- A prescription for olmesartan has been refilled and sent to the pharmacy, which can be taken if she is not feeling well.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The preposition \"at\" and article \"the\" are needed for correct grammar.",
    "error": "\"- Blood pressure will be rechecked on follow-up visit in 1 month.\" ",
    "correction": " \"- Blood pressure will be rechecked at the follow-up visit in 1 month.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is missing before \"face.\"",
    "error": "\"Patient has a skin lesion on the right cheek of face.\" ",
    "correction": " \"Patient has a skin lesion on the right cheek of the face.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun \"gym\" in this context requires the definite article \"the\" for correct grammar.",
    "error": "\"- Received in-home physical therapy and exercised in gym daily.\" ",
    "correction": " \"- Received in-home physical therapy and exercised in the gym daily.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"pharmacy.\"",
    "error": "\"- A refill for lorazepam has been provided and sent to pharmacy.\" ",
    "correction": " \"- A refill for lorazepam has been provided and sent to the pharmacy.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The article \"a\" is needed before \"minor increase.\"",
    "error": "\"but there is minor increase in weight compared to several years ago\" ",
    "correction": " \"but there is a minor increase in weight compared to several years ago\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The preposition/article is missing before \"normal range.\"",
    "error": "\"Iron level is 102, which is normal range.\" ",
    "correction": " \"Iron level is 102, which is in the normal range.\" or \"Iron level is 102, which is a normal range.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"a\" is required before \"30 to 50% increased chance.\"",
    "error": "\"There is about 30 to 50% increased chance of recurrence.\" ",
    "correction": " \"There is about a 30 to 50% increased chance of recurrence.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The noun phrase \"physical examination\" requires the article \"a.\"",
    "error": "\"The patient will follow up on 10/28/2025 for physical examination.\" ",
    "correction": " \"The patient will follow up on 10/28/2025 for a physical examination.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"menstrual cycle.\"",
    "error": "\"- The breast pain is likely cyclical, associated with menstrual cycle.\" ",
    "correction": " \"- The breast pain is likely cyclical, associated with the menstrual cycle.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"a\" is required before \"need\" for correct grammar.",
    "error": "\"indicating need for improved glycemic control.\" ",
    "correction": " \"indicating a need for improved glycemic control.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The phrase is missing the definite article \"The,\" making it grammatically incomplete.",
    "error": "\"Rest of the swab results for COVID-19, influenza, and RSV will be followed up.\" ",
    "correction": " \"The rest of the swab results for COVID-19, influenza, and RSV will be followed up.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"pulmonologist.\"",
    "error": "\"- A release of information form will be signed to obtain records from pulmonologist.\" ",
    "correction": " \"- A release of information form will be signed to obtain records from the pulmonologist.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The object \"the office\" is needed after \"contact,\" and the article \"a\" is needed before \"refill.\"",
    "error": "\"Advised to contact if there is a requirement for refill.\" ",
    "correction": " \"Advised to contact the office if there is a requirement for a refill.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"a\" is needed before \"refill,\" and an explicit subject (\"the patient\") improves the sentence’s grammatical completeness.",
    "error": "\"If refill for Zofran is required, advised to contact the office.\" ",
    "correction": " \"If a refill for Zofran is required, the patient is advised to contact the office.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"prior physician's,\" and \"the\" is needed before \"ER\" for correct noun phrase construction.",
    "error": "\"the reason behind prior physician's urgent referral to ER was discussed in detail as well.\" ",
    "correction": " \"the reason behind the prior physician's urgent referral to the ER was discussed in detail as well.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"a\" is needed before \"surgery referral\" to make the noun phrase grammatically correct.",
    "error": "\"with regard to surgery referral.\" ",
    "correction": " \"with regard to a surgery referral.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"next appointment\" for correct grammar.",
    "error": "\"Fasting blood work and urine testing will be ordered prior to next appointment in 6 months.\" ",
    "correction": " \"Fasting blood work and urine testing will be ordered prior to the next appointment in 6 months.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"new regimen\" for correct grammar.",
    "error": "\"report any consistent readings above 140 on new regimen.\" ",
    "correction": " \"report any consistent readings above 140 on the new regimen.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "Missing article \"an\" and incorrect tense (\"is discussed\" should be \"was discussed\" for past narrative consistency).",
    "error": "\"- An external examination did not reveal any visible hemorrhoids, but the possibility of internal hemorrhoid is discussed.\" ",
    "correction": " \"- An external examination did not reveal any visible hemorrhoids, but the possibility of an internal hemorrhoid was discussed.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "Missing article \"a,\" missing subject \"he,\" and lack of parallel structure in the final clause.",
    "error": "\"Advised to use hernia belt for support and to seek immediate medical attention if experiences significant pain or inability to have bowel movements.\" ",
    "correction": " \"Advised to use a hernia belt for support and to seek immediate medical attention if he experiences significant pain or is unable to have bowel movements.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "Missing article and plural form needed for \"results.\"",
    "error": "\"The patient will be contacted in 3 to 4 days with result of ultrasound.\" ",
    "correction": " \"The patient will be contacted in 3 to 4 days with the results of the ultrasound.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original sentence is grammatically awkward and missing an article before \"urine\"; adding \"the\" and restructuring with a conjunction clarifies subject-verb agreement.",
    "error": "\"A urine culture was positive for Klebsiella at the hospital as well as urine was positive for nitrites.\" ",
    "correction": " \"A urine culture was positive for Klebsiella at the hospital, and the urine was also positive for nitrites.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing an article before \"antibiotics course,\" needs \"the\" before \"hospital,\" and requires the verb \"is\" before \"currently\" for correct grammar.",
    "error": "\"Completed antibiotics course in hospital and currently off antibiotics at home.\" ",
    "correction": " \"Completed an antibiotics course in the hospital and is currently off antibiotics at home.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " Singular countable nouns \"bidet\" and \"spray bottle\" need articles.",
    "error": "\"- Post-defecation, she can use bidet, spray bottle or take a sitz bath for comfort.\" ",
    "correction": " \"- Post-defecation, she can use a bidet, a spray bottle, or take a sitz bath for comfort.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing the article \"a\" before \"bland BRAT diet.\"",
    "error": "\"Bland BRAT diet is recommended.\" ",
    "correction": " \"A bland BRAT diet is recommended.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun phrase is ungrammatical; an article is needed before \"residence,\" and \"for a week-long heart monitoring\" is incorrect without revising the structure.",
    "error": "\"Zio patch will be mailed to residence for a week-long heart monitoring.\" ",
    "correction": " \"Zio patch will be mailed to his residence for week-long heart monitoring.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun phrase \"long wait\" requires the article \"a.\"",
    "error": "\"Advised to avoid long wait and instead send a message to be seen earlier for acute concerns.\" ",
    "correction": " \"Advised to avoid a long wait and instead send a message to be seen earlier for acute concerns.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun \"pharmacy\" requires the definite article \"the\" in this context.",
    "error": "\"Levothyroxine prescription will be refilled and sent to pharmacy.\" ",
    "correction": " \"Levothyroxine prescription will be refilled and sent to the pharmacy.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The second sentence is a fragment missing a subject and article usage with \"the blood work\" is slightly awkward in this context.",
    "error": "\"- A well-woman exam was performed in 12/2024. Overdue for the blood work, which was last done in 12/2024.\" ",
    "correction": " \"- A well-woman exam was performed in 12/2024. She is overdue for blood work, which was last done in 12/2024.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun phrase is missing the definite article \"the,\" which is needed for correct grammar.",
    "error": "\"Severe vertigo with a sensation of room spinning, requiring assistance to walk, accompanied by nausea.\" ",
    "correction": " \"Severe vertigo with a sensation of the room spinning, requiring assistance to walk, accompanied by nausea.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original sentence omits the auxiliary verb \"is\" and is missing the article \"the\" before \"prior pace.\"",
    "error": "\"- Approximately 16-pound weight loss since 11/2025 reported, with recent increased difficulty maintaining prior pace, indicating ongoing monitoring of progress and challenges.\" ",
    "correction": " \"- Approximately 16-pound weight loss since 11/2025 is reported, with recent increased difficulty maintaining the prior pace, indicating ongoing monitoring of progress and challenges.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"her\" is needed before \"complex medical history\" to make the phrase grammatically complete.",
    "error": "\"Given complex medical history, it is strongly recommended to schedule an appointment with Dr. Dxxx for a Pap smear, which will be covered by the insurance.\" ",
    "correction": " \"Given her complex medical history, it is strongly recommended to schedule an appointment with Dr. Dxxx for a Pap smear, which will be covered by the insurance.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing the definite article \"the\" before \"fever\" and the phrasing is slightly ungrammatical without it.",
    "error": "\"Fever last checked in the clinic was at 100.5.\" ",
    "correction": " \"The fever was last checked in the clinic at 100.5.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing the article \"the\" before \"patient,\" and \"fewer\" is the correct comparative form for countable nouns like \"diapers,\" not \"less.\"",
    "error": "\"or if patient has less than 2 to 3 wet diapers a day\" ",
    "correction": " \"or if the patient has fewer than 2 to 3 wet diapers a day\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " \"followps\" is misspelled and missing a hyphen; \"primary care physician\" also needs the article \"the.\"",
    "error": "\"and advised to continue regular followps with primary care physician for health screenings.\" ",
    "correction": " \"and advised to continue regular follow-ups with the primary care physician for health screenings.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The indefinite article \"a\" is needed before the singular count noun \"defibrillator.\"",
    "error": "\"recommended for defibrillator.\" ",
    "correction": " \"recommended for a defibrillator.\"",
    "section": "FAMILY HISTORY"
  },
  {
    "reasoning": "The article \"an\" is needed before \"amputation\" for correct grammar.",
    "error": "\"Her son had amputation of his leg due to diabetic complications.\" ",
    "correction": " \"Her son had an amputation of his leg due to diabetic complications.\"",
    "section": "FAMILY HISTORY"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"duodenum.\"",
    "error": "\"carcinoid cancer in duodenum that required removal of it\" ",
    "correction": " \"carcinoid cancer in the duodenum that required removal of it\" ",
    "section": "FAMILY HISTORY"
  },
  {
    "reasoning": " The sentence is missing the article \"A\" before \"10-year-old child.\"",
    "error": "\"10-year-old child is seen for a wellness visit.\" -",
    "correction": "\"A 10-year-old child is seen for a wellness visit.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing an article before \"10-year-old child\" (and \"runny nose\" for parallel structure).",
    "error": "\"10-year-old child is seen for runny nose, headache, and high temperature.\" -",
    "correction": "\"A 10-year-old child is seen for a runny nose, headache, and high temperature.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The sentence is missing the article \"A\" before \"10-year-old child.\"",
    "error": "\"10-year-old child is seen for sore throat and abdominal pain.\" -",
    "correction": "\"A 10-year-old child is seen for sore throat and abdominal pain.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing the indefinite article \"An\" before \"11-year-old boy.\"",
    "error": "\"11-year-old boy is seen for sinus infection, snoring, and teeth grinding.\" -",
    "correction": "\"An 11-year-old boy is seen for sinus infection, snoring, and teeth grinding.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The article \"An\" is needed before \"11-year-old girl.\"",
    "error": "\"11-year-old girl is seen for a well-child check.\" -",
    "correction": "\"An 11-year-old girl is seen for a well-child check.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing an article before \"11-year-old girl.\"",
    "error": "\"11-year-old girl is seen for fevers and runny nose.\" -",
    "correction": "\"An 11-year-old girl is seen for fevers and runny nose.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The sentence is missing an article before \"12-year-old boy.\"",
    "error": "\"12-year-old boy is seen for a sick visit.\" -",
    "correction": "\"A 12-year-old boy is seen for a sick visit.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing an article before \"16-year-old boy.\"",
    "error": "\"16-year-old boy is seen for abdominal pain.\" -",
    "correction": "\"A 16-year-old boy is seen for abdominal pain.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing an article before \"18-month-old child,\" so \"An\" should be added for correct grammar.",
    "error": "\"18-month-old child is seen for an 18-month well check.\" -",
    "correction": "\"An 18-month-old child is seen for an 18-month well check.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing an article before \"2-week-old child.\"",
    "error": "\"2-week-old child is seen for a weight check today.\" -",
    "correction": "\"A 2-week-old child is seen for a weight check today.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing an article before \"3-year-old child,\" which is needed for correct grammar.",
    "error": "\"3-year-old child is seen for fever.\" -",
    "correction": "\"A 3-year-old child is seen for fever.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The sentence is missing an article; \"A\" is needed before \"4-year-old child\" for correct grammar.",
    "error": "\"4-year-old child is seen for a cough.\" -",
    "correction": "\"A 4-year-old child is seen for a cough.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The indefinite article \"A\" is needed before \"5-year-old child\" for correct grammar.",
    "error": "\"5-year-old child is seen for a toe infection.\" -",
    "correction": "\"A 5-year-old child is seen for a toe infection.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing an article before \"6-year-old child.\"",
    "error": "\"6-year-old child is seen for a well check.\" -",
    "correction": "\"A 6-year-old child is seen for a well check.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The indefinite article \"A\" is needed before \"6-year-old child\" to make the sentence grammatically correct.",
    "error": "\"6-year-old child is seen for left ear pain.\" -",
    "correction": "\"A 6-year-old child is seen for left ear pain.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The sentence is missing an article (\"A\") before \"6-year-old child,\" which is required for correct grammar.",
    "error": "\"6-year-old child is seen today for a well-child check.\" -",
    "correction": "\"A 6-year-old child is seen today for a well-child check.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"A\" is needed before \"7-year-old child\" to form a complete sentence.",
    "error": "\"7-year-old child is seen for a rash.\" -",
    "correction": "\"A 7-year-old child is seen for a rash.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing an article before \"7-year-old child.\"",
    "error": "\"7-year-old child is seen for a well-child check.\" -",
    "correction": "\"A 7-year-old child is seen for a well-child check.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The noun phrase beginning with a vowel sound requires the article \"an\" for correct English grammar.",
    "error": "\"8-year-old child is seen for body aches, fatigue, cough, and diarrhea.\" -",
    "correction": "\"An 8-year-old child is seen for body aches, fatigue, cough, and diarrhea.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The article \"A\" is needed before the singular count noun \"9-month-old child.\"",
    "error": "\"9-month-old child is seen for a well-child check.\" -",
    "correction": "\"A 9-month-old child is seen for a well-child check.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"mother\" in this context.",
    "error": "\"but does not cry when mother attempts this.\" -",
    "correction": "\"but does not cry when the mother attempts this.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The noun needs an article and should be in the more standard form \"sports form.\"",
    "error": "\"He does not require sport form.\" -",
    "correction": "\"He does not require a sports form.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing an article before \"psychiatrist\" and needs commas to set off the appositive name.",
    "error": "\"He is followed by psychiatrist Dr. Kxxx every 1 to 1.5 months\" -",
    "correction": "\"He is followed by a psychiatrist, Dr. Kxxx, every 1 to 1.5 months\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The article \"a\" is correct here because \"feeding tube\" is a non-specific, countable noun.",
    "error": "\"He was placed on the feeding tube while he was at the hospital.\" -",
    "correction": "\"He was placed on a feeding tube while he was at the hospital.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The definite article \"The\" is needed before \"mother\" to make the sentence grammatically complete in this context.",
    "error": "\"Mother has had ingrown toenails that were surgically removed in the past.\" -",
    "correction": "\"The mother has had ingrown toenails that were surgically removed in the past.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The article \"a\" is needed before \"consultation\" for correct grammar.",
    "error": "\"Mother reported consultation with a lactation specialist, who advised three exercises to be performed five times daily.\" -",
    "correction": "\"Mother reported a consultation with a lactation specialist, who advised three exercises to be performed five times daily.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The indefinite article \"a\" is needed before \"UTI\" to make the sentence grammatically correct.",
    "error": "\"She has been experiencing UTI and has been prescribed amoxicillin.\" -",
    "correction": "\"She has been experiencing a UTI and has been prescribed amoxicillin.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The singular countable noun \"interest\" requires an article (\"an\") in this context.",
    "error": "\"She has interest in art club but reports limited opportunities this semester.\" -",
    "correction": "\"She has an interest in art club but reports limited opportunities this semester.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The article/number agreement is incorrect; use either plural noun with \"any\" or singular noun with \"an.\"",
    "error": "\"She has never had any ear infection previously.\" -",
    "correction": "\"She has never had any ear infections previously.\" or \"She has never had an ear infection previously.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"meningitis vaccine.\"",
    "error": "\"The mother is curious to know if meningitis vaccine can be received early.\" -",
    "correction": "\"The mother is curious to know if the meningitis vaccine can be received early.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"a\" is needed before \"family history\" for correct grammar.",
    "error": "\"There is family history of hernia repair, as the patient's father required surgical correction at the age of 2.\" -",
    "correction": "\"There is a family history of hernia repair, as the patient's father required surgical correction at the age of 2.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The singular noun phrase \"very small amount\" requires the article \"a.\"",
    "error": "\"He now uses very small amount of Afrin sparingly on the right nostril\" ",
    "correction": " \"He now uses a very small amount of Afrin sparingly on the right nostril\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The noun \"nosebleed\" should be preceded by the article \"a\" in this context.",
    "error": "\"Now he can blow his nose without nosebleed.\" ",
    "correction": " \"Now he can blow his nose without a nosebleed.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The noun \"exercise test\" requires the article \"an.\"",
    "error": "\"He went to the ER because he did exercise test at home and experienced some symptoms.\" ",
    "correction": " \"He went to the ER because he did an exercise test at home and experienced some symptoms.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " Missing article \"an\" before \"excessive amount\" and missing comma before a nonessential \"which\" clause.",
    "error": "\"she was given excessive amount of medication which resulted in a drop in her blood pressure.\" ",
    "correction": " \"she was given an excessive amount of medication, which resulted in a drop in her blood pressure.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "Missing article \"a\" makes the phrase ungrammatical.",
    "error": "\"but only limited distance\" ",
    "correction": " \"but only a limited distance\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The article \"a\" is needed before \"myocardial infarction\" for correct grammar.",
    "error": "\"His paternal grandfather suffered myocardial infarction at age 40, likely due to the stress of his profession.\" ",
    "correction": " \"His paternal grandfather suffered a myocardial infarction at age 40, likely due to the stress of his profession.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"a\" is needed before \"heart attack\" for correct grammar.",
    "error": "\"Paternal grandfather had heart attack at 40.\" ",
    "correction": " \"Paternal grandfather had a heart attack at 40.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The phrase is missing the definite article \"the\" before \"doctor's office.\"",
    "error": "\"attributed to anxiety associated with being at doctor's office.\" ",
    "correction": " \"attributed to anxiety associated with being at the doctor's office.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The noun \"Holter monitor\" requires an article (\"a\") in this context.",
    "error": "\"Her primary provider has ordered Holter monitor to wear for 3 days.\" ",
    "correction": " \"Her primary provider has ordered a Holter monitor to wear for 3 days.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The article \"an\" is needed before the singular count noun \"aortic dissection.\"",
    "error": "\"She had aortic dissection and a mechanical aortic valve.\" ",
    "correction": " \"She had an aortic dissection and a mechanical aortic valve.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"a\" is needed before the singular count noun \"TIA.\"",
    "error": "\"She had TIA in the past.\" ",
    "correction": " \"She had a TIA in the past.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"a\" before \"sensation\" and the verb \"were\" after \"episode\" are needed for correct sentence structure.",
    "error": "\"No respiratory symptoms such as coughing, sneezing, or sensation of impending sickness prior to the episode reported.\" ",
    "correction": " \"No respiratory symptoms such as coughing, sneezing, or a sensation of impending sickness prior to the episode were reported.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"a\" is needed before \"suggestion\" for correct grammar.",
    "error": "\"There was suggestion of possible infection or inflammation in the right upper lobe.\" ",
    "correction": " \"There was a suggestion of possible infection or inflammation in the right upper lobe.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The article \"a\" is needed before \"few months\" to be grammatically correct.",
    "error": "\"for few months.\" ",
    "correction": " \"for a few months.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"an\" is needed before \"excess amount\" for correct grammar.",
    "error": "\"She does not consume excess amount of salt.\" ",
    "correction": " \"She does not consume an excess amount of salt.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The noun \"cooking\" requires an article (\"the\") in this construction to be grammatically correct.",
    "error": "\"He does cooking.\" ",
    "correction": " \"He does the cooking.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The definite article \"the\" is needed here to make the noun phrase grammatically correct.",
    "error": "\"and inquired if it was a right decision.\" ",
    "correction": " \"and inquired if it was the right decision.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The noun phrase \"slightly abnormal blood glucose level\" is missing the article \"a.\"",
    "error": "\"Last blood test showed slightly abnormal blood glucose level.\" ",
    "correction": " \"Last blood test showed a slightly abnormal blood glucose level.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The singular countable noun \"mechanical valve\" requires an article (\"a\") in this context.",
    "error": "\"open-heart surgery or mechanical valve would require antirejection medications\" ",
    "correction": " \"open-heart surgery or a mechanical valve would require antirejection medications\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The article \"a\" is required before \"panic attack.\"",
    "error": "\"She does not experience shortness of breath similar to panic attack.\" ",
    "correction": " \"She does not experience shortness of breath similar to a panic attack.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The article \"a\" is required before \"racing heart.\"",
    "error": "\"She experiences racing heart, but it was more of a pain.\" ",
    "correction": " \"She experiences a racing heart, but it was more of a pain.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The article \"a\" is required before \"heart murmur.\"",
    "error": "\"She has had heart murmur and has undergone vein removal surgery.\" ",
    "correction": " \"She has had a heart murmur and has undergone vein removal surgery.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "Missing articles (\"a\" and \"the\") make the sentence grammatically incomplete.",
    "error": "\"He can ascend flight of stairs without need to stop.\" ",
    "correction": " \"He can ascend a flight of stairs without the need to stop.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The noun \"rash\" needs an article (\"a\") for correct grammar.",
    "error": "\"caused rash, hives, and itching\" ",
    "correction": " \"caused a rash, hives, and itching\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " Incorrect progressive tense; simple past is appropriate here, and an article is needed before \"elevated sed rate.\"",
    "error": "\"Her lab results were showing elevated sed rate.\" ",
    "correction": " \"Her lab results showed an elevated sed rate.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " Missing article, incorrect capitalization of \"Holter,\" and incorrect phrasing \"during taking shower\" instead of \"while taking a shower.\"",
    "error": "\"She inquires if she can wear holter monitor during taking shower.\" ",
    "correction": " \"She inquires if she can wear a Holter monitor while taking a shower.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " Missing article and incorrect verb tense for an action continuing from the past to the present.",
    "error": "\"She maintains blood pressure log since 11/17/2025.\" ",
    "correction": " \"She has maintained a blood pressure log since 11/17/2025.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " Missing definite article \"the\" before \"last couple of weeks.\"",
    "error": "\"since last couple of weeks\" ",
    "correction": " \"since the last couple of weeks\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " Missing definite articles \"the\" before \"driveway\" and \"sidewalk\" makes the noun phrase grammatically incomplete.",
    "error": "\"occurred near driveway and sidewalk secondary to strong wind.\" ",
    "correction": " \"occurred near the driveway and sidewalk secondary to strong wind.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb pattern \"recommended her to obtain\" is incorrect; it should be \"recommended that she obtain,\" and \"heart\" needs the definite article \"the.\"",
    "error": "\"Her oncologist recommended her to obtain an echocardiogram since the chemotherapy would have an impact on heart over time.\" ",
    "correction": " \"Her oncologist recommended that she obtain an echocardiogram since the chemotherapy would have an impact on the heart over time.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb \"requested\" should take a direct object without \"for,\" and the article \"a\" is needed before \"medication supply.\"",
    "error": "\"He requested for medication supply until 05/2026.\" ",
    "correction": " \"He requested a medication supply until 05/2026.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The article \"a\" is needed before the singular countable noun \"heart attack.\"",
    "error": "\"He did not have heart attack in the past.\" ",
    "correction": " \"He did not have a heart attack in the past.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " An article is missing before \"old issue,\" a possessive pronoun is needed before \"hips,\" and the verb should agree in number with the singular noun \"issue.\"",
    "error": "\"She has old issue with hips that need redoing, but the doctor does not want to do it.\" ",
    "correction": " \"She has an old issue with her hips that needs redoing, but the doctor does not want to do it.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"a\" is missing before \"4-year-old girl.\"",
    "error": "\"She also has 4-year-old girl, who keeps her awake at night, and is healthy.\" ",
    "correction": " \"She also has a 4-year-old girl, who keeps her awake at night and is healthy.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"bone density test.\"",
    "error": "\"Her prescription for bone density test has expired.\" ",
    "correction": " \"Her prescription for the bone density test has expired.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"a\" is incorrect before the uncountable noun \"high blood pressure.\"",
    "error": "\"He has a lifelong high blood pressure, which is a common condition in his family.\" ",
    "correction": " \"He has lifelong high blood pressure, which is a common condition in his family.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The noun \"mother\" requires an article (\"a\") to be grammatically correct in this context.",
    "error": "\"Her family history includes mother with congestive heart failure and is negative for heart attacks, stents, bypass surgery, or strokes.\" ",
    "correction": " \"Her family history includes a mother with congestive heart failure and is negative for heart attacks, stents, bypass surgery, or strokes.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"machine fitting service\" for correct grammar.",
    "error": "\"He had been in machine fitting service and has high caffeine intake from energy drinks.\" ",
    "correction": " \"He had been in the machine fitting service and has high caffeine intake from energy drinks.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"patient's\" for correct grammar.",
    "error": "\"This is patient's first visit to this office, and his primary care physician is Dr. Axxx Ixxx.\" ",
    "correction": " \"This is the patient's first visit to this office, and his primary care physician is Dr. Axxx Ixxx.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"LDL-C test.\"",
    "error": "\"Inquiry is made about LDL-C test.\" ",
    "correction": " \"Inquiry is made about the LDL-C test.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"patient,\" and \"a\" is needed before \"rapid heartbeat.\"",
    "error": "\"During these episodes, patient experiences pain accompanied by rapid heartbeat.\" ",
    "correction": " \"During these episodes, the patient experiences pain accompanied by a rapid heartbeat.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The definite article \"the\" is needed before the possessive noun phrase \"patient's symptoms.\"",
    "error": "\"it was suspected that patient's symptoms were due to dehydration.\" ",
    "correction": " \"it was suspected that the patient's symptoms were due to dehydration.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"patient,\" and \"mentioned about\" is incorrect; it should be \"mentioned.\"",
    "error": "\"When patient was evaluated by a physician, he mentioned about having chest pain several times previously.\" ",
    "correction": " \"When the patient was evaluated by a physician, he mentioned having chest pain several times previously.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"a\" is missing before \"few weeks.\"",
    "error": "\"which would take few weeks to be able to see normally.\" ",
    "correction": " \"which would take a few weeks to be able to see normally.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The noun phrase \"outside purchasing assistant\" requires the article \"an\" before it.",
    "error": "\"He is currently employed as outside purchasing assistant for the city of Lxxx.\" ",
    "correction": " \"He is currently employed as an outside purchasing assistant for the city of Lxxx.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The definite article \"the\" is missing before \"colonoscopy procedure.\"",
    "error": "\"He inquires about the details of colonoscopy procedure.\" ",
    "correction": " \"He inquires about the details of the colonoscopy procedure.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The noun phrase \"restrictive eating disorder\" requires the article \"a.\"",
    "error": "\"due to restrictive eating disorder in the past.\" ",
    "correction": " \"due to a restrictive eating disorder in the past.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"presence\" for correct grammar.",
    "error": "\"due to presence of inhibitors.\" ",
    "correction": " \"due to the presence of inhibitors.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing a clear subject after \"but\" and needs an article before \"iron supplement.\"",
    "error": "\"Black stools are reported but believes it to be due to iron supplement.\" ",
    "correction": " \"Black stools are reported, but he believes this to be due to an iron supplement.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The noun \"supplement\" requires an article (\"a\") in this context.",
    "error": "\"She does take B12 supplement.\" ",
    "correction": " \"She does take a B12 supplement.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The noun \"urologist\" requires an article (\"a\") in this context.",
    "error": "\"A couple of weeks ago, he consulted urologist, Dr. Hxxx, due to persistent stabbing pain on his side.\" ",
    "correction": " \"A couple of weeks ago, he consulted a urologist, Dr. Hxxx, due to persistent stabbing pain on his side.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"an\" is needed before the singular countable noun \"allergy.\"",
    "error": "\"He does have allergy to PENICILLIN.\" ",
    "correction": " \"He does have an allergy to PENICILLIN.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The noun phrase \"influenza vaccine\" requires the definite article \"the\" in this context.",
    "error": "\"She did not receive influenza vaccine this year.\" ",
    "correction": " \"She did not receive the influenza vaccine this year.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " Missing article \"a\" before \"frequency\" makes the sentence grammatically incorrect.",
    "error": "\"She reports experiencing constipation with frequency of every month to every other month.\" ",
    "correction": " \"She reports experiencing constipation with a frequency of every month to every other month.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"a\" is needed before \"dermatology evaluation\" to make the noun phrase grammatically correct.",
    "error": "\"She saw Markel for dermatology evaluation.\" ",
    "correction": " \"She saw Markel for a dermatology evaluation.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "Missing definite article \"the\" before \"majority\" makes the sentence grammatically incomplete.",
    "error": "\"feels majority of the food passes through her system.\" ",
    "correction": " \"feels the majority of the food passes through her system.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"a\" before \"1 tablespoon\" is unnecessary and the article should instead precede \"mixture\" for correct noun phrasing.",
    "error": "\"She used to take a 1 tablespoon of mixture of prune juice, apple juice, and bran fiber daily,\" ",
    "correction": " \"She used to take 1 tablespoon of a mixture of prune juice, apple juice, and bran fiber daily,\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The definite article \"the\" is missing before \"past 4 months.\"",
    "error": "\"if consuming spicy Tex-Mex food daily for past 4 months.\" ",
    "correction": " \"if consuming spicy Tex-Mex food daily for the past 4 months.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " Missing article \"a\" before \"blood thinner,\" and the comma before \"but\" is unnecessary in this short clause.",
    "error": "\"he was on blood thinner, but experienced bleeding issues.\" ",
    "correction": " \"he was on a blood thinner but experienced bleeding issues.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"gallbladder\" for correct grammar.",
    "error": "\"he ordered a HIDA scan to evaluate gallbladder\" ",
    "correction": " \"he ordered a HIDA scan to evaluate the gallbladder\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The article \"a\" is needed before \"bowel movement\" for correct noun phrase usage.",
    "error": "\"Currently, she only passes bowel movement once in the morning after having her coffee with milk.\" ",
    "correction": " \"Currently, she only passes a bowel movement once in the morning after having her coffee with milk.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The noun \"effect\" should be preceded by the article \"an\" in this context.",
    "error": "\"but recently increased it back to 4 mg due to a perceived decrease in efficacy and noticed immediate effect.\" ",
    "correction": " \"but recently increased it back to 4 mg due to a perceived decrease in efficacy and noticed an immediate effect.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"a\" is unnecessary before an uncountable noun used in this way.",
    "error": "\"which is a notable progress.\" ",
    "correction": " \"which is notable progress.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The singular count noun \"sensation\" requires the article \"an.\"",
    "error": "\"She has had frequent episodes of heartburn and also notes occasional sensation of food sticking in the chest\" ",
    "correction": " \"She has had frequent episodes of heartburn and also notes an occasional sensation of food sticking in the chest\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The definite article \"the\" is required before \"BRCA1 gene\" to make the noun phrase grammatically correct.",
    "error": "\"She has BRCA1 gene.\" ",
    "correction": " \"She has the BRCA1 gene.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The noun \"odor\" requires the article \"an.\"",
    "error": "\"had a reddish hue throughout, and odor to it,\" ",
    "correction": " \"had a reddish hue throughout, and an odor to it,\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "Missing definite article \"the\" before \"phone.\"",
    "error": "\"The mother was advised on phone this past weekend\" ",
    "correction": " \"The mother was advised on the phone this past weekend\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The noun phrase \"mail-order pharmacy\" requires an article.",
    "error": "\"He is considering ordering the medication through mail-order pharmacy.\" ",
    "correction": " \"He is considering ordering the medication through a mail-order pharmacy.\" or \"through the mail-order pharmacy.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing an article at the beginning, making it a grammatical fragment.",
    "error": "\"Increase in diarrhea has been ongoing for approximately 1.5 months.\" ",
    "correction": " \"The increase in diarrhea has been ongoing for approximately 1.5 months.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The noun \"cough\" in this context should be preceded by an article (\"a cough\") to be grammatically correct.",
    "error": "\"He appears to have increased congestion and produces cough but is unable to effectively clear secretions.\" ",
    "correction": " \"He appears to have increased congestion and produces a cough but is unable to effectively clear secretions.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing an article before \"feeding therapist\" and uses an ungrammatical phrase \"him accepting\" instead of a clearer verbal construction.",
    "error": "\"The caregiver does not force him while feeding since feeding therapist is working on him accepting.\" ",
    "correction": " \"The caregiver does not force him while feeding since the feeding therapist is working on getting him to accept food.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"a\" is needed before \"significant amount,\" and a comma is needed before \"or\" in a series.",
    "error": "\"He does not consume significant amount of milk, cheese or dairy products.\" ",
    "correction": " \"He does not consume a significant amount of milk, cheese, or dairy products.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The phrase is missing a preposition/article; standard form is “weeks’ worth of supply” or “a 2‑week supply.”",
    "error": "\"which is 2 weeks' worth supply.\" ",
    "correction": " \"which is 2 weeks' worth of supply.\" or \"which is a 2‑week supply.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The phrase is missing the preposition \"for\" and the article \"the\" to form correct English.",
    "error": "\"His kidneys are affected second time.\" ",
    "correction": " \"His kidneys are affected for the second time.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The noun \"feeling\" requires an article (\"a\") to make the sentence grammatically correct.",
    "error": "\"Feeling of wobbliness after the influenza vaccine has been reported.\" ",
    "correction": " \"A feeling of wobbliness after the influenza vaccine has been reported.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"a\" is needed before the singular count noun \"complete hysterectomy.\"",
    "error": "\"She will consider complete hysterectomy if she exhausts all the options.\" ",
    "correction": " \"She will consider a complete hysterectomy if she exhausts all the options.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The use of the article \"a\" before \"STD testing\" is incorrect, and the verb phrase \"to have\" is needed for correct grammar.",
    "error": "\"She does not wish a STD testing today.\" ",
    "correction": " \"She does not wish to have STD testing today.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The noun \"delay\" in this context requires the article \"a.\"",
    "error": "\"related to delay in seeing the infectious disease doctor before discharge.\" ",
    "correction": " \"related to a delay in seeing the infectious disease doctor before discharge.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The article \"a\" is incorrectly used before \"family member support,\" making the sentence ungrammatical.",
    "error": "\"He has a family member support.\" ",
    "correction": " \"He has family member support.\" OR \"He has a family member for support.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"An\" is needed before \"attempt\" for correct grammar.",
    "error": "\"Attempt has been made to reduce her cheese consumption and supplement calcium intake with vitamins.\" ",
    "correction": " \"An attempt has been made to reduce her cheese consumption and supplement calcium intake with vitamins.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The article \"a\" is unnecessary here and makes the phrase grammatically awkward.",
    "error": "\"The patient suspects having a pink eye.\" ",
    "correction": " \"The patient suspects having pink eye.\" or \"The patient suspects she has pink eye.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " This sentence contains a comma splice and is missing the article \"a\" before \"reduction.\"",
    "error": "\"Previously, he used to wake up every hour, however, with reduction in his snacking, his breaks are more extended.\" ",
    "correction": " \"Previously, he used to wake up every hour; however, with a reduction in his snacking, his breaks are more extended.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The noun \"journalist\" needs the article \"a\" in this context.",
    "error": "\"had to cease his previous work as journalist due to a leg fracture.\" ",
    "correction": " \"had to cease his previous work as a journalist due to a leg fracture.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The noun \"compression band\" needs an article or should be pluralized.",
    "error": "\"does not use compression band regularly\" ",
    "correction": " \"does not use a compression band regularly\" or \"does not use compression bands regularly\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The noun \"Marine Corps\" requires the definite article \"the\" in this context.",
    "error": "\"She works at Marine Corps.\" ",
    "correction": " \"She works at the Marine Corps.\" or \"She works for the Marine Corps.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The appositive \"psychiatrist\" requires an article before it, and \"a\" before \"Dr.\" is not needed in this structure.",
    "error": "\"under the care of a Dr. Axxx, psychiatrist\" ",
    "correction": " \"under the care of Dr. Axxx, a psychiatrist\" or \"under the care of a psychiatrist, Dr. Axxx\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"gym.\"",
    "error": "\"including being able to navigate to gym using a card system.\" ",
    "correction": " \"including being able to navigate to the gym using a card system.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The article \"a\" is needed before \"sufficient supply\" for correct noun phrase construction.",
    "error": "\"They have sufficient supply of guanfacine at home\" ",
    "correction": " \"They have a sufficient supply of guanfacine at home\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"a\" is required before the noun phrase \"wobbly sensation.\"",
    "error": "\"He describes the instability as \"wobbly\" sensation upon standing.\" ",
    "correction": " \"He describes the instability as a \"wobbly\" sensation upon standing.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"a\" is needed before the singular countable noun \"diet.\"",
    "error": "\"He maintains sugar-free and low-sodium diet.\" ",
    "correction": " \"He maintains a sugar-free and low-sodium diet.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The original sentence is missing a subject and article, making it grammatically incorrect.",
    "error": "\"and currently, her readings have fluctuated between 95 and 99 degrees Fahrenheit and notes for her a temperature of 98 or 99 is fever.\" ",
    "correction": " \"and currently, her readings have fluctuated between 95 and 99 degrees Fahrenheit and she notes that for her, a temperature of 98 or 99 is a fever.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The article \"a\" is required before \"couple\" in this context.",
    "error": "\"for couple of days\" ",
    "correction": " \"for a couple of days\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The article \"the\" is needed before \"influenza vaccine\" in this context.",
    "error": "\"He does not want to receive influenza vaccine today\" ",
    "correction": " \"He does not want to receive the influenza vaccine today\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The article \"the\" is needed before \"last refill\" to make the noun phrase grammatically complete.",
    "error": "\"He ran out of the Xanax as last refill was prescribed approximately 2 years ago.\" ",
    "correction": " \"He ran out of the Xanax as the last refill was prescribed approximately 2 years ago.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"second\" to make the phrase grammatically correct.",
    "error": "\"She has a history of two spontaneous events, second of which occurred after the birth of her daughter.\" ",
    "correction": " \"She has a history of two spontaneous events, the second of which occurred after the birth of her daughter.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The definite article \"the\" is missing before \"same,\" making the sentence grammatically incorrect.",
    "error": "\"She experiences same bilateral nose pressure.\" ",
    "correction": " \"She experiences the same bilateral nose pressure.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The prepositional phrase is incomplete without the article \"the\" and sounds ungrammatical.",
    "error": "\"She was taken to the hospital on 10/26/2025 morning.\" ",
    "correction": " \"She was taken to the hospital on the morning of 10/26/2025.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"a\" is needed before the singular countable noun \"podiatrist.\"",
    "error": "\"He does visit podiatrist but has not seen an eye doctor for screening.\" ",
    "correction": " \"He does visit a podiatrist but has not seen an eye doctor for screening.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The phrase is missing the article \"a\" and the noun should be plural (\"hours\") to agree with \"one and a half.\"",
    "error": "\"one and half hour ago\" ",
    "correction": " \"one and a half hours ago\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The article \"an\" is incorrect here; \"advice\" is an uncountable noun and should not take \"an.\"",
    "error": "\"the mother received an advice to avoid formula\" ",
    "correction": " \"the mother received advice to avoid formula\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The word order and missing article \"the\" make the original phrase grammatically incorrect.",
    "error": "\"On 12/18/2025 night, she experienced\" ",
    "correction": " \"On the night of 12/18/2025, she experienced\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The article \"a\" is required in the phrase \"a lot of\" for correct grammar.",
    "error": "\"she was drinking lot of liquids.\" ",
    "correction": " \"she was drinking a lot of liquids.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The article \"a\" is needed before \"discussion\" for correct grammar.",
    "error": "\"once the infection is gone there should be discussion about surgical intervention\" ",
    "correction": " \"once the infection is gone there should be a discussion about surgical intervention\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The article \"a\" is required before \"urinary tract infection.\"",
    "error": "\"was told that she does not have urinary tract infection (UTI)\" ",
    "correction": " \"was told that she does not have a urinary tract infection (UTI)\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"a\" is unnecessary here and creates an ungrammatical noun phrase.",
    "error": "\"She took ibuprofen for her a worse headache.\" ",
    "correction": " \"She took ibuprofen for her worse headache.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The phrase is missing the article \"the\" in the standard expression \"hot to the touch.\"",
    "error": "\"The area feels hot to touch\" ",
    "correction": " \"The area feels hot to the touch\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb tense and aspect are incorrect for a recurring action; \"undergoes\" is needed for something done regularly, and the article \"a\" is required before \"mammogram.\"",
    "error": "\"She underwent mammogram every other year and she is not currently due for her mammogram.\" ",
    "correction": " \"She undergoes a mammogram every other year and she is not currently due for her mammogram.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " Missing definite article \"the\" before \"heart.\"",
    "error": "\"for evaluation of heart,\" ",
    "correction": " \"for evaluation of the heart,\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The article \"a\" is incorrect before an uncountable noun phrase like \"blood work.\"",
    "error": "\"he is supposed to get a repeat blood work.\" ",
    "correction": " \"he is supposed to get repeat blood work.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "Missing article before \"pulmonologist,\" and \"follow up\" used as a noun should be hyphenated as \"follow-up.\"",
    "error": "\"He is planning a follow up with pulmonologist next year.\" ",
    "correction": " \"He is planning a follow-up with a pulmonologist next year.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The indefinite article \"a\" is needed before the singular count noun \"urine test.\"",
    "error": "\"Urine test was not conducted.\" ",
    "correction": " \"A urine test was not conducted.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The noun \"dose\" needs an article (\"a\") for correct grammar.",
    "error": "\"However, significant heartburn occurred during nocturnal awakening in the middle of last night, attributed to missed dose.\" ",
    "correction": " \"However, significant heartburn occurred during nocturnal awakening in the middle of last night, attributed to a missed dose.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The noun \"shower\" needs an article (\"a\") for correct grammar.",
    "error": "\"Prior to retirement, she attempted symptom management with morning shower and loose clothing\" ",
    "correction": " \"Prior to retirement, she attempted symptom management with a morning shower and loose clothing\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing the article \"A\" and the auxiliary verb \"was\" for proper sentence structure, and \"refill\" needs an article.",
    "error": "\"Request made for refill of pantoprazole.\" ",
    "correction": " \"A request was made for a refill of pantoprazole.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"a\" is needed before \"suspected calcium deposit,\" and the subject \"she\" is needed before \"previously was noted\" for grammatical completeness.",
    "error": "\"X‑ray obtained at that time indicated suspected calcium deposit and previously was noted to have six calcium deposits in the right lung and two in the hip.\" ",
    "correction": " \"X‑ray obtained at that time indicated a suspected calcium deposit, and she previously was noted to have six calcium deposits in the right lung and two in the hip.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " Incorrect comparative \"then\" used instead of \"than,\" and missing article \"the\" before \"right\" and \"left.\"",
    "error": "\"Both of her ears are clogged, but right is worse then left.\" ",
    "correction": " \"Both of her ears are clogged, but the right is worse than the left.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The phrase \"hard-time\" is incorrectly hyphenated and missing the article \"a.\"",
    "error": "\"She needs to have ear irrigation done as she has hard-time hearing.\" ",
    "correction": " \"She needs to have ear irrigation done as she has a hard time hearing.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The article \"the\" is unnecessary before \"rehab\" in this context.",
    "error": "\"She was in the rehab for alcoholism.\" ",
    "correction": " \"She was in rehab for alcoholism.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The noun phrase \"heart murmur\" requires the article \"a\" in this context.",
    "error": "\"she has had heart murmur from cardiomyopathy, which is also well managed.\" ",
    "correction": " \"she has had a heart murmur from cardiomyopathy, which is also well managed.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"an\" is missing before \"extended period.\"",
    "error": "\"Hip pain is reported, which worsens when getting up in the middle of the night to use the bathroom or after extended period of sitting.\" ",
    "correction": " \"Hip pain is reported, which worsens when getting up in the middle of the night to use the bathroom or after an extended period of sitting.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The definite article \"the\" is missing before \"right arm.\"",
    "error": "\"The pain originates from the shoulder blade and radiates down right arm, causing tingling and numbness.\" ",
    "correction": " \"The pain originates from the shoulder blade and radiates down the right arm, causing tingling and numbness.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"Epley maneuver\" for correct noun phrasing.",
    "error": "\"Epley maneuver does seem to be helpful\" ",
    "correction": " \"The Epley maneuver does seem to be helpful\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The sentence is missing an article and uses informal/incorrect passive construction \"got rescheduled\" instead of standard \"was rescheduled.\"",
    "error": "\"Appointment got rescheduled due to her menstrual cycle.\" ",
    "correction": " \"The appointment was rescheduled due to her menstrual cycle.\" or \"Her appointment was rescheduled due to her menstrual cycle.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The present perfect tense (\"has received\") and the definite article \"the\" are needed for correct grammar.",
    "error": "\"She already received influenza vaccine.\" ",
    "correction": " \"She has already received the influenza vaccine.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The noun \"mammogram\" requires the article \"a\" in this sentence.",
    "error": "\"She prefers to undergo mammogram through Mountain View Hospital.\" ",
    "correction": " \"She prefers to undergo a mammogram through Mountain View Hospital.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The possessive pronoun \"her\" is more grammatically appropriate than the definite article \"the\" in this context.",
    "error": "\"She still has the uterus.\" ",
    "correction": " \"She still has her uterus.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The noun \"report\" requires an article (\"a\") in this construction.",
    "error": "\"There is also report of a lack of lubrication during intimate moments with her boyfriend,\" ",
    "correction": " \"There is also a report of a lack of lubrication during intimate moments with her boyfriend,\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The article \"an\" is needed before \"inability,\" and a comma clarifies the clause.",
    "error": "\"Cough is described as muffled followed by inability to breathe briefly\" ",
    "correction": " \"Cough is described as muffled, followed by an inability to breathe briefly\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The article \"an\" is required before the abbreviation \"MA,\" which begins with a vowel sound.",
    "error": "\"Her sister is a MA as well.\" ",
    "correction": " \"Her sister is an MA as well.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The singular countable noun \"condition\" requires an article (\"a\").",
    "error": "\"among his friends who deal with similar condition.\" ",
    "correction": " \"among his friends who deal with a similar condition.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "\"Bath\" should be plural to agree with the compound subject, and the definite article \"the\" is needed before \"previous episode.\"",
    "error": "\"Preparation H and sitz bath have been used during previous episode.\" ",
    "correction": " \"Preparation H and sitz baths have been used during the previous episode.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The noun phrase needs an article and plural form (\"the wrong foods\") to be grammatically correct.",
    "error": "\"He reports consuming wrong food to a great extent.\" ",
    "correction": " \"He reports consuming the wrong foods to a great extent.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The noun phrase is missing the article “a” before “blueberry smoothie.”",
    "error": "\"He had blueberry smoothie yesterday that helped improve his symptoms.\" ",
    "correction": " \"He had a blueberry smoothie yesterday that helped improve his symptoms.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The definite article \"the\" is needed in the idiom \"hot to the touch.\"",
    "error": "\"he felt hot to touch.\" ",
    "correction": " \"he felt hot to the touch.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"a\" is needed before \"few\" to make the phrase grammatically correct.",
    "error": "\"She takes few allergy medications, D3 and K2.\" ",
    "correction": " \"She takes a few allergy medications, D3 and K2.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " \"The appointment\" is overly specific and unnatural here; \"an appointment\" is the correct article for an unscheduled visit.",
    "error": "\"She is contemplating consulting a rheumatologist but is not sure how soon she can get the appointment.\" ",
    "correction": " \"She is contemplating consulting a rheumatologist but is not sure how soon she can get an appointment.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"a\" is needed before \"heating pad\" for correct grammar.",
    "error": "\"She had some relief from the pain by applying heating pad to her back, but this resulted in a burn.\" ",
    "correction": " \"She had some relief from the pain by applying a heating pad to her back, but this resulted in a burn.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The article \"A\" is needed, and the correct past participle form is \"hard-boiled.\"",
    "error": "\"Hard boil egg was identified as a recent trigger.\" ",
    "correction": " \"A hard-boiled egg was identified as a recent trigger.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " Missing article \"a\" before \"brain MRI.\"",
    "error": "\"She expresses concern that she will not get brain MRI outside of the Encinal Hospital neurologist.\" ",
    "correction": " \"She expresses concern that she will not get a brain MRI outside of the Encinal Hospital neurologist.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " Missing article \"an\" before \"MRI.\"",
    "error": "\"She had fallen down a flight of stairs and subsequently underwent MRI.\" ",
    "correction": " \"She had fallen down a flight of stairs and subsequently underwent an MRI.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " Missing article \"a\" before \"neurologist.\"",
    "error": "\"She is also requesting a referral to neurologist and a neurosurgeon.\" ",
    "correction": " \"She is also requesting a referral to a neurologist and a neurosurgeon.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " Missing article \"a\" before \"brain MRI.\"",
    "error": "\"She is scheduled for autonomic testing in 01/2026, but she has been informed to get brain MRI before proceeding with the autonomic testing.\" ",
    "correction": " \"She is scheduled for autonomic testing in 01/2026, but she has been informed to get a brain MRI before proceeding with the autonomic testing.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " Missing article \"a\" before \"full neurological evaluation.\"",
    "error": "\"She underwent full neurological evaluation at Encinal Hospital.\" ",
    "correction": " \"She underwent a full neurological evaluation at Encinal Hospital.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The subject is missing, and the article \"a\" is needed before \"half dose.\"",
    "error": "\"Attempted to take half dose of Metamucil daily but discontinued it after experiencing bloating after 3 days and constipation-like symptoms.\" ",
    "correction": " \"She attempted to take a half dose of Metamucil daily but discontinued it after experiencing bloating after 3 days and constipation-like symptoms.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The noun \"urologist\" needs an article, and it should be set off with commas as an appositive.",
    "error": "\"She anticipates that Dr. Pxxx, urologist will recommend surgical removal of stones this time as well.\" ",
    "correction": " \"She anticipates that Dr. Pxxx, a urologist, will recommend surgical removal of stones this time as well.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The noun \"response\" needs the article \"a.\"",
    "error": "\"Since she did not get response from them, she and her husband decided to go to Dr. Pxxx.\" ",
    "correction": " \"Since she did not get a response from them, she and her husband decided to go to Dr. Pxxx.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence structure is unclear and missing an article before \"inability,\" and \"one\" is an unclear pronoun referent.",
    "error": "\"She continues to experience issues with both hands for which she sees Dr. Bxxx with one hand bone-on-bone and inability to straighten one.\" ",
    "correction": " \"She continues to experience issues with both hands, for which she sees Dr. Bxxx, with one hand bone-on-bone and an inability to straighten it.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The definite article \"the\" is required before \"next appointment.\"",
    "error": "\"during next appointment.\" ",
    "correction": " \"during the next appointment.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"a\" is missing before \"little.\"",
    "error": "\"Fetal weight at the last visit was little over four pounds\" ",
    "correction": " \"Fetal weight at the last visit was a little over four pounds\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The tense should match the past context (\"provided\"), and the singular noun \"refill\" requires an article (\"a\").",
    "error": "\"Dr. Cxxx provides refill for Plaquenil.\" ",
    "correction": " \"Dr. Cxxx provided a refill for Plaquenil.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " Missing article \"a\" before \"lot\" is a grammatical error.",
    "error": "\"Occupation:  Worked in a place with lot of silica and graphite exposure.\" ",
    "correction": " \"Occupation:  Worked in a place with a lot of silica and graphite exposure.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The noun \"pharmacy\" needs the definite article \"the\" in this context.",
    "error": "\"and went to pharmacy to purchase a thermometer\" ",
    "correction": " \"and went to the pharmacy to purchase a thermometer\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The noun \"fever\" in this context requires the article \"a.\"",
    "error": "\"Last night, she felt like she had fever\" ",
    "correction": " \"Last night, she felt like she had a fever\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The noun \"infusion\" requires an article (\"a\") in this context.",
    "error": "\"She had a sleep study done and got magnesium infusion, which made her feel better, but she was very tired afterward.\" ",
    "correction": " \"She had a sleep study done and got a magnesium infusion, which made her feel better, but she was very tired afterward.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The fixed expression requires the definite article \"the\" rather than \"a.\"",
    "error": "\"lifting his granddaughter in a wrong way.\" ",
    "correction": " \"lifting his granddaughter in the wrong way.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The article \"a\" is needed before the singular count noun \"sinus infection.\"",
    "error": "\"originating as sinus infection.\" ",
    "correction": " \"originating as a sinus infection.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The article \"a\" is needed before the singular noun \"desire.\"",
    "error": "\"She expressed desire for antibiotics if required to mitigate the infection.\" ",
    "correction": " \"She expressed a desire for antibiotics if required to mitigate the infection.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The article \"a\" is incorrect before the plural noun \"ear infections\"; the sentence needs either no article or a rephrasing with \"history of.\"",
    "error": "\"She has a frequent ear infections and swimmer's ear during her childhood.\" ",
    "correction": " \"She has frequent ear infections and swimmer's ear during her childhood.\" or \"She has a frequent history of ear infections and swimmer's ear during her childhood.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The noun phrase \"prostate issue\" requires an article (\"a\") to be grammatically correct.",
    "error": "\"He is on tamsulosin for prostate issue.\" ",
    "correction": " \"He is on tamsulosin for a prostate issue.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The definite article \"the\" before \"attempts\" is unnecessary and makes the phrase grammatically awkward.",
    "error": "\"Even with the attempts by a bone specialist to remove the metal, the metal remained in place.\" ",
    "correction": " \"Even with attempts by a bone specialist to remove the metal, the metal remained in place.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"an\" is missing before \"upcoming appointment,\" causing a grammatical error.",
    "error": "\"She reports upcoming appointment on 10/11/2025 to discuss additional concerns.\" ",
    "correction": " \"She reports an upcoming appointment on 10/11/2025 to discuss additional concerns.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The percentage requires an article (\"a\") before \"47%\" to be grammatically correct.",
    "error": "\"He underwent surgery at that time and had 47% permanent physical impairment from the waist down.\" ",
    "correction": " \"He underwent surgery at that time and had a 47% permanent physical impairment from the waist down.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The definite article \"the\" is needed for the standard expression \"warm to the touch.\"",
    "error": "\"The leg is warm to touch.\" ",
    "correction": " \"The leg is warm to the touch.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " Incorrect use of \"another\" and missing article/commas make the sentence grammatically incorrect; \"any other recreational drugs, except that\" clarifies the structure.",
    "error": "\"He does not use another recreational drug except he rarely uses marijuana and does not consume caffeine or energy drinks.\" ",
    "correction": " \"He does not use any other recreational drugs, except that he rarely uses marijuana, and does not consume caffeine or energy drinks.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The noun phrase \"influenza injection\" needs an article (\"the\") or should be pluralized to be grammatically correct.",
    "error": "\"She usually does not get influenza injection.\" ",
    "correction": " \"She usually does not get the influenza injection.\" or \"She usually does not get influenza injections.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The noun phrase \"runny nose\" requires an article \"a,\" and adverb placement can be improved.",
    "error": "\"She has runny nose frequently.\" ",
    "correction": " \"She has a runny nose frequently.\" or \"She frequently has a runny nose.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The noun \"cold\" should be plural or preceded by an article in this context.",
    "error": "\"She often catches cold.\" ",
    "correction": " \"She often catches colds.\" or \"She often catches a cold.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"past year\" for correct grammar.",
    "error": "\"Diet:  Limited dietary options during past year due to working out of town\" ",
    "correction": " \"Diet:  Limited dietary options during the past year due to working out of town\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The noun \"sleep study\" needs the article \"a\" to be grammatically correct.",
    "error": "\"after vocal seizures were found during sleep study done for sleep apnea.\" ",
    "correction": " \"after vocal seizures were found during a sleep study done for sleep apnea.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "Missing indefinite article before a singular count noun.",
    "error": "\"He does not have blood pressure cuff at home.\" ",
    "correction": " \"He does not have a blood pressure cuff at home.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "Missing article \"a\" before \"significant amount.\"",
    "error": "\"and noticed significant amount of blood in her sputum this morning\" ",
    "correction": " \"and noticed a significant amount of blood in her sputum this morning\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"an\" is needed before \"influenza vaccination,\" and the sentence should end with a period.",
    "error": "\"She inquires about receiving influenza vaccination \" ",
    "correction": " \"She inquires about receiving an influenza vaccination.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The definite article “The” is needed, and the past perfect tense is incorrect with a specific time reference (“this morning”).",
    "error": "\"Cardiologist had refilled lisinopril this morning.\" ",
    "correction": " \"The cardiologist refilled lisinopril this morning.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The definite article “The” is needed, and the present perfect tense is incorrect with a specific time reference (“this morning”).",
    "error": "\"Cardiologist has refilled atorvastatin this morning.\" ",
    "correction": " \"The cardiologist refilled atorvastatin this morning.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The possessive form “father's” and the article “a” before “history” are required for correct grammar.",
    "error": "\"He reports that his father side of the family has history of heart attack and diabetes.\" ",
    "correction": " \"He reports that his father's side of the family has a history of heart attack and diabetes.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article “a” is required before “few years.”",
    "error": "\"Living Condition:  He moved here from Arizona few years back.\" ",
    "correction": " \"Living Condition:  He moved here from Arizona a few years back.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The singular count noun phrase \"foot x-ray\" requires an article (\"a\") to be grammatically complete.",
    "error": "\"Foot x-ray is pending.\" ",
    "correction": " \"A foot x-ray is pending.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The article \"an\" is incorrect before the consonant sound at the start of \"UTI.\"",
    "error": "\"an UTI\" ",
    "correction": " \"a UTI\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing the definite article \"the\" and the drug classes should be plural for proper grammar.",
    "error": "\"Difference between SNRI and SSRI was inquired about.\" ",
    "correction": " \"The difference between SNRIs and SSRIs was inquired about.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"a\" is needed before \"possible connection.\"",
    "error": "\"She notes her husband's father has always had blood pressure issues and questions possible connection.\" ",
    "correction": " \"She notes her husband's father has always had blood pressure issues and questions a possible connection.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " Missing article \"a\" before \"prescription.\"",
    "error": "\"She received prescription for allergy eye drops and a nasal spray\" ",
    "correction": " \"She received a prescription for allergy eye drops and a nasal spray\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The noun phrase \"bone density test\" requires the article \"a.\"",
    "error": "\"The patient inquired about bone density test as well.\" ",
    "correction": " \"The patient inquired about a bone density test as well.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"a\" is missing before \"couple,\" which is required in standard English usage.",
    "error": "\"ongoing for couple of weeks.\" ",
    "correction": " \"ongoing for a couple of weeks.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " Missing article before \"sudden onset\" and missing hyphen in the compound adjective \"rib-related.\"",
    "error": "\"The pain has sudden onset, rapidly worsens, and then improves, raising concern for a recurrent rib related issue experienced previously.\" ",
    "correction": " \"The pain has a sudden onset, rapidly worsens, and then improves, raising concern for a recurrent rib-related issue experienced previously.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"a\" is needed before \"robotic procedure\" to be grammatically correct.",
    "error": "\"compared to robotic procedure performed at other centers which has a faster recovery time.\" ",
    "correction": " \"compared to a robotic procedure performed at other centers, which has a faster recovery time.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"a\" before \"Cornell Medical Center\" is unnecessary, and the plural compound subject \"exploratory surgery ... and a D and C\" requires the plural verb \"were.\"",
    "error": "\"She was referred to a Cornell Medical Center where exploratory surgery on the ovarian fluid and a D and C was recommended.\" ",
    "correction": " \"She was referred to Cornell Medical Center where exploratory surgery on the ovarian fluid and a D and C were recommended.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "Missing article before \"workday\" and incorrect use of \"where\" instead of \"when.\"",
    "error": "\"Pain is noted to worsen at the end of workday where he has been walking around all day.\" ",
    "correction": " \"Pain is noted to worsen at the end of the workday when he has been walking around all day.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"hospital\" in this context.",
    "error": "\"She was given furosemide 40 mg for water retention at hospital and requests a refill on that.\" ",
    "correction": " \"She was given furosemide 40 mg for water retention at the hospital and requests a refill on that.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The noun phrase is missing the article \"the\" before \"rest,\" and \"illegality\" also requires \"the\" to be grammatically complete.",
    "error": "\"2 of which were jokes and rest were about childcare and illegality of both strikes.\" ",
    "correction": " \"2 of which were jokes and the rest were about childcare and the illegality of both strikes.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"a\" before \"long-standing high blood pressure\" is incorrect with this uncountable noun phrase.",
    "error": "\"He has a long-standing high blood pressure and cholesterol levels, which he prefers not to treat with medication due to potential side effects and cost.\" ",
    "correction": " \"He has long-standing high blood pressure and cholesterol levels, which he prefers not to treat with medication due to potential side effects and cost.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The article \"an\" is needed before \"ENT doctor.\"",
    "error": "\"He prefers to see ENT doctor first before considering other options.\" ",
    "correction": " \"He prefers to see an ENT doctor first before considering other options.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The noun \"blood clot\" requires an article (\"a\") in this context.",
    "error": "\"He developed blood clot in the left leg and the lungs.\" ",
    "correction": " \"He developed a blood clot in the left leg and the lungs.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The noun \"company\" requires an article (\"a\"), and the proper noun \"Gym\" should be capitalized.",
    "error": "\"Occupation:  Started new company, Gold's gym.\" ",
    "correction": " \"Occupation:  Started a new company, Gold's Gym.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The indefinite article \"a\" is needed before \"pacemaker/defibrillator.\"",
    "error": "\"He also has pacemaker/defibrillator implanted.\" ",
    "correction": " \"He also has a pacemaker/defibrillator implanted.\"",
    "section": "PAST SURGICAL HISTORY"
  },
  {
    "reasoning": "The phrase \"to the touch\" requires the definite article \"the\" to be grammatically correct.",
    "error": "\"Ears  Fluid present bilaterally; ears warmer to touch.\" ",
    "correction": " Fluid present bilaterally; ears warmer to the touch.\"",
    "section": "PHYSICAL EXAM"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"visualized portion\" for correct grammar.",
    "error": "\"Left ear was difficult to examine but visualized portion was normal.\" -",
    "correction": "\"Left ear was difficult to examine but the visualized portion was normal.\"",
    "section": "PHYSICAL EXAM"
  },
  {
    "reasoning": " The sentence is missing an article and a preposition, making the grammar incorrect.",
    "error": "\"On percussion, abdomen is dull, left lower quadrant.\" -",
    "correction": "\"On percussion, the abdomen is dull in the left lower quadrant.\" ",
    "section": "PHYSICAL EXAM"
  },
  {
    "reasoning": "The indefinite article \"a\" is needed before \"small rash.\"",
    "error": "\"Presence of small rash behind the ear.\" -",
    "correction": "\"Presence of a small rash behind the ear.\"",
    "section": "PHYSICAL EXAM"
  },
  {
    "reasoning": "The singular countable noun \"bump\" needs the article \"a.\"",
    "error": "\"Skin:  Erythema noted without any evidence of bump on palpation.\" ",
    "correction": "\"Skin:  Erythema noted without any evidence of a bump on palpation.\"",
    "section": "PHYSICAL EXAM"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"touch.\"",
    "error": "\"Slightly warm to touch.\" -",
    "correction": "\"Slightly warm to the touch.\"",
    "section": "PHYSICAL EXAM"
  },
  {
    "reasoning": " Subject-verb agreement is incorrect (\"elicit\" should be \"elicits\") and \"sinus\" should be plural with an article for correct usage.",
    "error": "\"Nose:  No significant drainage noted. Palpation over sinus elicit pain.\" ",
    "correction": " \"Nose:  No significant drainage noted. Palpation over the sinuses elicits pain.\" ",
    "section": "PHYSICAL EXAM"
  },
  {
    "reasoning": "The phrase \"significant decreased\" is grammatically incorrect; it should be \"significantly decreased\" (adverb + adjective) or \"significant decrease\" (adjective + noun), and a definite article before \"right\" improves clarity.",
    "error": "\"Neck:  Significant decreased range of motion, right and left lateral with right being worse than the left.\" ",
    "correction": " \"Neck:  Significantly decreased range of motion, right and left lateral, with the right being worse than the left.\" or \"Neck:  Significant decrease in range of motion, right and left lateral, with the right being worse than the left.\"",
    "section": "PHYSICAL EXAM"
  },
  {
    "reasoning": "The article \"the\" is needed before \"right ear\" to make the noun phrase grammatically complete.",
    "error": "\"Fluid noted in the back of right ear.\" ",
    "correction": " \"Fluid noted in the back of the right ear.\"",
    "section": "PHYSICAL EXAM"
  },
  {
    "reasoning": " The definite article \"the\" is needed before \"penis\" for correct grammar.",
    "error": "\"Skin:  Lesion on penis healed with slight discoloration.\" ",
    "correction": " \"Skin:  Lesion on the penis healed with slight discoloration.\" ",
    "section": "PHYSICAL EXAM"
  },
  {
    "reasoning": "Missing definite article \"the\" makes the noun phrase grammatically incomplete.",
    "error": "\"Tenderness noted when finger is held straight in front of the face.\" ",
    "correction": " \"Tenderness noted when the finger is held straight in front of the face.\"",
    "section": "PHYSICAL EXAM"
  },
  {
    "reasoning": " The article \"a\" is needed before \"few\" in this context.",
    "error": "\"only few short runs of supraventricular tachycardia.\" ",
    "correction": " \"only a few short runs of supraventricular tachycardia.\" ",
    "section": "RESULTS"
  },
  {
    "reasoning": " The word \"Two\" should not be capitalized mid-sentence, and the definite article \"the\" is needed before \"cecum\" and \"sigmoid\" for correct grammar.",
    "error": "\"Colonoscopy:  2023, Two small polyps were taken from cecum and sigmoid, both adenomatous and precancerous.\" ",
    "correction": " \"Colonoscopy:  2023, two small polyps were taken from the cecum and sigmoid, both adenomatous and precancerous.\" ",
    "section": "RESULTS"
  },
  {
    "reasoning": " Missing article \"the,\" unnecessary capitalization of \"Multilevel,\" and incorrect punctuation between C6 and C7.",
    "error": "\"- MRI of the C-spine:  07/2025, Multilevel degenerative cervical spondylosis with most narrowing at C6, C7.\" ",
    "correction": " \"- MRI of the C-spine:  07/2025, multilevel degenerative cervical spondylosis with the most narrowing at C6-C7.\" ",
    "section": "RESULTS"
  },
  {
    "reasoning": "The noun phrase \"slightly elevated temperature\" requires an article (\"a\") to be grammatically complete.",
    "error": "\"Positive for tiredness indicating potential slightly elevated temperature.\" -",
    "correction": "\"Positive for tiredness indicating a slightly elevated temperature.\"",
    "section": "REVIEW OF SYSTEMS"
  },
  {
    "reasoning": "The noun \"bike\" requires the article \"a\" in this context.",
    "error": "\"Exercise:  Riding bike, walking, going to the gym, limited weightlifting\" ",
    "correction": " \"Exercise:  Riding a bike, walking, going to the gym, limited weightlifting\"",
    "section": "SOCIAL HISTORY"
  },
  {
    "reasoning": " The noun \"eating disorder\" requires the article \"an.\"",
    "error": "\"and eating disorder in the past.\" ",
    "correction": " \"and an eating disorder in the past.\" ",
    "section": "SOCIAL HISTORY"
  },
  {
    "reasoning": " The article \"a\" is needed before \"small amount\" to make the noun phrase grammatically correct.",
    "error": "\"Diet:  Consumes small amount of food due to diabetes, tries not to overeat.\" ",
    "correction": " \"Diet:  Consumes a small amount of food due to diabetes, tries not to overeat.\" ",
    "section": "SOCIAL HISTORY"
  },
  {
    "reasoning": "The noun \"shipwright\" requires an article (\"a\") or a preposition change (\"as\") to make the sentence grammatically correct.",
    "error": "\"Occupation:  Works with shipwright.\" ",
    "correction": " \"Occupation:  Works with a shipwright.\" or \"Occupation:  Works as a shipwright.\"",
    "section": "SOCIAL HISTORY"
  },
  {
    "reasoning": "\"A sales support\" is grammatically incorrect; \"sales support\" should not take the article \"a\" in this context and needs a more appropriate object (e.g., \"team\" or \"department\").",
    "error": "\"Occupation:  Works for a sales support.\" ",
    "correction": " \"Occupation:  Works in sales support.\" or \"Occupation:  Works for a sales support team.\"",
    "section": "SOCIAL HISTORY"
  },
  {
    "reasoning": "Missing article \"a\" before \"20-pack-year history.\"",
    "error": "\"He had 20-pack-year history.\" ",
    "correction": " \"He had a 20-pack-year history.\"",
    "section": "SOCIAL HISTORY"
  }
]
;

const PREPOSITION_ERRORS = [
  {
    "reasoning": " The preposition \"in\" is required after \"resulting\" to make the phrase grammatically correct.",
    "error": "\"potentially resulting stroke, dementia, and walking difficulties.\" ",
    "correction": " \"potentially resulting in stroke, dementia, and walking difficulties.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The preposition \"of\" is needed to correctly link \"CT\" with the listed anatomical regions.",
    "error": "\"He had a CT chest abdomen, and pelvis about 2 years ago.\" ",
    "correction": " \"He had a CT of the chest, abdomen, and pelvis about 2 years ago.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The phrase is missing the preposition \"to,\" and \"make recommend\" is incorrect and should be \"may recommend\"; a comma is also needed to separate the clauses.",
    "error": "\"He is advised to reach out his primary care provider as he is losing weight even after adequate calorie intake as they make recommend checking the thyroid level.\" ",
    "correction": " \"He is advised to reach out to his primary care provider as he is losing weight even after adequate calorie intake, as they may recommend checking the thyroid level.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The preposition \"for\" is missing before \"her,\" making the phrase grammatically incomplete.",
    "error": "\"It is suggested that she call Reign in Mxxx Grill to reserve a spot her.\" ",
    "correction": " \"It is suggested that she call Reign in Mxxx Grill to reserve a spot for her.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The preposition \"in\" is needed to correctly link \"patients older than 35\" to the rest of the sentence.",
    "error": "\"It was discussed that patients older than 35, urinary tract infections can be associated with cognitive symptoms.\" ",
    "correction": " \"It was discussed that in patients older than 35, urinary tract infections can be associated with cognitive symptoms.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "Incorrect preposition and missing article; it should be \"use the ... option on the website.\"",
    "error": "\"mother was encouraged to find-a-physician option in the Txxx\" ",
    "correction": " \"mother was encouraged to use the find-a-physician option on the Txxx\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The preposition \"on\" is incorrect here; \"in\" is the correct preposition in this context.",
    "error": "\"there has been some success on approval for other documented weight loss.\" ",
    "correction": " \"there has been some success in approval for other documented weight loss.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " Missing the preposition \"of\" and the verb \"was,\" making the sentence grammatically incomplete.",
    "error": "\"The presence some spots, often seen in migraine patients, noted.\" ",
    "correction": " \"The presence of some spots, often seen in migraine patients, was noted.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The preposition \"to\" is needed after \"attaching\" for correct grammatical structure.",
    "error": "\"The tightness may be related to injury or stretching of the muscles attaching the base of the skull.\" ",
    "correction": " \"The tightness may be related to injury or stretching of the muscles attaching to the base of the skull.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The preposition \"to\" is incorrect here; \"on\" (or a rephrasing) is standard when referring to a procedure involving an artery.",
    "error": "\"He had a procedure to the right coronary artery.\" ",
    "correction": " \"He had a procedure on the right coronary artery.\" or \"He had a procedure to the right coronary artery area.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The phrase \"described diffuse red lesions\" is missing the preposition \"as\" to be grammatically correct.",
    "error": "\"[] He has experienced profuse sweating on his head during work and temperature dysregulation, including a heat rash on his neck on warmer days described diffuse red lesions.\" ",
    "correction": " \"[] He has experienced profuse sweating on his head during work and temperature dysregulation, including a heat rash on his neck on warmer days described as diffuse red lesions.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The preposition and article are incorrect for an occupation; \"as an administrator\" is grammatically correct.",
    "error": "\"He works in an Administrator and spends a lot of time on the computer.\" ",
    "correction": " \"He works as an administrator and spends a lot of time on the computer.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The preposition \"in\" is incorrect here; \"on\" is standard when referring to computer use.",
    "error": "\"if he is doing a lot of mouse work in his computer.\" ",
    "correction": " \"if he is doing a lot of mouse work on his computer.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The preposition \"on\" is correct when referring to a side of the body.",
    "error": "\"No pain in the right side.\" ",
    "correction": " \"No pain on the right side.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The preposition \"at\" is missing before \"the beginning.\"",
    "error": "\"A drastic change was noted the beginning of 08/2025\" ",
    "correction": " \"A drastic change was noted at the beginning of 08/2025\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The preposition \"to\" is incorrect here; \"about using\" is the standard construction.",
    "error": "\"Inquiry was made to use Ativan when having an off day.\" ",
    "correction": " \"Inquiry was made about using Ativan when having an off day.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The preposition \"on\" is standard with \"couch\"; \"in a couch\" is incorrect usage.",
    "error": "\"and woke up in a couch.\" ",
    "correction": " \"and woke up on a couch.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The preposition \"of\" is incorrect here; \"or\" correctly links two alternative symptoms.",
    "error": "\"She reports no morning fog of excessive sleepiness.\" ",
    "correction": " \"She reports no morning fog or excessive sleepiness.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The preposition \"of\" is needed to correctly link \"version\" and \"Fioricet.\"",
    "error": "\"She had been prescribed the generic version Fioricet for her migraines, which she found beneficial.\" ",
    "correction": " \"She had been prescribed the generic version of Fioricet for her migraines, which she found beneficial.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The second \"by\" is incorrect; the preposition should be \"at\" when referring to the facility.",
    "error": "\"She was seen by Ixxx by Dr. Mxxx on 10/28/2025.\" ",
    "correction": " \"She was seen at Ixxx by Dr. Mxxx on 10/28/2025.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The preposition \"in\" and article \"the\" are needed for grammatical completeness.",
    "error": "\"Light Touch, Vibration and Proprioception:  Position sense toes intact.\" ",
    "correction": " \"Light Touch, Vibration and Proprioception:  Position sense in the toes intact.\" ",
    "section": "PHYSICAL EXAM"
  },
  {
    "reasoning": " The preposition \"of\" is required after \"evidence\" to form the correct expression.",
    "error": "\"Although there was evidence electrical seizure activity, its duration did not appear sufficient\" ",
    "correction": " \"Although there was evidence of electrical seizure activity, its duration did not appear sufficient\" ",
    "section": "RESULTS"
  },
  {
    "reasoning": " The second sentence is a sentence fragment without a subject and verb, and \"on imaging\" is the correct preposition in this context.",
    "error": "\"Brain scan:  Right cerebellar hemisphere rim-enhancing lesion and a lesion on the right frontal lobe. Also seen in imaging done in 08/2025.\" ",
    "correction": " \"Brain scan:  Right cerebellar hemisphere rim-enhancing lesion and a lesion in the right frontal lobe. These findings were also seen on imaging done in 08/2025.\" ",
    "section": "RESULTS"
  },
  {
    "reasoning": " The phrase \"vary 6-15\" is missing the preposition \"from\" to be grammatically correct.",
    "error": "\"- CPAP data:  Average use 7 hours 23 minutes per night, pressure set to vary 6-15, 0.7 residual breathing pauses per hour.\" ",
    "correction": " \"- CPAP data:  Average use 7 hours 23 minutes per night, pressure set to vary from 6-15, 0.7 residual breathing pauses per hour.\" ",
    "section": "RESULTS"
  },
  {
    "reasoning": " The preposition \"of\" is incorrect here; \"or\" correctly links two alternative symptoms.",
    "error": "\"No morning fog of excessive sleepiness.\" ",
    "correction": " \"No morning fog or excessive sleepiness.\" ",
    "section": "REVIEW OF SYSTEMS"
  },
  {
    "reasoning": " The preposition and article are incorrect for an occupation; \"as an administrator\" is grammatically correct.",
    "error": "\"Occupations:  Works in an Administrator\" ",
    "correction": " \"Occupations: Works as an administrator\" ",
    "section": "SOCIAL HISTORY"
  },
  {
    "reasoning": "Incorrect preposition use; it should be \"update the chart\" rather than \"update in the chart.\"",
    "error": "\"A profile picture was taken to update in the chart.\" -",
    "correction": "\"A profile picture was taken to update the chart.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The phrase is grammatically incorrect due to redundant use of \"vaccines\" and incorrect preposition; \"for\" is appropriate here.",
    "error": "\"He will receive his 11-year-old vaccines of HPV, meningitis, and tetanus vaccines today.\" -",
    "correction": "\"He will receive his 11-year-old vaccines for HPV, meningitis, and tetanus today.\" : The phrase is grammatically incorrect due to redundant use of \"vaccines\" and incorrect preposition; \"for\" is appropriate here.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The preposition \"by\" is correct in the phrase \"followed by\" to indicate sequence.",
    "error": "\"However, counseled not to increase beyond twice daily, followed with pumped breast milk, until his weight has been reassessed and confirmed to be stable.\" -",
    "correction": "\"However, counseled not to increase beyond twice daily, followed by pumped breast milk, until his weight has been reassessed and confirmed to be stable.\": The preposition \"by\" is correct in the phrase \"followed by\" to indicate sequence.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing the subject pronoun \"she\" and uses the incorrect preposition/structure (\"interested to\" should be \"interested in restarting\").",
    "error": "\"If interested to restart fluoxetine, encouraged to return for further evaluation.\" -",
    "correction": "\"If she is interested in restarting fluoxetine, she is encouraged to return for further evaluation.\": The sentence is missing the subject pronoun \"she\" and uses the incorrect preposition/structure (\"interested to\" should be \"interested in restarting\").",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The phrase is missing the preposition \"at\" and \"follow up\" should be hyphenated as a noun (\"follow-up\").",
    "error": "\"Recommend follow up liver clinic next time.\" -",
    "correction": "\"Recommend follow-up at the liver clinic next time.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The preposition \"of\" is missing, making the phrase \"on the posterior her neck\" grammatically incorrect.",
    "error": "\"The recurrent eczema on the posterior her neck appears to be caused by friction from the car seat or highchair seat.\" -",
    "correction": "\"The recurrent eczema on the posterior of her neck appears to be caused by friction from the car seat or highchair seat.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The preposition \"of\" is incorrectly used after \"observed\"; \"such as\" is the correct phrase to introduce examples of the symptoms.",
    "error": "\"which explains the wet symptoms observed of rhinorrhea and moist productive cough.\" -",
    "correction": "\"which explains the wet symptoms observed, such as rhinorrhea and moist productive cough.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The phrase is missing the article \"the,\" and \"with Aldactazide\" is the more appropriate preposition than \"on Aldactazide\" in this context.",
    "error": "\"Potassium levels are stable; monitor potassium twice a year due to potential for high potassium on Aldactazide.\" ",
    "correction": " \"Potassium levels are stable; monitor potassium twice a year due to the potential for high potassium with Aldactazide.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence needs the auxiliary verb \"were\" and the preposition \"for\" is more appropriate than \"on\" in this context.",
    "error": "\"Refills provided on medications.\" ",
    "correction": " \"Refills were provided for medications.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The article \"an\" and the preposition \"in\" are needed for correct noun phrase and prepositional use.",
    "error": "\"Reports increase of heart rate to 95 bpm.\" ",
    "correction": " \"Reports an increase in heart rate to 95 bpm.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The preposition \"with\" is used twice awkwardly; \"on\" and \"at\" are the correct prepositions here.",
    "error": "\"- Doing well with Praluent with an increased dose.\" ",
    "correction": " \"- Doing well on Praluent at an increased dose.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " Incorrect preposition \"on\" should be \"with\" to describe a rash characteristic.",
    "error": "\"Lupus rash on labial sparing.\" ",
    "correction": " \"Lupus rash with labial sparing.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " Missing preposition and article; \"during shower\" should be \"during showers,\" and punctuation improves clause separation.",
    "error": "\"Instructions provided that she can wear it all the time sleeping, walking, working except during shower.\" ",
    "correction": " \"Instructions provided that she can wear it all the time—sleeping, walking, working—except during showers.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The preposition \"of\" is missing in the phrase \"the use of it.\"",
    "error": "\"On as-needed metoprolol and has not required the use it.\" ",
    "correction": " \"On as-needed metoprolol and has not required the use of it.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The comma after the prepositional phrase \"in 09/2025\" is incorrect and breaks the flow between the subject and verb.",
    "error": "\"The last liver test in 09/2025, showed a slight elevation.\" ",
    "correction": " \"The last liver test in 09/2025 showed a slight elevation.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The comma between the verb phrase and the prepositional phrase is unnecessary and breaks the sentence incorrectly.",
    "error": "\"Plans to contact Dr. Gxxx's office to schedule the titers test, at the end of the month or beginning of 12/2025.\" ",
    "correction": " \"Plans to contact Dr. Gxxx's office to schedule the titers test at the end of the month or beginning of 12/2025.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The phrasal verb \"hold off\" normally takes the preposition \"on\" before its object.",
    "error": "\"- Hold off Zetia at present.\" ",
    "correction": " \"- Hold off on Zetia at present.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb \"discussed\" should not be followed by the preposition \"about\" in this context.",
    "error": "\"- Followed up on the endoscopy and discussed about the condition.\" ",
    "correction": " \"- Followed up on the endoscopy and discussed the condition.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"contact\" is missing an object, and adding \"at\" before \"a preferred location\" clarifies the prepositional phrase.",
    "error": "\"The scheduler will contact to schedule the procedure on a convenient date, time, and preferred location.\" ",
    "correction": " \"The scheduler will contact her to schedule the procedure on a convenient date, time, and at a preferred location.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The preposition \"of\" is required after \"diagnosis\" for correct grammatical structure.",
    "error": "\"Explained that given the previous diagnosis colon cancer, there is an increased risk\" ",
    "correction": " \"Explained that given the previous diagnosis of colon cancer, there is an increased risk\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The preposition \"from\" is incorrect in this context; \"in\" is the appropriate preposition to describe the location of pain.",
    "error": "\"Reports intense bloating and pain from lower abdomen\" ",
    "correction": " \"Reports intense bloating and pain in the lower abdomen\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The correct preposition is \"from\" (abstinence from alcohol), and commas are needed to set off the explanatory clause.",
    "error": "\"Advised strict abstinence of alcohol during treatment as metronidazole reacts adversely with alcohol leading to vomiting.\" ",
    "correction": " \"Advised strict abstinence from alcohol during treatment, as metronidazole reacts adversely with alcohol, leading to vomiting.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The preposition \"for\" is incorrect in this context and should be removed to make the sentence grammatically correct.",
    "error": "\"C. diff infections typically cause loose stools for about 5-10 times a day\" ",
    "correction": " \"C. diff infections typically cause loose stools about 5-10 times a day\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The preposition \"in\" is missing after \"seen,\" making the sentence grammatically incorrect.",
    "error": "\"Typically, that form of bacteria is seen patients with constipation.\" ",
    "correction": " \"Typically, that form of bacteria is seen in patients with constipation.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The preposition \"on\" is incorrect here; the verb \"emphasized\" should be followed directly by the object.",
    "error": "\"Emphasized on the importance of fiber in the diet.\" ",
    "correction": " \"Emphasized the importance of fiber in the diet.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing a subject and uses the wrong preposition; \"notify\" needs an object (e.g., \"us\") and the correct phrase is \"notify us of any changes.\"",
    "error": "\"Should notify for any changes in symptoms.\" ",
    "correction": " \"She should notify us of any changes in symptoms.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The preposition “to” is needed after “improve” to make the phrase grammatically correct.",
    "error": "\"Filtration rate may not improve greater than 60 due to factors such as advanced age and cumulative renal insults.\" ",
    "correction": " \"Filtration rate may not improve to greater than 60 due to factors such as advanced age and cumulative renal insults.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The preposition \"on\" should be used with a specific date rather than \"in.\"",
    "error": "\"During hospital admission in 09/27/2025,\" ",
    "correction": " \"During hospital admission on 09/27/2025,\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The preposition \"to\" after \"Informed\" is incorrect in this construction and should be removed.",
    "error": "\"Informed to the patient that the Keflex should address the issue, especially since the blood culture appeared negative.\" ",
    "correction": " \"Informed the patient that the Keflex should address the issue, especially since the blood culture appeared negative.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The subject \"she\" is missing, and \"at\" is the correct preposition when referring to a hospital.",
    "error": "\"- If there is no improvement, should consult with the specialist in Lxxx as scheduled.\" ",
    "correction": " \"- If there is no improvement, she should consult with the specialist at Lxxx as scheduled.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The preposition \"at\" is more appropriate than \"in\" when referring to meals in this context.",
    "error": "\"Recommended to eat protein-based foods like eggs and cottage cheese in the morning meals.\" ",
    "correction": " \"Recommended to eat protein-based foods like eggs and cottage cheese at morning meals.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The preposition \"through\" is required after \"going\" in this context.",
    "error": "\"would be more affordable than going the regular insurance if it is not covered for the diagnosis.\" ",
    "correction": " \"would be more affordable than going through regular insurance if it is not covered for the diagnosis.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The phrase \"hoped reduction\" is grammatically incorrect; it needs the preposition \"for\" before \"a reduction.\"",
    "error": "\"Post-procedure, the patient reported improved hearing and hoped reduction of static noise from the hearing aids.\" ",
    "correction": " \"Post-procedure, the patient reported improved hearing and hoped for a reduction of static noise from the hearing aids.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The preposition \"from\" is incorrect here; the standard phrasing is \"a reaction to\" an injection.",
    "error": "\"Pneumovax-23 was received approximately 12 years ago with a reaction from the second injection.\" ",
    "correction": " \"Pneumovax-23 was received approximately 12 years ago with a reaction to the second injection.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " Missing preposition \"on\" after \"update\" to complete the expression \"update on the results.\"",
    "error": "\"A call will be made to provide an update the results.\" ",
    "correction": " \"A call will be made to provide an update on the results.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The phrase \"each meal\" is missing the preposition \"at\" for correct usage.",
    "error": "\"avoid consuming it each meal\" ",
    "correction": " \"avoid consuming it at each meal\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The preposition \"on\" is incorrect in this phrase; the correct construction is \"emphasized the importance.\"",
    "error": "\"Emphasized on the importance of controlling the blood sugar in order to prevent secondary complications.\" ",
    "correction": " \"Emphasized the importance of controlling the blood sugar in order to prevent secondary complications.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The preposition \"on\" is incorrect here; \"reducing smoking\" is the correct verb pattern.",
    "error": "\"-  Encouraged reducing on smoking weed,\" ",
    "correction": " \"-  Encouraged reducing smoking weed,\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The phrase \"lowering on sweets\" is grammatically incorrect; the preposition \"on\" should be removed or the verb phrase restructured.",
    "error": "\"Dietary modifications focusing on protein intake and lowering on sweets are advised.\" ",
    "correction": " \"Dietary modifications focusing on protein intake and lowering sweets are advised.\" or \"Dietary modifications focusing on protein intake and cutting down on sweets are advised.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The preposition \"in\" is required after \"occur,\" and \"family history\" needs the article \"a.\"",
    "error": "\"Noted that it can occur postmenopausal Caucasian individuals with family history of osteoporosis\" ",
    "correction": " \"Noted that it can occur in postmenopausal Caucasian individuals with a family history of osteoporosis\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The use of \"last\" directly before a numeric date is ungrammatical; it should be removed or the preposition \"on\" should be used.",
    "error": "\"which started last 11/08/2025.\" ",
    "correction": " \"which started on 11/08/2025.\" or \"which last started on 11/08/2025.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The phrase \"persisting greater than 24 hours\" is missing the preposition \"for.\"",
    "error": "\"The initial symptom was a headache, which subsequently evolved into other manifestations persisting greater than 24 hours.\" ",
    "correction": " \"The initial symptom was a headache, which subsequently evolved into other manifestations persisting for greater than 24 hours.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The preposition \"on\" is standard with specific dates; \"last\" before a full date is incorrect here.",
    "error": "\"which started last 10/26/2025 and worsened over the weekend.\" ",
    "correction": " \"which started on 10/26/2025 and worsened over the weekend.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The definite article \"the\" and the preposition \"of\" are needed for correct phrasing.",
    "error": "\"- Blood work will be conducted on morning 11/20/2025.\" ",
    "correction": " \"- Blood work will be conducted on the morning of 11/20/2025.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The preposition \"of\" is missing after \"reports,\" making the phrase ungrammatical.",
    "error": "\"There are now reports worsening numbness, raising concern for progression,\" ",
    "correction": " \"There are now reports of worsening numbness, raising concern for progression,\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The preposition should be \"to the diet,\" and the verb \"avoid\" should be in the gerund form \"avoiding\" to be parallel with \"adding.\"",
    "error": "\"- Stressed the importance of adding more fiber in diet and avoid processed food, ice cream, any sugary food, and bread.\" ",
    "correction": " \"- Stressed the importance of adding more fiber to the diet and avoiding processed food, ice cream, any sugary food, and bread.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The preposition \"in\" is needed before the date, and \"recent\" should be the adverb \"recently\" to modify \"received.\"",
    "error": "\"- COVID-19 vaccine was received 10/2024 with another dose received more recent along with contracting COVID-19.\" ",
    "correction": " \"- COVID-19 vaccine was received in 10/2024 with another dose received more recently along with contracting COVID-19.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The phrase \"of consuming\" is ungrammatical here; it should be rephrased to avoid the redundant preposition \"of.\"",
    "error": "\"Heavy drinking of consuming 6-8 drinks a night for years.\" ",
    "correction": " \"Heavy drinking, consuming 6-8 drinks a night for years.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The phrase needs \"of\" after \"pounds\" and \"per week\" is the correct prepositional phrase for frequency.",
    "error": "\"The once-a-day eating program was discussed as a potential weight loss strategy, resulting in 1 to 2 pounds weight loss a week.\" ",
    "correction": " \"The once-a-day eating program was discussed as a potential weight loss strategy, resulting in 1 to 2 pounds of weight loss per week.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The phrase \"residency clinic\" needs the preposition \"at\" to correctly indicate location and improve grammatical structure.",
    "error": "\"- A note from Dr. Wxxx, residency clinic read that the urine culture came back with no infection, indicating that the antibiotic completed was effective, and no change in antibiotics or new antibiotic was necessary.\" ",
    "correction": " \"- A note from Dr. Wxxx at the residency clinic read that the urine culture came back with no infection, indicating that the antibiotic completed was effective, and no change in antibiotics or new antibiotic was necessary.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The preposition \"at\" and article \"the\" are needed for correct grammar.",
    "error": "\"- Blood pressure will be rechecked on follow-up visit in 1 month.\" ",
    "correction": " \"- Blood pressure will be rechecked at the follow-up visit in 1 month.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The preposition/article is missing before \"normal range.\"",
    "error": "\"Iron level is 102, which is normal range.\" ",
    "correction": " \"Iron level is 102, which is in the normal range.\" or \"Iron level is 102, which is a normal range.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The preposition \"to\" is required after \"prior\" in this construction.",
    "error": "\"Advised to fast for 8 hours prior these tests.\" ",
    "correction": " \"Advised to fast for 8 hours prior to these tests.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence lacks a clear subject for \"advised,\" and \"on\" is the correct preposition for a specific date.",
    "error": "\"Advised to keep his appointment with Dr. Kxxx in 02/11/2026 at Wxxx, where his pain contract will be updated, and any necessary labs will be reviewed.\" ",
    "correction": " \"He was advised to keep his appointment with Dr. Kxxx on 02/11/2026 at Wxxx, where his pain contract will be updated and any necessary labs will be reviewed.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original phrase has incorrect noun/adjective order and number (\"video online workout\") and an awkward prepositional phrase (\"in breaks\").",
    "error": "\"Advised to do 5-minute video online workout in breaks.\" ",
    "correction": " \"Advised to do 5-minute online video workouts during breaks.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The preposition \"and\" is incorrect here and should be \"at.\"",
    "error": "\"Triglycerides are well controlled with the target being under 150, measured and 78 and 86 on recent checks.\" ",
    "correction": " \"Triglycerides are well controlled with the target being under 150, measured at 78 and 86 on recent checks.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The preposition \"for\" is incorrect here; \"of\" is the correct preposition to indicate a medical history.",
    "error": "\"No history for aneurysm in father.\" ",
    "correction": " \"No history of aneurysm in father.\"",
    "section": "FAMILY HISTORY"
  },
  {
    "reasoning": "The correct preposition in this context is \"with,\" not \"from.\"",
    "error": "\"Her mother struggles from anxiety.\" ",
    "correction": " \"Her mother struggles with anxiety.\"",
    "section": "FAMILY HISTORY"
  },
  {
    "reasoning": " The preposition \"in\" is incorrect here; the standard phrase is \"cancer of\" an organ.",
    "error": "\"Her niece had cancer in her tongue.\" ",
    "correction": " \"Her niece had cancer of her tongue.\" ",
    "section": "FAMILY HISTORY"
  },
  {
    "reasoning": "The preposition with \"between\" should be \"and,\" not \"to.\"",
    "error": "\"between 2 to 4 times per night\" -",
    "correction": "\"between 2 and 4 times per night\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The missing preposition \"in\" and lack of a relative pronoun make the phrase ungrammatical and the modifier ambiguous.",
    "error": "\"issue with her insurance procuring Tamiflu that cost her 800 dollars\" -",
    "correction": "\"issue with her insurance in procuring Tamiflu, which cost her 800 dollars\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The preposition \"in\" is correct for being inside an incubator.",
    "error": "\"was on an incubator for a long period of time\" -",
    "correction": "\"was in an incubator for a long period of time\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The original construction is ungrammatical; \"inquired\" needs the preposition \"about\" and a clear subject and verb for the subordinate clause.",
    "error": "\"The duration of the treatment was inquired whether to be continued for an additional 3 to 6 months.\" ",
    "correction": " \"The duration of the treatment was inquired about, specifically whether it should be continued for an additional 3 to 6 months.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The preposition \"in\" is needed to make the time expression grammatically correct.",
    "error": "\"This change was noted last week or two.\" ",
    "correction": " \"This change was noted in the last week or two.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The preposition \"in\" is needed and \"the\" clarifies the time period.",
    "error": "\"and the increase in heart rate was noted last week or two.\" ",
    "correction": " \"and the increase in heart rate was noted in the last week or two.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The preposition \"on\" is incorrect here; \"from\" correctly indicates causation.",
    "error": "\"He developed a burning sensation on the cream.\" ",
    "correction": " \"He developed a burning sensation from the cream.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The preposition \"for\" is incorrect here; \"with a history of\" is the proper grammatical construction.",
    "error": "\"presents for history of muscular ventricular septal defect (VSD)\" ",
    "correction": " \"presents with a history of muscular ventricular septal defect (VSD)\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The preposition \"about\" is unnecessary and makes the phrase ungrammatical.",
    "error": "\"She mentions about receiving steroid injections in her knees.\" ",
    "correction": " \"She mentions receiving steroid injections in her knees.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The preposition \"on\" is needed before the date, and \"last months\" is grammatically incorrect; it should be \"last month\" or \"previous months\" depending on intent.",
    "error": "\"She had heaviness before this 10/12/2025 and before last months.\" ",
    "correction": " \"She had heaviness before this on 10/12/2025 and before last month.\" OR \"…and in previous months.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The preposition \"of\" is missing in the phrase \"the use of it.\"",
    "error": "\"has not required the use it.\" ",
    "correction": " \"has not required the use of it.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb phrase \"do along\" is missing an object (\"it\"), and \"scheduled in\" should be \"scheduled for\" for correct preposition use.",
    "error": "\"She inquires if she can wait for her echocardiogram and do along with her thyroid ultrasound, which is scheduled in 01/2026.\" ",
    "correction": " \"She inquires if she can wait for her echocardiogram and do it along with her thyroid ultrasound, which is scheduled for 01/2026.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The preposition \"to\" is incorrect here; \"for\" is the standard preposition used with \"leaving\" when indicating a destination.",
    "error": "\"He is leaving to Hxxx on 12/16/2025 and returns in mid 05/2026.\" ",
    "correction": " \"He is leaving for Hxxx on 12/16/2025 and returns in mid 05/2026.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The preposition \"on\" is standard when referring to a specific date, not \"last.\"",
    "error": "\"The chest pain started last 11/20/2025 and was intermittent.\" ",
    "correction": " \"The chest pain started on 11/20/2025 and was intermittent.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The preposition \"in\" is incorrect for a specific date, and the clause \"which referral was placed\" is grammatically incorrect.",
    "error": "\"She had an office visit in 05/17/2025, which referral was placed right before an ER visit.\" ",
    "correction": " \"She had an office visit on 05/17/2025, for which a referral was placed right before an ER visit.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The preposition \"for\" is unnecessary after \"requested\" in this construction.",
    "error": "\"She has requested for some medication.\" ",
    "correction": " \"She has requested some medication.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "Incorrect preposition and verb form; \"interested in\" should be followed by a gerund.",
    "error": "\"He is not interested to run on a treadmill.\" ",
    "correction": " \"He is not interested in running on a treadmill.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The preposition \"about\" is unnecessary and incorrect here; the phrase should directly follow \"reports,\" and \"his\" is needed to clarify possession.",
    "error": "\"His mother reports about father's half-brother having a heart condition leading to his death at age 4.\" ",
    "correction": " \"His mother reports his father's half-brother having a heart condition leading to his death at age 4.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The verb \"discuss\" does not take the preposition \"about\" in this context.",
    "error": "\"who presents to discuss about his liver problem.\" ",
    "correction": " \"who presents to discuss his liver problem.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The preposition \"by\" is incorrect here; \"with\" is the standard preposition used with \"substituting\" in this context.",
    "error": "\"substituting citrus fruits by other fruits\" ",
    "correction": " \"substituting citrus fruits with other fruits\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The phrase \"except the ongoing nausea\" is missing the preposition \"for,\" which is needed for correct grammar.",
    "error": "\"due to a decrease in acid reflux symptoms except the ongoing nausea.\" ",
    "correction": " \"due to a decrease in acid reflux symptoms except for the ongoing nausea.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "Missing preposition \"of\" and incorrect verb tense for ongoing action.",
    "error": "\"She is taken care by a nurse on Mondays for a year now.\" ",
    "correction": " \"She has been taken care of by a nurse on Mondays for a year now.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The preposition \"in\" is incorrect for a specific date; \"on\" should be used.",
    "error": "\"He is scheduled for cataract surgery in 12/12/2025 and has hammertoe.\" ",
    "correction": " \"He is scheduled for cataract surgery on 12/12/2025 and has hammertoe.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The preposition \"of\" is unnecessary and makes the sentence grammatically incorrect.",
    "error": "\"She does not mention of any other alleviating factors.\" ",
    "correction": " \"She does not mention any other alleviating factors.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The preposition \"from\" is incorrect here; \"for a long time\" is the correct expression, and the object \"it\" is needed after \"drinking.\"",
    "error": "\"He does not like to drink PediaSure since he has been drinking from a long time but consumes it.\" ",
    "correction": " \"He does not like to drink PediaSure since he has been drinking it for a long time but consumes it.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " Incorrect preposition use; \"for many years\" is the correct expression of duration.",
    "error": "\"She has been doing this since many years.\" ",
    "correction": " \"She has been doing this for many years.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The phrase is missing a preposition/article; standard form is “weeks’ worth of supply” or “a 2‑week supply.”",
    "error": "\"which is 2 weeks' worth supply.\" ",
    "correction": " \"which is 2 weeks' worth of supply.\" or \"which is a 2‑week supply.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The phrase is missing the preposition \"for\" and the article \"the\" to form correct English.",
    "error": "\"His kidneys are affected second time.\" ",
    "correction": " \"His kidneys are affected for the second time.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The preposition \"for\" is more grammatically appropriate with \"scheduled\" when referring to a specific date.",
    "error": "\"Next treatment is scheduled on 11/24/2025\" ",
    "correction": " \"Next treatment is scheduled for 11/24/2025\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " Missing preposition \"by\" makes the sentence ungrammatical.",
    "error": "\"She has been informed Dr. Kxxx that Ozempic has been approved for the treatment of fatty liver.\" ",
    "correction": " \"She has been informed by Dr. Kxxx that Ozempic has been approved for the treatment of fatty liver.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The preposition should precede the relative pronoun in formal grammar.",
    "error": "\"which he complied with.\" ",
    "correction": " \"with which he complied.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The preposition with \"train\" should be \"on\" rather than \"in.\"",
    "error": "\"She uses earbuds while in train and at work\" ",
    "correction": " \"She uses earbuds while on the train and at work\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The prepositional phrase is incomplete without the article \"the\" and sounds ungrammatical.",
    "error": "\"She was taken to the hospital on 10/26/2025 morning.\" ",
    "correction": " \"She was taken to the hospital on the morning of 10/26/2025.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The preposition \"of\" is incorrect in this context; \"uncertainty about\" is the correct collocation.",
    "error": "\"Mother expressed uncertainty of the appropriate volume of Pedialyte\" ",
    "correction": " \"Mother expressed uncertainty about the appropriate volume of Pedialyte\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The preposition and noun form are incorrect; it should be either \"as a quality manager\" (role) or \"in quality management\" (field).",
    "error": "\"Occupation:  Previously worked in quality manager\" ",
    "correction": " \"Occupation:  Previously worked as a quality manager\" or \"Occupation:  Previously worked in quality management\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The preposition \"as\" is needed after \"described\" for correct grammar.",
    "error": "\"The pain is described similar to labor contractions.\" ",
    "correction": " \"The pain is described as similar to labor contractions.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The preposition \"into\" is more grammatically appropriate here, and \"the\" before \"wooded areas\" is unnecessary.",
    "error": "\"does not go in the wooded areas\" ",
    "correction": " \"does not go into wooded areas\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The correct preposition with \"shift\" in this context is \"on,\" not \"in.\"",
    "error": "\"Occupation:  Assistant at Ixxx, works in night shift.\" ",
    "correction": " \"Occupation:  Assistant at Ixxx, works on night shift.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The preposition \"as\" is needed to make the phrase grammatically correct.",
    "error": "\"and works primarily in an office tax assistant.\" ",
    "correction": " \"and works primarily in an office as a tax assistant.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The preposition \"about\" is unnecessary and makes the sentence ungrammatical.",
    "error": "\"She does not recall about the size of the stones at that time.\" ",
    "correction": " \"She does not recall the size of the stones at that time.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The use of \"last\" directly before a numeric date is ungrammatical; it should be removed or the preposition \"on\" should be used.",
    "error": "\"which he started last 11/08/2025.\" ",
    "correction": " \"which he started on 11/08/2025.\" or \"which he last started on 11/08/2025.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The preposition and job title phrasing are incorrect, making the sentence ungrammatical.",
    "error": "\"Occupation:  Works in Advertising Clerk golf caddy\" ",
    "correction": " \"Occupation:  Works as an advertising clerk and golf caddy.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The preposition and job title phrasing are incorrect, and \"foods\" should be singular \"food\" in this context.",
    "error": "\"She works in the Advertising Clerk golf caddy where she receives foods to eat.\" ",
    "correction": " \"She works as an advertising clerk and golf caddy, where she receives food to eat.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The phrase \"a couple previous\" is missing the preposition \"of.\"",
    "error": "\"She has been using Motrin Migraine Gel Tabs for her migraines, as a couple previous prescription medications were ineffective.\" ",
    "correction": " \"She has been using Motrin Migraine Gel Tabs for her migraines, as a couple of previous prescription medications were ineffective.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The preposition \"in\" is incorrect here; \"at\" is the standard preposition for place of employment.",
    "error": "\"She is still working in Hxxx.\" ",
    "correction": " \"She is still working at Hxxx.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The preposition \"over\" is incorrect in this context; \"during\" is standard for time periods.",
    "error": "\"because her family lost their teeth over pregnancy.\" ",
    "correction": " \"because her family lost their teeth during pregnancy.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The preposition \"for\" is needed before \"the past 4 months\" to complete the time expression.",
    "error": "\"His wife has been on phentermine with topiramate for weight management the past 4 months,\" ",
    "correction": " \"His wife has been on phentermine with topiramate for weight management for the past 4 months,\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The preposition \"at\" is missing in the phrase \"at increased risk.\"",
    "error": "\"she was believed to be increased risk for breast cancer.\" ",
    "correction": " \"she was believed to be at increased risk for breast cancer.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The preposition \"in\" is incorrect here; the standard phrase is \"at the end of the day.\"",
    "error": "\"particularly in the end of the day\" ",
    "correction": " \"particularly at the end of the day\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " Incorrect preposition and capitalization; \"Vxxx\" is a proper noun and takes \"on,\" not \"in.\"",
    "error": "\"He is currently uninsured and is considering applying for insurance in the vxxx.\" ",
    "correction": " \"He is currently uninsured and is considering applying for insurance on Vxxx.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The preposition \"on\" is standard usage with \"downloaded\" and \"phone.\"",
    "error": "\"She has their app downloaded in her phone but is not able to get the relevant options.\" ",
    "correction": " \"She has their app downloaded on her phone but is not able to get the relevant options.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The noun \"diabetes\" is used incorrectly as a modifier; the phrase needs a prepositional construction.",
    "error": "\"He acknowledges significant diabetes impact on daily functioning\" ",
    "correction": " \"He acknowledges significant impact of diabetes on daily functioning\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The preposition \"on\" is unnecessary after \"contemplating\" in this context.",
    "error": "\"She is contemplating on taking melatonin to aid her sleep.\" ",
    "correction": " \"She is contemplating taking melatonin to aid her sleep.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " Incorrect preposition and noun form; it should indicate working *as* a consultant, not *in* a consultant.",
    "error": "\"Occupation:  Works in an employee security consultant.\" ",
    "correction": " \"Occupation:  Works as an employee security consultant.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The preposition \"in\" is needed before \"Sxxx,\" and a comma improves the clause separation.",
    "error": "\"Testosterone is cheaper to get in the Uxxx than Sxxx as his healthcare does not cover prescriptions in Sxxx.\" ",
    "correction": " \"Testosterone is cheaper to get in the Uxxx than in Sxxx, as his healthcare does not cover prescriptions in Sxxx.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The preposition \"to\" is incorrect in this context; \"consulted the gynecologist\" is the correct verb usage.",
    "error": "\"She never consulted to the gynecologist.\" ",
    "correction": " \"She never consulted the gynecologist.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The verb \"prescribed\" should not be followed by the preposition \"with\" in this context.",
    "error": "\"was prescribed with medications, which resolve the infection after a 5 to 10-day course.\" ",
    "correction": " \"was prescribed medications, which resolve the infection after a 5 to 10-day course.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " \"Lecturer\" (a noun) should be the gerund \"lecturing\" to follow the preposition \"in\" correctly.",
    "error": "\"Education Level:  Senior year in lecturer.\" ",
    "correction": " \"Education Level:  Senior year in lecturing.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing an article and a preposition, making the grammar incorrect.",
    "error": "\"On percussion, abdomen is dull, left lower quadrant.\" -",
    "correction": "\"On percussion, the abdomen is dull in the left lower quadrant.\" ",
    "section": "PHYSICAL EXAM"
  },
  {
    "reasoning": " The preposition \"of\" is needed to make the phrase grammatically correct.",
    "error": "\"Tinea corporis noted on the right upper quadrant abdomen and stomach.\" ",
    "correction": " \"Tinea corporis noted on the right upper quadrant of the abdomen and stomach.\" ",
    "section": "PHYSICAL EXAM"
  },
  {
    "reasoning": "The preposition \"of\" is needed to make the noun phrase grammatically correct.",
    "error": "\"3.5 years battery remaining\" ",
    "correction": " \"3.5 years of battery remaining\"",
    "section": "RESULTS"
  },
  {
    "reasoning": " A comma and preposition are needed to separate and clarify the two clauses.",
    "error": "\"less than 50% on the left patent vertebral arteries bilaterally.\" ",
    "correction": " \"less than 50% on the left, with patent vertebral arteries bilaterally.\" ",
    "section": "RESULTS"
  },
  {
    "reasoning": "The preposition \"on\" is required when referring to a specific calendar date.",
    "error": "\"in 09/27/2025\" ",
    "correction": " \"on 09/27/2025\"",
    "section": "RESULTS"
  },
  {
    "reasoning": " The prepositions \"at\" and \"in\" are reversed and \"the\" is missing before \"Nxxx.\"",
    "error": "\"Occupations:  Worked at Nxxx and later in Rxxx.\" ",
    "correction": " \"Occupations:  Worked in the Nxxx and later at Rxxx.\" ",
    "section": "SOCIAL HISTORY"
  },
  {
    "reasoning": " The heading should be singular to match the single job described, and \"as\" is the correct preposition for describing someone's role.",
    "error": "\"Occupations:  Works two days a week for an Orthopedic Technician.\" ",
    "correction": " \"Occupation:  Works two days a week as an orthopedic technician.\" ",
    "section": "SOCIAL HISTORY"
  },
  {
    "reasoning": "The preposition and noun use are incorrect; the correct phrase is \"works as a bus valeter.\"",
    "error": "\"Occupations:  Works in bus valeter\" ",
    "correction": " \"Occupations:  Works as a bus valeter\"",
    "section": "SOCIAL HISTORY"
  },
  {
    "reasoning": "The noun \"shipwright\" requires an article (\"a\") or a preposition change (\"as\") to make the sentence grammatically correct.",
    "error": "\"Occupation:  Works with shipwright.\" ",
    "correction": " \"Occupation:  Works with a shipwright.\" or \"Occupation:  Works as a shipwright.\"",
    "section": "SOCIAL HISTORY"
  }
]
;

const SV_ERRORS = [
  {
    "reasoning": "The verb \"inform\" requires an object (who is to be informed).",
    "error": "\"and to call and inform.\" ",
    "correction": " \"and to call and inform us.\" (or \"and to call and inform the office.\")",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The singular subject \"testing\" requires the singular verb \"is,\" not \"are.\"",
    "error": "\"MoCA cognitive testing are also not going to specify the type of dementia.\" ",
    "correction": " \"MoCA cognitive testing is also not going to specify the type of dementia.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb \"contact\" requires an object (whom to contact).",
    "error": "\"she should contact to discuss discontinuing the medication or changing it.\" ",
    "correction": " \"she should contact us to discuss discontinuing the medication or changing it.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb tense should be present (\"increases\" and \"will be\") to match the general, ongoing condition being described.",
    "error": "\"Therefore, if her level increased, any extra would be excreted.\" ",
    "correction": " \"Therefore, if her level increases, any extra will be excreted.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing a subject, and \"2\" should be written out as \"two\" in formal writing.",
    "error": "\"Explained that some things observed on an MRI are not well visualized on a CT scan which would account for the changes noted between the 2 scans.\" ",
    "correction": " \"It was explained that some things observed on an MRI are not well visualized on a CT scan, which would account for the changes noted between the two scans.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb phrase \"need adjusted\" is grammatically incorrect and requires \"to be\" before \"adjusted.\"",
    "error": "\"If the readings are consistently elevated, the dose may need adjusted by her primary care provider.\" ",
    "correction": " \"If the readings are consistently elevated, the dose may need to be adjusted by her primary care provider.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The second sentence is missing a subject and uses \"if\" incorrectly instead of \"whether.\"",
    "error": "\"She has sleep apnea. Discussed that it is unclear if treating sleep apnea reduces stroke risk.\" ",
    "correction": " \"She has sleep apnea. It was discussed that it is unclear whether treating sleep apnea reduces stroke risk.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The second sentence is missing a subject and has an incorrect conjunction (\"if\" instead of \"whether\").",
    "error": "\"She has started a daily baby aspirin regimen. Discussed it is a gray area if this provides benefit for her.\" ",
    "correction": " \"She has started a daily baby aspirin regimen. It was discussed that it is a gray area whether this provides benefit for her.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing a clear subject; changing \"Recommended\" to \"Recommend\" aligns it with the imperative style used elsewhere in notes.",
    "error": "\"Recommended returning to every 2-week intravenous Solu-Medrol infusions, as this interval previously resulted in consistent symptom control.\" ",
    "correction": " \"Recommend returning to every 2-week intravenous Solu-Medrol infusions, as this interval previously resulted in consistent symptom control.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing an explicit subject, so adding \"It was suggested\" corrects the grammatical structure.",
    "error": "\"Suggested repeating CT scan of the chest, abdomen, and pelvis through his primary care physician to rule out any underlying malignancy.\" ",
    "correction": " \"It was suggested to repeat the CT scan of the chest, abdomen, and pelvis through his primary care physician to rule out any underlying malignancy.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The subject \"options\" is plural and requires the plural verb \"were\" rather than \"was.\"",
    "error": "\"The options about repeating a CT scan of the chest, abdomen, and pelvis by his primary care provider or a PET scan to rule out any underlying malignancy was discussed.\" ",
    "correction": " \"The options about repeating a CT scan of the chest, abdomen, and pelvis by his primary care provider or a PET scan to rule out any underlying malignancy were discussed.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The singular pronoun \"it\" requires the singular verb form \"suggests.\"",
    "error": "\"Given that the symptoms are intermittent and not persistent, it suggest a mild process.\" ",
    "correction": " \"Given that the symptoms are intermittent and not persistent, it suggests a mild process.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " \"His fact\" is incorrect; \"The fact\" is correct, and the singular subject \"fact\" requires the verb \"suggests.\"",
    "error": "\"His fact that his symptoms have improved with circulation-focused therapies suggest a mild form of neuropathy\" ",
    "correction": " \"The fact that his symptoms have improved with circulation-focused therapies suggests a mild form of neuropathy\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " See above; once \"fact\" is the subject, the verb must be \"suggests\" to agree with the singular noun.",
    "error": "\"therapies suggest a mild form of neuropathy\" ",
    "correction": " \"therapies suggests a mild form of neuropathy\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"inform\" is transitive and requires an object indicating whom she should inform.",
    "error": "\"If there are any issues with the increased dosage, she should inform immediately.\" ",
    "correction": " \"If there are any issues with the increased dosage, she should inform the clinic immediately.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The phrase \"or more frequent\" lacks a verb; \"or become more frequent\" is grammatically correct.",
    "error": "\"If the tics become painful, cause a sound in the shoulder, or more frequent, interventions or medications may be considered.\" ",
    "correction": " \"If the tics become painful, cause a sound in the shoulder, or become more frequent, interventions or medications may be considered.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The adjective form \"continued\" is required; \"continue\" is a verb.",
    "error": "\"would like to evaluate the continue need for Emgality after being on Synthroid for 6 months.\" ",
    "correction": " \"would like to evaluate the continued need for Emgality after being on Synthroid for 6 months.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The phrasal verb \"transferred on\" is incorrect in this context; \"passed on\" is the appropriate expression.",
    "error": "\"and not being transferred on genetically.\" ",
    "correction": " \"and not being passed on genetically.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The quantity \"25 mg\" is treated as a singular amount, so it should take the singular verb \"is.\"",
    "error": "\"when 25 mg are required in her dose titration.\" ",
    "correction": " \"when 25 mg is required in her dose titration.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence lacks a clear subject performing the action \"informed.\"",
    "error": "\"Informed that antiseizure medication is usually lifelong, especially when seizures start later in life.\" ",
    "correction": " \"He was informed that antiseizure medication is usually lifelong, especially when seizures start later in life.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing an explicit subject (\"It\") and requires a comma after \"winter\" to set off the parenthetical phrase.",
    "error": "\"Also explained that reduced daylight, especially during winter can affect mood and energy in some individuals,\" ",
    "correction": " \"It was also explained that reduced daylight, especially during winter, can affect mood and energy in some individuals,\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"contact\" is transitive and requires an object (e.g., \"us\" or \"the office\") for correct grammar.",
    "error": "\"If she experiences consistent diarrhea at least twice a week with the increase in medication, she should contact immediately so the dosage can be adjusted,\" ",
    "correction": " \"If she experiences consistent diarrhea at least twice a week with the increase in medication, she should contact us immediately so the dosage can be adjusted,\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " Missing the preposition \"of\" and the verb \"was,\" making the sentence grammatically incomplete.",
    "error": "\"The presence some spots, often seen in migraine patients, noted.\" ",
    "correction": " \"The presence of some spots, often seen in migraine patients, was noted.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The gerund phrase \"Limiting sodium and caffeine\" is treated as a singular subject and requires the singular verb \"was.\"",
    "error": "\"Limiting sodium and caffeine were discussed.\" ",
    "correction": " \"Limiting sodium and caffeine was discussed.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb tense is inconsistent; \"recommend\" should be in the past tense (\"recommended\") to match \"Discussed.\"",
    "error": "\"Discussed that there are other medications which can be used for tremors, but propranolol has the least side effects and recommend increasing the dose of propranolol to 40 mg 3 times daily.\" ",
    "correction": " \"Discussed that there are other medications which can be used for tremors, but propranolol has the least side effects and recommended increasing the dose of propranolol to 40 mg 3 times daily.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The plural subject \"Symptoms\" requires the plural verb \"are,\" not \"is.\"",
    "error": "\"Symptoms affecting the upper and lower extremities so early is not typically seen with diabetic neuropathy\" ",
    "correction": " \"Symptoms affecting the upper and lower extremities so early are not typically seen with diabetic neuropathy\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing an explicit subject, so adding \"It was explained that\" corrects the grammar.",
    "error": "\"Explained that with weight‑based dosing at 10 mg/kg, a weight of 151 corresponds to an ibuprofen dose of about 600 to 700 mg.\" ",
    "correction": " \"It was explained that with weight‑based dosing at 10 mg/kg, a weight of 151 corresponds to an ibuprofen dose of about 600 to 700 mg.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The object of the verb \"contact\" is missing, making the sentence incomplete.",
    "error": "\"he should contact.\" ",
    "correction": " \"he should contact us.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original is a sentence fragment without an explicit subject.",
    "error": "\"Recommend contacting the company to verify the process.\" ",
    "correction": " \"He is advised to contact the company to verify the process.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original is a sentence fragment lacking an explicit subject and needs a comma before the explanatory clause.",
    "error": "\"Recommend maintaining a healthy weight through diet and exercise as being overweight can worsen sleep apnea.\" ",
    "correction": " \"He is advised to maintain a healthy weight through diet and exercise, as being overweight can worsen sleep apnea.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The pronoun and verb should be plural to agree with the plural noun \"medications.\"",
    "error": "\"meaning that it stays in the system for about 6 hours.\" ",
    "correction": " \"meaning that they stay in the system for about 6 hours.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original is a sentence fragment lacking an explicit subject and verb, so it needs to be completed.",
    "error": "\"Reassured that generic pregabalin is now widely available and inexpensive.\" ",
    "correction": " \"She was reassured that generic pregabalin is now widely available and inexpensive.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The singular subject \"Review\" requires the singular verb \"reveals.\"",
    "error": "\"Review of the records reveal that she was on Lyrica 300 mg capsule in 2014\" ",
    "correction": " \"Review of the records reveals that she was on Lyrica 300 mg capsule in 2014\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb \"is\" is needed to complete the second clause and maintain correct grammar.",
    "error": "\"Seizures are likely due to a genetic anomaly, which was not passed from his parents and not at risk of passing to a child in the future.\" ",
    "correction": " \"Seizures are likely due to a genetic anomaly, which was not passed from his parents and is not at risk of passing to a child in the future.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original sentence is missing an explicit subject for the verb \"recommend,\" leading to a grammatical error.",
    "error": "\"While monitoring and documenting his symptoms, recommend noting anything significant which may have been occurring during that timeframe, as well as potentially recording some of the episodes.\" ",
    "correction": " \"While monitoring and documenting his symptoms, we recommend noting anything significant which may have been occurring during that timeframe, as well as potentially recording some of the episodes.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing the linking verb \"is,\" which is needed for correct subject-verb agreement and sentence structure.",
    "error": "\"Incorporating low-sugar electrolyte drinks and potassium-containing foods recommended to reduce the tingling sensations.\" ",
    "correction": " \"Incorporating low-sugar electrolyte drinks and potassium-containing foods is recommended to reduce the tingling sensations.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original is a sentence fragment lacking an explicit subject and verb, and \"freer\" is the correct comparative form of \"free.\"",
    "error": "\"Explained when on with Parkinson's, movement is free with less stiffness.\" ",
    "correction": " \"It was explained that when on with Parkinson's, movement is freer with less stiffness.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb phrase is incorrect; \"appears to be\" is the correct construction.",
    "error": "\"The knot appears could be a tendon contraction or nerve contracture.\" ",
    "correction": " \"The knot appears to be a tendon contraction or nerve contracture.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"is\" is missing, leading to incorrect sentence structure.",
    "error": "\"further progress in expected.\" ",
    "correction": " \"further progress is expected.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb tense should be consistent; \"increase\" requires \"emphasize,\" not \"emphasized.\"",
    "error": "\"they increase clinical suspicion and emphasized the importance of considering the broader clinical picture.\" ",
    "correction": " \"they increase clinical suspicion and emphasize the importance of considering the broader clinical picture.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb phrase is slightly incomplete; adding \"to be\" after \"felt\" provides correct and clearer grammar.",
    "error": "\"Neurologic causes, including Chiari malformation, were felt unlikely to be contributing.\" ",
    "correction": " \"Neurologic causes, including Chiari malformation, were felt to be unlikely to be contributing.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The comparative form of the adverb \"easy\" should be \"more easily,\" not \"easier.\"",
    "error": "\"He goes to bed at 10: 30 PM and is able to fall asleep easier.\" ",
    "correction": " \"He goes to bed at 10: 30 PM and is able to fall asleep more easily.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The clause needs a subject (\"his involvement\") and the verb form \"performing\" to parallel \"delivering\"; also the comma after \"veterinarian\" should be removed.",
    "error": "\"He is a veterinarian, who works 10 to 12 hours a day and involvement includes delivering cows and other minor surgeries.\" ",
    "correction": " \"He is a veterinarian who works 10 to 12 hours a day, and his involvement includes delivering cows and performing other minor surgeries.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The conjunction \"and\" makes the verb phrase ungrammatical; adding \"which\" correctly links the clause to the prior episode.",
    "error": "\"She reports a prior episode of vertigo occurring approximately 2 years ago and involved a sensation of everything spinning and associated vomiting, which required therapy.\" ",
    "correction": " \"She reports a prior episode of vertigo occurring approximately 2 years ago, which involved a sensation of everything spinning and associated vomiting, which required therapy.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb tense \"shows\" should be in the past tense (\"showed\") to agree with the past-tense context.",
    "error": "\"It was inquired whether the treatment would be different if the repeat test shows P‑tau 217 at 0.19.\" ",
    "correction": " \"It was inquired whether the treatment would be different if the repeat test showed P‑tau 217 at 0.19.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The subject \"he\" and the article \"a\" are needed for correct grammar.",
    "error": "\"He tried to avoid those exercises, so started on cardio workout.\" ",
    "correction": " \"He tried to avoid those exercises, so he started on a cardio workout.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The original is a sentence fragment and needs a subject, and \"whether\" is more appropriate in this indirect question.",
    "error": "\"Inquired if she should continue walking and exercising.\" ",
    "correction": " \"She inquired whether she should continue walking and exercising.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " In an indirect question, the word order should be subject-verb (\"restriction will\"), not verb-subject (\"will the restriction\").",
    "error": "\"She inquires how long will the driving restriction last.\" ",
    "correction": " \"She inquires how long the driving restriction will last.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb \"are\" is unnecessary here and creates a grammatical inconsistency in the parallel structure of the sentence.",
    "error": "\"with the rest being manageable but are persistent and irritating.\" ",
    "correction": " \"with the rest being manageable but persistent and irritating.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb \"is\" is needed for correct sentence structure and subject-verb agreement.",
    "error": "\"and occasionally awake at night.\" ",
    "correction": " \"and is occasionally awake at night.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The verb \"were\" is missing, making the clause ungrammatical.",
    "error": "\"even though her cholesterol levels not being significantly elevated\" ",
    "correction": " \"even though her cholesterol levels were not significantly elevated\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The second clause lacks an explicit subject, making the sentence grammatically incomplete; adding \"she is\" corrects this.",
    "error": "\"She is uncertain about its efficacy and whether it has been beneficial and is not yet convinced of its effectiveness.\" ",
    "correction": " \"She is uncertain about its efficacy and whether it has been beneficial, and she is not yet convinced of its effectiveness.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The verb phrase is incomplete; \"needed\" should be followed by \"to be\" plus the past participle.",
    "error": "\"The prior authorization on Emgality needed resubmitted due to an insurance provider change.\" ",
    "correction": " \"The prior authorization on Emgality needed to be resubmitted due to an insurance provider change.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The participial phrase \"being shorter\" creates a dangling modifier; it should be rewritten for clear subject-verb agreement.",
    "error": "\"She continues to have right hip pain, being shorter on the right side.\" ",
    "correction": " \"She continues to have right hip pain and is shorter on the right side.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The verb \"is\" is missing, making the sentence grammatically incomplete.",
    "error": "\"She notices her clothing loose in some areas and tight in other areas.\" ",
    "correction": " \"She notices her clothing is loose in some areas and tight in other areas.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The pronoun in a comparison should take the subject form (\"she\") with the implied verb.",
    "error": "\"who is 9 years older than her\" ",
    "correction": " \"who is 9 years older than she is\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The original sentence has an unclear subject for \"did not see\"; adding \"they\" clarifies the subject, and commas are needed in the list.",
    "error": "\"According to the witnesses, his head dropped forward onto the table but did not see any extension, tremors, convulsions or anything else.\" ",
    "correction": " \"According to the witnesses, his head dropped forward onto the table, but they did not see any extension, tremors, convulsions, or anything else.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing the verb \"had,\" \"episode\" should be plural, and \"tongue\" requires the definite article \"the.\"",
    "error": "\"During the first and the second episode, he never any episodes of urinary incontinence or biting of tongue during sleep.\" ",
    "correction": " \"During the first and the second episodes, he never had any episodes of urinary incontinence or biting of the tongue during sleep.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing a clear subject and uses \"that\" instead of the correct \"whether,\" making the construction ungrammatical.",
    "error": "\"Inquired that 18 or 17 on the memory test is concerning and if variation in scores depends on weather, particularly cloudy or dark days.\" ",
    "correction": " \"She inquired whether a score of 18 or 17 on the memory test is concerning and whether variation in scores depends on the weather, particularly on cloudy or dark days.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " Specifically, the phrase lacks a subject and incorrectly uses \"that\" instead of \"whether\" to introduce an indirect question.",
    "error": "\"Inquired that 18 or 17 on the memory test is concerning\" ",
    "correction": " \"She inquired whether a score of 18 or 17 on the memory test is concerning\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "Incorrect verb form; past participle \"evaluated\" is required.",
    "error": "\"which he has been evaluate for twice\" ",
    "correction": " \"which he has been evaluated for twice\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb \"are\" is needed for correct subject-verb agreement and to form a complete sentence.",
    "error": "\"Seizures noticed approximately once a month and a couple of tics have been noted.\" ",
    "correction": " \"Seizures are noticed approximately once a month, and a couple of tics have been noted.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The verb form \"experiences\" is incorrect here; the gerund \"experiencing\" is needed after \"reports.\"",
    "error": "\"He reports experiences ringing in his right ear\" ",
    "correction": " \"He reports experiencing ringing in his right ear\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The phrase \"due to occurring suddenly\" is grammatically incomplete; it needs a subject (\"it\") for the participle \"occurring.\"",
    "error": "\"She did fall to the ground once due to occurring suddenly.\" ",
    "correction": " \"She did fall to the ground once due to it occurring suddenly.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " \"Closed\" is the wrong form here; \"close up\" is the correct phrasal adjective/adverb.",
    "error": "\"She has difficulty performing tasks closed up.\" ",
    "correction": " \"She has difficulty performing tasks close up.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb tense is incorrect and \"for not breathing\" is awkward; \"has reduced\" and \"of not breathing\" are grammatically correct.",
    "error": "\"The number of events for not breathing reduced significantly since using the CPAP machine.\" ",
    "correction": " \"The number of events of not breathing has reduced significantly since using the CPAP machine.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The verb phrase is incomplete and the parallel structure is incorrect; \"has been observed\" and \"is slightly drooping\" are grammatically correct.",
    "error": "\"It has observed that his one eye appears wider and slightly drooping\" ",
    "correction": " \"It has been observed that his one eye appears wider and is slightly drooping\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb phrase is incorrect; \"is\" should be removed to match the subject with the verb \"exhibits.\"",
    "error": "\"He has been withdrawn from school and is currently exhibits minimal verbal communication.\" ",
    "correction": " \"He has been withdrawn from school and currently exhibits minimal verbal communication.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The clause is missing the subject \"she\" and article \"the,\" making it grammatically incomplete.",
    "error": "\"as she experiences occasional pain during daytime and also pain when uses phone at night.\" ",
    "correction": " \"as she experiences occasional pain during the daytime and also pain when she uses her phone at night.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The subject of \"retired\" is unclear; adding \"he\" clarifies that Dr. Txxx retired, not the patient.",
    "error": "\"She had consulted with Dr. Txxx at Dxxx in Mxxx but retired during the period she was consulting her knee specialist.\" ",
    "correction": " \"She had consulted with Dr. Txxx at Dxxx in Mxxx, but he retired during the period she was consulting her knee specialist.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The pronoun and auxiliary verb are missing; \"they have\" is needed to agree with the plural noun \"episodes.\"",
    "error": "\"She reports prior episodes of finger locking, though has not occurred recently.\" ",
    "correction": " \"She reports prior episodes of finger locking, though they have not occurred recently.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb should be in the third-person singular form \"lasts\" to agree with the subject \"dose.\"",
    "error": "\"she feels the nighttime dose last throughout the day\" ",
    "correction": " \"she feels the nighttime dose lasts throughout the day\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " This is a comma splice and lacks a subject and article in the second clause; adding a semicolon, subject, and article resolves the grammatical errors.",
    "error": "\"Reyvow  Not taking, patient unsure if currently has medication at home\" ",
    "correction": " \"Reyvow  Not taking; patient is unsure if she currently has the medication at home\" ",
    "section": "MEDICATIONS"
  },
  {
    "reasoning": "The phrasal verb \"came up with\" is needed here; \"came with\" is grammatically incorrect in this context.",
    "error": "\"Even with hints, she came with four out of the five, but that last word was still lost.\" ",
    "correction": " \"Even with hints, she came up with four out of the five, but that last word was still lost.\"",
    "section": "PHYSICAL EXAM"
  },
  {
    "reasoning": "The phrasal verb \"come up with\" requires the particle \"up\" to be grammatically and idiomatically correct.",
    "error": "\"she came with four out of the five\" ",
    "correction": " \"she came up with four out of the five\"",
    "section": "PHYSICAL EXAM"
  },
  {
    "reasoning": "The verb \"is\" is needed for a complete sentence.",
    "error": "\"Vital Signs:  Blood pressure slightly low today.\" ",
    "correction": " \"Vital Signs:  Blood pressure is slightly low today.\"",
    "section": "PHYSICAL EXAM"
  },
  {
    "reasoning": " The original is a sentence fragment; adding a verb (\"were observed\") makes it grammatically complete.",
    "error": "\"- Stress test: No signs of ischemia or strain on the heart\" ",
    "correction": " \"- Stress test:  No signs of ischemia or strain on the heart were observed.\" ",
    "section": "RESULTS"
  },
  {
    "reasoning": " The second sentence is a sentence fragment without a subject and verb, and \"on imaging\" is the correct preposition in this context.",
    "error": "\"Brain scan:  Right cerebellar hemisphere rim-enhancing lesion and a lesion on the right frontal lobe. Also seen in imaging done in 08/2025.\" ",
    "correction": " \"Brain scan:  Right cerebellar hemisphere rim-enhancing lesion and a lesion in the right frontal lobe. These findings were also seen on imaging done in 08/2025.\" ",
    "section": "RESULTS"
  },
  {
    "reasoning": " The adverb \"more\" requires a comparative modifier (e.g., \"intense\") to be grammatically complete.",
    "error": "\"Reports unusual tingling sensations, which were more initially after beginning the medication but have lessened.\" ",
    "correction": " \"Reports unusual tingling sensations, which were more intense initially after beginning the medication but have lessened.\" ",
    "section": "REVIEW OF SYSTEMS"
  },
  {
    "reasoning": " The sentence is missing a verb (\"is\") and needs parallel verb forms (\"participates\") for correct grammar.",
    "error": "\"Hobbies:  She remains active in her community, student at a hospice and participating in church organizations.\" ",
    "correction": " \"Hobbies:  She remains active in her community, is a student at a hospice, and participates in church organizations.\" ",
    "section": "SOCIAL HISTORY"
  },
  {
    "reasoning": " The subject \"she\" is needed in the second clause to avoid a dangling construction.",
    "error": "\"Sleep:  Occasional difficulty falling asleep, but remains asleep once asleep\" ",
    "correction": " \"Sleep:  Occasional difficulty falling asleep, but she remains asleep once asleep\" ",
    "section": "SOCIAL HISTORY"
  },
  {
    "reasoning": " The phrase \"to see if it changes\" is grammatically incomplete and unclear; \"helps\" provides a correct and clear verb, and the parallel structure with \"to see\" should be maintained.",
    "error": "\"A prescription for a concentrated vitamin D drop (400 units/drop) will be sent to the pharmacy to see if it changes and see how she does with it.\" -",
    "correction": "\"A prescription for a concentrated vitamin D drop (400 units/drop) will be sent to the pharmacy to see if it helps and to see how she does with it.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb form is inconsistent with the past-tense narration and lacks a clear subject, making the sentence grammatically incorrect.",
    "error": "\"Additionally, recommend PanOxyl wash during showers on her back and other areas.\" -",
    "correction": "\"Additionally, recommended PanOxyl wash during showers on her back and other areas.\" or \"Additionally, I recommend PanOxyl wash during showers on her back and other areas.\": The verb form is inconsistent with the past-tense narration and lacks a clear subject, making the sentence grammatically incorrect.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The original sentence lacks a clear subject and verb agreement; this correction provides a complete, grammatically correct sentence.",
    "error": "\"Additionally, recommended influenza and COVID-19 vaccines and will be administered today as well.\" -",
    "correction": "\"Additionally, influenza and COVID-19 vaccines were recommended and will be administered today as well.\" : The original sentence lacks a clear subject and verb agreement; this correction provides a complete, grammatically correct sentence.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "This is a sentence fragment missing an explicit subject and verb, so it should be converted to a complete sentence.",
    "error": "\"Administered a single dose of Decadron as an injection to ensure full dosage compliance.\" -",
    "correction": "\"A single dose of Decadron was administered as an injection to ensure full dosage compliance.\": This is a sentence fragment missing an explicit subject and verb, so it should be converted to a complete sentence.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is a fragment because it lacks an explicit subject and finite verb for the main clause.",
    "error": "\"Administered a single dose of steroid in the office to reduce inflammation around the vocal cords and improve breathing and sleep; explained that the steroid will remain effective for 2 to 3 days.\" -",
    "correction": "\"A single dose of steroid was administered in the office to reduce inflammation around the vocal cords and improve breathing and sleep; it was explained that the steroid will remain effective for 2 to 3 days.\" : The sentence is a fragment because it lacks an explicit subject and finite verb for the main clause.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "This is a sentence fragment missing a subject; adding \"He was\" completes the sentence.",
    "error": "\"Advised to avoid further falls or head injuries.\" -",
    "correction": "\"He was advised to avoid further falls or head injuries.\" : This is a sentence fragment missing a subject; adding \"He was\" completes the sentence.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb tense should be consistent with the past-tense narration used in the surrounding sentences.",
    "error": "\"Ask them to report any fever that develops over the weekend by 10/27/2025.\" -",
    "correction": "\"Asked them to report any fever that develops over the weekend by 10/27/2025.\" : The verb tense should be consistent with the past-tense narration used in the surrounding sentences.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The subject \"he\" is missing in both clauses, and a comma is needed before \"and\" to join two independent clauses.",
    "error": "\"At 5 months, should roll from back to front and at 6 months, should sit with support.\" -",
    "correction": "\"At 5 months, he should roll from back to front, and at 6 months, he should sit with support.\": The subject \"he\" is missing in both clauses, and a comma is needed before \"and\" to join two independent clauses.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb \"preventing\" is misused here; intensity cannot be \"prevented\" but can be \"reduced.\"",
    "error": "\"Clarified that the RSV vaccine does not create immunity but helps in preventing the intensity of illness.\" -",
    "correction": "\"Clarified that the RSV vaccine does not create immunity but helps in reducing the intensity of illness.\" : The verb \"preventing\" is misused here; intensity cannot be \"prevented\" but can be \"reduced.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is a fragment because it lacks an explicit subject.",
    "error": "\"Counseled that the illness may cause a fever that typically appears after a couple of days, resolves, and then progresses into a regular cold.\" -",
    "correction": "\"The patient was counseled that the illness may cause a fever that typically appears after a couple of days, resolves, and then progresses into a regular cold.\" : The sentence is a fragment because it lacks an explicit subject.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb tense should match the past-tense narrative of the clinical encounter.",
    "error": "\"Discuss the possibility of croup; the patient is not currently exhibiting characteristic symptoms such as a barky cough or hoarseness.\" -",
    "correction": "\"Discussed the possibility of croup; the patient is not currently exhibiting characteristic symptoms such as a barky cough or hoarseness.\" : The verb tense should match the past-tense narrative of the clinical encounter.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The comma is incorrectly joining two independent clauses (comma splice), and the verb \"were\" clarifies the passive construction.",
    "error": "\"Discussed options for refilling the medications, refills deferred.\" -",
    "correction": "\"Discussed options for refilling the medications; refills were deferred.\" : The comma is incorrectly joining two independent clauses (comma splice), and the verb \"were\" clarifies the passive construction.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The original is a sentence fragment lacking an explicit subject.",
    "error": "\"Discussed that adenoids cannot be visualized.\" -",
    "correction": "\"We discussed that adenoids cannot be visualized.\" : The original is a sentence fragment lacking an explicit subject.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "This is a sentence fragment missing an explicit subject.",
    "error": "\"Discussed the ongoing hand, foot and mouth infection affecting the children.\" -",
    "correction": "\"We discussed the ongoing hand, foot and mouth infection affecting the children.\" : This is a sentence fragment missing an explicit subject.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The original is a sentence fragment lacking an explicit subject.",
    "error": "\"Discussed the options of an ENT referral initially versus a sleep study and then an ENT referral if abnormal, with the preference being to obtain the sleep study initially.\" -",
    "correction": "\"We discussed the options of an ENT referral initially versus a sleep study and then an ENT referral if abnormal, with the preference being to obtain the sleep study initially.\" : The original is a sentence fragment lacking an explicit subject.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing an explicit subject, resulting in a grammatical fragment and unclear parallel structure.",
    "error": "\"Due to recurrent ear infections, recommend referral to an ear, nose, and throat physician now, as it may take several months to obtain an appointment, and continue monitoring until then.\" -",
    "correction": "\"Due to recurrent ear infections, we recommend referral to an ear, nose, and throat physician now, as it may take several months to obtain an appointment, and we will continue monitoring until then.\": The sentence is missing an explicit subject, resulting in a grammatical fragment and unclear parallel structure.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The original has a missing subject and a comma splice between two independent clauses.",
    "error": "\"Explained that his growth is plateauing and that puberty takes around 5 years, the patient acknowledged understanding.\" -",
    "correction": "\"It was explained that his growth is plateauing and that puberty takes around 5 years; the patient acknowledged understanding.\" : The original has a missing subject and a comma splice between two independent clauses.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing an explicit subject, making it a sentence fragment.",
    "error": "\"Explained that the Pepto is milk of magnesia and is typically used for diarrhea, so it may not be as helpful in this case.\" -",
    "correction": "\"I explained that the Pepto is milk of magnesia and is typically used for diarrhea, so it may not be as helpful in this case.\" : The sentence is missing an explicit subject, making it a sentence fragment.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing a verb and needs \"is\" for proper grammar.",
    "error": "\"Follow-up recommended in 3 months for medication check.\" -",
    "correction": "\"Follow-up is recommended in 3 months for medication check.\": The sentence is missing a verb and needs \"is\" for proper grammar.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The original sentence has an implied subject error; the corrected version provides a clear subject to match the introductory clause.",
    "error": "\"Given the chronic nature of the symptoms and the lack of response to initial treatments, refer to a gastroenterologist for further evaluation.\" -",
    "correction": "\"Given the chronic nature of the symptoms and the lack of response to initial treatments, the patient will be referred to a gastroenterologist for further evaluation.\" : The original sentence has an implied subject error; the corrected version provides a clear subject to match the introductory clause.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The clause is missing a subject; adding \"he was\" corrects the grammatical structure.",
    "error": "\"Given the chronic nature of the symptoms and the lack of response to initial treatments, referred to a gastroenterologist for further evaluation.\" -",
    "correction": "\"Given the chronic nature of the symptoms and the lack of response to initial treatments, he was referred to a gastroenterologist for further evaluation.\" : The clause is missing a subject; adding \"he was\" corrects the grammatical structure.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing the subject pronoun \"She\" and the phrase \"has done with growing\" is ungrammatical; \"is done growing\" is the correct form.",
    "error": "\"Has done with growing already and it is getting worse because usually it gets worse as people are growing.\" -",
    "correction": "\"She is done growing already, and it is not getting worse because usually it gets worse as people are growing.\": The sentence is missing the subject pronoun \"She\" and the phrase \"has done with growing\" is ungrammatical; \"is done growing\" is the correct form.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing a subject pronoun (\"She\") and has awkward verb tense/structure.",
    "error": "\"Has started period at 13 and at the end of 13, has still grown, which is a good thing.\" -",
    "correction": "\"She started her period at 13, and by the end of 13 she had still grown, which is a good thing.\": The sentence is missing a subject pronoun (\"She\") and has awkward verb tense/structure.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The subject \"he\" is missing after \"though,\" making the clause grammatically incomplete.",
    "error": "\"He has been experiencing persistent congestion and coughing, though has had only one episode of croup recently.\" -",
    "correction": "\"He has been experiencing persistent congestion and coughing, though he has had only one episode of croup recently.\": The subject \"he\" is missing after \"though,\" making the clause grammatically incomplete.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The second sentence is a sentence fragment because it lacks a subject.",
    "error": "\"Her last lab work showed mildly elevated triglycerides. Ordered a fasting cholesterol panel for her to complete at her convenience, preferably during a school break.\" -",
    "correction": "\"Her last lab work showed mildly elevated triglycerides. A fasting cholesterol panel was ordered for her to complete at her convenience, preferably during a school break.\" : The second sentence is a sentence fragment because it lacks a subject.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The subject \"set\" is singular and should take the singular verb \"was\" instead of \"were.\"",
    "error": "\"Her last set of labs were done on 09/19/2025, showing normal TSH, T4, CMP, and hemoglobin A1c.\" -",
    "correction": "\"Her last set of labs was done on 09/19/2025, showing normal TSH, T4, CMP, and hemoglobin A1c.\" : The subject \"set\" is singular and should take the singular verb \"was\" instead of \"were.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The third clause is missing a subject, so adding \"his\" corrects the subject-verb structure.",
    "error": "\"His lungs are clear, he appears well-hydrated, and ears appear normal.\" -",
    "correction": "\"His lungs are clear, he appears well-hydrated, and his ears appear normal.\": The third clause is missing a subject, so adding \"his\" corrects the subject-verb structure.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The clause \"and does not appear\" lacks a clear subject, creating a grammatical error; adding \"that\" correctly links it to \"infection.\"",
    "error": "\"His mouth examination revealed shotty anterior cervical lymph nodes, suggestive of an ongoing infection and does not appear to be a streptococcal infection.\" -",
    "correction": "\"His mouth examination revealed shotty anterior cervical lymph nodes, suggestive of an ongoing infection that does not appear to be a streptococcal infection.\": The clause \"and does not appear\" lacks a clear subject, creating a grammatical error; adding \"that\" correctly links it to \"infection.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing the subject pronoun \"she\" and uses the incorrect preposition/structure (\"interested to\" should be \"interested in restarting\").",
    "error": "\"If interested to restart fluoxetine, encouraged to return for further evaluation.\" -",
    "correction": "\"If she is interested in restarting fluoxetine, she is encouraged to return for further evaluation.\": The sentence is missing the subject pronoun \"she\" and uses the incorrect preposition/structure (\"interested to\" should be \"interested in restarting\").",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing the subject pronoun \"she\" in both clauses.",
    "error": "\"If needs to transfer pharmacies, can request the transfer to a closer Pxxx.\" -",
    "correction": "\"If she needs to transfer pharmacies, she can request the transfer to a closer Pxxx.\": The sentence is missing the subject pronoun \"she\" in both clauses.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing a subject (\"it is\") and the noun \"decongestant\" needs an article.",
    "error": "\"If tests are negative, recommended to take real Mucinex, which contains decongestant, in combination with Tylenol.\" -",
    "correction": "\"If tests are negative, it is recommended to take real Mucinex, which contains a decongestant, in combination with Tylenol.\" : The sentence is missing a subject (\"it is\") and the noun \"decongestant\" needs an article.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing the indirect object (\"her\") after \"informed\" and needs a clearer verb (\"remain\") for grammatical correctness.",
    "error": "\"Informed might not grow anymore and might stand at 5 feet 2 inches.\" -",
    "correction": "\"Informed her that she might not grow anymore and might remain at 5 feet 2 inches.\": The sentence is missing the indirect object (\"her\") after \"informed\" and needs a clearer verb (\"remain\") for grammatical correctness.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence lacks a subject, making it grammatically incomplete.",
    "error": "\"Informed that a referral is not required to see an optometrist.\" -",
    "correction": "\"He was informed that a referral is not required to see an optometrist.\" : The sentence lacks a subject, making it grammatically incomplete.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "This is a sentence fragment missing a subject; adding \"I\" provides a complete sentence.",
    "error": "\"Informed them that dexamethasone is considered an effective treatment for mild to moderate croup.\" -",
    "correction": "\"I informed them that dexamethasone is considered an effective treatment for mild to moderate croup.\" : This is a sentence fragment missing a subject; adding \"I\" provides a complete sentence.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is a fragment because it lacks an explicit subject.",
    "error": "\"Issued a black box warning for potential worsening of depression or suicidal ideation following the medication change.\" -",
    "correction": "\"We issued a black box warning for potential worsening of depression or suicidal ideation following the medication change.\" : The sentence is a fragment because it lacks an explicit subject.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The subject of the verb \"informed\" is missing; this passive construction is ungrammatical without a proper subject.",
    "error": "\"It was informed that two doses of influenza vaccine are required only during the first season of vaccination in infancy\" -",
    "correction": "\"The mother was informed that two doses of influenza vaccine are required only during the first season of vaccination in infancy\": The subject of the verb \"informed\" is missing; this passive construction is ungrammatical without a proper subject.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The passive construction is incorrect; \"it\" cannot be the subject of \"was reassured\" in this context and should be changed to \"was reassuring.\"",
    "error": "\"It was reassured that the baby's wet diapers and bowel movements are normal\" -",
    "correction": "\"It was reassuring that the baby's wet diapers and bowel movements are normal\" : The passive construction is incorrect; \"it\" cannot be the subject of \"was reassured\" in this context and should be changed to \"was reassuring.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The original is a sentence fragment lacking an explicit subject.",
    "error": "\"Made a referral to Dxxx under Dr. Exxx.\" -",
    "correction": "\"We made a referral to Dxxx under Dr. Exxx.\" : The original is a sentence fragment lacking an explicit subject.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The definite article \"the\" is needed, and the pronoun \"it\" clarifies the subject of \"can be received early.\"",
    "error": "\"Noted that he will require meningitis vaccine when he is in seventh grade but can be received early.\" -",
    "correction": "\"Noted that he will require the meningitis vaccine when he is in seventh grade, but it can be received early.\": The definite article \"the\" is needed, and the pronoun \"it\" clarifies the subject of \"can be received early.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is a fragment and needs an explicit subject to be grammatically complete.",
    "error": "\"Noted that soaking the affected area may help draw out any fluid.\" -",
    "correction": "\"It was noted that soaking the affected area may help draw out any fluid.\" : The sentence is a fragment and needs an explicit subject to be grammatically complete.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The subject \"it\" is missing, making the clause grammatically incomplete.",
    "error": "\"Platelet count is satisfactory, although had previously been mildly increased due to inflammation.\" -",
    "correction": "\"Platelet count is satisfactory, although it had previously been mildly increased due to inflammation.\": The subject \"it\" is missing, making the clause grammatically incomplete.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The original is a sentence fragment lacking a subject and verb, and \"every six-hour breathing treatments\" needs an article and hyphenation for correct grammatical construction.",
    "error": "\"Prescribed prednisone to be used for 3 days if symptoms of cough and congestion persist after the Z-Pak and every six-hour breathing treatments.\" -",
    "correction": "\"Prednisone was prescribed to be used for 3 days if symptoms of cough and congestion persist after the Z-Pak and the every-six-hour breathing treatments.\" : The original is a sentence fragment lacking a subject and verb, and \"every six-hour breathing treatments\" needs an article and hyphenation for correct grammatical construction.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "This is a sentence fragment missing an explicit subject and verb, which makes it grammatically incomplete.",
    "error": "\"Prescribed triamcinolone ointment to manage the rash.\" -",
    "correction": "\"Triamcinolone ointment was prescribed to manage the rash.\" : This is a sentence fragment missing an explicit subject and verb, which makes it grammatically incomplete.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb tense shifts incorrectly; \"Instructed\" should match the past tense \"Provided\" for grammatical consistency.",
    "error": "\"Provided a 90-day supply of Zoloft 100 mg. Instruct her to contact the office if there are any issues with the medication.\" -",
    "correction": "\"Provided a 90-day supply of Zoloft 100 mg. Instructed her to contact the office if there are any issues with the medication.\": The verb tense shifts incorrectly; \"Instructed\" should match the past tense \"Provided\" for grammatical consistency.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is a fragment lacking an explicit subject and finite verb, so it should be converted to a complete passive-voice sentence.",
    "error": "\"Provided a prescription for Keflex (cephalexin) 1.5 teaspoons twice daily for 10 days; if significant improvement is observed after 7 days, the medication can be discontinued.\" -",
    "correction": "\"A prescription for Keflex (cephalexin) 1.5 teaspoons twice daily for 10 days was provided; if significant improvement is observed after 7 days, the medication can be discontinued.\": The sentence is a fragment lacking an explicit subject and finite verb, so it should be converted to a complete passive-voice sentence.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb tense and structure are not parallel; \"emphasized\" should match \"provided.\"",
    "error": "\"Provided a prescription for nystatin ointment for both the infant's diaper area and the mother's use, and emphasize hygiene and cleaning.\" -",
    "correction": "\"Provided a prescription for nystatin ointment for both the infant's diaper area and the mother's use, and emphasized hygiene and cleaning.\": The verb tense and structure are not parallel; \"emphasized\" should match \"provided.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is a fragment because it lacks an explicit subject.",
    "error": "\"Provided a referral to a pediatric psychiatrist, and encouraged her to schedule an appointment.\" -",
    "correction": "\"We provided a referral to a pediatric psychiatrist and encouraged her to schedule an appointment.\" : The sentence is a fragment because it lacks an explicit subject.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "This is a sentence fragment lacking an explicit subject; adding \"The second dose was\" makes it a complete sentence.",
    "error": "\"Provided the second dose in tablet form, which can be crushed and mixed with yogurt or applesauce for easier administration.\" -",
    "correction": "\"The second dose was provided in tablet form, which can be crushed and mixed with yogurt or applesauce for easier administration.\" : This is a sentence fragment lacking an explicit subject; adding \"The second dose was\" makes it a complete sentence.",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing a subject (\"He\") and needs the definite article \"the\" before \"HPV vaccine.\"",
    "error": "\"Received the Tdap, MenQuadfi, and influenza vaccines today but can wait on HPV vaccine.\" -",
    "correction": "\"He received the Tdap, MenQuadfi, and influenza vaccines today but can wait on the HPV vaccine.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence lacks an explicit subject, making it a fragment rather than a complete sentence.",
    "error": "\"Recommend Aveeno baby eczema nighttime balm in the tub container, as it is slightly thicker, or Aquaphor.\" -",
    "correction": "\"I recommend Aveeno baby eczema nighttime balm in the tub container, as it is slightly thicker, or Aquaphor.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb tense should match the surrounding past-tense verbs (\"Prescribed,\" \"Emphasized,\" \"Advised\") in this section.",
    "error": "\"Recommend Mucinex to help clear mucus.\" -",
    "correction": "\"Recommended Mucinex to help clear mucus.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verbs should be in the same tense and form for parallel structure.",
    "error": "\"Recommend regular physical activity and encouraged outdoor physical activity\" -",
    "correction": "\"Recommend regular physical activity and encourage outdoor physical activity\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb pattern \"recommend [person] to [verb]\" is incorrect; it should be \"recommend that [person] [bare infinitive]\" and \"her diet\" clarifies whose diet.",
    "error": "\"Recommend the mother to eliminate dairy from the diet for a period of 2 weeks\" -",
    "correction": "\"Recommend that the mother eliminate dairy from her diet for a period of 2 weeks\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb tense is inconsistent with the surrounding past-tense narrative and should be in the past tense.",
    "error": "\"Recommend water consumption following administration of the medication.\" -",
    "correction": "\"Recommended water consumption following administration of the medication.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " This is a sentence fragment lacking a clear subject; changing the verb form makes it a complete directive sentence.",
    "error": "\"Recommended exposure to cool, humidified air or steam inhalation.\" -",
    "correction": "\"Recommend exposure to cool, humidified air or steam inhalation.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original sentence is missing a clear subject for the verb \"recommended,\" making it grammatically incomplete.",
    "error": "\"Recommended starting the Qvar inhaler at the onset of cold, cough, or influenza-like symptoms and continuing its use for 1 to 2 weeks in order to avoid any exacerbation.\" -",
    "correction": "\"It is recommended to start the Qvar inhaler at the onset of cold, cough, or influenza-like symptoms and to continue its use for 1 to 2 weeks in order to avoid any exacerbation.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing a clear subject for \"was declined\"; adding \"it\" clarifies what was declined.",
    "error": "\"Recommended the influenza vaccine at this visit but was declined.\" -",
    "correction": "\"Recommended the influenza vaccine at this visit, but it was declined.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"recommend\" should be followed by \"that\" plus a clause, not \"recommend someone to do something.\"",
    "error": "\"Recommended the parents to continue introducing new foods into her diet while avoiding unhealthy options such as goldfish crackers.\" -",
    "correction": "\"Recommended that the parents continue introducing new foods into her diet while avoiding unhealthy options such as goldfish crackers.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing a clear subject for the verbs \"recommended\" and \"counseled.\"",
    "error": "\"Recommended to restrict screen time to 2 hours daily and counseled on maintaining balanced control.\" -",
    "correction": "\"It was recommended to restrict screen time to 2 hours daily and she was counseled on maintaining balanced control.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original sentence lacks a clear subject for \"Recommended,\" so adding \"It was\" and \"her\" clarifies the grammar.",
    "error": "\"Recommended to wean off the formula two weeks before her first birthday by gradually introducing whole milk, starting with 1 ounce and increasing incrementally.\" -",
    "correction": "\"It was recommended to wean her off the formula two weeks before her first birthday by gradually introducing whole milk, starting with 1 ounce and increasing incrementally.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original is a sentence fragment lacking an explicit subject and verb.",
    "error": "\"Recommended using Vaseline or Aquaphor as a barrier cream.\" -",
    "correction": "\"It is recommended to use Vaseline or Aquaphor as a barrier cream.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original sentence lacks an explicit subject and verb form, making it a sentence fragment rather than a complete sentence.",
    "error": "\"Recommended yogurt or probiotics to mitigate these side effects.\" -",
    "correction": "\"Yogurt or probiotics were recommended to mitigate these side effects.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is a fragment lacking an explicit subject and needs a subject and proper clause structure.",
    "error": "\"Sent prescription to the pharmacy and it should be ready within a few hours.\" -",
    "correction": "\"I sent the prescription to the pharmacy, and it should be ready within a few hours.\" or \"The prescription was sent to the pharmacy, and it should be ready within a few hours.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verbs in the paired construction should be parallel in form (\"have\" and \"feel\").",
    "error": "\"She can attend school as long as she does not have a fever or feels unwell.\" -",
    "correction": "\"She can attend school as long as she does not have a fever or feel unwell.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "\"Google\" is a proper noun and should be capitalized even when used as a verb.",
    "error": "\"she can google other potassium-rich foods as well.\" -",
    "correction": "\"she can Google other potassium-rich foods as well.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The clause lacks an explicit subject and verb, making the sentence grammatically incomplete.",
    "error": "\"so recommended a transition from Zoloft to Lexapro.\" -",
    "correction": "\"so a transition from Zoloft to Lexapro was recommended.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The clause \"sent prescription\" is a sentence fragment and needs a subject and auxiliary verb for correct grammar.",
    "error": "\"Start albuterol nebulizer treatments every 6 hours (four times a day), then gradually reduce to three, two, and then one time per day over a week as symptoms improve; sent prescription.\" -",
    "correction": "\"Start albuterol nebulizer treatments every 6 hours (four times a day), then gradually reduce to three, two, and then one time per day over a week as symptoms improve; a prescription was sent.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The past-tense verb \"sent\" is inconsistent with the imperative structure of the sentence and should match the intended tense/voice.",
    "error": "\"Start amoxicillin for 7 days to treat the infection and prevent the left ear from worsening; sent the prescription to the pharmacy.\" -",
    "correction": "\"Start amoxicillin for 7 days to treat the infection and prevent the left ear from worsening; send the prescription to the pharmacy.\" or \"…; I have sent the prescription to the pharmacy.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"suggest\" requires \"that\" with a clause and not an infinitive (\"to call\") in this context.",
    "error": "\"Suggested the mother to call the neurosurgery department herself if she does not get a call from them.\" -",
    "correction": "\"Suggested that the mother call the neurosurgery department herself if she does not get a call from them.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The word order and missing verb make the sentence grammatically incorrect.",
    "error": "\"The condition for the first couple of days is usually worse but expected to improve as the treatment takes effect.\" -",
    "correction": "\"The condition is usually worse for the first couple of days but is expected to improve as the treatment takes effect.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The plural subject \"criteria\" requires the plural verb \"include.\"",
    "error": "\"The criteria for tube placement includes 3 ear infections within a 6-month period or 4 within a year\" -",
    "correction": "\"The criteria for tube placement include 3 ear infections within a 6-month period or 4 within a year\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb phrase \"the provider reassured\" is missing an object; using the passive \"was reassured\" correctly indicates that the provider received reassurance.",
    "error": "\"The hematology attending explained that the results would be monitored and direct contact would be made with the provider once available, and the provider reassured that Dr. Kxxx would be kept informed.\" -",
    "correction": "\"The hematology attending explained that the results would be monitored and direct contact would be made with the provider once available, and the provider was reassured that Dr. Kxxx would be kept informed.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The clause after the comma is missing a clear subject for \"advised\" and needs proper verb phrasing.",
    "error": "\"The squeezable food pouches are not encouraged, and advised to allow her to continue eating the purees including fruits and vegetables, pancakes, and eggs.\" -",
    "correction": "\"The squeezable food pouches are not encouraged, and the parents were advised to allow her to continue eating purees, including fruits and vegetables, pancakes, and eggs.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The subject is singular, so the verb should be \"is\" rather than \"are,\" and a comma is needed before \"is reported\" to separate the clause clearly.",
    "error": "\"Urinary frequency with a persistent urge to urinate and sensation of incomplete bladder emptying, but without pain or other symptoms of a urinary tract infection (UTI) are reported.\" -",
    "correction": "\"Urinary frequency with a persistent urge to urinate and sensation of incomplete bladder emptying, but without pain or other symptoms of a urinary tract infection (UTI), is reported.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing a subject (\"they were\") before \"advised,\" making it a grammatical fragment.",
    "error": "\"With the upcoming holiday, advised that he should not be held by anyone who is immunosuppressed, such as elderly grandparents, newborn babies, or individuals receiving chemotherapy.\" -",
    "correction": "\"With the upcoming holiday, they were advised that he should not be held by anyone who is immunosuppressed, such as elderly grandparents, newborn babies, or individuals receiving chemotherapy.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The second clause lacks a clear subject; adding \"that he can proceed\" corrects the grammar.",
    "error": "\"Advised that there are no contraindications with Zepbound injections and can proceed with COVID-19 vaccination.\" ",
    "correction": " \"Advised that there are no contraindications with Zepbound injections and that he can proceed with COVID-19 vaccination.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The subject of \"remains asymptomatic\" is unclear; a pronoun (e.g., \"he\") is needed to refer to the patient rather than the medication.",
    "error": "\"If the medication is effectively controlling the early heart rhythm and remains asymptomatic, no further procedures will be necessary.\" ",
    "correction": " \"If the medication is effectively controlling the early heart rhythm and he remains asymptomatic, no further procedures will be necessary.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The adverb \"easily\" should be used instead of the comparative adjective \"easier\" to modify the verb phrase \"feeling full.\"",
    "error": "\"Reports feeling full easier and drinking more water.\" ",
    "correction": " \"Reports feeling full more easily and drinking more water.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original is a sentence fragment missing a subject and verb.",
    "error": "\"Also, advised to avoid forceful nose blowing.\" ",
    "correction": " \"He is also advised to avoid forceful nose blowing.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "\"Alcohol sclerosed\" is not a correct grammatical construction; the verb should be \"sclerosed\" with \"alcohol\" as its object.",
    "error": "\"- Developed a seroma post-surgery, treated with drainage and alcohol sclerosed.\" ",
    "correction": " \"- Developed a seroma post-surgery, treated with drainage and sclerosed with alcohol.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " \"Instruction\" should be plural to match \"dosing instructions,\" and the verb should agree with the plural noun.",
    "error": "\"Ensured that dosing instruction has been understood for each medication.\" ",
    "correction": " \"Ensured that dosing instructions have been understood for each medication.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"avoid\" needs \"to\" for parallel infinitive structure.",
    "error": "\"as a conservative approach is preferred and avoid side effects from medications.\" ",
    "correction": " \"as a conservative approach is preferred and to avoid side effects from medications.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence lacks a subject and proper verb form; \"relax\" should be \"relaxes\" to agree with \"carvedilol.\"",
    "error": "\"Educated that carvedilol helps lower the heart rate and relax the contraction.\" ",
    "correction": " \"The patient was educated that carvedilol helps lower the heart rate and relaxes the contraction.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original is a fragment lacking a clear subject and finite verb.",
    "error": "\"Recommended to continue walking.\" ",
    "correction": " \"The patient is advised to continue walking.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence needs the auxiliary verb \"were\" and the preposition \"for\" is more appropriate than \"on\" in this context.",
    "error": "\"Refills provided on medications.\" ",
    "correction": " \"Refills were provided for medications.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"is\" is missing, making the sentence incomplete.",
    "error": "\"Follow-up appointment scheduled in 4 weeks for repeat x-rays to monitor progress.\" ",
    "correction": " \"Follow-up appointment is scheduled in 4 weeks for repeat x-rays to monitor progress.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The impersonal construction \"It was informed\" is grammatically incorrect; the sentence needs a clear subject.",
    "error": "\"It was informed that return to basketball would require approximately 90% restoration of both range of motion and strength.\" ",
    "correction": " \"He was informed that return to basketball would require approximately 90% restoration of both range of motion and strength.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "\"Prior\" is incorrectly used; \"previously\" is the correct adverb in this context.",
    "error": "\"and ablation was done prior to prevent atrial fibrillation.\" ",
    "correction": " \"and ablation was done previously to prevent atrial fibrillation.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "A linking verb (\"is\") is needed to form a complete sentence.",
    "error": "\"Potassium 5.1.\" ",
    "correction": " \"Potassium is 5.1.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The adverb \"normally\" is required here instead of the adjective \"normal.\"",
    "error": "\"the heart is squeezing totally normal.\" ",
    "correction": " \"the heart is squeezing totally normally.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is a fragment lacking a main verb and needs \"will review\" to be grammatically complete.",
    "error": "\"A cardiologist, preferably one specializing in heart failure and imaging, to review the echo to determine the severity and if additional interventions are necessary.\" ",
    "correction": " \"A cardiologist, preferably one specializing in heart failure and imaging, will review the echo to determine the severity and if additional interventions are necessary.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original is a sentence fragment lacking a subject; adding \"She will\" makes it a complete sentence.",
    "error": "\"Need to take 2 of them.\" ",
    "correction": " \"She will need to take 2 of them.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"is\" is missing, resulting in a sentence fragment instead of a complete sentence.",
    "error": "\"Next appointment scheduled for 11/2025.\" ",
    "correction": " \"Next appointment is scheduled for 11/2025.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing an explicit subject and article, making it grammatically incomplete.",
    "error": "\"Informed that her PVCs are controlled on very low dosage of diltiazem.\" ",
    "correction": " \"She was informed that her PVCs are controlled on a very low dosage of diltiazem.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing an explicit subject and the definite article \"the\" before \"heart,\" making it grammatically incomplete.",
    "error": "\"Reassured that this is likely due to the anatomical positioning of the artery near the ear canal and not related to heart or blood pressure.\" ",
    "correction": " \"She was reassured that this is likely due to the anatomical positioning of the artery near the ear canal and not related to the heart or blood pressure.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb form is incorrect for this construction and should be changed to the present participle to match the implied subject.",
    "error": "\"- Currently hold off on any testing.\" ",
    "correction": " \"- Currently holding off on any testing.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "\"Appropriated\" is the wrong word form here; the adverb \"appropriately\" should be used to modify \"positioned.\"",
    "error": "\"Advised to ensure the blood pressure cuff is appropriated positioned before taking readings.\" ",
    "correction": " \"Advised to ensure the blood pressure cuff is appropriately positioned before taking readings.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original sentence has a faulty subject for the verb phrase \"has successfully passed a stress test\"; \"she\" should be the subject, not \"heart function.\"",
    "error": "\"Heart function is normal and has successfully passed a stress test.\" ",
    "correction": " \"Heart function is normal, and she has successfully passed a stress test.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb tense should be past (\"was done\"), and a comma is needed after the clause for correct punctuation.",
    "error": "\"Recent ECG from 08/28/2025, which is done by Dr. Rxxx showed nonspecific ST and T wave changes,\" ",
    "correction": " \"Recent ECG from 08/28/2025, which was done by Dr. Rxxx, showed nonspecific ST and T wave changes,\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"are\" is missing, resulting in an incomplete sentence.",
    "error": "\"No activity restrictions recommended.\" ",
    "correction": " \"No activity restrictions are recommended.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The singular subject \"weather\" requires the singular verb \"tends.\"",
    "error": "\"which tend to constrict vessels.\" ",
    "correction": " \"which tends to constrict vessels.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The subject \"she\" is needed in the second sentence for correct grammar.",
    "error": "\"The event was 2 weeks ago and has not recurred. Additionally, has had evaluation including chest x-ray, laboratory studies, and CT scan revealing no serious pathology.\" ",
    "correction": " \"The event was 2 weeks ago and has not recurred. Additionally, she has had evaluation including chest x-ray, laboratory studies, and CT scan revealing no serious pathology.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing a verb; adding \"is\" makes it a complete sentence.",
    "error": "\"Recommended heart rate close to 70 to 80.\" ",
    "correction": " \"Recommended heart rate is close to 70 to 80.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The subject \"he\" is missing in the conditional clause, causing a grammatical error.",
    "error": "\"Support for cessation was offered if chooses to pursue it in the future.\" ",
    "correction": " \"Support for cessation was offered if he chooses to pursue it in the future.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing an article and a verb to be grammatically complete.",
    "error": "\"- Information on low-fat diet provided.\" ",
    "correction": " \"- Information on a low-fat diet was provided.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb tense should match the imperative form used in the list, and \"stressed on\" is incorrect in this context.",
    "error": "\"- Monitor blood pressure regularly and stressed on the importance of ensuring stable blood pressure.\" ",
    "correction": " \"- Monitor blood pressure regularly and stress the importance of ensuring stable blood pressure.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "\"Maybe\" (adverb) should be the verb phrase \"may be\" in this context.",
    "error": "\"one side maybe attributed to this condition\" ",
    "correction": " \"one side may be attributed to this condition\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing a subject, causing a dangling modifier; adding \"he\" clarifies who is reporting.",
    "error": "\"On warfarin, reports no GU or GI bleeding when using the bathroom but notes bleeding with minor cuts.\" ",
    "correction": " \"On warfarin, he reports no GU or GI bleeding when using the bathroom but notes bleeding with minor cuts.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing a clear subject for the verb \"educated,\" making it grammatically incomplete.",
    "error": "\"Educated that sometimes there is not much sensation, and intervention is not always necessary.\" ",
    "correction": " \"He was educated that sometimes there is not much sensation, and intervention is not always necessary.\" (or \"The patient was educated…\")",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The phrase \"help with reducing the cholesterol\" is wordy and ungrammatical; \"help reduce cholesterol\" is the correct verb construction and article use.",
    "error": "\"- Praluent might help with reducing the cholesterol.\" ",
    "correction": " \"- Praluent might help reduce cholesterol.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The passive construction is incorrect; the sentence needs a clear subject (who was informed).",
    "error": "\"It was informed that minoxidil could be increased up to 100 mg.\" ",
    "correction": " \"She was informed that minoxidil could be increased up to 100 mg.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The second clause is missing a subject after \"or,\" and \"cardiologist surgeons\" is an incorrect noun form; \"cardiology surgeons\" (or similar) is the correct construction.",
    "error": "\"The patient will follow up in a few months via telehealth or can see one of the cardiologist surgeons.\" ",
    "correction": " \"The patient will follow up in a few months via telehealth, or she can see one of the cardiology surgeons.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"a\" is needed before \"disk issue,\" and the verb \"is\" is needed for correct clause structure.",
    "error": "\"- The back pain appears to be musculoskeletal in nature and could be disk issue, but not cardiovascular related.\" ",
    "correction": " \"- The back pain appears to be musculoskeletal in nature and could be a disk issue, but is not cardiovascular related.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "\"Hydration\" is a noun and breaks the parallel verb structure; \"hydrate\" is needed to match the other verb forms.",
    "error": "\"Advised to increase salt intake by adding extra salt in food, consume pretzels and salty nuts periodically, hydration with at least 4 bottles of water throughout the day and use compression socks or maternity compression leggings (20-25 mmHg) during prolonged standing periods.\" ",
    "correction": " \"Advised to increase salt intake by adding extra salt in food, consume pretzels and salty nuts periodically, hydrate with at least 4 bottles of water throughout the day, and use compression socks or maternity compression leggings (20-25 mmHg) during prolonged standing periods.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb phrase \"as well as agreed\" is ungrammatical; \"has agreed\" is needed for correct tense and structure.",
    "error": "\"However, currently she prefers to increase the Gatorade and consume salty snacks as well as agreed to take salt tablets.\" ",
    "correction": " \"However, currently she prefers to increase the Gatorade and consume salty snacks and has agreed to take salt tablets.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The subject \"she\" is needed in the second clause to avoid a sentence fragment.",
    "error": "\"- Blood pressure is currently low, and not on any medication for it.\" ",
    "correction": " \"- Blood pressure is currently low, and she is not on any medication for it.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "Subject-verb agreement error (\"Ranexa and Lasix\" is plural and requires \"do,\" and the definite article \"the\" before \"Ranexa\" is unnecessary).",
    "error": "\"Entresto, eplerenone, Jardiance, and carvedilol will improve the heart function the most, whereas the Ranexa and Lasix does not improve the heart function much.\" ",
    "correction": " \"Entresto, eplerenone, Jardiance, and carvedilol will improve the heart function the most, whereas Ranexa and Lasix do not improve the heart function much.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " This is a sentence fragment lacking a subject and a finite verb and needs to be rewritten as a complete sentence.",
    "error": "\"Not taking Entresto or its generic form for about a month because insurance requires preauthorization.\" ",
    "correction": " \"He has not been taking Entresto or its generic form for about a month because insurance requires preauthorization.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The clause is missing a subject; adding \"we\" corrects the grammatical error.",
    "error": "\"because at this stage, would in all probability do IV to get the fluid off.\" ",
    "correction": " \"because at this stage, we would in all probability do IV to get the fluid off.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original is a sentence fragment missing an explicit subject and verb.",
    "error": "\"Encouraged to keep the fluid off.\" ",
    "correction": " \"She is encouraged to keep the fluid off.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun form \"follow-up\" requires a hyphen, whereas \"follow up\" without a hyphen is used as a verb.",
    "error": "\"Follow up communication was planned once results were available.\" ",
    "correction": " \"Follow-up communication was planned once results were available.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb tense should be present (\"causes\") to match the ongoing effect, and a comma is needed before \"although\" to separate clauses.",
    "error": "\"Continue metoprolol as it effectively controls AFib symptoms although it caused fatigue.\" ",
    "correction": " \"Continue metoprolol as it effectively controls AFib symptoms, although it causes fatigue.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original sentence is missing a clear subject and verb (\"it is\" / \"that he follow\"), making the construction grammatically incomplete.",
    "error": "\"- With the history of coronary artery disease and plaque in the heart and no prior heart attack or stents, recommended to follow up in 3 months with Dr. Pxxx, the new cardiologist, for a routine check-up and to establish care.\" ",
    "correction": " \"- With the history of coronary artery disease and plaque in the heart and no prior heart attack or stents, it is recommended that he follow up in 3 months with Dr. Pxxx, the new cardiologist, for a routine check-up and to establish care.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing a clear subject and verb (\"He is at\"), making it grammatically incomplete.",
    "error": "\"Reasonable risk for upcoming surgery and can undergo it and get back to activity again.\" ",
    "correction": " \"He is at reasonable risk for the upcoming surgery and can undergo it and get back to activity again.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " A comma is needed after \"Pepto-Bismol,\" and the second clause requires an explicit subject (\"she\") to be grammatically complete.",
    "error": "\"Pepto-Bismol which is reassuring, but has been consuming them excessively.\" ",
    "correction": " \"Pepto-Bismol, which is reassuring, but she has been consuming them excessively.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " Incorrect verb form \"turn\" instead of \"turns,\" and missing subject \"it\" in the second clause.",
    "error": "\"An echocardiogram will be performed to assess heart function. If this test turn negative is reassuring.\" ",
    "correction": " \"An echocardiogram will be performed to assess heart function. If this test turns out negative, it is reassuring.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The phrase \"stay from\" is incorrect; the correct phrasal verb is \"stay away from.\"",
    "error": "\"Advised to stay from added sugars, processed foods, and fast foods.\" ",
    "correction": " \"Advised to stay away from added sugars, processed foods, and fast foods.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The compound subject \"cusps and diastolic dysfunction\" requires the plural verb \"are,\" and \"the\" is needed before \"normal aging process.\"",
    "error": "\"Reassured that mildly calcified cusps and diastolic dysfunction is secondary to normal aging process.\" ",
    "correction": " \"Reassured that mildly calcified cusps and diastolic dysfunction are secondary to the normal aging process.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing a subject and verb for the second clause, resulting in incorrect grammar.",
    "error": "\"Thyroid function, glucose levels, liver, and kidney functions are all within normal limits and advised to check them again in approximately 6 months.\" ",
    "correction": " \"Thyroid function, glucose levels, liver, and kidney functions are all within normal limits, and she is advised to check them again in approximately 6 months.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The comma after the prepositional phrase \"in 09/2025\" is incorrect and breaks the flow between the subject and verb.",
    "error": "\"The last liver test in 09/2025, showed a slight elevation.\" ",
    "correction": " \"The last liver test in 09/2025 showed a slight elevation.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The singular subject \"swelling\" requires the singular verb form \"involves.\"",
    "error": "\"- Explained that swelling due to cardiac or renal causes typically involve bilateral legs.\" ",
    "correction": " \"- Explained that swelling due to cardiac or renal causes typically involves bilateral legs.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "\"Everyday\" is an adjective meaning \"ordinary,\" whereas \"every day\" (two words) is needed here as an adverbial phrase of time.",
    "error": "\"The plan of being on a medication everyday as a preventative was discussed as well.\" ",
    "correction": " \"The plan of being on a medication every day as a preventative was discussed as well.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"discuss\" should not be followed by \"about\"; the correct construction is \"discuss [noun].\"",
    "error": "\"Discussed about weight loss injection, which he will follow up with Dr. Qxxx.\" ",
    "correction": " \"Discussed weight loss injection, which he will follow up on with Dr. Qxxx.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The passive construction is missing the auxiliary verb \"was.\"",
    "error": "\"No need to do blood work, as the last blood work noted to have normal cholesterol levels.\" ",
    "correction": " \"No need to do blood work, as the last blood work was noted to have normal cholesterol levels.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing an explicit subject; adding \"He\" corrects the grammar.",
    "error": "\"Also was advised to avoid omeprazole\" ",
    "correction": " \"He was also advised to avoid omeprazole\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original sentence lacks a clear subject and conjunction for the final clause, making it grammatically incomplete.",
    "error": "\"Follow-up testing can be performed next year, with the option to extend the interval by another year, remains asymptomatic and stable from a cardiovascular standpoint.\" ",
    "correction": " \"Follow-up testing can be performed next year, with the option to extend the interval by another year if she remains asymptomatic and stable from a cardiovascular standpoint.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The comma between the verb phrase and the prepositional phrase is unnecessary and breaks the sentence incorrectly.",
    "error": "\"Plans to contact Dr. Gxxx's office to schedule the titers test, at the end of the month or beginning of 12/2025.\" ",
    "correction": " \"Plans to contact Dr. Gxxx's office to schedule the titers test at the end of the month or beginning of 12/2025.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original sentence is grammatically incorrect because it lacks a clear subject for \"will be discussed\" and uses the awkward phrase \"about the same.\"",
    "error": "\"Discontinue aspirin and continue Xarelto to reduce the risk of bleeding and potential contribution to anemia and will be discussed with Dr. Lxxx about the same.\" ",
    "correction": " \"Discontinue aspirin and continue Xarelto to reduce the risk of bleeding and potential contribution to anemia; this plan will be discussed with Dr. Lxxx.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The clause is missing the subject (\"he\") before \"is,\" resulting in incorrect grammar.",
    "error": "\"- Prescription for lisinopril adjusted to half the dose as is currently taking it every other day.\" ",
    "correction": " \"- Prescription for lisinopril adjusted to half the dose as he is currently taking it every other day.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The phrasal verb \"hold off\" normally takes the preposition \"on\" before its object.",
    "error": "\"- Hold off Zetia at present.\" ",
    "correction": " \"- Hold off on Zetia at present.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " \"Maybe\" is incorrectly used as one word; here it should be the verb phrase \"may be.\"",
    "error": "\"Diuretic maybe contributing to dehydration.\" ",
    "correction": " \"Diuretic may be contributing to dehydration.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb should be in the base form \"increase\" after \"to.\"",
    "error": "\"- Reassured that it is normal for heart rate to increases with physical activity.\" ",
    "correction": " \"- Reassured that it is normal for heart rate to increase with physical activity.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb \"is\" is needed for grammatical completeness, and the sentence should end with a period.",
    "error": "\"- Shortness of breath occasionally noted when ascending stairs or inclines, which is attributed to throat congestion\" ",
    "correction": " \"- Shortness of breath is occasionally noted when ascending stairs or inclines, which is attributed to throat congestion.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing an article and a linking verb, and the word order should be adjusted for correct grammar.",
    "error": "\"Coronary calcium score test recommended also to assess for potential calcium buildup in coronary arteries.\" ",
    "correction": " \"A coronary calcium score test is also recommended to assess for potential calcium buildup in coronary arteries.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb \"impact\" should not be followed by \"on\" in this construction.",
    "error": "\"Increased need for rest between exercise sessions is noted, which does not impact on her overall well-being.\" ",
    "correction": " \"Increased need for rest between exercise sessions is noted, which does not impact her overall well-being.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original sentence lacks a clear subject and article (\"a\") before \"small dose,\" and is missing a period at the end.",
    "error": "\"- If symptoms such as a racing heart occur, advised to inform for initiation of small dose of metoprolol, as metoprolol may suppress cardiac activity and reduce palpitations, though it may not fully address associated anxiety\" ",
    "correction": " \"- If symptoms such as a racing heart occur, he is advised to inform us for initiation of a small dose of metoprolol, as metoprolol may suppress cardiac activity and reduce palpitations, though it may not fully address associated anxiety.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb should agree with the plural noun \"statins\" (\"stabilize\"), and a comma is needed before the non-restrictive clause \"which stabilize the plaque.\"",
    "error": "\"It also reduces plaque compared to other statins which stabilizes the plaque.\" ",
    "correction": " \"It also reduces plaque compared to other statins, which stabilize the plaque.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb \"discussed\" should not be followed by the preposition \"about\" in this context.",
    "error": "\"- Followed up on the endoscopy and discussed about the condition.\" ",
    "correction": " \"- Followed up on the endoscopy and discussed the condition.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original sentence is missing a clear subject and verb, resulting in incorrect grammar.",
    "error": "\"- Due to family history of colon cancer, not eligible for stool tests and considered high risk.\" ",
    "correction": " \"- Due to a family history of colon cancer, he is not eligible for stool tests and is considered high risk.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The impersonal subject \"It\" is incorrectly used with \"reassured,\" and the second \"assured\" is redundant and lacks a subject.",
    "error": "\"It was reassured that the procedure will be completed within the next couple of months and assured before expiration of financial assistance.\" ",
    "correction": " \"She was reassured that the procedure will be completed within the next couple of months and before expiration of financial assistance.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb tense \"would\" is inconsistent with the instructional/future context, and \"mins\" should be written out as \"minutes\" for grammatical correctness.",
    "error": "\"No eating or drinking after midnight before the procedure and the procedure would only be 10 mins under anesthesia.\" ",
    "correction": " \"No eating or drinking after midnight before the procedure, and the procedure will only be 10 minutes under anesthesia.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The second clause lacks an explicit subject, leading to an incorrect parallel structure.",
    "error": "\"Orders will be placed today and will receive a call later from the procedure scheduler.\" ",
    "correction": " \"Orders will be placed today and she will receive a call later from the procedure scheduler.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The second clause is missing a subject and connector, making the sentence grammatically incomplete.",
    "error": "\"Procedure details explained that the scope goes into the mouth, down the esophagus, stomach, and first part of the small intestine and will be asleep during the procedure.\" ",
    "correction": " \"Procedure details explained that the scope goes into the mouth, down the esophagus, stomach, and first part of the small intestine and that she will be asleep during the procedure.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original is a sentence fragment missing a subject.",
    "error": "\"Currently 3.5 cm.\" ",
    "correction": " \"It is currently 3.5 cm.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "This is a sentence fragment; adding \"It is\" provides the necessary subject and verb.",
    "error": "\"- Currently 3.5 cm.\" ",
    "correction": " \"- It is currently 3.5 cm.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb \"is\" is missing, making the sentence a fragment.",
    "error": "\"Upper endoscopy under anesthesia scheduled to investigate the cause of symptoms.\" ",
    "correction": " \"Upper endoscopy under anesthesia is scheduled to investigate the cause of symptoms.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"a\" is missing before \"message,\" and the verb tense should match the surrounding future tense (\"will be sent\" instead of \"would be sent\").",
    "error": "\"and message would be sent to the patient portal.\" ",
    "correction": " \"and a message will be sent to the patient portal.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The second clause lacks a subject; adding \"patients\" (or \"the patient\") corrects the grammar.",
    "error": "\"It is available over the counter and can opt for capsules or gummies as they are more palatable.\" ",
    "correction": " \"It is available over the counter, and patients can opt for capsules or gummies, as they are more palatable.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " There is subject-verb/number disagreement (\"polyps\" vs. \"a growth\") and incorrect comma placement around \"if found.\"",
    "error": "\"Polyps, which are a precancerous growth that can potentially turn into colon cancer, if found, will be removed during the procedure.\" ",
    "correction": " \"Polyps, which are precancerous growths that can potentially turn into colon cancer, will be removed during the procedure if found.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original is a fragment with no subject and is missing the article \"the\" before \"body.\"",
    "error": "\"Cautioned it might result in some bloating at first while body adjusts to the fiber.\" ",
    "correction": " \"She was cautioned that it might result in some bloating at first while the body adjusts to the fiber.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The second clause lacks a subject and \"also\" is better placed earlier in the phrase.",
    "error": "\"It is available over the counter and can opt for capsules or gummies also as they are more palatable.\" ",
    "correction": " \"It is available over the counter, and she can also opt for capsules or gummies, as they are more palatable.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original has a sentence fragment; adding a verb and using a comma instead of a period fixes the grammar.",
    "error": "\"Metamucil, a psyllium fiber supplement. recommended to help bulk the stool and improve digestive health.\" ",
    "correction": " \"Metamucil, a psyllium fiber supplement, is recommended to help bulk the stool and improve digestive health.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"contact\" is missing an object, and adding \"at\" before \"a preferred location\" clarifies the prepositional phrase.",
    "error": "\"The scheduler will contact to schedule the procedure on a convenient date, time, and preferred location.\" ",
    "correction": " \"The scheduler will contact her to schedule the procedure on a convenient date, time, and at a preferred location.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb forms in the coordinated phrase should be parallel (\"trying\" and \"waiting\").",
    "error": "\"Recommended trying protein powder once and then wait for a week to determine if there are any effects from it.\" ",
    "correction": " \"Recommended trying protein powder once and then waiting for a week to determine if there are any effects from it.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb \"is\" is needed for correct subject-verb construction.",
    "error": "\"Daily fiber supplement (Benefiber or Metamucil) recommended to be taken once daily with adequate water intake\" ",
    "correction": " \"Daily fiber supplement (Benefiber or Metamucil) is recommended to be taken once daily with adequate water intake\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " \"Slower\" should be the adverb \"more slowly\" to modify the verb \"eating\" correctly.",
    "error": "\"eating smaller meals, avoiding spicy foods, eating slower.\" ",
    "correction": " \"eating smaller meals, avoiding spicy foods, eating more slowly.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The items in the list need parallel structure (all using the same verb form) for correct grammar.",
    "error": "\"- Increasing Linzess dosage to 2 tablets daily, Canasa suppository, and adding MiraLAX to regimen might help resolve this issue.\" ",
    "correction": " \"- Increasing the Linzess dosage to 2 tablets daily, adding a Canasa suppository, and adding MiraLAX to the regimen might help resolve this issue.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The auxiliary verb \"has\" is needed to form the present perfect tense correctly.",
    "error": "\"- Undergone IgA and TTG lab tests for gluten allergy, but the results are not yet available.\" ",
    "correction": " \"- Has undergone IgA and TTG lab tests for gluten allergy, but the results are not yet available.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb \"are\" is needed for correct subject-verb structure.",
    "error": "\"Serial colonoscopies recommended to monitor the condition.\" ",
    "correction": " \"Serial colonoscopies are recommended to monitor the condition.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The clause \"if any issues in the meantime\" is missing a verb and needs \"there are\" to be grammatically complete.",
    "error": "\"she can reach out sooner if any issues in the meantime.\" ",
    "correction": " \"she can reach out sooner if there are any issues in the meantime.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " \"Will normalize\" is the standard verb form; \"will get normalized\" is awkward passive usage.",
    "error": "\"Appetite will get normalized once the constipation issue resolves.\" ",
    "correction": " \"Appetite will normalize once the constipation issue resolves.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb \"was\" is missing, making the sentence grammatically incomplete.",
    "error": "\"Information provided that a phrenic nerve is present in the area\" ",
    "correction": " \"Information was provided that a phrenic nerve is present in the area\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb \"was\" is missing, making the sentence grammatically incomplete.",
    "error": "\"Information provided that the Bxxx at Jxxx likely does not have a GI lab\" ",
    "correction": " \"Information was provided that the Bxxx at Jxxx likely does not have a GI lab\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb \"was\" is missing, making the sentence grammatically incomplete.",
    "error": "\"Instruction given to send a message and provide an update on symptom status.\" ",
    "correction": " \"Instruction was given to send a message and provide an update on symptom status.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is required before \"gallbladder,\" and the verb \"is\" is needed for proper subject-verb construction in the second clause.",
    "error": "\"Moderate probability that gallbladder is causing symptoms; further investigation needed to rule out stones in the bile duct.\" ",
    "correction": " \"Moderate probability that the gallbladder is causing symptoms; further investigation is needed to rule out stones in the bile duct.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The subject \"She\" is needed for the second sentence, and adding \"has\" in the first sentence corrects the tense; removing \"the\" before \"insulin\" is more grammatically natural.",
    "error": "\"- Not started on insulin yet. Has been trying to manage before starting the insulin.\" ",
    "correction": " \"- She has not started insulin yet. She has been trying to manage before starting insulin.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb \"was\" is needed for correct past passive construction.",
    "error": "\"Given that the colon cancer previously treated with bowel resection that removed the valve between the small intestine and colon\" ",
    "correction": " \"Given that the colon cancer was previously treated with bowel resection that removed the valve between the small intestine and colon\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing a clear subject, making it grammatically incomplete.",
    "error": "\"Reassured that proper pelvic floor muscle training can reverse rectocele and help the individual return to baseline, resolving the problem.\" ",
    "correction": " \"The patient was reassured that proper pelvic floor muscle training can reverse rectocele and help the individual return to baseline, resolving the problem.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb \"is\" is missing, resulting in an incomplete sentence.",
    "error": "\"Follow up:  The follow-up appointment scheduled for 2 months post-procedure to assess progress and determine if omeprazole dosage can be reduced to once daily.\" ",
    "correction": " \"Follow up:  The follow-up appointment is scheduled for 2 months post-procedure to assess progress and determine if omeprazole dosage can be reduced to once daily.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"had\" is incorrectly used with \"results\"; \"were unremarkable with no worrisome findings\" is the correct grammatical construction.",
    "error": "\"- Endoscopy results were unremarkable and had no worrisome findings, and stomach biopsy was negative for bacterial infection.\" ",
    "correction": " \"- Endoscopy results were unremarkable with no worrisome findings, and stomach biopsy was negative for bacterial infection.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The compound subject \"colonoscopy and endoscopy\" is plural and requires the plural verb \"were.\"",
    "error": "\"Colonoscopy and endoscopy performed in 07/2025 was normal.\" ",
    "correction": " \"Colonoscopy and endoscopy performed in 07/2025 were normal.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The parallel structure is incorrect; \"for understanding ... and learn\" should be revised to use matching verb forms (\"to understand ... and learn\").",
    "error": "\"A referral to a GI psychologist can be made if necessary for understanding the brain-gut connection and learn behavioral techniques to manage or alleviate symptoms.\" ",
    "correction": " \"A referral to a GI psychologist can be made if necessary to understand the brain-gut connection and learn behavioral techniques to manage or alleviate symptoms.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb form \"follow up\" is correct, but the numeral \"3\" should be written as \"three\" for consistency with standard medical writing conventions.",
    "error": "\"Follow-up:  Follow up in 3 months or sooner if needed.\" ",
    "correction": " \"Follow-up:  Follow up in three months or sooner if needed.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"lead\" should agree in number with its singular subject (\"which\"), so it should be \"leads.\"",
    "error": "\"which then triggers the infection and inflammation or lead to sepsis.\" ",
    "correction": " \"which then triggers the infection and inflammation or leads to sepsis.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb \"are\" is missing, which is needed for correct subject-verb structure.",
    "error": "\"A biopsy may be required if any abnormalities found.\" ",
    "correction": " \"A biopsy may be required if any abnormalities are found.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The second verb in the series needs \"to\" for parallel structure (\"to create... and to facilitate\").",
    "error": "\"This outpatient procedure will involve extending the cut to create a wider margin for balloon removal without causing trauma and facilitate a thorough sweep of the duct.\" ",
    "correction": " \"This outpatient procedure will involve extending the cut to create a wider margin for balloon removal without causing trauma and to facilitate a thorough sweep of the duct.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing an explicit subject, making it a grammatical fragment.",
    "error": "\"Can start the prep earlier in the day to ensure adequate sleep.\" ",
    "correction": " \"She can start the prep earlier in the day to ensure adequate sleep.\" or \"The patient can start the prep earlier in the day to ensure adequate sleep.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The clause \"though has mild inflammation\" is missing a subject; adding \"she\" and a comma corrects the grammar.",
    "error": "\"- No need for a colonoscopy at this time though has mild inflammation.\" ",
    "correction": " \"- No need for a colonoscopy at this time, though she has mild inflammation.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " With a compound subject, the verb should be plural (\"were\"), and adding \"and\" completes the list.",
    "error": "\"Dulcolax, MiraLax, magnesium citrate was used for bowel prep previously and the same will be used this time.\" ",
    "correction": " \"Dulcolax, MiraLax, and magnesium citrate were used for bowel prep previously, and the same will be used this time.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The phrase is missing a subject and verb; adding \"there are\" makes the clause grammatically correct.",
    "error": "\"Since no alarming findings or trouble swallowing, endoscopy can be done at a convenient time based on the preference.\" ",
    "correction": " \"Since there are no alarming findings or trouble swallowing, endoscopy can be done at a convenient time based on the preference.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing a clear subject (\"her\") after \"Informed,\" and the plural subject \"side effects\" requires the plural verb \"are.\"",
    "error": "\"Informed it will take 4 to 6 weeks for the medication to take effect and minimal side effects in the initial few weeks is not uncommon.\" ",
    "correction": " \"Informed her that it will take 4 to 6 weeks for the medication to take effect and minimal side effects in the initial few weeks are not uncommon.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original sentence is grammatically incorrect with missing linking verbs and a comma splice; the correction clarifies the subject and verb structure.",
    "error": "\"Informed that Xifaxan identified as a treatment option for irritable bowel syndrome with diarrhea, it is an antibiotic, is expected to improve bloating and discomfort symptoms.\" ",
    "correction": " \"Informed that Xifaxan, an antibiotic identified as a treatment option for irritable bowel syndrome with diarrhea, is expected to improve bloating and discomfort symptoms.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The parallel verb form is incorrect; \"stop\" and \"start\" should match instead of mixing \"stop\" with \"starting.\"",
    "error": "\"it was advised to stop PPIs and starting famotidine (Pepcid) as an alternative.\" ",
    "correction": " \"it was advised to stop PPIs and start famotidine (Pepcid) as an alternative.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"reassures\" requires an object; adding \"the patient\" clarifies who is being reassured.",
    "error": "\"The provider reassures that this approach will reduce the risk of complications.\" ",
    "correction": " \"The provider reassures the patient that this approach will reduce the risk of complications.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The definite article \"the\" is needed before \"small intestine,\" and the verb should agree with the plural noun \"stools\" (\"are\" instead of \"is\").",
    "error": "\"Bacterial overgrowth in small intestine causes loose stools, which is hydrogen predominant.\" ",
    "correction": " \"Bacterial overgrowth in the small intestine causes loose stools, which are hydrogen predominant.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb should be in the third person singular form \"necessitates\" to agree with the singular subject \"This.\"",
    "error": "\"This necessitate a follow-up colonoscopy\" ",
    "correction": " \"This necessitates a follow-up colonoscopy\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"were\" is missing, leading to an incomplete clause.",
    "error": "\"- History of polyps, but no polyps or masses found on the last colonoscopy on 11/28/2022.\" ",
    "correction": " \"- History of polyps, but no polyps or masses were found on the last colonoscopy on 11/28/2022.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The object of the verb \"inform\" is missing, making the sentence incomplete.",
    "error": "\"Inform if any changes occur or if surgery is scheduled.\" ",
    "correction": " \"Inform us if any changes occur or if surgery is scheduled.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The article \"a\" is needed before \"normal digestive system,\" and the verb \"digest\" is required to make the sentence complete and meaningful.",
    "error": "\"people with normal digestive system are able to eggs within about 2 hours\" ",
    "correction": " \"people with a normal digestive system are able to digest eggs within about 2 hours\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"is\" is needed to complete the sentence grammatically.",
    "error": "\"CT colonography recommended as the best option for screening.\" ",
    "correction": " \"CT colonography is recommended as the best option for screening.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing a subject article (\"The\") and an object (\"her\") for the verb \"contact.\"",
    "error": "\"Radiology department will contact within a week to schedule the procedure.\" ",
    "correction": " \"The Radiology department will contact her within a week to schedule the procedure.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original phrase is a sentence fragment missing a main verb; adding \"was performed\" and restructuring creates a complete sentence.",
    "error": "\"Upper endoscopy in 2020 and frequent colonoscopies after that which were all normal.\" ",
    "correction": " \"Upper endoscopy was performed in 2020, and frequent colonoscopies after that were all normal.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb form \"consume\" is incorrect in this construction and should be changed to the gerund \"consuming\"; a comma is also needed after \"provided.\"",
    "error": "\"Dietary recommendations were provided including consume 2 kiwis daily,\" ",
    "correction": " \"Dietary recommendations were provided, including consuming 2 kiwis daily,\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence lacks a clear subject for \"responding,\" making it grammatically incomplete.",
    "error": "\"If vomiting increases, it suggests responding positively to the intervention.\" ",
    "correction": " \"If vomiting increases, it suggests she is responding positively to the intervention.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb phrase is missing the auxiliary \"was\" to form correct passive voice.",
    "error": "\"Explanation provided that an order will be placed for a stool study, with emphasis on avoiding reliance on prior timing.\" ",
    "correction": " \"Explanation was provided that an order will be placed for a stool study, with emphasis on avoiding reliance on prior timing.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb tense should match the surrounding past-tense narrative.",
    "error": "\"Prescribe a new regimen including two antibiotics, a proton pump inhibitor, and Pepto-Bismol.\" ",
    "correction": " \"Prescribed a new regimen including two antibiotics, a proton pump inhibitor, and Pepto-Bismol.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "\"Number\" is a singular noun here and requires the singular verb \"was.\"",
    "error": "\"but the number of those symptoms were relatively low.\" ",
    "correction": " \"but the number of those symptoms was relatively low.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The clause is missing a verb (\"are\") for \"covered,\" and \"higher-potency\" is correctly hyphenated as a compound modifier.",
    "error": "\"Recommended trial of esomeprazole or rabeprazole, which are higher potency PPIs, and covered by insurance.\" ",
    "correction": " \"Recommended trial of esomeprazole or rabeprazole, which are higher-potency PPIs and are covered by insurance.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb phrase is incomplete; adding \"that she have\" corrects the grammar and clarifies the sentence.",
    "error": "\"- The screening age for colorectal cancer is 45, but it was suggested the colonoscopy as part of her regular screening.\" ",
    "correction": " \"- The screening age for colorectal cancer is 45, but it was suggested that she have a colonoscopy as part of her regular screening.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " \"Lay\" is the wrong verb form here; \"lie down\" is correct for reclining, and the placement of \"not\" is more grammatically standard before the infinitive.",
    "error": "\"Advised to not eat dinner close to bedtime and to not lay down immediately after consuming dinner.\" ",
    "correction": " \"Advised not to eat dinner close to bedtime and not to lie down immediately after consuming dinner.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The preposition \"on\" is incorrect here; the verb \"emphasized\" should be followed directly by the object.",
    "error": "\"Emphasized on the importance of fiber in the diet.\" ",
    "correction": " \"Emphasized the importance of fiber in the diet.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"informed\" requires a clause beginning with \"that\" to be grammatically complete in this context.",
    "error": "\"Experiences diarrhea during flare-ups. Informed smoothies and milkshakes (soft foods) trigger flare-ups.\" ",
    "correction": " \"Experiences diarrhea during flare-ups. Informed that smoothies and milkshakes (soft foods) trigger flare-ups.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb \"is\" is missing, causing an incomplete sentence.",
    "error": "\"Any potential issue in this region considered unrelated to current symptoms\" ",
    "correction": " \"Any potential issue in this region is considered unrelated to current symptoms\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb should be in the base form \"visit\" to parallel \"contact.\"",
    "error": "\"Advised to contact the office via MyChart or visited directly if additional samples are needed.\" ",
    "correction": " \"Advised to contact the office via MyChart or visit directly if additional samples are needed.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing a subject and uses the wrong preposition; \"notify\" needs an object (e.g., \"us\") and the correct phrase is \"notify us of any changes.\"",
    "error": "\"Should notify for any changes in symptoms.\" ",
    "correction": " \"She should notify us of any changes in symptoms.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb phrase \"No undergone\" is ungrammatical and should be \"Has not undergone.\"",
    "error": "\"- No undergone endoscopy previously.\" ",
    "correction": " \"- Has not undergone endoscopy previously.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing a verb (\"was\") after \"discussion\" and uses a comma splice, which is corrected with proper verb use and punctuation.",
    "error": "\"Detailed discussion held regarding reconnecting with the nutritionist, a referral can be placed, and telemedicine visits are available if appropriate.\" ",
    "correction": " \"A detailed discussion was held regarding reconnecting with the nutritionist; a referral can be placed, and telemedicine visits are available if appropriate.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing an explicit subject, resulting in a grammatical error.",
    "error": "\"- If weight gain continues, expected to trend toward the purple growth percentile within approximately six months, which is the target goal.\" ",
    "correction": " \"- If weight gain continues, she is expected to trend toward the purple growth percentile within approximately six months, which is the target goal.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The final sentence is missing an explicit subject, leading to a grammatical error.",
    "error": "\"- Linear growth had been relatively stagnant for approximately 7–8 months; however, there has been a recent significant increase in height. This improvement is likely related to improved nutritional intake. If current nutrition and growth patterns are maintained, expected to return to the green growth percentile within approximately nine months.\" ",
    "correction": " \"- Linear growth had been relatively stagnant for approximately 7–8 months; however, there has been a recent significant increase in height. This improvement is likely related to improved nutritional intake. If current nutrition and growth patterns are maintained, she is expected to return to the green growth percentile within approximately nine months.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing an article and a verb; adding \"The\" and \"is\" completes the sentence.",
    "error": "\"Procedure to be performed under general anesthesia and will take approximately 5 minutes.\" ",
    "correction": " \"The procedure is to be performed under general anesthesia and will take approximately 5 minutes.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing the article \"a\" before \"recommendation\" and needs a comma after \"Previously\" as an introductory adverb.",
    "error": "\"Previously recommendation was made to repeat the endoscopy in 2 months.\" ",
    "correction": " \"Previously, a recommendation was made to repeat the endoscopy in 2 months.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " Subject-verb agreement error; the verb form does not match the subject.",
    "error": "\"Living wills documents medical treatment preferences regarding things such as life support.\" ",
    "correction": " \"Living wills document medical treatment preferences regarding things such as life support.\" or \"A living will documents medical treatment preferences regarding things such as life support.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original sentence has an incorrect implied subject (\"screenings or vaccines\" cannot \"would like\") and is missing a clear subject for \"advised.\"",
    "error": "\"If any of the declined screenings or vaccines would like to be pursued, advised to contact the office.\" ",
    "correction": " \"If any of the declined screenings or vaccines are to be pursued, the patient is advised to contact the office.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing a clear subject, making it grammatically incomplete.",
    "error": "\"Also informed that shingles vaccine is covered by Hxxx only if it is done in the pharmacy.\" ",
    "correction": " \"She was also informed that the shingles vaccine is covered by Hxxx only if it is done in the pharmacy.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The pronoun “it” is incorrect here; the sentence needs a human subject (e.g., “he” or “the patient”).",
    "error": "\"It was reassured that Tylenol and OxyContin do not affect kidney function.\" ",
    "correction": " \"He was reassured that Tylenol and OxyContin do not affect kidney function.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The word \"function\" alone cannot be \"performed\"; specifying \"testing\" corrects the misuse of the verb.",
    "error": "\"His kidney function performed under Dr. Hxxx remains suboptimal,\" ",
    "correction": " \"His kidney function testing performed under Dr. Hxxx remains suboptimal,\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The auxiliary verb \"has\" is missing, making the sentence a grammatical fragment.",
    "error": "\"- Not been using Pepto-Bismol recently.\" ",
    "correction": " \"- Has not been using Pepto-Bismol recently.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The second clause is missing a verb and an article, causing incorrect tense and sentence structure.",
    "error": "\"Testosterone is no longer being taken and removed from medication list with last refill in 01/2025.\" ",
    "correction": " \"Testosterone is no longer being taken and was removed from the medication list, with the last refill in 01/2025.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"taken\" is missing, making the original sentence grammatically incomplete.",
    "error": "\"Gabapentin 300 mg is intermittently at night, which aids with sleep.\" ",
    "correction": " \"Gabapentin 300 mg is taken intermittently at night, which aids with sleep.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"was\" is needed to form a complete sentence with the subject \"Understanding.\"",
    "error": "\"Understanding expressed regarding the hesitation due to the prior negative outcomes following vaccinations, whether connected or not.\" ",
    "correction": " \"Understanding was expressed regarding the hesitation due to the prior negative outcomes following vaccinations, whether connected or not.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"wish\" requires an infinitive phrase (\"to have\") in this context.",
    "error": "\"Does not wish STD testing today.\" ",
    "correction": " \"Does not wish to have STD testing today.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original is a sentence fragment lacking a subject, and it needs commas to set off \"even walking\" properly.",
    "error": "\"Recommended 150 minutes of exercise per week and noted that any exercise even like walking is better than none.\" ",
    "correction": " \"It was recommended that she get 150 minutes of exercise per week, and it was noted that any exercise, even walking, is better than none.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original lacks a clear subject and uses \"were\" and \"the mind\" incorrectly; adding \"she\" and \"her mind\" and changing \"recommended to reach\" to \"recommended reaching\" corrects the grammar.",
    "error": "\"Recommended to reach out to the clinic or the pharmacy if were to change the mind regarding the COVID-19 vaccination.\" ",
    "correction": " \"Recommended reaching out to the clinic or the pharmacy if she were to change her mind regarding the COVID-19 vaccination.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb should agree in number with the plural noun \"exams,\" so \"are\" is required.",
    "error": "\"Up to date on eye exams, which is every other year.\" ",
    "correction": " \"Up to date on eye exams, which are every other year.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"is\" is missing, making the sentence grammatically incomplete.",
    "error": "\"- If heavy bleeding persists post-embolization, more frequent monitoring of hemoglobin and hematocrit levels recommended.\" ",
    "correction": " \"- If heavy bleeding persists post-embolization, more frequent monitoring of hemoglobin and hematocrit levels is recommended.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb should agree in number with the plural noun \"exams,\" so \"are\" is required instead of \"is.\"",
    "error": "\"- Up to date on eye exams, which is done every other year.\" ",
    "correction": " \"- Up to date on eye exams, which are done every other year.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The noun and verb should both be plural (\"records are\"), and \"doses\" is the correct count noun rather than \"series\" in this context.",
    "error": "\"Suggested to find a record of polio vaccine as the record is available only for 3 out of 4 series of polio vaccination.\" ",
    "correction": " \"Suggested to find records of the polio vaccine, as records are available only for 3 out of 4 doses of the polio vaccine.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The second clause is missing a subject and conjunction, making the sentence grammatically incomplete.",
    "error": "\"- A blood count and iron test will be conducted today, will be contacted with the results.\" ",
    "correction": " \"- A blood count and iron test will be conducted today, and she will be contacted with the results.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb should agree with the plural noun \"exams,\" so \"are\" is required instead of \"is.\"",
    "error": "\"- Up to date on her eye exams, which is every other year.\" ",
    "correction": " \"- Up to date on her eye exams, which are every other year.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The second clause is missing a subject and verb, making the sentence grammatically incorrect.",
    "error": "\"- A blood count and iron test will be conducted today and notified of the results.\" ",
    "correction": " \"- A blood count and iron test will be conducted today, and she will be notified of the results.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing a subject and an article before \"influenza vaccine.\"",
    "error": "\"- Will receive influenza vaccine today.\" ",
    "correction": " \"- She will receive the influenza vaccine today.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original sentence lacks a clear subject for \"recommended,\" creating a grammatical error.",
    "error": "\"Recommended to reach out to the clinic or the pharmacy if the decision regarding COVID-19 vaccination changes.\" ",
    "correction": " \"She was recommended to reach out to the clinic or the pharmacy if her decision regarding COVID-19 vaccination changes.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original construction omits a clear subject for \"suggested,\" making the sentence grammatically incomplete.",
    "error": "\"Suggested to find a record of polio vaccine as the polio vaccine is a 4-dose series but the record is only available for 3 of the 4.\" ",
    "correction": " \"It was suggested that she find a record of the polio vaccine, as the polio vaccine is a 4-dose series but the record is only available for 3 of the 4.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The phrase \"Advised informing\" is ungrammatical; changing it to \"Advised to inform\" corrects the verb form.",
    "error": "\"Advised informing Dermatology that this condition has occurred previously and stated that no contraindication is expected.\" ",
    "correction": " \"Advised to inform Dermatology that this condition has occurred previously and stated that no contraindication is expected.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is a fragment missing a subject and verb; adding \"She is\" corrects the grammar.",
    "error": "\"Currently on Keflex and has 1.5 days remaining in the course.\" ",
    "correction": " \"She is currently on Keflex and has 1.5 days remaining in the course.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is a fragment missing a subject and auxiliary verb; adding \"She has\" corrects the grammar.",
    "error": "\"Not experienced any adverse reactions to the medication.\" ",
    "correction": " \"She has not experienced any adverse reactions to the medication.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is a fragment missing a subject; adding \"She\" corrects the grammar.",
    "error": "\"Should inform the clinic immediately if the leg starts hurting again.\" ",
    "correction": " \"She should inform the clinic immediately if the leg starts hurting again.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb \"is\" is missing, making the phrase grammatically incorrect.",
    "error": "\"Tetanus vaccine in due, with the last dose administered in 2009.\" ",
    "correction": " \"Tetanus vaccine is due, with the last dose administered in 2009.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The second sentence is a fragment and needs a subject (\"He was\") to form a complete sentence.",
    "error": "\"A comprehensive set of labs will be ordered today as part of his annual physical, including cholesterol and diabetes screening secondary to his family history. Reassured that the honey consumed in the morning with tea would not significantly affect the blood work.\" ",
    "correction": " \"A comprehensive set of labs will be ordered today as part of his annual physical, including cholesterol and diabetes screening secondary to his family history. He was reassured that the honey consumed in the morning with tea would not significantly affect the blood work.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is a fragment missing a subject (\"He\").",
    "error": "\"Previously diagnosed with bipolar disorder type 2 and was on lithium and divalproex for a couple of months.\" ",
    "correction": " \"He was previously diagnosed with bipolar disorder type 2 and was on lithium and divalproex for a couple of months.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The plural subject \"stones\" requires the plural possessive pronoun \"their\" instead of the singular \"its.\"",
    "error": "\"It was discussed that stones up to 5 mm can pass on its own, but it is an extremely painful process.\" ",
    "correction": " \"It was discussed that stones up to 5 mm can pass on their own, but it is an extremely painful process.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The subject \"she\" is missing, and \"at\" is the correct preposition when referring to a hospital.",
    "error": "\"- If there is no improvement, should consult with the specialist in Lxxx as scheduled.\" ",
    "correction": " \"- If there is no improvement, she should consult with the specialist at Lxxx as scheduled.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The phrase \"since receiving one\" lacks a clear subject; adding \"he\" clarifies who received the vaccine.",
    "error": "\"Hepatitis B vaccine is also recommended as it has been a considerable while since receiving one.\" ",
    "correction": " \"Hepatitis B vaccine is also recommended as it has been a considerable while since he received one.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " There is subject-verb disagreement (\"PSA\" with \"have\") and inconsistent singular/plural usage; changing to \"PSA levels\" with plural verbs corrects this.",
    "error": "\"PSA has been elevated in the past but have normalized and is monitored annually by the urologist.\" ",
    "correction": " \"PSA levels have been elevated in the past but have normalized and are monitored annually by the urologist.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The list of foods should use plural nouns and include a comma before \"and,\" and the compound plural subject requires the plural verb \"were.\"",
    "error": "\"Avoiding foods like white bread, pasta, tortilla, hamburger and consuming red meat and potatoes in moderation was recommended.\" ",
    "correction": " \"Avoiding foods like white bread, pasta, tortillas, and hamburgers and consuming red meat and potatoes in moderation were recommended.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing a clear subject and object (\"her\" and \"us\") and \"medications\" should be singular (\"medication\") to match the context.",
    "error": "\"Advised to contact if the propranolol medications are not enough.\" ",
    "correction": " \"Advised her to contact us if the propranolol medication is not enough.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The clause after \"however\" is missing a subject and should be joined properly to avoid a sentence fragment.",
    "error": "\"- Patient has lost 15 pounds since having her top teeth removed at the end of 08/2025 and is experiencing difficulty eating with temporary dentures, however, is getting accustomed to them.\" ",
    "correction": " \"- Patient has lost 15 pounds since having her top teeth removed at the end of 08/2025 and is experiencing difficulty eating with temporary dentures; however, she is getting accustomed to them.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " \"Socks\" is a plural subject and should take the plural verb \"are\"; the semicolon also improves the connection between independent clauses.",
    "error": "\"- Reports a rash on the front of her leg, likely due to tight socks. Discussed that ibuprofen could also contribute to the rash, however, new socks is the most likely reason as it is limited to the area covered by her socks.\" ",
    "correction": " \"- Reports a rash on the front of her leg, likely due to tight socks. Discussed that ibuprofen could also contribute to the rash; however, new socks are the most likely reason as it is limited to the area covered by her socks.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The comma between the subject (\"notes from Dr. Pxxx\") and the verb (\"indicate\") is grammatically incorrect.",
    "error": "\"Oncology notes from Dr. Pxxx, indicate that the proposed treatment with Orgovyx is palliative rather than curative, aimed at symptom management.\" ",
    "correction": " \"Oncology notes from Dr. Pxxx indicate that the proposed treatment with Orgovyx is palliative rather than curative, aimed at symptom management.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb \"are\" is missing, and the phrase \"until next 05/2026\" is grammatically incorrect without a following noun.",
    "error": "\"Refills of stool softeners available until next 05/2026.\" ",
    "correction": " \"Refills of stool softeners are available until 05/2026.\" OR \"…until his next visit in 05/2026.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The article \"an\" is needed before \"epidural injection,\" \"her\" is needed before \"rheumatologist,\" and the subject of \"was advised\" must be clarified.",
    "error": "\"- Epidural injection was administered by rheumatologist and was advised to wait a week for it to take full effect.\" ",
    "correction": " \"- An epidural injection was administered by her rheumatologist, and she was advised to wait a week for it to take full effect.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The clause \"Last DEXA scan in 06/2025 and is not due...\" lacks a verb for the first part and a clear subject for \"is not due,\" making it a grammatical fragment.",
    "error": "\"- Received influenza vaccine and completed a Cologuard test in 05/2025. Pap smear and mammogram are current. Last DEXA scan in 06/2025 and is not due for another one at this time.\" ",
    "correction": " \"- Received influenza vaccine and completed a Cologuard test in 05/2025. Pap smear and mammogram are current. Last DEXA scan was in 06/2025, and she is not due for another one at this time.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb \"contact\" requires an object (e.g., \"her,\" \"the patient\") to be grammatically complete.",
    "error": "\"Radiology will contact to arrange the appointment, but the scheduling can be initiated directly if needed.\" ",
    "correction": " \"Radiology will contact her to arrange the appointment, but the scheduling can be initiated directly if needed.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The phrase \"since popped\" is grammatically incomplete and needs a subject (\"it\") and verb (\"was\") to be correct.",
    "error": "\"The bump had increased since popped but has remained the same size for the past 2-3 days.\" ",
    "correction": " \"The bump had increased in size since it was popped but has remained the same size for the past 2–3 days.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The second clause is missing a subject (\"she\"), causing a grammatical error.",
    "error": "\"The remaining Zoloft pills should be taken every other day, and after completion, should start the Lexapro.\" ",
    "correction": " \"The remaining Zoloft pills should be taken every other day, and after completion, she should start the Lexapro.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "This is a sentence fragment missing an explicit subject and main verb.",
    "error": "\"Transitioning from Zoloft to Lexapro, starting with a low dose of 5 mg, which can be increased to 10 mg if necessary.\" ",
    "correction": " \"We will transition from Zoloft to Lexapro, starting with a low dose of 5 mg, which can be increased to 10 mg if necessary.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb form \"Recommending\" makes this a sentence fragment; it should be changed to \"Recommend\" or \"Recommended\" for correct grammar.",
    "error": "\"Recommending waiting 24 hours before return to school.\" ",
    "correction": " \"Recommend waiting 24 hours before return to school.\" or \"Recommended waiting 24 hours before return to school.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing a subject (\"she\") in the second clause.",
    "error": "\"If the numbness becomes bothersome, will inform us for further evaluation.\" ",
    "correction": " \"If the numbness becomes bothersome, she will inform us for further evaluation.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verbs should be parallel in form; \"contacting\" should be paired with \"inquiring,\" not \"inquire.\"",
    "error": "\"Recommend contacting the Health Savings Plan and inquire what treatment for sleep apnea is approved.\" ",
    "correction": " \"Recommend contacting the Health Savings Plan and inquiring what treatment for sleep apnea is approved.\" or \"Recommend contacting the Health Savings Plan and inquiring about what treatment for sleep apnea is approved.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The clause after \"but\" lacks an explicit subject; adding \"she\" clarifies who feels the medication is not fully effective.",
    "error": "\"No side effects were reported but feels the medication is not fully effective.\" ",
    "correction": " \"No side effects were reported, but she feels the medication is not fully effective.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " \"Help in reach\" is ungrammatical; it should be \"help him reach,\" and \"to increase\" is the correct verb form.",
    "error": "\"Discussed that current interventions may help in reach a point where it becomes more comfortable increasing walking activity\" ",
    "correction": " \"Discussed that current interventions may help him reach a point where it becomes more comfortable to increase walking activity\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"were\" is needed to complete the sentence, and \"the\" before \"visit summary\" clarifies the noun phrase, while \"the\" before \"MyChart\" is unnecessary.",
    "error": "\"Educational materials placed in visit summary in the MyChart.\" ",
    "correction": " \"Educational materials were placed in the visit summary in MyChart.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The subject \"average\" is singular and needs a singular verb (\"is\"), and the sentence is missing the article \"An\" at the beginning.",
    "error": "\"Average of 4-6 ounce bottles are considered ideal as he does not require additional breast milk.\" ",
    "correction": " \"An average of 4–6-ounce bottles is considered ideal, as he does not require additional breast milk.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"discussed\" should not be followed by \"about\"; \"discussed an herbal supplement\" is the correct form.",
    "error": "\"Discussed about an herbal supplement, Torgangun, from Indonesia for increasing milk supply for breastfeeding mothers.\" ",
    "correction": " \"Discussed an herbal supplement, Torgangun, from Indonesia for increasing milk supply for breastfeeding mothers.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original is a sentence fragment lacking a clear subject, and adding \"It was explained that\" corrects this.",
    "error": "\"Explained that the pump does not require cleaning and rinsing with every use, and she could store it in the fridge.\" ",
    "correction": " \"It was explained that the pump does not require cleaning and rinsing with every use, and that she could store it in the fridge.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original sentence has faulty parallelism in the series of actions; this correction aligns the verb forms.",
    "error": "\"The patient will follow up in one month for review of lab results, discuss Pap smear, and further evaluation of amenorrhea.\" ",
    "correction": " \"The patient will follow up in one month to review lab results, discuss Pap smear, and further evaluate amenorrhea.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original is a sentence fragment missing an article and a verb; this correction makes it a complete sentence.",
    "error": "\"Working mechanism of vaccines explained.\" ",
    "correction": " \"The working mechanism of vaccines was explained.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing the verb \"is\" for correct subject-verb structure.",
    "error": "\"Use of over-the-counter medications such as Tylenol or ibuprofen recommended as needed.\" ",
    "correction": " \"Use of over-the-counter medications such as Tylenol or ibuprofen is recommended as needed.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The phrase needs articles and correct passive verb form (\"is not received\").",
    "error": "\"advised to contact clinic if call not receive within 2 to 3 weeks\" ",
    "correction": " \"advised to contact the clinic if a call is not received within 2 to 3 weeks\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The second clause lacks a subject and verb, making it grammatically incomplete.",
    "error": "\"Flexeril has been discontinued and on lorazepam as needed.\" ",
    "correction": " \"Flexeril has been discontinued, and she is on lorazepam as needed.\" or \"Flexeril has been discontinued, and the patient is on lorazepam as needed.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing a clear subject and verb, and \"STD\" should be pluralized to match \"testing\" in this general context.",
    "error": "\"Recommended testing for STD but declined.\" ",
    "correction": " \"Recommended testing for STDs, but she declined.\" or \"Testing for STDs was recommended, but she declined.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence structure is incorrect; the main verb must follow the subject, and \"is\" is needed before \"her usual pattern.\"",
    "error": "\"A comprehensive eye examination, including a dilated eye exam, since spotty vision during migraines in usual pattern, is recommended to rule out any ocular disease processes.\" ",
    "correction": " \"A comprehensive eye examination, including a dilated eye exam, is recommended, since spotty vision during migraines is her usual pattern, to rule out any ocular disease processes.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " \"Running nose\" should be \"runny nose,\" and the sentence requires articles, pronouns, and linking verbs to be grammatically correct.",
    "error": "\"Explained that when running nose and headache occur, typically with the pain in one eye, eye that will hurt that a cluster headache but that would not last these many days.\" ",
    "correction": " \"Explained that when a runny nose and headache occur, typically with pain in one eye—the eye that will hurt—that is a cluster headache, but it would not last this many days.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The subject \"she\" is missing in the second clause, causing a subject-verb agreement issue.",
    "error": "\"Most intense symptoms subsided, but continues to experience vertigo, lightheadedness, double vision, poor balance, and impaired depth perception.\" ",
    "correction": " \"Most intense symptoms subsided, but she continues to experience vertigo, lightheadedness, double vision, poor balance, and impaired depth perception.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb should be in the past tense to match the narrative, and an object (\"her\") and article (\"a\") are needed.",
    "error": "\"Reassure that complex migraine is not present.\" ",
    "correction": " \"Reassured her that a complex migraine is not present.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " As written, the sentence implies estrogen levels will be treated; the subject (\"she\") must be specified to be grammatically correct.",
    "error": "\"Post-surgery, estrogen levels will be monitored and will be treated symptomatically for any menopausal symptoms that may arise with magnesium supplements.\" ",
    "correction": " \"Post-surgery, estrogen levels will be monitored, and she will be treated symptomatically for any menopausal symptoms that may arise with magnesium supplements.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The plural subject \"vaccines\" requires the plural verb \"are,\" not \"is.\"",
    "error": "\"Recommended influenza and COVID-19 vaccines, which is declined currently.\" ",
    "correction": " \"Recommended influenza and COVID-19 vaccines, which are declined currently.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original implies the medications did the reporting; a subject is needed to indicate who reported the relief.",
    "error": "\"Tessalon Perles and prednisone were previously prescribed and reported some relief from the coughing medicine.\" ",
    "correction": " \"Tessalon Perles and prednisone were previously prescribed, and she reported some relief from the coughing medicine.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is a fragment lacking a subject and verb.",
    "error": "\"Therefore, protected against both conditions.\" ",
    "correction": " \"Therefore, she is protected against both conditions.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The phrase \"It was reminded\" is incorrect passive construction; the subject (\"She\") must be specified.",
    "error": "\"It was reminded that refills are still available from a previous prescription given by Dr. Gxxx on 06/29/2025.\" ",
    "correction": " \"She was reminded that refills are still available from a previous prescription given by Dr. Gxxx on 06/29/2025.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"discussed\" needs a complement (\"that diuretics...\") to make the sentence grammatically complete.",
    "error": "\"Discussed diuretics such as hydrochlorothiazide or spironolactone may help reduce widened pulse pressure,\" ",
    "correction": " \"Discussed that diuretics such as hydrochlorothiazide or spironolactone may help reduce widened pulse pressure,\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing the subject \"she,\" resulting in a grammatical error.",
    "error": "\"If there is no improvement after 2 to 4 weeks, should inform the office so that a stronger steroid cream can be considered.\" ",
    "correction": " \"If there is no improvement after 2 to 4 weeks, she should inform the office so that a stronger steroid cream can be considered.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing the subject \"she,\" resulting in a grammatical error.",
    "error": "\"If there is no improvement, should schedule an appointment with the ophthalmologist.\" ",
    "correction": " \"If there is no improvement, she should schedule an appointment with the ophthalmologist.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The plural subject \"medications\" requires the plural verb \"include.\"",
    "error": "\"- Current medications includes atorvastatin, Myrbetriq (overactive bladder), and pantoprazole twice daily,\" ",
    "correction": " \"- Current medications include atorvastatin, Myrbetriq (overactive bladder), and pantoprazole twice daily,\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The bare verb \"Receive\" is incorrect for describing a planned future action; \"Will receive\" matches the intended future tense.",
    "error": "\"- Receive the Prevnar 20 vaccine today.\" ",
    "correction": " \"- Will receive the Prevnar 20 vaccine today.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original is a sentence fragment missing a subject and verb at the beginning.",
    "error": "\"Provided with a contact number to schedule the ultrasound at the hospital or clinic and will be notified of the results via MyChart or a direct message.\" ",
    "correction": " \"He was provided with a contact number to schedule the ultrasound at the hospital or clinic and will be notified of the results via MyChart or a direct message.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The subject \"it\" and article \"the\" before \"25 mg dose\" are needed for grammatical completeness and clarity.",
    "error": "\"Advised to monitor for any side effects and report them via MyChart message, at which point can be switched to 25 mg dose.\" ",
    "correction": " \"Advised to monitor for any side effects and report them via MyChart message, at which point it can be switched to the 25 mg dose.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence lacks a verb and subject, making it a fragment; adding \"she is\" completes the sentence.",
    "error": "\"- Currently, on amlodipine, B12 daily, magnesium, and sertraline (Zoloft) for mood management.\" ",
    "correction": " \"- Currently, she is on amlodipine, B12 daily, magnesium, and sertraline (Zoloft) for mood management.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing a subject, making it a fragment.",
    "error": "\"Advised to be taken to the lab, Voya Financial, right now.\" ",
    "correction": " \"She was advised to be taken to the lab, Voya Financial, right now.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The plural subject \"Labs\" requires the plural verb form \"show.\"",
    "error": "\"Labs shows slightly elevated blood sugar, but overall improvement.\" ",
    "correction": " \"Labs show slightly elevated blood sugar, but overall improvement.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing a verb (\"is\") after \"anything,\" making it grammatically incomplete.",
    "error": "\"Update if anything needed prior to the next visit.\" ",
    "correction": " \"Update if anything is needed prior to the next visit.\" or \"Provide an update if anything is needed prior to the next visit.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " A comma is needed after the introductory adverb \"Additionally\" for correct grammar.",
    "error": "\"Additionally decreased food consumption decreases insulin levels.\" ",
    "correction": " \"Additionally, decreased food consumption decreases insulin levels.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing a subject and needs one to be grammatically complete.",
    "error": "\"After this period, can discontinue the supplements.\" ",
    "correction": " \"After this period, she can discontinue the supplements.\" or \"After this period, the supplements can be discontinued.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing a clear subject and needs \"They\" and \"she\" for proper grammar and subject-verb agreement.",
    "error": "\"- Do not cause discomfort, but experiences some swelling and mild discomfort in the ankle.\" ",
    "correction": " \"- They do not cause discomfort, but she experiences some swelling and mild discomfort in the ankle.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb forms are not parallel; adding \"that he do\" makes the sentence grammatically correct and maintains consistent structure.",
    "error": "\"Recommended doing a desk job and not be around patients.\" ",
    "correction": " \"Recommended that he do a desk job and not be around patients.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The second clause is missing a subject, so adding \"he\" (or \"the patient\") fixes the grammatical error and clarifies who will make contact.",
    "error": "\"If any fluctuations are noted in the blood pressure readings, will contact immediately.\" ",
    "correction": " \"If any fluctuations are noted in the blood pressure readings, he will contact us immediately.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing a clear subject for \"not deemed,\" so adding \"it was\" corrects the grammar and clarifies the meaning.",
    "error": "\"No side effects from losartan 50 mg daily were reported and not deemed necessary to adjust dosage any further at this point.\" ",
    "correction": " \"No side effects from losartan 50 mg daily were reported, and it was not deemed necessary to adjust the dosage any further at this point.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The object \"her\" is needed after \"contact\" to complete the verb phrase.",
    "error": "\"and they will contact via MyChart\" ",
    "correction": " \"and they will contact her via MyChart\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"consult\" lacks a subject; adding \"can\" makes it parallel with \"can perform\" and grammatically correct.",
    "error": "\"- The ER can perform diagnostic testing, including blood work such as troponin and a CT scan of the head, which is more appropriate at this stage given the recent onset of dizziness and the prior MRI being completed two weeks before symptom onset and consult a neurologist if necessary.\" ",
    "correction": " \"- The ER can perform diagnostic testing, including blood work such as troponin and a CT scan of the head, which is more appropriate at this stage given the recent onset of dizziness and the prior MRI being completed two weeks before symptom onset, and can consult a neurologist if necessary.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The auxiliary verb \"be\" is required to form the correct future passive construction.",
    "error": "\"- Vaccines will reviewed at the CHAMPVA visit.\" ",
    "correction": " \"- Vaccines will be reviewed at the CHAMPVA visit.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing a subject before \"will notify,\" making it grammatically incomplete.",
    "error": "\"If there are any issues, will notify the clinic.\" ",
    "correction": " \"If there are any issues, she will notify the clinic.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The definite article \"the\" is needed, and the plural subject (\"tightness and soreness\") requires the plural verb \"are.\"",
    "error": "\"- Persistent tightness and soreness in neck and shoulders is reported.\" ",
    "correction": " \"- Persistent tightness and soreness in the neck and shoulders are reported.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is a fragment and needs a verb (\"is\") and an article (\"a\") to be grammatically complete.",
    "error": "\"Dinner taken earlier followed by 12-hour fasting gap.\" ",
    "correction": " \"Dinner is taken earlier, followed by a 12-hour fasting gap.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing an explicit subject and verb, making it a sentence fragment.",
    "error": "\"Reassured that there would be no interaction between the antibiotic and current medications, naproxen and Flexeril.\" ",
    "correction": " \"He was reassured that there would be no interaction between the antibiotic and current medications, naproxen and Flexeril.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing a subject, making it a sentence fragment.",
    "error": "\"Should contact the office if there is no improvement in redness or warmth after 7 days.\" ",
    "correction": " \"He should contact the office if there is no improvement in redness or warmth after 7 days.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing a subject, making it a sentence fragment.",
    "error": "\"Should seek immediate medical attention if the condition worsens significantly.\" ",
    "correction": " \"He should seek immediate medical attention if the condition worsens significantly.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original sentence has an awkward verb tense shift and is missing the definite article \"the\" before \"chemotherapy regimen.\"",
    "error": "\"The headaches have been daily and leading to nausea and vomiting since chemotherapy regimen was resumed.\" ",
    "correction": " \"The headaches have been daily and have been leading to nausea and vomiting since the chemotherapy regimen was resumed.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing the subject \"it,\" resulting in incorrect grammar.",
    "error": "\"If an increase in the afternoon dose is needed, should be communicated via MyChart.\" ",
    "correction": " \"If an increase in the afternoon dose is needed, it should be communicated via MyChart.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The clause \"would not need another one\" is missing a subject (\"she\"), and \"Pap\" requires the definite article \"the\" for grammatical completeness.",
    "error": "\"- Advised to schedule a Pap smear before 05/2026 explaining that if Pap was normal, would not need another one for three to five years.\" ",
    "correction": " \"- Advised to schedule a Pap smear before 05/2026, explaining that if the Pap was normal, she would not need another one for three to five years.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The second clause is missing a subject and conjunction, making the sentence grammatically incomplete.",
    "error": "\"- Explained that any lump is termed a mass and should not be alarmed by the use of the word ‘mass’ in the chart.\" ",
    "correction": " \"- Explained that any lump is termed a mass and that she should not be alarmed by the use of the word 'mass' in the chart.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb \"reassured\" is missing an object, and \"menstrual cycle\" needs a possessive determiner (\"her\") for clarity and correctness.",
    "error": "\"- Reassured that the mass is unlikely to be related to menstrual cycle.\" ",
    "correction": " \"- Reassured her that the mass is unlikely to be related to her menstrual cycle.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing the auxiliary verb \"has,\" making the verb phrase incomplete.",
    "error": "\"- Not needed to use the muscle relaxant recently.\" ",
    "correction": " \"- Has not needed to use the muscle relaxant recently.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The original sentence is missing a subject after \"however\" and uses a comma where a semicolon is needed to join two independent clauses.",
    "error": "\"A1c level is improved from 3 months ago, however, still remains elevated at 7.9, indicating a need for additional medication.\" ",
    "correction": " \"A1c level has improved from 3 months ago; however, it still remains elevated at 7.9, indicating a need for additional medication.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing the subject \"his\" before \"appetite\" and \"he\" before \"continued,\" making it grammatically incomplete.",
    "error": "\"Although appetite has been poor, nevertheless continued to gain weight.\" ",
    "correction": " \"Although his appetite has been poor, he has nevertheless continued to gain weight.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original sentence is grammatically incorrect due to a comma splice and missing relative pronoun; it needs restructuring for proper subject-verb relationship.",
    "error": "\"Labs were obtained in 12/2024, including cholesterol, A1c and PSA were within normal limits.\" ",
    "correction": " \"Labs were obtained in 12/2024, including cholesterol, A1c, and PSA, which were within normal limits.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original sentence lacks a clear subject for \"informed,\" resulting in incorrect grammar.",
    "error": "\"Keflex was reviewed as a reasonable initial choice but informed that foot infections may involve organisms not adequately covered by this agent.\" ",
    "correction": " \"Keflex was reviewed as a reasonable initial choice, and the patient was informed that foot infections may involve organisms not adequately covered by this agent.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " This is a sentence fragment missing a clear subject and necessary articles (\"the specialist,\" \"the clinic\") and needs to be completed for correct grammar.",
    "error": "\"To contact specialist and notify clinic if difficulty scheduling.\" ",
    "correction": " \"The patient is to contact the specialist and notify the clinic if there is difficulty scheduling.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "This is a sentence fragment lacking an explicit subject and finite verb.",
    "error": "\"- Using an antihistamine twice daily, which has provided some relief.\" ",
    "correction": " \"- He is using an antihistamine twice daily, which has provided some relief.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " This is a sentence fragment lacking a subject, and \"to night\" is not standard usage in this context; \"to nighttime\" is grammatically correct.",
    "error": "\"Advised to take the medication initially in the morning and if it causes tiredness, then switch the medication to night.\" ",
    "correction": " \"He was advised to take the medication initially in the morning and, if it causes tiredness, then switch the medication to nighttime.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " This is a sentence fragment missing an explicit subject.",
    "error": "\"Also has Valium, prescribed by Dr. Cxxx, for use as needed during panic attacks.\" ",
    "correction": " \"He also has Valium, prescribed by Dr. Cxxx, for use as needed during panic attacks.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing the article \"the\" before \"patient\" and an explicit subject for \"should inform.\"",
    "error": "\"If patient wishes to discontinue Lexapro, should inform the office so that a weaning plan can be implemented.\" ",
    "correction": " \"If the patient wishes to discontinue Lexapro, he should inform the office so that a weaning plan can be implemented.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " \"It was informed\" is incorrect usage in this context; \"It was explained\" is the correct verb, and a serial comma after \"irritability\" improves grammatical clarity.",
    "error": "\"It was informed that this medication would help with stress, irritability and mood.\" ",
    "correction": " \"It was explained that this medication would help with stress, irritability, and mood.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"an\" is needed before \"SSRI,\" \"medication\" should be singular to agree with \"this type of,\" and the plural subject \"option ... and the risks and benefits\" requires the plural verb \"were.\"",
    "error": "\"The option of using SSRI and risks and benefits associated with this type of medications was discussed with the patient.\" ",
    "correction": " \"The option of using an SSRI and the risks and benefits associated with this type of medication were discussed with the patient.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The phrase \"as well as associated with the sleep apnea\" is grammatically incorrect and incomplete; it needs a verb and clearer wording.",
    "error": "\"- The current medication is tolerated well without significant side effects such as nausea or constipation, as well as associated with the sleep apnea.\" ",
    "correction": " \"- The current medication is tolerated well without significant side effects such as nausea or constipation and is not associated with sleep apnea.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " This is a sentence fragment lacking a clear subject and verb; it needs to be revised into a complete sentence.",
    "error": "\"Current medication regimen and will notify the office if there are any issues with his prescriptions.\" ",
    "correction": " \"This is his current medication regimen, and he will notify the office if there are any issues with his prescriptions.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The subject \"issues\" is plural and requires the plural verb \"are\" instead of \"is.\"",
    "error": "\"It was noted that if issues related to dehydration is resolved, tamsulosin can be switched back to once daily from every other day.\" ",
    "correction": " \"It was noted that if issues related to dehydration are resolved, tamsulosin can be switched back to once daily from every other day.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The adverb \"likely\" should come after \"is\" for correct word order.",
    "error": "\"Informed by a hematologist that likely this is low-grade ITP, with a threshold of concern at 60,000.\" ",
    "correction": " \"Informed by a hematologist that this is likely low-grade ITP, with a threshold of concern at 60,000.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The plural subject \"exercises\" should take the plural verb \"include,\" not \"includes.\"",
    "error": "\"Advised to begin with routine exercises which includes walking, lifting some weight, or exercises to strengthen the muscles.\" ",
    "correction": " \"Advised to begin with routine exercises which include walking, lifting some weight, or exercises to strengthen the muscles.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The second clause lacks a verb, so \"was\" is needed for correct grammar.",
    "error": "\"Influenza vaccine was offered, but declined.\" ",
    "correction": " \"Influenza vaccine was offered, but was declined.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb form should be parallel; \"placing\" should pair with \"increasing,\" not \"increases.\"",
    "error": "\"BMI is 34.95, placing her in the class I obesity category and increases the risk of hypertension, high cholesterol, and diabetes.\" ",
    "correction": " \"BMI is 34.95, placing her in the class I obesity category and increasing the risk of hypertension, high cholesterol, and diabetes.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The compound subject requires the plural verb \"have,\" and adding \"and\" before the last item properly completes the list.",
    "error": "\"CBC, CMP, thyroid function tests, lipid panel has been ordered to be obtained prior to the next visit in 04/2026.\" ",
    "correction": " \"CBC, CMP, thyroid function tests, and lipid panel have been ordered to be obtained prior to the next visit in 04/2026.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original is a sentence fragment missing a subject, uses the incorrect phrase \"in advanced\" instead of \"in advance,\" includes an unnecessary article before \"Honor Health,\" and omits the article before \"actual paper order.\"",
    "error": "\"- Informed that the order for the blood test had already been placed in advanced and can go to the Honor Health and does not need actual paper as it is electronically sent to them.\" ",
    "correction": " \"- He was informed that the order for the blood test had already been placed in advance and that he can go to Honor Health and does not need an actual paper order, as it is sent to them electronically.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The subject \"he\" is missing in the clause beginning with \"although,\" causing a grammatical error.",
    "error": "\"- Reports occasional itchiness in the skin, which is associated with high blood sugar levels, although has not experienced this symptom for almost a month.\" ",
    "correction": " \"- Reports occasional itchiness in the skin, which is associated with high blood sugar levels, although he has not experienced this symptom for almost a month.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb tense should be past (\"was\") to match the time reference \"2 years ago.\"",
    "error": "\"Lowest documented weight is 160 approximately 2 years ago, which can be considered as the goal weight.\" ",
    "correction": " \"Lowest documented weight was 160 approximately 2 years ago, which can be considered as the goal weight.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The object \"us\" is needed after \"contact\" to complete the verb.",
    "error": "\"Contact if the blood pressure readings are significantly elevated, around 100 or 110 for multiple days.\" ",
    "correction": " \"Contact us if the blood pressure readings are significantly elevated, around 100 or 110 for multiple days.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The original sentence is missing a subject/verb construction, making it grammatically incomplete.",
    "error": "\"Advised to report if progression of symptoms.\" ",
    "correction": " \"Advised to report if there is progression of symptoms.\" or \"Advised to report if symptoms progress.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original sentence is grammatically incorrect and unclear, lacking a proper subject and verb for \"advised\"; the revision corrects the sentence structure.",
    "error": "\"- The symptoms are likely due to enteroviral infections circulating and advised to rest over the weekend.\" ",
    "correction": " \"- The symptoms are likely due to enteroviral infections that are circulating, and she was advised to rest over the weekend.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The singular subject \"Reasoning\" requires the singular verb \"includes,\" and \"backpain\" should be written as two words, \"back pain.\"",
    "error": "\"Reasoning for authorization for bariatric surgery include diagnosis of backpain, diabetes, breathing issues, and sleep apnea.\" ",
    "correction": " \"Reasoning for authorization for bariatric surgery includes diagnosis of back pain, diabetes, breathing issues, and sleep apnea.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing \"that\" after \"Discussed\" and a subject (\"she is\") for \"starting menopause,\" making the original grammatically incomplete.",
    "error": "\"Discussed a gynecologist can be helpful to figure out if starting menopause, checking hormone levels, and providing treatment for menopause.\" ",
    "correction": " \"Discussed that a gynecologist can be helpful to figure out if she is starting menopause, checking hormone levels, and providing treatment for menopause.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " \"Schedule herself\" is ungrammatical and unclear; the object should be \"an appointment,\" and the subject \"she\" should be explicit in the conditional clause.",
    "error": "\"Call the neurology office to schedule herself if not contacted within a week.\" ",
    "correction": " \"Call the neurology office to schedule an appointment if she is not contacted within a week.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The second clause is missing a clear subject, causing a grammatical error.",
    "error": "\"Blood pressure is not being monitored at home but reports no swelling in legs or feet.\" ",
    "correction": " \"Blood pressure is not being monitored at home but she reports no swelling in her legs or feet.\" or \"Blood pressure is not being monitored at home, but the patient reports no swelling in her legs or feet.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The clause is missing a subject (\"she\") before the verb \"consumes.\"",
    "error": "\"Reports that acid reflux is generally well-controlled with omeprazole, though it can flare up if consumes food late at night.\" ",
    "correction": " \"Reports that acid reflux is generally well-controlled with omeprazole, though it can flare up if she consumes food late at night.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The plural subject \"levels\" requires the plural verb \"were\" for correct subject-verb agreement.",
    "error": "\"- All the lab tests were normal except muscle protein levels, which was below normal, suggesting insufficient muscle use.\" ",
    "correction": " \"- All the lab tests were normal except muscle protein levels, which were below normal, suggesting insufficient muscle use.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The conjunction \"and\" is needed to correctly join the two verb phrases and avoid a run-on construction.",
    "error": "\"- Weight in 08/2024 was 341 pounds (BMI of 46.3) has increased by 18 pounds to 359 pounds (current BMI of 48.7), indicating class III obesity.\" ",
    "correction": " \"- Weight in 08/2024 was 341 pounds (BMI of 46.3) and has increased by 18 pounds to 359 pounds (current BMI of 48.7), indicating class III obesity.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The preposition \"on\" is incorrect here; \"reducing smoking\" is the correct verb pattern.",
    "error": "\"-  Encouraged reducing on smoking weed,\" ",
    "correction": " \"-  Encouraged reducing smoking weed,\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The singular subject \"list\" requires the singular verb \"has,\" and the phrase \"including FSU Medical Center\" should be set off with commas.",
    "error": "\"and a list of potential therapy locations including FSU Medical Center have been given.\" ",
    "correction": " \"and a list of potential therapy locations, including FSU Medical Center, has been given.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original sentence has an unclear subject for \"has expressed\"; adding \"she\" clarifies the subject, and \"in the 90s\" is the correct expression.",
    "error": "\"- Heart rate is elevated at 90s, likely due to the higher dose of phentermine, and has expressed concerns about the cost of combination weight loss medications.\" ",
    "correction": " \"- Heart rate is elevated in the 90s, likely due to the higher dose of phentermine, and she has expressed concerns about the cost of combination weight loss medications.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original sentence is missing a clear subject and auxiliary verb, making it grammatically incomplete.",
    "error": "\"Recommended to contact us if experiences any adverse reactions to topiramate.\" ",
    "correction": " \"She was advised to contact us if she experiences any adverse reactions to topiramate.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original uses an incorrect verb form; the present progressive passive is needed here.",
    "error": "\"- Prescribed atorvastatin is not taken.\" ",
    "correction": " \"- Prescribed atorvastatin is not being taken.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "\"Irregularly\" is an adverb and is incorrect here; a noun (\"irregularities\"/\"irregularity\") is required after \"from.\"",
    "error": "\"Many of the symptoms of perimenopause are believed to result from irregularly in estrogen levels.\" ",
    "correction": " \"Many of the symptoms of perimenopause are believed to result from irregularities in estrogen levels.\" or \"from irregularity in estrogen levels.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The second part of the sentence lacks a clear subject and verb, making it a fragment; adding a subject and verb corrects the grammar.",
    "error": "\"Monitoring for potential side effects was discussed and to inform the clinic immediately.\" ",
    "correction": " \"Monitoring for potential side effects was discussed, and he was advised to inform the clinic immediately.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The second sentence is a sentence fragment because it lacks an explicit subject; adding \"She\" makes it grammatically complete.",
    "error": "\"- Physical exam was within normal limits. Experienced a significant weight loss of approximately 13 pounds over the past 3 months.\" ",
    "correction": " \"- Physical exam was within normal limits. She experienced a significant weight loss of approximately 13 pounds over the past 3 months.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The singular subject \"breakfast\" requires the singular verb \"consists.\"",
    "error": "\"a typical American breakfast which includes biscuits, toast with jam or spreads, cereal, and similar items consist mostly of refined grains\" ",
    "correction": " \"a typical American breakfast which includes biscuits, toast with jam or spreads, cereal, and similar items consists mostly of refined grains\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The phrase \"because of low carbohydrates\" is incomplete; it needs a clear subject and verb to be grammatical.",
    "error": "\"Options such as eggs and sausage may actually be better for individuals with diabetes because of low carbohydrates.\" ",
    "correction": " \"Options such as eggs and sausage may actually be better for individuals with diabetes because they are low in carbohydrates.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"removed\" needs an auxiliary (\"was\") for correct tense, and \"medication list\" should take the definite article \"the\" in this context.",
    "error": "\"Crestor is not taken and removed from medication list.\" ",
    "correction": " \"Crestor is not taken and was removed from the medication list.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"are\" is needed for correct passive construction.",
    "error": "\"If symptoms such as weight loss, hemoptysis, or other red flag symptoms of lung cancer experienced, appropriate screening will be initiated.\" ",
    "correction": " \"If symptoms such as weight loss, hemoptysis, or other red flag symptoms of lung cancer are experienced, appropriate screening will be initiated.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing a subject (\"he\" or \"the patient\") after the comma, making it grammatically incomplete.",
    "error": "\"If the rash resolves completely, should continue using the cream for an additional 2 days to prevent recurrence.\" ",
    "correction": " \"If the rash resolves completely, he should continue using the cream for an additional 2 days to prevent recurrence.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing an explicit subject and should begin with \"He was congratulated.\"",
    "error": "\"-  Was congratulated on seeking support for sex addiction through the 12-step program, and for taking the initiative to serve as a sponsor for another individual.\" ",
    "correction": " \"- He was congratulated on seeking support for sex addiction through the 12-step program, and for taking the initiative to serve as a sponsor for another individual.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing a subject and the conjunction \"that\" to introduce the clause.",
    "error": "\"Discussed sex addiction does not require any monitoring through blood tests or imaging studies.\" ",
    "correction": " \"We discussed that sex addiction does not require any monitoring through blood tests or imaging studies.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing a subject and the article \"a\" before \"local pharmacy.\"",
    "error": "\"Encouraged to receive the COVID-19 vaccine at local pharmacy as it will provide secondary protection for the baby at home.\" ",
    "correction": " \"He was encouraged to receive the COVID-19 vaccine at a local pharmacy as it will provide secondary protection for the baby at home.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing a subject for the verb “should contact.”",
    "error": "\"If the diarrhea persists or worsens by 11/09/2025, should contact the clinic.\" ",
    "correction": " \"If the diarrhea persists or worsens by 11/09/2025, she should contact the clinic.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The second clause lacks a clear subject; “he” is needed to indicate who is able to keep food down.",
    "error": "\"The vomiting has subsided and is now able to keep food down.\" ",
    "correction": " \"The vomiting has subsided and he is now able to keep food down.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The second clause needs a subject (\"he\") and the idiomatically correct phrase is \"catch his breath,\" not \"catch the breath.\"",
    "error": "\"- Standing in a steamy shower may help if difficulty breathing is experienced due to coughing. Immediate medical attention should be sought if lips turn blue or struggles to catch the breath.\" ",
    "correction": " \"- Standing in a steamy shower may help if difficulty breathing is experienced due to coughing. Immediate medical attention should be sought if lips turn blue or he struggles to catch his breath.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The second sentence is a sentence fragment lacking a subject and possessive pronoun.",
    "error": "\"- The use of a humidifier at night and elevating the head of the bed were recommended to alleviate symptoms. Should blow the nose thoroughly and take hot baths or showers to help loosen mucus.\" ",
    "correction": " \"- The use of a humidifier at night and elevating the head of the bed were recommended to alleviate symptoms. He should blow his nose thoroughly and take hot baths or showers to help loosen mucus.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The clause \"since officially not a diabetic\" is missing a subject and verb, making it grammatically incomplete.",
    "error": "\"- Informed that steroids can increase blood sugar levels but reassured that it is not a concern since officially not a diabetic.\" ",
    "correction": " \"- Informed that steroids can increase blood sugar levels but reassured that it is not a concern since she is officially not a diabetic.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " This sentence has subject-verb agreement errors (plural \"vaccines\" with \"were\") and is missing the subject \"he\" before \"is not currently interested.\"",
    "error": "\"- Influenza and COVID-19 vaccine was offered but is not interested currently.\" ",
    "correction": " \"- Influenza and COVID-19 vaccines were offered, but he is not currently interested.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing the subject \"he\" in two places and \"to college\" is the correct idiomatic phrasing.",
    "error": "\"The option of adding Ozempic was discussed, but prefers to continue with the current regimen for another 3 months since has started working out daily and going to the college.\" ",
    "correction": " \"The option of adding Ozempic was discussed, but he prefers to continue with the current regimen for another 3 months since he has started working out daily and going to college.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The compound subject \"IUD and Implanon\" is plural and should take the plural verb \"have\" instead of \"has.\"",
    "error": "\"Information about IUD and Implanon has been given.\" ",
    "correction": " \"Information about IUD and Implanon has been given.\" / \"Information about IUD and Implanon have been given.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The second clause is missing the subject \"he,\" making the original sentence grammatically incorrect.",
    "error": "\"Physical therapy had previously helped but is not currently undergoing any treatment.\" ",
    "correction": " \"Physical therapy had previously helped, but he is not currently undergoing any treatment.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence contains two consecutive verbs (\"was conducted\" and \"was\") without a conjunction; adding \"and\" corrects the grammar.",
    "error": "\"Last mammogram was conducted in 2024 was normal\" ",
    "correction": " \"Last mammogram was conducted in 2024 and was normal\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb \"are\" is missing, making the phrase grammatically incomplete.",
    "error": "\"liver functions perfect\" ",
    "correction": " \"liver functions are perfect\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing a subject or auxiliary verb and is grammatically incomplete.",
    "error": "\"Not seen a neurologist lately but plans to see one when new insurance is available.\" ",
    "correction": " \"He has not seen a neurologist lately but plans to see one when new insurance is available.\" OR \"Has not seen a neurologist lately but plans to see one when new insurance is available.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "\"Urology doctor\" is nonstandard word usage; \"urologist\" is the correct term, and the sentence also benefits from a clear subject/verb.",
    "error": "\"Plan to see a urology doctor again after the insurance change.\" ",
    "correction": " \"Plans to see a urologist again after the insurance change.\" OR \"He plans to see a urologist again after the insurance change.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing an auxiliary verb (\"will\") to form a complete, grammatically correct future-tense construction.",
    "error": "\"Surgeon's information to be provided to facilitate scheduling.\" ",
    "correction": " \"Surgeon's information will be provided to facilitate scheduling.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The singular subject \"Shingles\" requires the singular verb \"results.\"",
    "error": "\"Shingles result from activation of the virus, which may be precipitated by factors such as stress and reduced immunity.\" ",
    "correction": " \"Shingles results from activation of the virus, which may be precipitated by factors such as stress and reduced immunity.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The phrase \"on Eliquis, recommended to take breaks\" is missing a clear subject and verb, resulting in incorrect sentence structure.",
    "error": "\"- Advised to monitor his condition closely, elevate his legs for approximately 45 minutes to 1 hour, particularly in the evenings, physical activity, and limit his salt intake. With regard to the clots, on Eliquis, recommended to take breaks every 90 minutes during long drives or flights, engage in brief walks, and perform stretching exercises to promote circulation.\" ",
    "correction": " \"- Advised to monitor his condition closely, elevate his legs for approximately 45 minutes to 1 hour (particularly in the evenings), engage in physical activity, and limit his salt intake. With regard to the clots, while on Eliquis, he was advised to take breaks every 90 minutes during long drives or flights, engage in brief walks, and perform stretching exercises to promote circulation.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The list is grammatically incomplete; \"physical activity\" needs a verb to parallel the other items.",
    "error": "\"- Advised to monitor his condition closely, elevate his legs for approximately 45 minutes to 1 hour, particularly in the evenings, physical activity, and limit his salt intake.\" ",
    "correction": " \"- Advised to monitor his condition closely, elevate his legs for approximately 45 minutes to 1 hour (particularly in the evenings), engage in physical activity, and limit his salt intake.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The phrase needs \"provide\" as the verb and \"would\" for correct conditional/intent meaning, and \"relief\" is not typically preceded by \"a\" in this context.",
    "error": "\"This was a temporary relief\" ",
    "correction": " \"This would provide temporary relief\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The adverb \"similarly\" is required instead of the adjective \"similar\" to modify the verb \"works.\"",
    "error": "\"valsartan works fairly similar to lisinopril\" ",
    "correction": " \"valsartan works fairly similarly to lisinopril\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The present perfect tense (\"have been reported\") is needed with the time adverb \"recently\" to make the sentence grammatically correct.",
    "error": "\"No migraines are reported recently.\" ",
    "correction": " \"No migraines have been reported recently.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The main clause is missing a subject, resulting in a grammatical error.",
    "error": "\"If the MRI is normal, should continue to follow up on the other abnormalities noted on sleep test.\" ",
    "correction": " \"If the MRI is normal, he should continue to follow up on the other abnormalities noted on the sleep test.\" or \"If the MRI is normal, we should continue to follow up on the other abnormalities noted on the sleep test.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing an explicit subject, making it a sentence fragment.",
    "error": "\"Previously trialed and failed CPAP therapy and is interested in Inspire therapy.\" ",
    "correction": " \"He previously trialed and failed CPAP therapy and is interested in Inspire therapy.\" or \"He has previously trialed and failed CPAP therapy and is interested in Inspire therapy.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The phrase \"suggested to follow up\" is incorrect verb usage; it should be a gerund or a that-clause.",
    "error": "\"Provided the name of Dr. Rxxx and suggested to follow up with the physician before the 11/21/2025.\" ",
    "correction": " \"Provided the name of Dr. Rxxx and suggested following up with the physician before 11/21/2025.\" or \"Provided the name of Dr. Rxxx and suggested that he follow up with the physician before 11/21/2025.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The second sentence is missing a subject and the noun \"vaccine\" should be plural to agree with both vaccines.",
    "error": "\"Vaccines are up to date. Has already received the COVID-19 and influenza vaccine at the pharmacy.\" ",
    "correction": " \"Vaccines are up to date. He has already received the COVID-19 and influenza vaccines at the pharmacy.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The auxiliary verb \"has\" is needed to form the present perfect tense.",
    "error": "\"Not received a COVID-19 vaccine in a couple of years.\" ",
    "correction": " \"Has not received a COVID-19 vaccine in a couple of years.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The auxiliary verb \"has\" is needed to form the present perfect tense.",
    "error": "\"Not received influenza vaccine today, has had 2 influenza vaccines in the past 20 years, both times resulting in influenza.\" ",
    "correction": " \"Has not received influenza vaccine today, has had 2 influenza vaccines in the past 20 years, both times resulting in influenza.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The phrase \"lowering on sweets\" is grammatically incorrect; the preposition \"on\" should be removed or the verb phrase restructured.",
    "error": "\"Dietary modifications focusing on protein intake and lowering on sweets are advised.\" ",
    "correction": " \"Dietary modifications focusing on protein intake and lowering sweets are advised.\" or \"Dietary modifications focusing on protein intake and cutting down on sweets are advised.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The linking verb \"are\" is required for a complete sentence.",
    "error": "\"Repetitive tasks allowed within these restrictions\" ",
    "correction": " \"Repetitive tasks are allowed within these restrictions\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The phrase \"discussed regarding\" is ungrammatical here, and parallel verb forms (\"adjusting\" and \"taking\") are needed.",
    "error": "\"Discussed regarding adjusting the medication dose and take it in the gummy form\" ",
    "correction": " \"Discussed adjusting the medication dose and taking it in the gummy form\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The singular verb \"is\" requires the singular noun \"score,\" not \"scores.\"",
    "error": "\"Informed that the scores of -1.4 is not enough to qualify for medication/injection\" ",
    "correction": " \"Informed that the score of -1.4 is not enough to qualify for medication/injection\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The second clause is a fragment; adding \"because\" and a verb (\"is\") makes it a complete, grammatically correct clause.",
    "error": "\"Ozempic was not recommended at this time since the weight gain is not to the point where it is concerning and Ozempic being a long-term commitment.\" ",
    "correction": " \"Ozempic was not recommended at this time since the weight gain is not to the point where it is concerning and because Ozempic is a long-term commitment.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"is\" and article \"the\" are missing, making the sentence a fragment.",
    "error": "\"Blood pressure not at threshold requiring pharmacologic management.\" ",
    "correction": " \"Blood pressure is not at the threshold requiring pharmacologic management.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original is a sentence fragment lacking an explicit subject; adding \"She is\" makes it a complete sentence.",
    "error": "\"- Suboptimal vision is reported. Attempting to schedule an appointment with a neurologist, Dr. Cxxx, as dry eyes were felt to be due to corneal scratches.\" ",
    "correction": " \"- Suboptimal vision is reported. She is attempting to schedule an appointment with a neurologist, Dr. Cxxx, as dry eyes were felt to be due to corneal scratches.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The second clause lacks a proper verb and should be made parallel to the first clause.",
    "error": "\"Compression socks are used as needed and elevating the lower extremities as much as possible.\" ",
    "correction": " \"Compression socks are used as needed, and the lower extremities are elevated as much as possible.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original contains a dangling modifier (\"receiving cortisone injections\") that incorrectly appears to refer to Dr. Bxxx instead of the patient and lacks a clear subject.",
    "error": "\"- Continued issues with both hands for which Dr. Bxxx is seen, receiving cortisone injections, which have not provided sufficient relief.\" ",
    "correction": " \"- She continues to have issues with both hands, for which she sees Dr. Bxxx, and she has been receiving cortisone injections, which have not provided sufficient relief.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " This is a sentence fragment missing a clear subject and possessive pronouns.",
    "error": "\"Reassured that overall health is good and care is being managed effectively.\" ",
    "correction": " \"She was reassured that her overall health is good and her care is being managed effectively.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The subject \"she\" is missing in the dependent clause.",
    "error": "\"Developed asthma from smoking but inhalers were not required since quit smoking cigarettes.\" ",
    "correction": " \"Developed asthma from smoking but inhalers were not required since she quit smoking cigarettes.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " \"Eyes exam\" should be \"eye exam,\" and the second clause needs an explicit subject (\"she\") and an article (\"an\") before \"eye exam.\"",
    "error": "\"- Received pneumonia, influenza, and COVID-19 vaccines. Eyes exam was performed and was informed that there are slight cataracts but no immediate issues.\" ",
    "correction": " \"- Received pneumonia, influenza, and COVID-19 vaccines. An eye exam was performed, and she was informed that there are slight cataracts but no immediate issues.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The plural subject \"Instructions\" requires the plural verb \"are.\"",
    "error": "\"Instructions for back stretching exercises is provided.\" ",
    "correction": " \"Instructions for back stretching exercises are provided.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb phrase \"contributed by\" is incomplete; standard usage is \"contributed to by.\"",
    "error": "\"It is likely contributed by being a heavy smoker until 1996 and occupational exposure to silica and graphite.\" ",
    "correction": " \"It is likely contributed to by being a heavy smoker until 1996 and occupational exposure to silica and graphite.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The plural subject \"benefits\" requires the plural verb \"were\" for correct subject-verb agreement.",
    "error": "\"The benefits of retesting again in 3 months was explained.\" ",
    "correction": " \"The benefits of retesting again in 3 months were explained.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original sentence is a fragment missing a clear subject and verb, so it needs to be completed.",
    "error": "\"Informed that the medication requires time to reach therapeutic levels, as 10 mg is usually an effective dose.\" ",
    "correction": " \"She was informed that the medication requires time to reach therapeutic levels, as 10 mg is usually an effective dose.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The second sentence is a fragment lacking a subject and verb, and it should begin with a capital letter.",
    "error": "\"Received influenza injection, meningitis booster, and COVID-19 vaccine on 09/26/2025.  pneumococcal vaccine received in 07/2025.\" ",
    "correction": " \"Received influenza injection, meningitis booster, and COVID-19 vaccine on 09/26/2025. Pneumococcal vaccine was received in 07/2025.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb should be \"lead\" because \"can\" takes the base form of the verb.",
    "error": "\"Inadequate fiber intake can often leads to constipation.\" ",
    "correction": " \"Inadequate fiber intake can often lead to constipation.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The subject \"he\" and article \"the\" before \"clinic\" are needed for correct grammar.",
    "error": "\"- If the redness begins to spread even after the antibiotic treatment, should inform clinic immediately.\" ",
    "correction": " \"- If the redness begins to spread even after the antibiotic treatment, he should inform the clinic immediately.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The subject \"he\" is missing before \"has not experienced,\" leading to a grammatical error in subject-verb structure.",
    "error": "\"Currently, this is being managed with dietary changes and has not experienced any grand mal seizures recently\" ",
    "correction": " \"Currently, this is being managed with dietary changes, and he has not experienced any grand mal seizures recently\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The singular verb \"is\" requires the singular noun \"record\" for correct subject-verb agreement.",
    "error": "\"there is no records of receiving it at this facility.\" ",
    "correction": " \"there is no record of receiving it at this facility.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The adverb \"generally\" should follow the verb \"is\" for correct word order.",
    "error": "\"This medication combination has been used for approximately a decade and generally is safe.\" ",
    "correction": " \"This medication combination has been used for approximately a decade and is generally safe.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb tense \"could\" is inconsistent with the future tense \"will be\" and should be changed to \"can.\"",
    "error": "\"The referral will be left open so that care could be sought at the preferred location depending on insurance coverage.\" ",
    "correction": " \"The referral will be left open so that care can be sought at the preferred location depending on insurance coverage.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence lacks a verb and needs \"is\" to be grammatically complete.",
    "error": "\"Urine test also ordered.\" ",
    "correction": " \"Urine test is also ordered.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The second clause lacks a subject and needs \"she\" for correct grammar.",
    "error": "\"A report will be sent to Dr. Axxx, who will then schedule the surgery; will likely be monitored in the intensive care unit post-surgery.\" ",
    "correction": " \"A report will be sent to Dr. Axxx, who will then schedule the surgery; she will likely be monitored in the intensive care unit post-surgery.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The second clause lacks a subject and needs \"she\" for correct grammar.",
    "error": "\"Recent x-ray from 07/2025 did not indicate significant COPD; has also been seen by the cardiologist.\" ",
    "correction": " \"Recent x-ray from 07/2025 did not indicate significant COPD; she has also been seen by the cardiologist.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The second clause lacks a subject and needs \"she\" (or \"the patient\") for correct grammar.",
    "error": "\"Weight loss is commendable and should aid in recovery; falls into the moderate risk category for complications due to age and other factors such as being in a wheelchair.\" ",
    "correction": " \"Weight loss is commendable and should aid in recovery; she falls into the moderate risk category for complications due to age and other factors such as being in a wheelchair.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing a subject and possessive pronoun, and needs the article \"a\" before \"few months ago.\"",
    "error": "\"Reported burning the tongue few months ago while eating something hot.\" ",
    "correction": " \"He reported burning his tongue a few months ago while eating something hot.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The passive construction is incomplete; the verb \"was\" or a clear subject is needed after \"but.\"",
    "error": "\"Influenza vaccination was recommended today, but declined.\" ",
    "correction": " \"Influenza vaccination was recommended today but was declined.\" or \"Influenza vaccination was recommended today, but the patient declined.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The original is a sentence fragment missing a verb and needed article.",
    "error": "\"Almost four months since initial visit the wrist discomfort persists.\" ",
    "correction": " \"It has been almost four months since the initial visit, and the wrist discomfort persists.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The original is missing the article \"an\" and the verb \"is.\"",
    "error": "\"If symptoms continue, MRI recommended.\" ",
    "correction": " \"If symptoms continue, an MRI is recommended.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The original is missing the auxiliary verb \"are\" and the verb \"is,\" making the condition and result grammatically incomplete.",
    "error": "\"If symptoms resolved, no further action needed.\" ",
    "correction": " \"If symptoms are resolved, no further action is needed.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing a subject and verb (\"she is\"), resulting in a sentence fragment.",
    "error": "\"Currently, taking bone medication once a week without any side effects.\" ",
    "correction": " \"Currently, she is taking bone medication once a week without any side effects.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The second clause lacks a subject, making it grammatically incomplete.",
    "error": "\"Tests were ordered on 04/28/2025, so did have some completed after 04/15/2025.\" ",
    "correction": " \"Tests were ordered on 04/28/2025, so she did have some completed after 04/15/2025.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb \"is\" is missing, making the sentence grammatically incomplete.",
    "error": "\"- Fasting for approximately 12 hours recommended prior to laboratory testing when possible.\" ",
    "correction": " \"- Fasting for approximately 12 hours is recommended prior to laboratory testing when possible.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"attributes\" requires a direct object (\"this\") before \"to.\"",
    "error": "\"attributes to head injuries from playing football as a child.\" ",
    "correction": " \"attributes this to head injuries from playing football as a child.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"discussed\" should not be followed by \"about.\"",
    "error": "\"Discussed about Cologuard and the colonoscopy\" ",
    "correction": " \"Discussed Cologuard and colonoscopy\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb tense shifts incorrectly from future (\"will be conducted\"/\"will also be performed\") to present; past tense is appropriate for a completed procedure.",
    "error": "\"A nasal and throat swab is performed, which produced brief eye watering and nasal drainage.\" ",
    "correction": " \"A nasal and throat swab was performed, which produced brief eye watering and nasal drainage.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The conjunction \"but\" joins two clauses, and the second clause is missing an explicit subject (\"it\"), resulting in an incomplete clause.",
    "error": "\"- She will receive an influenza vaccine today. It was explained that the influenza vaccine may cause mild soreness, but provides overall benefit.\" ",
    "correction": " \"- She will receive an influenza vaccine today. It was explained that the influenza vaccine may cause mild soreness, but it provides overall benefit.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing a clear subject for the verb \"informed,\" making it grammatically incomplete.",
    "error": "\"Informed that the objective was to obtain the report and subsequently contact the clinic to schedule an appointment, enabling the team to take over the weight loss management.\" ",
    "correction": " \"She was informed that the objective was to obtain the report and subsequently contact the clinic to schedule an appointment, enabling the team to take over the weight loss management.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"inform\" is incomplete without an indirect object; \"report her progress\" or \"inform us of her progress\" is the grammatically correct construction.",
    "error": "\"She was advised to monitor month by month and inform her progress.\" ",
    "correction": " \"She was advised to monitor month by month and report her progress.\" OR \"…and inform us of her progress.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " This is a sentence fragment missing a subject and verb, so it should be revised to a complete sentence.",
    "error": "\"Taking amoxicillin 12.5 mL once a day for 6 days for strep throat.\" ",
    "correction": " \"The patient is taking amoxicillin 12.5 mL once a day for 6 days for strep throat.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " \"Received\" is awkward and ungrammatical in this passive construction; \"given\" is the appropriate verb for administering vaccines.",
    "error": "\"- Tetanus and influenza vaccines will be received today.\" ",
    "correction": " \"- Tetanus and influenza vaccines will be given today.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The subject \"results\" is plural and requires the plural verb \"are.\"",
    "error": "\"The last mammogram results available in the system is from 2022.\" ",
    "correction": " \"The last mammogram results available in the system are from 2022.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original sentence is missing the verb \"are\" and a pronoun to complete the comparison.",
    "error": "\"Glucose values significantly higher than normally obtained in clinic.\" ",
    "correction": " \"Glucose values are significantly higher than those normally obtained in clinic.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " Both sentences are sentence fragments lacking a clear subject and should be rewritten with an explicit subject (\"He was advised\").",
    "error": "\"Advised to take naproxen for pain relief, which can be taken concurrently with the 81 mg aspirin. Recommended to avoid activities that could exacerbate the condition, such as heavy lifting.\" ",
    "correction": " \"He was advised to take naproxen for pain relief, which can be taken concurrently with the 81 mg aspirin. He was also advised to avoid activities that could exacerbate the condition, such as heavy lifting.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The phrase \"discussed in detail about\" is ungrammatical; \"discussed in detail the\" correctly links the verb to its object.",
    "error": "\"Discussed in detail about the risks and benefits of hydroxyzine and buspirone.\" ",
    "correction": " \"Discussed in detail the risks and benefits of hydroxyzine and buspirone.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " A subject is needed for the verb \"advised\" to avoid a sentence fragment.",
    "error": "\"Advised to continue using ibuprofen as needed for pain management and to maintain hand mobility without engaging in heavy lifting activities.\" ",
    "correction": " \"He was advised to continue using ibuprofen as needed for pain management and to maintain hand mobility without engaging in heavy lifting activities.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The preposition should be \"to the diet,\" and the verb \"avoid\" should be in the gerund form \"avoiding\" to be parallel with \"adding.\"",
    "error": "\"- Stressed the importance of adding more fiber in diet and avoid processed food, ice cream, any sugary food, and bread.\" ",
    "correction": " \"- Stressed the importance of adding more fiber to the diet and avoiding processed food, ice cream, any sugary food, and bread.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing the auxiliary verb \"was\" to form a complete passive construction.",
    "error": "\"Scheduling with a new gastroenterologist discussed.\" ",
    "correction": " \"Scheduling with a new gastroenterologist was discussed.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing a subject and auxiliary verb, making it grammatically incomplete.",
    "error": "\"Not noticed any significant changes with appetite suppression or weight loss.\" ",
    "correction": " \"Has not noticed any significant changes with appetite suppression or weight loss.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " This is a sentence fragment because it lacks an explicit subject and verb.",
    "error": "\"Currently, not on any opiate medications.\" ",
    "correction": " \"She is currently not on any opiate medications.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original is a fragment missing a subject and uses the incorrect phrase \"the lifetime\" instead of \"their lifetime.\"",
    "error": "\"Informed that hepatitis C is a blood-borne illness, and it is recommended for all Americans to be tested once in the lifetime.\" ",
    "correction": " \"The patient was informed that hepatitis C is a blood-borne illness, and it is recommended for all Americans to be tested once in their lifetime.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing a subject and possessive determiner, which are required for correct grammar.",
    "error": "\"- If condition deteriorates, should seek immediate medical attention and undergo further testing.\" ",
    "correction": " \"- If his condition deteriorates, he should seek immediate medical attention and undergo further testing.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The subject of the sentence is missing, and \"backlog\" is incorrectly used instead of a verb such as \"backdate\" in this context.",
    "error": "\"Additionally, discussed that it is difficult to backlog regarding a work-related injury.\" ",
    "correction": " \"Additionally, it was discussed that it is difficult to backdate a work-related injury claim.\" or \"Additionally, it was discussed that it is difficult to backdate a work-related injury claim.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb \"is\" is needed for proper sentence structure.",
    "error": "\"Follow up in a year recommended.\" ",
    "correction": " \"Follow up in a year is recommended.\" or \"Follow up in a year is recommended.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb \"is\" is needed and \"occurs\" clarifies the conditional clause for grammatical completeness.",
    "error": "\"Repeat due in 2027 if no acute change prior.\" ",
    "correction": " \"Repeat is due in 2027 if no acute change occurs prior.\" or \"Repeat is due in 2027 if no acute change occurs prior.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb structure is incorrect and needs parallel phrasing (\"from...to...to\") for grammatical correctness.",
    "error": "\"- Lipase levels have shown a significant decrease from 1228 on 10/10/2025, was 569 on 10/11/2025, and 70 on 10/12/2025.\" ",
    "correction": " \"- Lipase levels have shown a significant decrease from 1228 on 10/10/2025 to 569 on 10/11/2025 and to 70 on 10/12/2025.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is a fragment and needs an explicit subject (\"She\") to form a complete sentence.",
    "error": "\"Could also try steamy, moist showers to alleviate congestion.\" ",
    "correction": " \"She could also try steamy, moist showers to alleviate congestion.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"the\" is needed before \"patient,\" and \"send a message\" avoids the incorrect and repetitive use of \"inform\" as both verb and implied noun.",
    "error": "\"Informed patient to inform via MyChart if the Flonase stops working.\" ",
    "correction": " \"Informed the patient to send a message via MyChart if the Flonase stops working.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original sentence lacks a clear subject and conjunction (\"that\"), making it grammatically incomplete.",
    "error": "\"Informed Wellbutrin is an activating medication and it also acts as an appetite suppressor.\" ",
    "correction": " \"He was informed that Wellbutrin is an activating medication and it also acts as an appetite suppressor.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original text has unclear subject and missing conjunctions; adding \"he was\" clarifies who was advised, \"that\" introduces the clause properly, and \"ages\" agrees with the plural range.",
    "error": "\"The first dose of the shingles vaccine resulted in tachycardia and was advised against taking the second dose. Discussed RSV vaccine is recommended for people between the age of 60 and 74 but will hold off on the RSV vaccine for now.\" ",
    "correction": " \"The first dose of the shingles vaccine resulted in tachycardia, and he was advised against taking the second dose. Discussed that the RSV vaccine is recommended for people between the ages of 60 and 74, but he will hold off on the RSV vaccine for now.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The clause \"but usually prefer\" is missing a subject; adding \"we\" corrects the grammar.",
    "error": "\"Currently his creatinine value is 1.32 but usually prefer the value to be closer to 1.\" ",
    "correction": " \"Currently his creatinine value is 1.32, but we usually prefer the value to be closer to 1.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The preposition \"in\" is needed before the date, and \"recent\" should be the adverb \"recently\" to modify \"received.\"",
    "error": "\"- COVID-19 vaccine was received 10/2024 with another dose received more recent along with contracting COVID-19.\" ",
    "correction": " \"- COVID-19 vaccine was received in 10/2024 with another dose received more recently along with contracting COVID-19.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original sentence is missing a subject for \"recommend,\" and \"once daily dosing\" needs a hyphen when used as a compound adjective.",
    "error": "\"This regimen is not his preference and recommend messaging Dr. Hxxx as this will likely be acceptable since the adjustment may have only been for convenience of once daily dosing.\" ",
    "correction": " \"This regimen is not his preference and it is recommended that he message Dr. Hxxx, as this will likely be acceptable since the adjustment may have only been for the convenience of once-daily dosing.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original is a sentence fragment lacking a clear subject and verb; this correction provides proper subject-verb structure.",
    "error": "\"Calcium 1200 mg taken daily for 17 years, expressed concerns about potential arterial blockage.\" ",
    "correction": " \"She has taken calcium 1200 mg daily for 17 years and expressed concerns about potential arterial blockage.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The original sentence is missing articles (\"an,\" \"her\") and a subject/auxiliary verb (\"was\") for correct grammar and clarity.",
    "error": "\"Meloxicam discontinued after 2 days due to unusual sensation in brain but plans to re-initiate in wintertime for worsening pain.\" ",
    "correction": " \"Meloxicam was discontinued after 2 days due to an unusual sensation in her brain but she plans to re-initiate it in the wintertime for worsening pain.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The clause is missing a subject for the verb \"experiences.\"",
    "error": "\"Advised to contact local psychiatric resources if experiences significant anxiety or suicidal thoughts.\" ",
    "correction": " \"Advised to contact local psychiatric resources if he experiences significant anxiety or suicidal thoughts.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The subject \"she\" is missing, leading to an incomplete clause.",
    "error": "\"during which can consume water and black coffee without cream or sugar.\" ",
    "correction": " \"during which she can consume water and black coffee without cream or sugar.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The subject \"she\" is missing after \"if,\" and the phrase \"a sudden inability\" needs an article for correct grammar.",
    "error": "\"This can be normal, but if experiences sudden inability to talk or difficulty getting words out, further evaluation will be necessary.\" ",
    "correction": " \"This can be normal, but if she experiences a sudden inability to talk or difficulty getting words out, further evaluation will be necessary.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The compound subject \"back and hip pain\" is plural and requires the plural verb \"are.\"",
    "error": "\"Persistent back and hip pain is reported.\" ",
    "correction": " \"Persistent back and hip pain are reported.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The original is a sentence fragment missing a subject and verb, making it grammatically incomplete.",
    "error": "\"Three months postpartum and has moderate depression, requiring psychiatric referral.\" ",
    "correction": " \"She is three months postpartum and has moderate depression, requiring psychiatric referral.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing an explicit subject after the comma, resulting in a grammatical error.",
    "error": "\"If symptoms worsen or if fever or severe pressure develops, indicating a possible sinus infection, should contact via MyChart to discuss the need for antibiotics.\" ",
    "correction": " \"If symptoms worsen or if fever or severe pressure develops, indicating a possible sinus infection, the patient should contact us via MyChart to discuss the need for antibiotics.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The second sentence lacks a subject, making it a sentence fragment.",
    "error": "\"Ten-year cardiovascular event risk remains very low. Maintains a healthy weight and manages blood pressure effectively.\" ",
    "correction": " \"Ten-year cardiovascular event risk remains very low. She maintains a healthy weight and manages blood pressure effectively.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The subject “he” is needed for the second verb; as written, “myocardial infarction” cannot “undergo” angioplasty.",
    "error": "\"An acute myocardial infarction occurred in 08/2022 and underwent angioplasty with a drug-eluting stent placement in the LAD.\" ",
    "correction": " \"An acute myocardial infarction occurred in 08/2022, and he underwent angioplasty with a drug-eluting stent placement in the LAD.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The second sentence is a fragment lacking an explicit subject and verb.",
    "error": "\"BMI is 30.7. Dietary changes have been made and exercising regularly.\" ",
    "correction": " \"BMI is 30.7. Dietary changes have been made and he is exercising regularly.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The subject \"data\" is plural, so the verb phrase should also be plural (\"are\") and connected with a relative clause for correct agreement.",
    "error": "\"CGM data over the past 2 weeks show a GMI of 8.3%, time in target range 25%, and average glucose of 207 mg/dL and is still above the goal range at this point.\" ",
    "correction": " \"CGM data over the past 2 weeks show a GMI of 8.3%, time in target range 25%, and average glucose of 207 mg/dL, which are still above the goal range at this point.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The subject \"she\" is missing in the second sentence.",
    "error": "\"- A prescription for clindamycin has been provided, with instructions to take 2 pills 1 hour prior to dental appointment on 11/04/2025. If additional refills are needed, should contact the dentist.\" ",
    "correction": " \"- A prescription for clindamycin has been provided, with instructions to take 2 pills 1 hour prior to the dental appointment on 11/04/2025. If additional refills are needed, she should contact the dentist.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " Missing article \"the\" before \"pharmacy\" and missing subject \"she\" in the clause \"if not feeling well.\"",
    "error": "\"- A prescription for olmesartan has been refilled and sent to pharmacy, which can be taken if not feeling well.\" ",
    "correction": " \"- A prescription for olmesartan has been refilled and sent to the pharmacy, which can be taken if she is not feeling well.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " Parallel structure is incorrect and the subject \"she\" is missing in the conditional clause.",
    "error": "\"- Continue current medication regimen and to contact the office if needs refills.\" ",
    "correction": " \"- Continue current medication regimen and contact the office if she needs refills.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The subject \"she\" is missing in both clauses.",
    "error": "\"- If needs refills of Prozac or Abilify in the meantime, should notify the office, preferably a week before running out of medications.\" ",
    "correction": " \"- If she needs refills of Prozac or Abilify in the meantime, she should notify the office, preferably a week before running out of medications.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The compound subject \"Injection or medication\" is plural and requires the plural verb \"were.\"",
    "error": "\"Injection or medication as the likely cause for the spasms was ruled out.\" ",
    "correction": " \"Injection or medication as the likely cause for the spasms were ruled out.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The subject of \"is requesting\" was incorrect; a person, not the prescription, should be the subject.",
    "error": "\"Prescription for eyedrops has expired and is requesting a refill.\" ",
    "correction": " \"Prescription for eyedrops has expired and she is requesting a refill.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The subject \"she\" is missing, leading to an incomplete clause.",
    "error": "\"If bone pain or jaw pain occurs, should discontinue the medication and inform the clinic.\" ",
    "correction": " \"If bone pain or jaw pain occurs, she should discontinue the medication and inform the clinic.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original sentence lacks a clear subject and conjunction, leading to incorrect grammar.",
    "error": "\"Also, discussed steroid therapy (prednisone) has marginal evidence of benefit in uncomplicated viral bronchitis.\" ",
    "correction": " \"Also, we discussed that steroid therapy (prednisone) has marginal evidence of benefit in uncomplicated viral bronchitis.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"discuss\" should not be followed by \"about,\" and the nouns should be pluralized to agree with \"effects\" and parallel structure.",
    "error": "\"Discussed about the effects of benzodiazepine and working mechanism of SSRI and SNRI.\" ",
    "correction": " \"Discussed the effects of benzodiazepines and the working mechanisms of SSRIs and SNRIs.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The second sentence is missing the verb \"are,\" resulting in incorrect sentence structure.",
    "error": "\"Blood pressure readings are within the normal range today. Blood pressure levels occasionally elevated, but otherwise within normal range; overall average remains normal.\" ",
    "correction": " \"Blood pressure readings are within the normal range today. Blood pressure levels are occasionally elevated, but are otherwise within the normal range; overall average remains normal.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original sentence lacks a clear subject and verb, making it grammatically incomplete.",
    "error": "\"Recommended influenza vaccination but declined.\" ",
    "correction": " \"Influenza vaccination was recommended, but he declined.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"bothering\" requires an object, so \"her\" should be added.",
    "error": "\"- The lesion is bothering again.\" ",
    "correction": " \"- The lesion is bothering her again.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The term \"A1c\" should not have a space, and the verb phrase is missing \"as\" for correct grammar.",
    "error": "\"A1 c was recorded 6.1 in 2018.\" ",
    "correction": " \"A1c was recorded as 6.1 in 2018.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The clause \"as long as not overworking or exhausted\" is missing a subject and verb, making it grammatically incomplete.",
    "error": "\"- Reports that Vyvanse has been effective in managing the symptoms as long as not overworking or exhausted.\" ",
    "correction": " \"- Reports that Vyvanse has been effective in managing the symptoms as long as he is not overworking or exhausted.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb should be \"requires\" to agree with the singular subject \"person.\"",
    "error": "\"Chloride levels are mainly relevant if a person require IV fluids.\" ",
    "correction": " \"Chloride levels are mainly relevant if a person requires IV fluids.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"are\" is needed for correct passive construction.",
    "error": "\"Informed that fluctuations in chloride level generally caused by hydration issues.\" ",
    "correction": " \"Informed that fluctuations in chloride level are generally caused by hydration issues.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing a verb, resulting in incorrect grammar; adding \"is\" (and adjusting the phrase as needed) corrects the subject-verb structure.",
    "error": "\"Crestor tolerating well without any joint pain.\" ",
    "correction": " \"Crestor is tolerating well without any joint pain.\" or \"Crestor is tolerated well without any joint pain.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The phrase needs \"with\" to link \"5 servings per day\" correctly and \"to\" for parallel verb structure.",
    "error": "\"Advised to maintain a healthy diet rich in fruits and vegetables and 5 servings per day, engage in regular physical activity of at least 15 minutes 5 days a week.\" ",
    "correction": " \"Advised to maintain a healthy diet rich in fruits and vegetables, with 5 servings per day, and to engage in regular physical activity of at least 15 minutes 5 days a week.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing a subject, and the pronoun \"it\" is incorrect and should be replaced with \"she.\"",
    "error": "\"If decides to have another child, it will be notified to the provider to discuss further preventive measures.\" ",
    "correction": " \"If she decides to have another child, she will notify the provider to discuss further preventive measures.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence needs a clear subject (\"She\") and parallel structure with \"that.\"",
    "error": "\"It has been informed that preeclampsia is not guaranteed to recur but there is an increased risk.\" ",
    "correction": " \"She has been informed that preeclampsia is not guaranteed to recur but that there is an increased risk.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The subject \"he\" is missing, and the pronoun \"his\" is needed for correct agreement.",
    "error": "\"Methylphenidate helps with anxiety but does not like the way it makes the body feel.\" ",
    "correction": " \"Methylphenidate helps with anxiety, but he does not like the way it makes his body feel.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The original is a sentence fragment lacking a subject, and \"next Pap smear\" should be clarified with a possessive pronoun.",
    "error": "\"- Underwent breast cancer screening on 05/17/2025 and next Pap smear for cervical cancer screening is due in 2027.\" ",
    "correction": " \"- She underwent breast cancer screening on 05/17/2025, and her next Pap smear for cervical cancer screening is due in 2027.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The original lacks a clear subject for the verb \"informed,\" and \"kidney related\" should be hyphenated as a compound modifier.",
    "error": "\"Informed that in certain cases, back pain in women may be attributable to underlying kidney related issues.\" ",
    "correction": " \"She was informed that in certain cases, back pain in women may be attributable to underlying kidney-related issues.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "\"It was informed\" is ungrammatical here; the sentence needs a person as the subject who was informed.",
    "error": "\"It was informed that these veins are primarily a cosmetic concern and do not require treatment unless they cause symptoms.\" ",
    "correction": " \"She was informed that these veins are primarily a cosmetic concern and do not require treatment unless they cause symptoms.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The subject pronoun \"he\" is missing, making the clause grammatically incomplete.",
    "error": "\"Informed that can access his test results via MyChart\" ",
    "correction": " \"Informed that he can access his test results via MyChart\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The subject \"she\" is missing in the second clause, causing a grammatical error.",
    "error": "\"The bleeding has stopped but continues to experience mild abdominal pain.\" ",
    "correction": " \"The bleeding has stopped but she continues to experience mild abdominal pain.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The subject \"he\" is missing, resulting in a sentence fragment.",
    "error": "\"- Due to lumbar back pain, has undergone nerve ablation, which unfortunately worsened the symptoms.\" ",
    "correction": " \"- Due to lumbar back pain, he has undergone nerve ablation, which unfortunately worsened the symptoms.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb form is incorrect; the sentence is missing \"experiencing\" or \"that she experienced\" after \"Reports.\"",
    "error": "\"Reports experienced anaphylaxis during dialysis due to not receiving her medication within the ordered 15 minutes.\" ",
    "correction": " \"Reports experiencing anaphylaxis during dialysis due to not receiving her medication within the ordered 15 minutes.\" or \"Reports that she experienced anaphylaxis during dialysis due to not receiving her medication within the ordered 15 minutes.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The pronoun \"it\" lacks a clear verb/complement (\"contagious\"), resulting in an incomplete and unclear comparison.",
    "error": "\"Although strep throat is contagious, it should not be within 24 to 48 hours of starting the medication.\" ",
    "correction": " \"Although strep throat is contagious, it should not be contagious within 24 to 48 hours of starting the medication.\" or \"it should not be contagious after 24 to 48 hours of starting the medication.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing an explicit subject, making it grammatically incomplete; \"fever free\" should also be hyphenated as a compound modifier.",
    "error": "\"May attend school if fever free tomorrow morning upon waking up.\" ",
    "correction": " \"He may attend school if fever-free tomorrow morning upon waking up.\" or \"The patient may attend school if fever-free tomorrow morning upon waking up.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing an explicit subject for \"may return,\" creating a grammatical fragment.",
    "error": "\"once fever-free for 24 hours and feeling improved, may return to school.\" ",
    "correction": " \"once he is fever-free for 24 hours and feeling improved, he may return to school.\" or \"once the patient is fever-free for 24 hours and feeling improved, they may return to school.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is a fragment because it lacks an explicit subject.",
    "error": "\"Lost weight successfully, which is commendable.\" ",
    "correction": " \"He has lost weight successfully, which is commendable.\" or \"The patient has lost weight successfully, which is commendable.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is a fragment and lacks a clear subject for the verb phrase \"Monitoring blood pressure.\"",
    "error": "\"Monitoring blood pressure diligently at home and has made significant efforts towards weight loss, which should positively impact cholesterol and blood sugar levels.\" ",
    "correction": " \"He is monitoring his blood pressure diligently at home and has made significant efforts towards weight loss, which should positively impact cholesterol and blood sugar levels.\" or \"He monitors his blood pressure diligently at home and has made significant efforts towards weight loss, which should positively impact cholesterol and blood sugar levels.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The clause is missing a subject and introductory comma, resulting in incorrect grammar.",
    "error": "\"Additionally experienced pain initially attributed to the gallbladder\" ",
    "correction": " \"Additionally, he experienced pain initially attributed to the gallbladder\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " Subject-verb agreement error; \"nodules\" is plural and requires \"are.\"",
    "error": "\"- Pulmonary nodules is being followed by pulmonology.\" ",
    "correction": " \"- Pulmonary nodules are being followed by pulmonology.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original is a sentence fragment lacking a verb; it needs a complete verb phrase.",
    "error": "\"- Weight loss going from 150 pounds in 02/2025 to 141 pounds currently.\" ",
    "correction": " \"- Weight has decreased from 150 pounds in 02/2025 to 141 pounds currently.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The phrase repeats “interest” unnecessarily and lacks a clear subject, resulting in incorrect grammar.",
    "error": "\"Interest is expressed interest in participating and the program will be initiated.\" ",
    "correction": " \"She expressed interest in participating, and the program will be initiated.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original phrase is missing a verb and subject, making it grammatically incomplete.",
    "error": "\"Advised to seek immediate medical attention if any recurrence of pain experienced, nausea, or vomiting.\" ",
    "correction": " \"Advised to seek immediate medical attention if she experiences any recurrence of pain, nausea, or vomiting.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The article \"a\" is needed before \"refill,\" and an explicit subject (\"the patient\") improves the sentence’s grammatical completeness.",
    "error": "\"If refill for Zofran is required, advised to contact the office.\" ",
    "correction": " \"If a refill for Zofran is required, the patient is advised to contact the office.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original is a sentence fragment lacking a clear subject; adding \"It was\" and \"that she\" completes the sentence grammatically.",
    "error": "\"Recommended to get a second opinion.\" ",
    "correction": " \"It was recommended that she get a second opinion.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " This is a sentence fragment missing a subject.",
    "error": "\"- Receiving testosterone injections once a week and is consistent with the schedule.\" ",
    "correction": " \"- The patient is receiving testosterone injections once a week and is consistent with the schedule.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The conditional clause is missing a subject, making the sentence grammatically incomplete.",
    "error": "\"No cream or sugar should be added if drinks coffee.\" ",
    "correction": " \"No cream or sugar should be added if the patient drinks coffee.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The subject \"he\" is missing in both clauses, making the sentence grammatically incomplete.",
    "error": "\"- If experiencing left-sided back or flank pain, should return for further evaluation.\" ",
    "correction": " \"- If he experiences left-sided back or flank pain, he should return for further evaluation.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "Missing article \"a,\" missing subject \"he,\" and lack of parallel structure in the final clause.",
    "error": "\"Advised to use hernia belt for support and to seek immediate medical attention if experiences significant pain or inability to have bowel movements.\" ",
    "correction": " \"Advised to use a hernia belt for support and to seek immediate medical attention if he experiences significant pain or is unable to have bowel movements.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original sentence is grammatically awkward and missing an article before \"urine\"; adding \"the\" and restructuring with a conjunction clarifies subject-verb agreement.",
    "error": "\"A urine culture was positive for Klebsiella at the hospital as well as urine was positive for nitrites.\" ",
    "correction": " \"A urine culture was positive for Klebsiella at the hospital, and the urine was also positive for nitrites.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing an article before \"antibiotics course,\" needs \"the\" before \"hospital,\" and requires the verb \"is\" before \"currently\" for correct grammar.",
    "error": "\"Completed antibiotics course in hospital and currently off antibiotics at home.\" ",
    "correction": " \"Completed an antibiotics course in the hospital and is currently off antibiotics at home.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing a subject; adding \"she\" corrects the grammar.",
    "error": "\"In 02/2024 was up to 165 pounds\" ",
    "correction": " \"In 02/2024 she was up to 165 pounds\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence lacks a clear subject for \"advised,\" and \"on\" is the correct preposition for a specific date.",
    "error": "\"Advised to keep his appointment with Dr. Kxxx in 02/11/2026 at Wxxx, where his pain contract will be updated, and any necessary labs will be reviewed.\" ",
    "correction": " \"He was advised to keep his appointment with Dr. Kxxx on 02/11/2026 at Wxxx, where his pain contract will be updated and any necessary labs will be reviewed.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing a subject for the verb \"encouraged.\"",
    "error": "\"Encouraged to contact the clinic if needed, as there are additional options available to help manage pain.\" ",
    "correction": " \"He was encouraged to contact the clinic if needed, as there are additional options available to help manage pain.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The second clause is missing an explicit subject.",
    "error": "\"The potential use of duloxetine for chronic musculoskeletal pain, fibromyalgia, and nerve pain was discussed, but prefers to wait until his next visit.\" ",
    "correction": " \"The potential use of duloxetine for chronic musculoskeletal pain, fibromyalgia, and nerve pain was discussed, but he prefers to wait until his next visit.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The clause \"although eligible\" is missing a clear subject and verb.",
    "error": "\"Colon cancer screening was declined although eligible.\" ",
    "correction": " \"Colon cancer screening was declined although he is eligible.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The second verb phrase needs the gerund form \"being\" to maintain parallel structure.",
    "error": "\"Emphasized the importance of living independently in older age and be able to perform daily activities without any difficulty.\" ",
    "correction": " \"Emphasized the importance of living independently in older age and being able to perform daily activities without any difficulty.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " \"Prior\" is not correctly used as a standalone adverb here; \"previously\" is the correct adverbial form.",
    "error": "\"This has been discussed prior.\" ",
    "correction": " \"This has been discussed previously.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The second sentence is a fragment missing a subject and article usage with \"the blood work\" is slightly awkward in this context.",
    "error": "\"- A well-woman exam was performed in 12/2024. Overdue for the blood work, which was last done in 12/2024.\" ",
    "correction": " \"- A well-woman exam was performed in 12/2024. She is overdue for blood work, which was last done in 12/2024.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The original is a sentence fragment missing an explicit subject and has slightly awkward tense structure.",
    "error": "\"- Currently on a 5 mg dose of the medication for the past month and is open to increasing the dosage.\" ",
    "correction": " \"She is currently on a 5 mg dose of the medication and has been for the past month, and she is open to increasing the dosage.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The past event requires the past tense verb \"occurred,\" not the present tense \"occurs.\"",
    "error": "\"The last visit occurs on 05/12/2025, with discussion focused on the clotting issue.\" ",
    "correction": " \"The last visit occurred on 05/12/2025, with discussion focused on the clotting issue.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "\"Maybe\" is incorrect here; the verb phrase \"may be\" is needed for correct grammar.",
    "error": "\"a short course of antibiotics maybe required.\" ",
    "correction": " \"a short course of antibiotics may be required.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original sentence omits the auxiliary verb \"is\" and is missing the article \"the\" before \"prior pace.\"",
    "error": "\"- Approximately 16-pound weight loss since 11/2025 reported, with recent increased difficulty maintaining prior pace, indicating ongoing monitoring of progress and challenges.\" ",
    "correction": " \"- Approximately 16-pound weight loss since 11/2025 is reported, with recent increased difficulty maintaining the prior pace, indicating ongoing monitoring of progress and challenges.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original sentence is missing the auxiliary verb \"was\" to form a complete passive construction.",
    "error": "\"- Expectation expressed that hemoglobin A1c will improve with continued dietary changes\" ",
    "correction": " \"- Expectation was expressed that hemoglobin A1c will improve with continued dietary changes.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The original sentence lacks a clear subject and finite verb, making it grammatically incomplete.",
    "error": "\"Recommended waiting for the results before leaving the clinic.\" ",
    "correction": " \"Recommend waiting for the results before leaving the clinic.\" or \"It is recommended that she wait for the results before leaving the clinic.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is grammatically incorrect; it needs a verb for \"consultation\" and \"a\" should be removed before \"blood work.\"",
    "error": "\"Cardiology consultation done on 11/2025 and had a blood work performed.\" ",
    "correction": " \"Cardiology consultation was done on 11/2025, and blood work was performed.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The verb \"include\" is incorrect in this context; \"cause\" is the appropriate verb to describe the relationship between a vaccine and illness.",
    "error": "\"Discussed that the vaccine cannot include clinical illness, though localized injection site tenderness is a common expected reaction.\" ",
    "correction": " \"Discussed that the vaccine cannot cause clinical illness, though localized injection site tenderness is a common expected reaction.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The original clause lacks a clear subject for \"prefers\"; adding \"she\" corrects the subject-verb structure and a comma before \"but\" correctly joins the clauses.",
    "error": "\"Pap smear screening was recommended but prefers to defer until she is ready.\" ",
    "correction": " \"Pap smear screening was recommended, but she prefers to defer until she is ready.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " Commas are needed around the nonrestrictive clause, and the singular subject \"Excedrin\" requires the verb \"is,\" not \"are.\"",
    "error": "\"Excedrin which contains caffeine and aspirin are good for headaches.\" ",
    "correction": " \"Excedrin, which contains caffeine and aspirin, is good for headaches.\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " A comma is needed before \"which,\" and the plural noun \"packages\" requires the verb \"are,\" not \"is.\"",
    "error": "\"Maxalt is a preferred medication under the ConnectiCare plan and comes in 12‑tablet packages which is good for a couple of years,\" ",
    "correction": " \"Maxalt is a preferred medication under the ConnectiCare plan and comes in 12‑tablet packages, which are good for a couple of years,\" ",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The verb \"were\" is needed for correct sentence structure and subject-verb agreement.",
    "error": "\"Iron studies done at the last visit with the nephrologist.\" ",
    "correction": " \"Iron studies were done at the last visit with the nephrologist.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": "The sentence is missing the subject \"she,\" leading to incorrect grammar and unclear reference.",
    "error": "\"If feels significantly better after a few months, can try reducing the dose by half for at least a week to see how it feels.\" ",
    "correction": " \"If she feels significantly better after a few months, she can try reducing the dose by half for at least a week to see how she feels.\"",
    "section": "ASSESSMENT AND PLAN"
  },
  {
    "reasoning": " The sentence is missing a verb; adding \"There is\" makes it grammatically complete.",
    "error": "\"No new diagnosis in the family.\" ",
    "correction": " \"There is no new diagnosis in the family.\" ",
    "section": "FAMILY HISTORY"
  },
  {
    "reasoning": " The final clause lacks a verb, and “and” is needed for parallel structure.",
    "error": "\"Father had one of his legs removed, had a stroke, multiple heart attacks.\" ",
    "correction": " \"Father had one of his legs removed, had a stroke, and had multiple heart attacks.\" ",
    "section": "FAMILY HISTORY"
  },
  {
    "reasoning": " The subject \"he\" is missing, creating a grammatical error in the clause.",
    "error": "\"..., so may have been exposed to many things.\" -",
    "correction": "\"..., so he may have been exposed to many things.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb \"informed\" is missing an object (e.g., \"them\" or \"the family\") to indicate who was informed.",
    "error": "\"Another physician informed that the medication the child had been taking could cause bowel issues and leg pain.\" -",
    "correction": "\"Another physician informed them that the medication the child had been taking could cause bowel issues and leg pain.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb tense is inconsistent; \"has also been experiencing\" (present perfect continuous) does not match the past time reference \"at that time.\"",
    "error": "\"His sister has also been experiencing vomiting at that time.\" -",
    "correction": "\"His sister also experienced vomiting at that time.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The subject \"he\" is missing after \"so,\" creating a grammatical error.",
    "error": "\"however, he is a student at Echo Park and his girlfriend is a nurse, so may have been exposed to many things.\" -",
    "correction": "\"however, he is a student at Echo Park and his girlfriend is a nurse, so he may have been exposed to many things.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The clause is missing the subject \"he,\" resulting in a grammatical error.",
    "error": "\"However, he is a student at Echo Park, and his girlfriend is a nurse, so may have been exposed to many things.\" -",
    "correction": "\"However, he is a student at Echo Park, and his girlfriend is a nurse, so he may have been exposed to many things.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The list is incorrectly punctuated and missing a conjunction, and the clause needs an explicit subject for correct grammar.",
    "error": "\"including fruits, vegetables, and meat, dairy, but does not consume milk.\" -",
    "correction": "\"including fruits, vegetables, meat, and dairy, but she does not consume milk.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The verb tense should be consistent with the present context, and \"a couple times\" should be \"a couple of times.\"",
    "error": "\"Minor headaches are occasionally experienced, which coincided with his abdominal pain a couple times.\" -",
    "correction": "\"Minor headaches are occasionally experienced, which have coincided with his abdominal pain a couple of times.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The subject of the second clause is missing; \"he\" is needed for correct parallel structure.",
    "error": "\"Most of his time is spent at home playing games for enjoyment and is considering resuming swimming.\" -",
    "correction": "\"Most of his time is spent at home playing games for enjoyment, and he is considering resuming swimming.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The subject of the second clause (\"states\") is missing and needs \"he\" for correct subject-verb agreement.",
    "error": "\"Occasional feelings of stress or anxiety are reported but states that his current symptoms do not feel similar.\" -",
    "correction": "\"Occasional feelings of stress or anxiety are reported, but he states that his current symptoms do not feel similar.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The second clause lacks a subject, resulting in faulty parallel structure.",
    "error": "\"Pressure headaches continue to be experienced, primarily in the forehead area, and occasional ear cloudiness.\" -",
    "correction": "\"Pressure headaches continue to be experienced, primarily in the forehead area, and he has occasional ear cloudiness.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The verb should agree with the singular subject \"Pumps once daily,\" so \"yields\" is required.",
    "error": "\"Pumps once daily yield about 6 ounces of milk per breast.\" -",
    "correction": "\"Pumps once daily yields about 6 ounces of milk per breast.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The verb form is incorrect; it should be in the passive voice to indicate testing performed on her.",
    "error": "\"She does not want to check for influenza and COVID-19.\" -",
    "correction": "\"She does not want to be checked for influenza and COVID-19.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The verbs in the list should be parallel; “watching TV, phone or iPad” is grammatically awkward because “watching” does not appropriately apply to “phone or iPad” without “using.”",
    "error": "\"She enjoys her free time watching TV, phone or iPad.\" -",
    "correction": "\"She enjoys her free time watching TV and using her phone or iPad.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The repeated verb \"had\" makes the sentence awkward; removing the second \"had\" corrects the grammar.",
    "error": "\"She had her 18-month checkup 2 months ago and had her 20-month visit.\" -",
    "correction": "\"She had her 18-month checkup 2 months ago and her 20-month visit.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " \"Healthy\" is an adjective; the adverb \"healthily\" is grammatically correct when modifying \"eating.\"",
    "error": "\"She has been eating healthy.\" -",
    "correction": "\"She has been eating healthily.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The second clause is missing a subject, creating a grammatical fragment/dangling modifier.",
    "error": "\"Sleep:  His sleep pattern is regular, typically retires between 8:00 and 9:00 PM.\" ",
    "correction": " His sleep pattern is regular, and he typically retires between 8:00 and 9:00 PM.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The subject \"he\" is missing, making the clause grammatically incomplete.",
    "error": "\"so may have been exposed to many things.\" -",
    "correction": "\"so he may have been exposed to many things.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The verb phrase is missing the auxiliary \"has\" to form the present perfect tense, matching the surrounding context.",
    "error": "\"started to grab objects.\" -",
    "correction": "\"has started to grab objects.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The original is a sentence fragment lacking a clear subject; adding \"He had\" corrects this.",
    "error": "\"Temperatures ranging from the mid-99s to 100.7 degrees Fahrenheit were recorded at the daycare.\" -",
    "correction": "\"He had temperatures ranging from the mid-99s to 100.7 degrees Fahrenheit recorded at the daycare.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " Verb tense should be consistent (past tense) within the sentence.",
    "error": "\"The child experienced itching throughout the night but reports no pain.\" -",
    "correction": "\"The child experienced itching throughout the night but reported no pain.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " This is a comma splice and is missing the subject \"she\" in the second clause.",
    "error": "\"The mother asked if this is a cause for concern, however, reports multiple wet diapers during the day.\" -",
    "correction": "\"The mother asked if this is a cause for concern; however, she reports multiple wet diapers during the day.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "Subject-verb agreement error; \"1 cat\" is singular and should take \"is.\"",
    "error": "\"There are 1 cat and 2 dogs at home.\" -",
    "correction": "\"There is 1 cat and 2 dogs at home.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The plural subject \"Tums\" requires the plural verb \"have\" for correct subject-verb agreement.",
    "error": "\"Tums has been taken for relief\" -",
    "correction": "\"Tums have been taken for relief\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The verb should be singular (\"manages\") to agree with the singular subject \"nasal spray.\"",
    "error": "\"which effectively manage her symptoms.\" -",
    "correction": "\"which effectively manages her symptoms.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The present perfect tense requires the auxiliary verb \"has\" before \"been.\"",
    "error": "\"He been using an Axxx watch for 3 or 4 years.\" ",
    "correction": " \"He has been using an Axxx watch for 3 or 4 years.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The original construction is ungrammatical; \"inquired\" needs the preposition \"about\" and a clear subject and verb for the subordinate clause.",
    "error": "\"The duration of the treatment was inquired whether to be continued for an additional 3 to 6 months.\" ",
    "correction": " \"The duration of the treatment was inquired about, specifically whether it should be continued for an additional 3 to 6 months.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb should be singular (\"was\") to agree with the singular subject \"EKG.\"",
    "error": "\"who performed an EKG, which were normal.\" ",
    "correction": " \"who performed an EKG, which was normal.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The verb \"took\" is missing, making the clause grammatically incomplete.",
    "error": "\"He has had bilateral lower lobe atelectasis and that about a month for complete resolution.\" ",
    "correction": " \"He has had bilateral lower lobe atelectasis, and that took about a month for complete resolution.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The verb \"referred\" requires a direct object; \"him\" is missing.",
    "error": "\"The ER physician has referred, but he declined admission to Adventist Health Memorial as his symptoms had resolved.\" ",
    "correction": " \"The ER physician has referred him, but he declined admission to Adventist Health Memorial as his symptoms had resolved.\"\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "\"Heavy\" should be the adverb \"heavily\" to modify \"eats.\"",
    "error": "\"if she eats heavy at night\" ",
    "correction": " \"if she eats heavily at night\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb \"were\" is needed for correct passive construction and subject-verb agreement.",
    "error": "\"No symptoms of shortness of breath, chest pain, or lightheadedness during her exercise routines reported.\" ",
    "correction": " \"No symptoms of shortness of breath, chest pain, or lightheadedness during her exercise routines were reported.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The auxiliary \"been\" is unnecessary with \"remained\" and makes the verb phrase ungrammatical.",
    "error": "\"He explained that his heart rate has been consistently remained 90 on random checks.\" ",
    "correction": " \"He explained that his heart rate has consistently remained 90 on random checks.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " A semicolon (or period) is needed before \"however,\" and the subject \"he\" should be included in the second clause.",
    "error": "\"He is not on blood thinners currently, however, has used them in the past.\" ",
    "correction": " \"He is not on blood thinners currently; however, he has used them in the past.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb “recommend” in passive form should be followed by an infinitive (“to have cardioversion”) for correct grammar.",
    "error": "\"He was seen by Clare Tasse, PA, and was recommended a cardioversion prior to ablation.\" ",
    "correction": " \"He was seen by Clare Tasse, PA, and was recommended to have cardioversion prior to ablation.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " This is a comma splice and the second clause lacks a verb, so it needs proper punctuation and a complete clause.",
    "error": "\"He reports leg swelling while he was in the hospital, however, none currently.\" ",
    "correction": " \"He reports leg swelling while he was in the hospital; however, he has none currently.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "Subject-verb agreement error; the plural noun \"pressures\" requires the plural verb \"vary.\"",
    "error": "\"His blood pressures varies when he checks them multiple times a day.\" ",
    "correction": " \"His blood pressures vary when he checks them multiple times a day.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The second clause lacks a clear subject, making the sentence grammatically incomplete.",
    "error": "\"Minimal activity was performed on 12/19/2025 and 12/20/2025; however, on 12/19/2025 involved repeatedly climbing a tall ladder for painting tasks.\" ",
    "correction": " \"Minimal activity was performed on 12/19/2025 and 12/20/2025; however, activity on 12/19/2025 involved repeatedly climbing a tall ladder for painting tasks.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The subject \"she\" is missing after \"but,\" creating a grammatical error.",
    "error": "\"Attempts have been made to manage the symptoms with electrolytes, water, and multivitamins (gummies), but often experiences stomach pain that prevents her from eating or drinking.\" ",
    "correction": " \"Attempts have been made to manage the symptoms with electrolytes, water, and multivitamins (gummies), but she often experiences stomach pain that prevents her from eating or drinking.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb forms are not parallel; \"felt\" aligns with \"a decrease\" in a coordinated structure.",
    "error": "\"a decrease in her pulse oximetry readings and feeling short of breath easily.\" ",
    "correction": " \"a decrease in her pulse oximetry readings and felt short of breath easily.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"a\" before \"sensation\" and the verb \"were\" after \"episode\" are needed for correct sentence structure.",
    "error": "\"No respiratory symptoms such as coughing, sneezing, or sensation of impending sickness prior to the episode reported.\" ",
    "correction": " \"No respiratory symptoms such as coughing, sneezing, or a sensation of impending sickness prior to the episode were reported.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb \"was\" is needed for correct grammar.",
    "error": "\"She does not consume Gatorade, but possible dehydration during the episode reported.\" ",
    "correction": " \"She does not consume Gatorade, but possible dehydration during the episode was reported.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The second clause lacks a clear subject, creating a grammatical error in subject-verb agreement and sentence structure.",
    "error": "\"A monitor has not been worn by him for a week as previously suggested and has been recommended to visit Carroll Hospital.\" ",
    "correction": " \"A monitor has not been worn by him for a week as previously suggested, and it has been recommended that he visit Carroll Hospital.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The phrase \"even though being on\" is ungrammatical; it requires a subject and verb (\"she is\") for correct clause structure.",
    "error": "\"Even though being on a low dose of Seroquel, she has been unable to sleep due to persistent pain on her pressure points.\" ",
    "correction": " \"Even though she is on a low dose of Seroquel, she has been unable to sleep due to persistent pain on her pressure points.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The participial phrase \"taking a sip of water with pills\" is dangling because its subject is unclear; the revision clarifies the subject.",
    "error": "\"Inadequate water intake is reported, taking a sip of water with pills.\" ",
    "correction": " \"Inadequate water intake is reported; he only takes a sip of water with pills.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "\"Short of breath\" is not a correct noun form here; \"shortness of breath\" or a full verb phrase is needed.",
    "error": "\"She feels heaviness and that caused short of breath.\" ",
    "correction": " \"She feels heaviness, and that caused shortness of breath.\" OR \"She feels heaviness, and that caused her to be short of breath.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The phrase \"acknowledges to prolonged sitting\" is ungrammatical; \"to\" should be removed or replaced with a clearer verb phrase.",
    "error": "\"She reports no recent changes in diet or increased salt intake but acknowledges to prolonged sitting due to her full-time school schedule and jobs.\" ",
    "correction": " \"She reports no recent changes in diet or increased salt intake but acknowledges prolonged sitting due to her full-time school schedule and jobs.\" OR \"…but attributes this to prolonged sitting…\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " This corrects a comma splice and fixes the subject-verb agreement by adding \"she\" before \"has.\"",
    "error": "\"She is not used to her feet being normal, they are swollen always but has no swelling at the current time.\" ",
    "correction": " \"She is not used to her feet being normal; they are always swollen but she has no swelling at the current time.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "\"Afterward\" is the correct adverb meaning \"at a later time\"; \"afterword\" is a noun referring to a section at the end of a book.",
    "error": "\"afterword\" ",
    "correction": " \"afterward\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " Missing article and incorrect verb tense for an action continuing from the past to the present.",
    "error": "\"She maintains blood pressure log since 11/17/2025.\" ",
    "correction": " \"She has maintained a blood pressure log since 11/17/2025.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb pattern \"recommended her to obtain\" is incorrect; it should be \"recommended that she obtain,\" and \"heart\" needs the definite article \"the.\"",
    "error": "\"Her oncologist recommended her to obtain an echocardiogram since the chemotherapy would have an impact on heart over time.\" ",
    "correction": " \"Her oncologist recommended that she obtain an echocardiogram since the chemotherapy would have an impact on the heart over time.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The present perfect \"has tried\" should not be used with specific past times (\"yesterday and today\"); simple past \"tried\" is correct, and the time phrase should follow the verb phrase more naturally.",
    "error": "\"She has tried yesterday and today taking garlic tablets, vinegar, and lemon juice for their purported cardiovascular benefits.\" ",
    "correction": " \"She tried taking garlic tablets, vinegar, and lemon juice yesterday and today for their purported cardiovascular benefits.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb phrase \"do along\" is missing an object (\"it\"), and \"scheduled in\" should be \"scheduled for\" for correct preposition use.",
    "error": "\"She inquires if she can wait for her echocardiogram and do along with her thyroid ultrasound, which is scheduled in 01/2026.\" ",
    "correction": " \"She inquires if she can wait for her echocardiogram and do it along with her thyroid ultrasound, which is scheduled for 01/2026.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb tenses are inconsistent; both actions in the past should use the past perfect tense for parallel structure.",
    "error": "\"She had followed up with Dr. Exxx-Hashem previously and has seen Dr. Lxxx on 11/23/2025.\" ",
    "correction": " \"She had followed up with Dr. Exxx-Hashem previously and had seen Dr. Lxxx on 11/23/2025.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb tense should be past tense to match the implied timing of the prescription.",
    "error": "\"She inquires if Dr. Axxx prescribes her Lipitor.\" ",
    "correction": " \"She inquires if Dr. Axxx prescribed her Lipitor.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb \"requested\" should take a direct object without \"for,\" and the article \"a\" is needed before \"medication supply.\"",
    "error": "\"He requested for medication supply until 05/2026.\" ",
    "correction": " \"He requested a medication supply until 05/2026.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The original has a sentence fragment and incorrect subject-verb agreement; \"visits\" requires \"involve,\" and the clause should be made into a complete sentence.",
    "error": "\"His visits with Dr. Txxx, which typically involves blood pressure checks, smoking status updates, and steroid prescriptions.\" ",
    "correction": " \"His visits with Dr. Txxx typically involve blood pressure checks, smoking status updates, and steroid prescriptions.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The verb phrase should be in the past perfect (\"might have been\") to match the past event being described.",
    "error": "\"She recalls having severe pain on 11/23/2025, which she suspects might be related to a heart attack.\" ",
    "correction": " \"She recalls having severe pain on 11/23/2025, which she suspects might have been related to a heart attack.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " An article is missing before \"old issue,\" a possessive pronoun is needed before \"hips,\" and the verb should agree in number with the singular noun \"issue.\"",
    "error": "\"She has old issue with hips that need redoing, but the doctor does not want to do it.\" ",
    "correction": " \"She has an old issue with her hips that needs redoing, but the doctor does not want to do it.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb form and sentence structure are incorrect; \"is used to sew\" should be \"used to sew,\" and the second clause needs a verb (\"is\").",
    "error": "\"She is used to sew previously and now not able to even hold the needle.\" ",
    "correction": " \"She used to sew previously and is now not able to even hold the needle.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The sentence has incorrect word order and verb form, making it ungrammatical.",
    "error": "\"She reports that her veins appear flat and has been attempts are made to determine methods to improve venous fullness.\" ",
    "correction": " \"She reports that her veins appear flat and that attempts are being made to determine methods to improve venous fullness.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb \"have been\" is missing, making the sentence grammatically incomplete.",
    "error": "\"Symptoms present for several months, with onset in 2025.\" ",
    "correction": " \"Symptoms have been present for several months, with onset in 2025.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence shifts incorrectly from present to past tense; both verbs should be in the same tense.",
    "error": "\"He reports no acute chest pain but experienced a sensation of warmth in his face and chest\" ",
    "correction": " \"He reports no acute chest pain but experiences a sensation of warmth in his face and chest\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The clause is missing the subject and auxiliary verb (\"he is\"), resulting in incorrect grammar.",
    "error": "\"He mentions frequent urination even though taking Lasix every other day.\" ",
    "correction": " \"He mentions frequent urination even though he is taking Lasix every other day.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "Incorrect preposition and verb form; \"interested in\" should be followed by a gerund.",
    "error": "\"He is not interested to run on a treadmill.\" ",
    "correction": " \"He is not interested in running on a treadmill.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb \"is\" is needed for correct subject-verb construction in this sentence.",
    "error": "\"No swelling in the legs reported.\" ",
    "correction": " \"No swelling in the legs is reported.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " \"Doing this prescription\" is ungrammatical; \"prescribing this medication\" is the correct verb usage.",
    "error": "\"Dr. Uxxx has been doing this prescription.\" ",
    "correction": " \"Dr. Uxxx has been prescribing this medication.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The verb \"discuss\" does not take the preposition \"about\" in this context.",
    "error": "\"who presents to discuss about his liver problem.\" ",
    "correction": " \"who presents to discuss his liver problem.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The subject \"she\" is missing after \"whether,\" making the clause grammatically incomplete.",
    "error": "\"She inquired whether should consider taking the anxiety medication.\" ",
    "correction": " \"She inquired whether she should consider taking the anxiety medication.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The original sentence lacks a clear subject and has awkward verb usage, making it grammatically incorrect.",
    "error": "\"It was attempted to reduce the dosage to once daily but found it ineffective, experiencing a sensation of heaviness in the chest.\" ",
    "correction": " \"An attempt was made to reduce the dosage to once daily, but this was found to be ineffective, causing a sensation of heaviness in the chest.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing a subject and uses an awkward tense construction.",
    "error": "\"Previously has been diagnosed with Barrett's esophagus, a precancerous condition, and continues to take pantoprazole to control her acid reflux.\" ",
    "correction": " \"She was previously diagnosed with Barrett's esophagus, a precancerous condition, and continues to take pantoprazole to control her acid reflux.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The subject \"presence\" is singular and should take the singular verb \"was,\" not \"were.\"",
    "error": "\"No presence of blood or black stools were reported.\" ",
    "correction": " \"No presence of blood or black stools was reported.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The original uses an incorrect verb tense and creates a comma splice; the corrected version uses consistent present tense and proper coordination.",
    "error": "\"He typically eats bland cereals with sliced banana, had granola with sliced banana and grape juice.\" ",
    "correction": " \"He typically eats bland cereals with sliced banana and granola with sliced banana and grape juice.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The indirect object is misplaced; the verb should take \"soapy water enemas\" as its direct object and \"him\" as an indirect object introduced by \"to.\"",
    "error": "\"They administered him soapy water enemas every other day\" ",
    "correction": " \"They administered soapy water enemas to him every other day\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "\"Everyday\" is an adjective meaning ordinary; here it should be the adverbial phrase \"every day.\"",
    "error": "\"a potassium supplement drink everyday as the potassium was very low.\" ",
    "correction": " \"a potassium supplement drink every day as the potassium was very low.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "A comma is needed before the nonrestrictive clause \"who tested him,\" and the comma before \"and required\" should be removed to avoid incorrectly separating the two verb phrases sharing the same relative clause.",
    "error": "\"Through Dr. Sxxx and the Beaumont Hospital network, he was able to establish care with Dr. Oxxx who tested him for celiac disease due to poor absorption of vitamin B12, which had left his levels nearly nonexistent, and required him to receive regular vitamin B12 injections.\" ",
    "correction": " \"Through Dr. Sxxx and the Beaumont Hospital network, he was able to establish care with Dr. Oxxx, who tested him for celiac disease due to poor absorption of vitamin B12, which had left his levels nearly nonexistent and required him to receive regular vitamin B12 injections.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing a clear subject after \"but\" and needs an article before \"iron supplement.\"",
    "error": "\"Black stools are reported but believes it to be due to iron supplement.\" ",
    "correction": " \"Black stools are reported, but he believes this to be due to an iron supplement.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "Plural \"antibiotics\" and past-tense verb \"was\" are needed for correct subject-verb agreement and number.",
    "error": "\"She clarified that the usage of antibiotic is limited during previous surgical procedures\" ",
    "correction": " \"She clarified that the usage of antibiotics was limited during previous surgical procedures\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is a fragment and needs an explicit subject to be grammatically complete.",
    "error": "\"Currently awaiting the results of her exams before proceeding further with the therapy.\" ",
    "correction": " \"She is currently awaiting the results of her exams before proceeding further with the therapy.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The clause after \"although\" is missing a subject, making the sentence grammatically incomplete.",
    "error": "\"She does not take any cholesterol medication, although does have elevated cholesterol.\" ",
    "correction": " \"She does not take any cholesterol medication, although she does have elevated cholesterol.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The verb \"take\" is missing a direct object, making the sentence incomplete.",
    "error": "\"though she used to take in the past\" ",
    "correction": " \"though she used to take it in the past\" or \"though she used to take medication in the past\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb should be in the base form \"hurt\" after \"to,\" not \"hurts.\"",
    "error": "\"cause her back to hurts.\" ",
    "correction": " \"cause her back to hurt.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The singular subject \"She\" requires the singular verb form \"relies\" for correct subject-verb agreement.",
    "error": "\"and frequently rely on liquids to wash boluses down\" ",
    "correction": " \"and frequently relies on liquids to wash boluses down\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The verb tense shifts unnecessarily from present to past; present tense maintains consistency with surrounding sentences.",
    "error": "\"She described a sensation of food 'hanging' in the throat\" ",
    "correction": " \"She describes a sensation of food 'hanging' in the throat\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing an explicit subject and uses an incorrect tense construction.",
    "error": "\"Previously has been on Voquezna but discontinued taking it after running out of the medication.\" ",
    "correction": " \"He had previously been on Voquezna but discontinued taking it after running out of the medication.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing an explicit subject.",
    "error": "\"Subsequently, switched to some leftover Protonix, which was less effective, requiring increased dosages over time.\" ",
    "correction": " \"Subsequently, he switched to some leftover Protonix, which was less effective, requiring increased dosages over time.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The clause is missing a subject, making it grammatically incomplete.",
    "error": "\"was reported that it would take time to recover\" ",
    "correction": " \"she was told that it would take time to recover\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The subject \"he\" is missing, making the sentence grammatically incomplete.",
    "error": "\"Even with these dietary changes, continues to experience diarrhea\" ",
    "correction": " \"Even with these dietary changes, he continues to experience diarrhea\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The verb \"discuss\" is not normally followed by \"about\"; either remove \"about\" or change \"discussed\" to \"talked.\"",
    "error": "\"He has discussed about discontinuing it,\" ",
    "correction": " \"He has discussed discontinuing it,\" or \"He has talked about discontinuing it,\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The subject \"She\" is omitted, creating a sentence fragment.",
    "error": "\"Occasionally had to strain to pass stool, resulting in a hemorrhoid.\" ",
    "correction": " \"She occasionally had to strain to pass stool, resulting in a hemorrhoid.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb tense should reflect a completed action, and a comma is needed to set off the clause.",
    "error": "\"His previous gastroenterologist, whom he was following is retired.\" ",
    "correction": " \"His previous gastroenterologist, whom he was following, has retired.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The subject (\"He\") is missing from the sentence, making it grammatically incomplete.",
    "error": "\"Occasionally spends from 20 minutes to an hour in the bathroom, which is attributed to constipation.\" ",
    "correction": " \"He occasionally spends from 20 minutes to an hour in the bathroom, which is attributed to constipation.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The original contains a comma splice and omits the subject \"he\" in the second clause.",
    "error": "\"He usually does not undergo CAT scans in Lexington, however, would travel to Burnsville or Hxxx...\" ",
    "correction": " \"He usually does not undergo CAT scans in Lexington; however, he would travel to Burnsville or Hxxx...\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb forms are not parallel; \"reports\" (present) should be followed by another present participle (\"noting\") rather than the past tense \"noted.\"",
    "error": "\"She reports being released from Mackenzie Hospital, having signed release forms there last week, and noted that Lynchburg General Hospital should also have her records.\" ",
    "correction": " \"She reports being released from Mackenzie Hospital, having signed release forms there last week, and noting that Lynchburg General Hospital should also have her records.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The clause \"whenever taking any medication\" is missing a subject and should be rewritten with \"she takes\" for correct grammar.",
    "error": "\"She reports experiencing irritation whenever taking any medication.\" ",
    "correction": " \"She reports experiencing irritation whenever she takes any medication.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The phrases \"required Linzess\" and \"eventually required\" are missing explicit subjects, making the sentence grammatically incomplete.",
    "error": "\"including difficulty with bowel movements, required Linzess, masses and polyps were found, and eventually required an ileostomy and colostomy bag.\" ",
    "correction": " \"including difficulty with bowel movements, she required Linzess, masses and polyps were found, and she eventually required an ileostomy and colostomy bag.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The plural subject \"stools\" requires the plural verb \"are\" (\"The consistency of his stools is similar...\" is acceptable, but if focusing directly on \"stools\" as subject, it should be \"stools are similar\"; as written, this may be seen as slightly inconsistent in number).",
    "error": "\"The consistency of his stools is similar to applesauce,\" ",
    "correction": " \"The consistency of his stools is similar to applesauce,\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "Missing preposition \"of\" and incorrect verb tense for ongoing action.",
    "error": "\"She is taken care by a nurse on Mondays for a year now.\" ",
    "correction": " \"She has been taken care of by a nurse on Mondays for a year now.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence has an extra verb (\"occurs\") that makes the structure ungrammatical.",
    "error": "\"Excessive, non-malodorous gas occurs during bowel movements is reported.\" ",
    "correction": " \"Excessive, non-malodorous gas during bowel movements is reported.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb form is incorrect; \"has tested negative\" is the correct construction.",
    "error": "\"He has been tested negative for celiac disease.\" ",
    "correction": " \"He has tested negative for celiac disease.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb form \"resulting\" should be used without \"and\" to correctly modify the preceding clause.",
    "error": "\"She had a blockage which became inflamed and infected and resulting in significant pain\" ",
    "correction": " \"She had a blockage which became inflamed and infected, resulting in significant pain\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb should be plural (\"were\") to agree with the plural compound subject (\"fiber supplement powder and probiotics\").",
    "error": "\"She has been using a fiber supplement powder and probiotics with fiber which was provided to her by her friend.\" ",
    "correction": " \"She has been using a fiber supplement powder and probiotics with fiber, which were provided to her by her friend.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The subject \"he\" is missing in the second clause, making the sentence grammatically incomplete.",
    "error": "\"He was diagnosed with MS in 2020 after decades of good overall health; otherwise, had no significant gastrointestinal issues in the last 25 years.\" ",
    "correction": " \"He was diagnosed with MS in 2020 after decades of good overall health; otherwise, he had no significant gastrointestinal issues in the last 25 years.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The phrase \"is yet to receive\" is nonstandard here; present perfect \"has yet to receive\" matches the earlier verb tense.",
    "error": "\"She has placed an order for Mylanta via Sears, but she is yet to receive it.\" ",
    "correction": " \"She has placed an order for Mylanta via Sears, but she has yet to receive it.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The verb \"resuming\" should not be followed by \"to\" in this context.",
    "error": "\"He reports resuming to his usual routine with daily bowel movements that are slightly loose but manageable.\" ",
    "correction": " \"He reports resuming his usual routine with daily bowel movements that are slightly loose but manageable.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " This is a sentence fragment missing the subject and verb.",
    "error": "\"Currently, not on any medication for this condition.\" ",
    "correction": " \"Currently, she is not on any medication for this condition.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The compound plural subject requires the plural verb \"are\" rather than \"is.\"",
    "error": "\"No dark stools, blood in stools, difficulty swallowing, dark urine, or generalized itching is reported.\" ",
    "correction": " \"No dark stools, blood in stools, difficulty swallowing, dark urine, or generalized itching are reported.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The subject \"she\" is missing in the second clause, causing a subject-verb agreement/clarity issue.",
    "error": "\"Occasional nausea, vomiting, and abdominal pain are reported, but does not consider these symptoms abnormal.\" ",
    "correction": " \"Occasional nausea, vomiting, and abdominal pain are reported, but she does not consider these symptoms abnormal.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " This is a sentence fragment missing the subject \"she.\"",
    "error": "\"Occasionally eats salads but does not like fish.\" ",
    "correction": " \"She occasionally eats salads but does not like fish.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " This is a sentence fragment missing the subject \"she.\"",
    "error": "\"Recently joined a church, about 4 to 5 months ago, and finds comfort in prayer and meditation.\" ",
    "correction": " \"She recently joined a church, about 4 to 5 months ago, and finds comfort in prayer and meditation.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " This is a sentence fragment missing the subject \"she.\"",
    "error": "\"Recently started new medications and continues to follow a diet plan under the supervision of Dr. Mxxx.\" ",
    "correction": " \"She recently started new medications and continues to follow a diet plan under the supervision of Dr. Mxxx.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " This is a sentence fragment missing the subject \"she.\"",
    "error": "\"Typically, does not have stomach pain or other symptoms that would prompt her to seek medical care.\" ",
    "correction": " \"Typically, she does not have stomach pain or other symptoms that would prompt her to seek medical care.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The plural subject \"asthma, allergies, and eczema\" requires the plural verb \"worsen.\"",
    "error": "\"asthma, allergies, and eczema, which worsens during the winter.\" ",
    "correction": " \"asthma, allergies, and eczema, which worsen during the winter.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The original is a sentence fragment lacking a subject and verb; adding \"There is\" makes it a complete sentence.",
    "error": "\"Family history of colon cancer in his maternal grandfather.\" ",
    "correction": " \"There is a family history of colon cancer in his maternal grandfather.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb should agree with the plural subject (\"beans get\"), and a relative pronoun (\"that\") is needed for correct sentence structure.",
    "error": "\"especially solids like rice and beans gets stuck somewhere between the thoracic and abdominal area.\" ",
    "correction": " \"especially solids like rice and beans that get stuck somewhere between the thoracic and abdominal area.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb \"informed\" is used incorrectly with \"to have\"; it should be followed by \"that\" and a clause.",
    "error": "\"She was informed to have PCOS.\" ",
    "correction": " \"She was informed that she has PCOS.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The phrase \"reports of pain\" is ungrammatical here; \"reports pain\" is the correct verb-object construction.",
    "error": "\"He reports of pain in his bladder region at present.\" ",
    "correction": " \"He reports pain in his bladder region at present.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing an article before \"feeding therapist\" and uses an ungrammatical phrase \"him accepting\" instead of a clearer verbal construction.",
    "error": "\"The caregiver does not force him while feeding since feeding therapist is working on him accepting.\" ",
    "correction": " \"The caregiver does not force him while feeding since the feeding therapist is working on getting him to accept food.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The subject \"he\" is needed in the second clause to avoid a dangling construction, and a comma is needed before \"and\" joining two independent clauses.",
    "error": "\"No weight loss is reported due to this issue and does not take longer to eat or chew his food.\" ",
    "correction": " \"No weight loss is reported due to this issue, and he does not take longer to eat or chew his food.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The subject \"He\" is needed for a complete sentence.",
    "error": "\"Occasionally does experience heartburn.\" ",
    "correction": " \"He occasionally does experience heartburn.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb \"was\" is needed to form a complete passive construction.",
    "error": "\"Aortic valve replacement performed; no complications or problems reported since procedure.\" ",
    "correction": " \"Aortic valve replacement was performed; no complications or problems reported since procedure.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The subject \"she\" is needed after \"and\" to avoid a grammatically incomplete clause.",
    "error": "\"She fractured her little toe when she walked into something, and there is still a bruise visible and believes it will heal.\" ",
    "correction": " \"She fractured her little toe when she walked into something, and there is still a bruise visible and she believes it will heal.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The subject \"she\" is missing for the second clause, creating a grammatical fragment.",
    "error": "\"She fractured her little toe when she walked into something, and there is still a bruise visible and thinks it will heal.\" ",
    "correction": " \"She fractured her little toe when she walked into something, and there is still a bruise visible, and she thinks it will heal.\" OR \"She fractured her little toe when she walked into something; there is still a bruise visible, and she thinks it will heal.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb \"is\" is missing, making the clause grammatically incomplete.",
    "error": "\"He is considering restarting fludrocortisone to see if it beneficial.\" ",
    "correction": " \"He is considering restarting fludrocortisone to see if it is beneficial.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The subject \"she\" is missing in the second clause, making the sentence grammatically incomplete.",
    "error": "\"A dermatologist in Wamsutter has not yet been consulted, though still has a referral.\" ",
    "correction": " \"A dermatologist in Wamsutter has not yet been consulted, though she still has a referral.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The subject \"she\" is missing before the verb \"consulted.\"",
    "error": "\"In 08/2025, consulted her OB when she had worse cramping and heavy bleeding, leading to a hemoglobin level of 6 and necessitating an iron transfusion every other day in mid-09/2025.\" ",
    "correction": " \"In 08/2025, she consulted her OB when she had worse cramping and heavy bleeding, leading to a hemoglobin level of 6 and necessitating an iron transfusion every other day in mid-09/2025.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb phrase after \"and\" is incomplete; \"become exhausted\" is needed to parallel \"would get.\"",
    "error": "\"Prior to the infusion, she would get headaches from climbing stairs and exhausted with exertion, but these symptoms have improved.\" ",
    "correction": " \"Prior to the infusion, she would get headaches from climbing stairs and become exhausted with exertion, but these symptoms have improved.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb \"wish\" requires an infinitive phrase (\"to have\") in this context.",
    "error": "\"She does not wish STD testing today.\" ",
    "correction": " \"She does not wish to have STD testing today.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The phrase after the comma lacks a subject and verb connection; adding \"and\" correctly joins the two verb phrases.",
    "error": "\"She experienced leakage during her home infusion, also had arm pain and discoloration.\" ",
    "correction": " \"She experienced leakage during her home infusion and also had arm pain and discoloration.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The use of the article \"a\" before \"STD testing\" is incorrect, and the verb phrase \"to have\" is needed for correct grammar.",
    "error": "\"She does not wish a STD testing today.\" ",
    "correction": " \"She does not wish to have STD testing today.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb tense should be present perfect with \"for the past 6 months,\" and the original sentence is a comma splice and missing an explicit subject in the second clause.",
    "error": "\"Hobbies:  Lacks exercise for the past 6 months, however, attends spin classes once a week or every other week.\" ",
    "correction": " \"Hobbies:  Has lacked exercise for the past 6 months; however, she attends spin classes once a week or every other week.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The past participle \"reported\" is needed here for correct verb form.",
    "error": "\"No issues with swallowing tablets or capsules are report.\" ",
    "correction": " \"No issues with swallowing tablets or capsules are reported.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The plural subject \"symptoms\" requires the plural verb \"have,\" not \"has.\"",
    "error": "\"The symptoms were mild and has since resolved.\" ",
    "correction": " \"The symptoms were mild and have since resolved.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The past continuous form \"was watching\" is needed for correct verb tense.",
    "error": "\"could have increased as she watching Law & Order: SVU at that time.\" ",
    "correction": " \"could have increased as she was watching Law & Order:  SVU at that time.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb should be singular (\"has\") to agree with the singular gerund phrase \"falling sick.\"",
    "error": "\"He also recollects falling sick relatively easily in the past, which have also not been occurring recently.\" ",
    "correction": " \"He also recollects falling sick relatively easily in the past, which has also not been occurring recently.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The second clause is missing an explicit subject (\"he\"), and commas are needed to separate clauses.",
    "error": "\"He was found to have significant imbalances which have been addressed and currently does not experience symptoms of bipolar disorder.\" ",
    "correction": " \"He was found to have significant imbalances, which have been addressed, and he currently does not experience symptoms of bipolar disorder.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " \"Having had 3 stents and 2 surgeries\" is a dangling modifier that does not clearly refer to the patient, and needs its own subject.",
    "error": "\"He also had heart failure at one point, which is currently well-managed with medications, having had 3 stents and 2 surgeries.\" ",
    "correction": " \"He also had heart failure at one point, which is currently well managed with medications; he has had 3 stents and 2 surgeries.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The clause \"and has enough prescriptions remaining\" lacks a clear subject; adding \"he\" corrects the grammar.",
    "error": "\"He reports herpes simplex on his lips and genitals, which has been managed with valacyclovir since he was 20 years old, prescribed by Dr. Nxxx and has enough prescriptions remaining.\" ",
    "correction": " \"He reports herpes simplex on his lips and genitals, which has been managed with valacyclovir since he was 20 years old, prescribed by Dr. Nxxx, and he has enough prescriptions remaining.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The verb phrase is incorrect; it needs an auxiliary verb (\"has\") or a present tense form (\"takes\") for correct grammar.",
    "error": "\"She also taken ibuprofen.\" ",
    "correction": " \"She has also taken ibuprofen.\" or \"She also takes ibuprofen.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " Incorrect singular noun and incomplete phrase; it should use the plural \"feet\" and include a verb to complete the expression.",
    "error": "\"but recalls having one of her foot by Dr. Lxxx.\" ",
    "correction": " \"but recalls having one of her feet imaged by Dr. Lxxx.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The original phrase omits a verb and is grammatically incomplete; adding \"was increased\" corrects the sentence structure.",
    "error": "\"Even though an increase in dosage, she experiences only brief periods of focus,\" ",
    "correction": " \"Even though the dosage was increased, she experiences only brief periods of focus,\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "Using both \"expresses\" and \"reports\" together is redundant and ungrammatical; only one verb should be used.",
    "error": "\"He expresses reports concern that significant weight loss or frequent fasting may increase bile production.\" ",
    "correction": " \"He reports concern that significant weight loss or frequent fasting may increase bile production.\" (or \"He expresses concern that…\")",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The subject of \"goes to bed\" is missing; \"his\" and \"he\" are needed for correct subject-verb agreement and clarity.",
    "error": "\"Sleep:  Sleep pattern is stable and goes to bed around midnight.\" ",
    "correction": " \"Sleep:  His sleep pattern is stable, and he goes to bed around midnight.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verbs \"would cry\" and \"requires\" are in inconsistent tenses and should both be in the past tense.",
    "error": "\"It was reported that he would cry by the end of his feeding and requires a lot of standing, rocking and walking to pacify him.\" ",
    "correction": " \"It was reported that he would cry by the end of his feeding and required a lot of standing, rocking and walking to pacify him.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The original is a comma splice and sentence fragment; adding a subject and conjunction creates correct grammar.",
    "error": "\"Living Condition:  Recently relocated, wife and son are his only support system\" ",
    "correction": " \"Living Condition:  He recently relocated, and his wife and son are his only support system\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "Incorrect verb form; \"to avoid\" is needed after \"trying.\"",
    "error": "\"She is trying and avoid going to the hospital.\" ",
    "correction": " \"She is trying to avoid going to the hospital.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb phrase \"and still getting\" is grammatically incomplete and needs to be connected properly with a subject and verb.",
    "error": "\"He has discontinued receiving the COVID-19 vaccine after three doses and still getting sick.\" ",
    "correction": " \"He has discontinued receiving the COVID-19 vaccine after three doses because he was still getting sick.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb pattern \"attributes the cyst to be\" is incorrect; \"attributes [noun] as the reason\" is the correct construction here.",
    "error": "\"She has been experiencing cysts since her initial consultation and attributes the cyst to be the reason for ovarian surgery.\" ",
    "correction": " \"She has been experiencing cysts since her initial consultation and attributes the cyst as the reason for ovarian surgery.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "\"Lay\" is a transitive verb, and the correct intransitive form for reclining oneself is \"lie.\"",
    "error": "\"making her want to lay down in a dark room.\" ",
    "correction": " \"making her want to lie down in a dark room.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The verb tense should be past (\"occurred\") to match \"Yesterday.\"",
    "error": "\"Yesterday, during a conversation with a sister, a similar sensation occurs in the left ear, followed by sharp pain in both ears.\" ",
    "correction": " \"Yesterday, during a conversation with a sister, a similar sensation occurred in the left ear, followed by sharp pain in both ears.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The original sentence is missing a subject and article, making it grammatically incorrect.",
    "error": "\"and currently, her readings have fluctuated between 95 and 99 degrees Fahrenheit and notes for her a temperature of 98 or 99 is fever.\" ",
    "correction": " \"and currently, her readings have fluctuated between 95 and 99 degrees Fahrenheit and she notes that for her, a temperature of 98 or 99 is a fever.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing a subject and auxiliary verb after \"even though,\" making it grammatically incomplete.",
    "error": "\"which persisted even though taking meclizine.\" ",
    "correction": " \"which persisted even though she was taking meclizine.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The plural compound subject (\"Gabapentin and Flexeril\") requires the plural verb \"were.\"",
    "error": "\"Gabapentin and Flexeril was prescribed postoperatively\" ",
    "correction": " \"Gabapentin and Flexeril were prescribed postoperatively\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The subject \"he\" is missing in the second clause, causing a grammatical error.",
    "error": "\"Date of last tetanus vaccine is unknown but believes he may have received one in Drummond.\" ",
    "correction": " \"Date of last tetanus vaccine is unknown but he believes he may have received one in Drummond.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The original sentence has a misplaced modifier and unclear subject for \"who reported,\" leading to grammatical awkwardness.",
    "error": "\"Consultation with a speech pathologist was conducted who reported good performance.\" ",
    "correction": " \"A consultation with a speech pathologist was conducted, and the pathologist reported good performance.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing a subject, making it a sentence fragment.",
    "error": "\"However, was able to recognize her son when he called her.\" ",
    "correction": " \"However, she was able to recognize her son when he called her.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing a subject and uses a less formal \"if\" where \"whether\" is grammatically more appropriate in this context.",
    "error": "\"Inquired if occupational therapy is more focused on helping someone relearn smaller tasks, such as eating or daily activities.\" ",
    "correction": " \"She inquired whether occupational therapy is more focused on helping someone relearn smaller tasks, such as eating or daily activities.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing an explicit subject, making it a sentence fragment.",
    "error": "\"Inquired if she should be seeing a cardiologist next.\" ",
    "correction": " \"She inquired if she should be seeing a cardiologist next.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " \"Stroke-like\" requires a hyphen, and the plural subject \"symptoms\" requires the plural verb \"were\"; a comma is also needed in the series.",
    "error": "\"The only stroke like symptoms that she experienced was facial droop, eye droop and slurred speech.\" ",
    "correction": " \"The only stroke-like symptoms that she experienced were facial droop, eye droop, and slurred speech.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The verb \"attributing\" needs an object (\"this\" or \"it\") to complete the phrase.",
    "error": "\"attributing to her current medication regimen of alogliptin.\" ",
    "correction": " \"attributing this to her current medication regimen of alogliptin.\" or \"attributing it to her current medication regimen of alogliptin.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb form \"inquiries\" (noun) is incorrect here; it should be the verb \"inquires.\"",
    "error": "\"He inquiries about the possibility of assessing his kidney function.\" ",
    "correction": " \"He inquires about the possibility of assessing his kidney function.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The verb tense is inconsistent; \"had been experiencing\" correctly matches the past-time reference \"last night.\"",
    "error": "\"It was reported that she has been experiencing repeated episodes of vomiting last night\" ",
    "correction": " \"It was reported that she had been experiencing repeated episodes of vomiting last night\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The phrase \"Due to getting harder to lose weight\" is grammatically incorrect and lacks a clear subject.",
    "error": "\"Due to getting harder to lose weight and to benefit her HbA1c, Mounjaro was started.\" ",
    "correction": " \"Because it was getting harder for her to lose weight and to benefit her HbA1c, Mounjaro was started.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The second clause lacks a subject, leading to a subject-verb agreement error.",
    "error": "\"It is rare for her to fall asleep quickly and has to watch TV prior to falling asleep.\" ",
    "correction": " \"It is rare for her to fall asleep quickly, and she has to watch TV prior to falling asleep.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb tense and aspect are incorrect for a recurring action; \"undergoes\" is needed for something done regularly, and the article \"a\" is required before \"mammogram.\"",
    "error": "\"She underwent mammogram every other year and she is not currently due for her mammogram.\" ",
    "correction": " \"She undergoes a mammogram every other year and she is not currently due for her mammogram.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The parallel verb form requires \"to get\" to match \"submission\" in the construction.",
    "error": "\"which has requested submission of paperwork here and get the information entered in the system\" ",
    "correction": " \"which has requested submission of paperwork here and to get the information entered in the system\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "\"Inquiries\" is the wrong verb form here; \"inquires\" is the correct simple present tense.",
    "error": "\"She inquiries about signs and symptoms that may indicate the medication is causing blood pressure to drop too low.\" ",
    "correction": " \"She inquires about signs and symptoms that may indicate the medication is causing blood pressure to drop too low.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The original is a sentence fragment missing a subject and verb.",
    "error": "\"Up to date on his influenza vaccine.\" ",
    "correction": " \"He is up to date on his influenza vaccine.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " Word order is incorrect; the adverb \"currently\" should come before the verb \"weighs\" for proper grammar.",
    "error": "\"and he weighs currently 230.\" ",
    "correction": " \"and he currently weighs 230.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing the article \"A\" and the auxiliary verb \"was\" for proper sentence structure, and \"refill\" needs an article.",
    "error": "\"Request made for refill of pantoprazole.\" ",
    "correction": " \"A request was made for a refill of pantoprazole.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb \"was\" is needed to complete the passive construction.",
    "error": "\"Routine exercise regimen interrupted secondary to hip problems, home renovation activities for 7 weeks, and environmental heat.\" ",
    "correction": " \"Routine exercise regimen was interrupted secondary to hip problems, home renovation activities for 7 weeks, and environmental heat.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The conjunction \"and\" and past-tense verb \"was diagnosed\" are needed for a complete, grammatically correct sentence.",
    "error": "\"She went to Holy Name Medical Center has been diagnosed with arthritis in her hip and groin\" ",
    "correction": " \"She went to Holy Name Medical Center and was diagnosed with arthritis in her hip and groin\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"a\" is needed before \"suspected calcium deposit,\" and the subject \"she\" is needed before \"previously was noted\" for grammatical completeness.",
    "error": "\"X‑ray obtained at that time indicated suspected calcium deposit and previously was noted to have six calcium deposits in the right lung and two in the hip.\" ",
    "correction": " \"X‑ray obtained at that time indicated a suspected calcium deposit, and she previously was noted to have six calcium deposits in the right lung and two in the hip.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The subject should be plural (\"medications\") to agree with the plural verb \"include\" and the list of multiple items.",
    "error": "\"Current medication includes Starlix (nateglinide) 60 mg, metformin 1000 mg twice daily, glipizide 5 mg, cinnamon pills, vitamin D, and vitamin E.\" ",
    "correction": " \"Current medications include Starlix (nateglinide) 60 mg, metformin 1000 mg twice daily, glipizide 5 mg, cinnamon pills, vitamin D, and vitamin E.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The second sentence is a sentence fragment and needs a subject to be grammatically complete.",
    "error": "\"Occupation:  She was a merchant. Retired from a family-owned business in heating and cooling\" ",
    "correction": " \"Occupation:  She was a merchant. She retired from a family-owned business in heating and cooling\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The subject \"he\" is missing, making the clause grammatically incomplete.",
    "error": "\"although has a history of anesthesia use during an appendectomy three years ago.\" ",
    "correction": " \"although he has a history of anesthesia use during an appendectomy three years ago.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb \"was\" and the subject \"she\" are missing, making the sentence grammatically incomplete.",
    "error": "\"Her cholesterol checked this morning via fingerstick but did not bring the results.\" ",
    "correction": " \"Her cholesterol was checked this morning via fingerstick but she did not bring the results.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is a fragment because it lacks an explicit subject.",
    "error": "\"Measured her blood pressure every morning before breakfast.\" ",
    "correction": " \"She measured her blood pressure every morning before breakfast.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The subject \"she\" is missing before \"is unsure,\" causing a grammatical error.",
    "error": "\"Some blurry vision and lightheadedness are reported but is unsure if it is related to migraines.\" ",
    "correction": " \"Some blurry vision and lightheadedness are reported but she is unsure if it is related to migraines.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The subject \"she\" is missing before \"does not feel,\" causing a subject-verb agreement error.",
    "error": "\"The depression medications are not working well and does not feel like she is in a good place right now.\" ",
    "correction": " \"The depression medications are not working well and she does not feel like she is in a good place right now.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The original sentence has a faulty pronoun reference/subject, making it grammatically incomplete.",
    "error": "\"This was the knee that she had replaced and does not pivot like her natural knee.\" ",
    "correction": " \"This was the knee that she had replaced and it does not pivot like her natural knee.\" or \"This was the knee that she had replaced, which does not pivot like her natural knee.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The verb phrase is incomplete and ungrammatical; the sentence needs a subject for \"was diagnosed\" or a connector like \"where.\"",
    "error": "\"However, the sore throat returned after three days, prompting her to seek medical care and was diagnosed with COVID-19.\" ",
    "correction": " \"However, the sore throat returned after three days, prompting her to seek medical care, where she was diagnosed with COVID-19.\" or \"However, the sore throat returned after three days, and she sought medical care and was diagnosed with COVID-19.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb \"necessitates\" should be followed by a clause (\"that she stretch\") rather than an infinitive with \"to\" in this context.",
    "error": "\"which necessitates her to stretch the arm out.\" ",
    "correction": " \"which necessitates that she stretch the arm out.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The list \"exercise, nutrition\" needs \"and\" for proper parallel structure, and the subject \"he\" is needed to clarify who discontinued the program.",
    "error": "\"The patient was previously enrolled in an online weight management program that included counseling and group check-ins, giving advice on exercise, nutrition, but discontinued it post-surgery.\" ",
    "correction": " \"The patient was previously enrolled in an online weight management program that included counseling and group check-ins, giving advice on exercise and nutrition, but he discontinued it post-surgery.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The original sentence is ungrammatical (mixed clause structure, wrong verb form, and unclear subject); this correction fixes clause order and subject-verb agreement.",
    "error": "\"The thoughts of just being dead almost daily and does want to exist he had during his last visit has significantly improved.\" ",
    "correction": " \"The thoughts of just being dead almost daily and not wanting to exist that he had during his last visit have significantly improved.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "Incorrect verb form; with \"does not,\" the base form \"recall\" should be used.",
    "error": "\"She does not recalls having an x-ray of her left knee in 2023.\" ",
    "correction": " \"She does not recall having an x-ray of her left knee in 2023.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The clause lacks a subject and verb, making it grammatically incomplete.",
    "error": "\"even though eating well and engaging in activities to promote weight loss.\" ",
    "correction": " \"even though she is eating well and engaging in activities to promote weight loss.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The second clause is missing a subject and verb, requiring \"that\" and \"is\" for correct grammar.",
    "error": "\"noting that the wait time for an appointment is three to four months and no backup available if the doctor is on vacation.\" ",
    "correction": " \"noting that the wait time for an appointment is three to four months and that no backup is available if the doctor is on vacation.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "\"Bath\" should be plural to agree with the compound subject, and the definite article \"the\" is needed before \"previous episode.\"",
    "error": "\"Preparation H and sitz bath have been used during previous episode.\" ",
    "correction": " \"Preparation H and sitz baths have been used during the previous episode.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The original sentence lacks a clear subject for \"squatted,\" creating a grammatical error.",
    "error": "\"When squatted to examine the area, the hemorrhoid appeared more noticeable.\" ",
    "correction": " \"When she squatted to examine the area, the hemorrhoid appeared more noticeable.\" OR \"When squatting to examine the area, the hemorrhoid appeared more noticeable.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The subject \"she\" is missing in the second clause, creating a grammatical error in coordination.",
    "error": "\"She has not recently seen her eye doctor, but plans for a consultation in the near future.\" ",
    "correction": " \"She has not recently seen her eye doctor, but she plans for a consultation in the near future.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "\"Closed\" is the wrong word choice here; the correct adverb is \"closely.\"",
    "error": "\"who is followed closed by oncology\" ",
    "correction": " \"who is followed closely by oncology\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The conjunction \"and\" incorrectly joins clauses with mismatched subjects; adding \"it\" clarifies the subject of the second clause.",
    "error": "\"He finds the gum beneficial for his oral health and has helped limit unnecessary eating.\" ",
    "correction": " \"He finds the gum beneficial for his oral health and it has helped limit unnecessary eating.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The plural subject \"Barriers\" requires the plural verb \"were,\" not \"was.\"",
    "error": "\"Barriers to activity was her ankle surgery in 03/2025 and non-weightbearing for 3 to 4 months.\" ",
    "correction": " \"Barriers to activity were her ankle surgery in 03/2025 and non-weightbearing for 3 to 4 months.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The second clause is missing a subject and verb, and \"o' clock\" should be written as \"o'clock.\"",
    "error": "\"He eats his dinner usually around 1 PM and latest meal about 6 o' clock.\" ",
    "correction": " \"He eats his dinner usually around 1 PM and his latest meal is about 6 o'clock.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb \"is\" is missing, leading to incorrect sentence structure.",
    "error": "\"Currently, she in the 10th grade.\" ",
    "correction": " \"Currently, she is in the 10th grade.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb \"have\" is missing, making the phrase grammatically incomplete.",
    "error": "\"who presents today to establish care and physical completed.\" ",
    "correction": " \"who presents today to establish care and have a physical completed.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The adverb \"temporarily\" is needed to modify the verb phrase \"diminished hearing\" in this context.",
    "error": "\"although he did experience ear pressure and temporary diminished hearing following a flight\" ",
    "correction": " \"although he did experience ear pressure and temporarily diminished hearing following a flight\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The conjunction “and” incorrectly joins “diaper” and “tired”; the second clause needs its own subject and verb.",
    "error": "\"which was followed by mild diarrhea overnight in his diaper and tired.\" ",
    "correction": " \"which was followed by mild diarrhea overnight in his diaper, and he was tired.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The plural subject \"lymph nodes\" should take a plural verb and pronoun (\"were reported\" and \"were normal\") rather than the singular \"it was normal.\"",
    "error": "\"The lymph nodes were examined by the urgent care doctor and reported it was normal.\" ",
    "correction": " \"The lymph nodes were examined by the urgent care doctor and were reported to be normal.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence lacks a clear subject and verb for the first clause; adding \"is\" and \"he\" clarifies subject-verb structure.",
    "error": "\"[] No leg swelling reported but experiences occasional shooting pain when lying down at night, which resolves spontaneously.\" ",
    "correction": " \"[] No leg swelling is reported, but he experiences occasional shooting pain when lying down at night, which resolves spontaneously.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing an explicit subject; adding \"He is\" corrects the grammar.",
    "error": "\"Currently on Mounjaro 7.5 mg and is in the process of transitioning to Zepbound under the care of another physician.\" ",
    "correction": " \"He is currently on Mounjaro 7.5 mg and is in the process of transitioning to Zepbound under the care of another physician.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing an explicit subject; adding \"He is\" corrects the grammar.",
    "error": "\"Currently on Truvada and is open to trying Yeztugo.\" ",
    "correction": " \"He is currently on Truvada and is open to trying Yeztugo.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The clause after \"although\" is missing the subject \"he.\"",
    "error": "\"He anticipates a positive result for HPV, as he was informed years ago that he had antibodies present, although has never exhibited any symptoms.\" ",
    "correction": " \"He anticipates a positive result for HPV, as he was informed years ago that he had antibodies present, although he has never exhibited any symptoms.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The verb \"attributing\" needs an object; \"them\" clarifies what is being attributed to the medication.",
    "error": "\"He reports experiencing headaches, attributing to his daily Strattera medication.\" ",
    "correction": " \"He reports experiencing headaches, attributing them to his daily Strattera medication.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The subject \"a decrease\" is singular and should take the singular verb \"was.\"",
    "error": "\"He was switched from bupropion to Strattera (atomoxetine), but after 1 to 2 weeks on atomoxetine, a decrease in mood and motivation were noticed.\" ",
    "correction": " \"He was switched from bupropion to Strattera (atomoxetine), but after 1 to 2 weeks on atomoxetine, a decrease in mood and motivation was noticed.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The subject of \"is advised\" is unclear and needs \"he\" to make the sentence grammatically correct.",
    "error": "\"Power of attorney is in place and is advised to update it periodically.\" ",
    "correction": " \"Power of attorney is in place, and he is advised to update it periodically.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb \"was\" is needed to complete the past passive construction.",
    "error": "\"Valtrex previously used for fever blisters; treatment has not been required recently.\" ",
    "correction": " \"Valtrex was previously used for fever blisters; treatment has not been required recently.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The sentence is a fragment and needs a subject (\"She\") to be grammatically complete.",
    "error": "\"Inquired if the colonoscopy was done six or nine months ago.\" ",
    "correction": " \"She inquired if the colonoscopy was done six or nine months ago.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The second clause lacks a subject and auxiliary verb, causing a grammatical error in the sentence.",
    "error": "\"CPAP therapy has previously been tried but discontinued 3 years ago when the machine broke and has not replaced it since.\" ",
    "correction": " \"CPAP therapy has previously been tried but was discontinued 3 years ago when the machine broke, and he has not replaced it since.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing a subject after \"Currently,\" leading to a grammatical fragment.",
    "error": "\"[] Currently, on a low dose of atorvastatin for cholesterol management and reports no issues with this medication.\" ",
    "correction": " \"[] Currently, the patient is on a low dose of atorvastatin for cholesterol management and reports no issues with this medication.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The clause after \"although\" is missing an explicit subject.",
    "error": "\"Blood pressure readings have been within the normal range, although has noticed occasional increases in heart rate, sometimes reaching the 100s.\" ",
    "correction": " \"Blood pressure readings have been within the normal range, although the patient has noticed occasional increases in heart rate, sometimes reaching the 100s.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The subject (\"she\" or \"the patient\") is missing from the clause.",
    "error": "\"after which experienced diarrhea and cramping upon resuming the medication.\" ",
    "correction": " \"after which she experienced diarrhea and cramping upon resuming the medication.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The subject of \"avoids\" is incorrect; it should refer to the patient, not \"artificial sweeteners.\"",
    "error": "\"Artificial sweeteners were identified as a trigger for the symptoms and avoids them.\" ",
    "correction": " \"Artificial sweeteners were identified as a trigger for the symptoms, and she avoids them.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The subject is missing, and the article \"a\" is needed before \"half dose.\"",
    "error": "\"Attempted to take half dose of Metamucil daily but discontinued it after experiencing bloating after 3 days and constipation-like symptoms.\" ",
    "correction": " \"She attempted to take a half dose of Metamucil daily but discontinued it after experiencing bloating after 3 days and constipation-like symptoms.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The subject (\"she\" or \"the patient\") is missing after the semicolon.",
    "error": "\"Linzess was started about 2 weeks ago; has been on Linzess for approximately 4 weeks as ordered on 10/28/2025, which has helped regulate the bowel movements.\" ",
    "correction": " \"Linzess was started about 2 weeks ago; she has been on Linzess for approximately 4 weeks as ordered on 10/28/2025, which has helped regulate the bowel movements.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The subject is missing, and \"where\" should be \"when\" to refer to the time of lunch.",
    "error": "\"On 12/02/2025 fell sick with elevated blood pressure, which was attributed to lunch on 12/01/2025 where cured ham was consumed.\" ",
    "correction": " \"On 12/02/2025 she fell sick with elevated blood pressure, which was attributed to lunch on 12/01/2025, when cured ham was consumed.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The current wording incorrectly makes \"pain medications\" the subject of \"laid down\"; it should be the patient, and the correct past tense is \"lay.\"",
    "error": "\"Pain medications were taken and laid down, eventually passing out for over 2 hours.\" ",
    "correction": " \"Pain medications were taken and she lay down, eventually passing out for over 2 hours.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The verb should be singular (\"was\") to agree with the singular noun \"endoscopy.\"",
    "error": "\"She was diagnosed with H. pylori following an endoscopy, which were performed due to persistent heartburn and abdominal swelling.\" ",
    "correction": " \"She was diagnosed with H. pylori following an endoscopy, which was performed due to persistent heartburn and abdominal swelling.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The second clause is missing the subject \"it.\"",
    "error": "\"She queries how long it will take to figure out if it is a regular cold or if is due to bacteria.\" ",
    "correction": " \"She queries how long it will take to figure out if it is a regular cold or if it is due to bacteria.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " This is a sentence fragment and needs a subject to be grammatically complete.",
    "error": "\"Injured her little toe last week due to loss of sensation, causing it to bleed.\" ",
    "correction": " \"She injured her little toe last week due to loss of sensation, causing it to bleed.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The second clause lacks a verb, making the sentence grammatically incomplete.",
    "error": "\"She has been using the compression boots for approximately an hour for a month and nurse visits three times a week.\" ",
    "correction": " \"She has been using the compression boots for approximately an hour for a month and has nurse visits three times a week.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The comma incorrectly separates the verb from its essential clause, creating a grammatical error.",
    "error": "\"since she does not want to take something, she no longer needs.\" ",
    "correction": " \"since she does not want to take something she no longer needs.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb \"requested\" is used incorrectly with the infinitive; it should take a noun phrase or a \"that\" clause.",
    "error": "\"She requested to recommend a pediatrician.\" ",
    "correction": " \"She requested a recommendation for a pediatrician.\" or \"She requested that a pediatrician be recommended.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb tense and the use of \"anymore\" are awkward here; \"is no longer filled\" is the correct present-tense construction.",
    "error": "\"It was not filled by Dr. Mxxx anymore.\" ",
    "correction": " \"It is no longer filled by Dr. Mxxx.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " \"Lie\" is the correct intransitive verb for reclining; \"lay\" is transitive and requires an object.",
    "error": "\"she will lay down.\" ",
    "correction": " \"she will lie down.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing a subject for the participial phrase and a linking \"when,\" making the original construction grammatically unclear.",
    "error": "\"There was one instance while wearing the Holter monitor she pushed the button and symptoms correlated with the findings.\" ",
    "correction": " \"There was one instance while she was wearing the Holter monitor when she pushed the button, and symptoms correlated with the findings.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb \"are\" is needed to form the correct passive construction.",
    "error": "\"When symptoms present, she has to sit down,\" ",
    "correction": " \"When symptoms are present, she has to sit down,\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " A comma is needed before \"unfortunately\" when it is used as a sentence adverb.",
    "error": "\"His mother states they were not aware of the seizures until it was too late unfortunately.\" ",
    "correction": " \"His mother states they were not aware of the seizures until it was too late, unfortunately.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb \"mowing\" is missing, and a comma is needed before \"which\" in a nonrestrictive clause.",
    "error": "\"This includes at the cemetery which he has done for over 20 years.\" ",
    "correction": " \"This includes mowing at the cemetery, which he has done for over 20 years.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " Redundant and incorrect verb construction; it needs either a linking verb (“was”) or an action verb (“tested”), but not both.",
    "error": "\"but the strep test was tested negative.\" ",
    "correction": " \"but the strep test was negative.\" or \"but the strep test tested negative.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The verb tense should be past perfect for earlier ongoing actions, and the verb must agree in number with the plural subject \"symptoms.\"",
    "error": "\"Previously, symptoms have been occurring every morning and is now present daily\" ",
    "correction": " \"Previously, symptoms had been occurring every morning and are now present daily\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb tenses are inconsistent; both actions should be in the same past tense for grammatical correctness.",
    "error": "\"He has declined the influenza vaccine initially but showed interest in receiving the vaccination today in the clinic.\" ",
    "correction": " \"He declined the influenza vaccine initially but showed interest in receiving the vaccination today in the clinic.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb \"states\" should be followed by \"that\" and a finite clause, not a gerund.",
    "error": "\"The patient states paying approximately 600 dollars each month for the plan\" ",
    "correction": " \"The patient states that he pays approximately 600 dollars each month for the plan\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing a conjunction (\"that\") to correctly link the reporting verb to the clause.",
    "error": "\"She reports occasional lower back discomfort in the mornings is alleviated by hot showers.\" ",
    "correction": " \"She reports that occasional lower back discomfort in the mornings is alleviated by hot showers.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb phrase \"has started it three weeks ago\" is grammatically incorrect; it needs either a simple past (\"started\") with a subject or a present perfect construction (\"has been taking it\") consistent with \"three weeks ago.\"",
    "error": "\"She has been prescribed a weight loss medication, which was approved and has started it three weeks ago.\" ",
    "correction": " \"She has been prescribed a weight loss medication, which was approved, and she started it three weeks ago.\" OR \"She has been prescribed a weight loss medication, which was approved, and has been taking it for three weeks.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "Missing verb \"is\" makes the sentence grammatically incorrect.",
    "error": "\"This her first visit to the clinic.\" ",
    "correction": " \"This is her first visit to the clinic.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The verb tense should be past to be consistent with the prior past events described.",
    "error": "\"and the pessary is likely removed.\" ",
    "correction": " \"and the pessary was likely removed.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The verb tense should be past to match the narrative of past events.",
    "error": "\"She returns twice for evaluation.\" ",
    "correction": " \"She returned twice for evaluation.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The verb form \"to receiving\" is incorrect; the infinitive \"to receive\" should be used.",
    "error": "\"He got influenza after receiving the influenza vaccine last year at the local pharmacy but is willing to receiving any outstanding vaccines today.\" ",
    "correction": " \"He got influenza after receiving the influenza vaccine last year at the local pharmacy but is willing to receive any outstanding vaccines today.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The second clause is missing a subject; \"he\" is needed for correct grammar.",
    "error": "\"No dentures are in place and has had a bad experience with the dentist previously.\" ",
    "correction": " \"No dentures are in place and he has had a bad experience with the dentist previously.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The clause \"but is unsure\" is missing the subject \"he\" and does not agree with the plural subject of the previous clause.",
    "error": "\"Some aunts and uncles were also diagnosed with cancer but is unsure if it was small cell cancer.\" ",
    "correction": " \"Some aunts and uncles were also diagnosed with cancer but he is unsure if it was small cell cancer.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb \"does\" creates incorrect parallel structure; both hobbies should be listed as nouns.",
    "error": "\"Hobbies:  Dancing and does weightlifting.\" ",
    "correction": " \"Hobbies:  Dancing and weightlifting.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The original sentence is a fragment with inconsistent structure; adding a subject clarifies the grammar.",
    "error": "\"Diet:  High intake of candy and consumes a significant amount of Diet Pepsi.\" ",
    "correction": " \"Diet:  High intake of candy, and he consumes a significant amount of Diet Pepsi.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "Incorrect noun form used; the verb \"initiated\" is needed instead of the noun \"initiation.\"",
    "error": "\"She initiation of gel injections through Dr. Txxx yesterday.\" ",
    "correction": " \"She initiated gel injections through Dr. Txxx yesterday.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The relative pronoun and verb form are incorrect for the plural noun \"samples\"; \"which were\" is needed.",
    "error": "\"amounting to nearly 15 samples taken, that was required due to the administration of heparin.\" ",
    "correction": " \"amounting to nearly 15 samples taken, which were required due to the administration of heparin.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The plural subject \"cramps\" requires the plural pronoun \"they\" rather than the singular \"it.\"",
    "error": "\"She also mentions experiencing cramps in her head fleetingly for a second before it goes away\" ",
    "correction": " \"She also mentions experiencing cramps in her head fleetingly for a second before they go away\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The noun phrase \"runny nose\" requires an article \"a,\" and adverb placement can be improved.",
    "error": "\"She has runny nose frequently.\" ",
    "correction": " \"She has a runny nose frequently.\" or \"She frequently has a runny nose.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "Incorrect verb form; \"tries\" must be followed by \"to maintain.\"",
    "error": "\"Diet:  She tries maintains a healthy diet.\" ",
    "correction": " \"Diet:  She tries to maintain a healthy diet.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The subject is unclear and the number does not agree; \"her calls\" correctly indicates who is calling and that there have been multiple calls.",
    "error": "\"She has not yet received the prescription, and recently the call has not been answered.\" ",
    "correction": " \"She has not yet received the prescription, and recently her calls have not been answered.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The original sentence is missing a clear subject for \"attributed,\" resulting in faulty sentence structure.",
    "error": "\"Last year her A1c was 6.1, up from 5.8 previously and attributed it to the way she has been eating lately.\" ",
    "correction": " \"Last year her A1c was 6.1, up from 5.8 previously, and she attributed it to the way she has been eating lately.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The subject \"she\" is needed after the comma to avoid a missing-subject error in the second clause.",
    "error": "\"She typically drinks a significant amount of water but for reasons unbeknownst to her, is not drinking much at this time.\" ",
    "correction": " \"She typically drinks a significant amount of water but, for reasons unbeknownst to her, she is not drinking much at this time.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb should be singular (\"was\") to agree with the implied singular noun (\"temperature/reading\"), and a comma is needed before the nonrestrictive clause beginning with \"which.\"",
    "error": "\"with temperatures ranging anywhere from 97.5 to 97.9 or 98 degrees Fahrenheit but never above 98 degrees which were initially attributed to a broken thermometer.\" ",
    "correction": " \"with temperatures ranging anywhere from 97.5 to 97.9 or 98 degrees Fahrenheit but never above 98 degrees, which was initially attributed to a broken thermometer.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The verb form \"being\" is incorrect here; the past tense \"were\" is needed for proper grammar.",
    "error": "\"Even though her test results being normal\" ",
    "correction": " \"Even though her test results were normal\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The singular noun \"noise\" requires the singular verb \"was,\" not \"were.\"",
    "error": "\"food noise, which were absent when he was on the lowest dose of the medication.\" ",
    "correction": " \"food noise, which was absent when he was on the lowest dose of the medication.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The verb tense should be shifted to \"would\" to match the past-tense reporting (\"wanted\").",
    "error": "\"and wanted to ensure it will not be harmful with the medications she is currently taking\" ",
    "correction": " \"and wanted to ensure it would not be harmful with the medications she is currently taking\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb form \"likening\" is incorrect here; the past participle \"likened\" should be used to match the description.",
    "error": "\"described as a heavy pressure in the middle of her chest, likening to \"someone sitting heavily\" or \"beating\" on her chest.\" ",
    "correction": " \"described as a heavy pressure in the middle of her chest, likened to \"someone sitting heavily\" or \"beating\" on her chest.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The clause is missing the subject \"she\" before \"would be given,\" resulting in a grammatical error.",
    "error": "\"She did not take her medication today as she was due for lab work and also believed would be given a different blood pressure pill.\" ",
    "correction": " \"She did not take her medication today as she was due for lab work and also believed she would be given a different blood pressure pill.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "Incorrect verb tense; past time reference requires past tense.",
    "error": "\"He previously attends a psychiatric crisis center\" ",
    "correction": " \"He previously attended a psychiatric crisis center\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "Incorrect verb tense; past time reference requires past tense.",
    "error": "\"He previously consults with medication management for diabetes\" ",
    "correction": " \"He previously consulted with medication management for diabetes\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb \"describes\" needs \"the pain as\" rather than \"pain is\" to form a grammatically correct sentence.",
    "error": "\"He describes pain is primarily perceived in the hip flexor area and not in the back.\" ",
    "correction": " \"He describes the pain as primarily perceived in the hip flexor area and not in the back.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " \"Inquiries\" is a noun; the correct verb form is \"inquires.\"",
    "error": "\"He inquiries about the disparity between the right hip and left hip.\" ",
    "correction": " \"He inquires about the disparity between the right hip and left hip.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is a comma splice and is missing the subject \"she\" after \"however,\" so it needs a semicolon and explicit subject for correct grammar.",
    "error": "\"His mother has a preleukemia condition, however, does not believe she is at risk.\" ",
    "correction": " \"His mother has a preleukemia condition; however, she does not believe she is at risk.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The subject \"he\" is required after \"although\" for correct clause structure.",
    "error": "\"He has not vomited although believed he was close to vomiting this morning.\" ",
    "correction": " \"He has not vomited although he believed he was close to vomiting this morning.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The auxiliary verb \"was\" is needed to complete the passive construction.",
    "error": "\"He was presumed to have community-acquired pneumonia and treated with Unasyn and doxycycline.\" ",
    "correction": " \"He was presumed to have community-acquired pneumonia and was treated with Unasyn and doxycycline.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb “is” is missing, and the second “from” should be removed to correctly indicate place of origin.",
    "error": "\"He originally from Brighton from Mexico.\" ",
    "correction": " \"He is originally from Brighton, Mexico.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The singular subject (\"the patient\") requires the singular verb form \"has,\" not \"have.\"",
    "error": "\"but have since discontinued its use\" ",
    "correction": " \"but has since discontinued its use\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The subject (\"the patient\") is missing from the clause.",
    "error": "\"Previously, had been on acamprosate\" ",
    "correction": " \"Previously, the patient had been on acamprosate\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The plural subject \"Refills\" requires the plural verb \"were,\" not \"was.\"",
    "error": "\"Refills on Cialis was requested\" ",
    "correction": " \"Refills on Cialis were requested\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " Missing auxiliary verb \"has\" makes the phrase grammatically incomplete.",
    "error": "\"Recreational Drugs:  Not reduced marijuana use.\" ",
    "correction": " \"Recreational Drugs: Has not reduced marijuana use.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb \"is\" is missing, making the second clause grammatically incomplete.",
    "error": "\"He takes levothyroxine and prescribed vitamin D.\" ",
    "correction": " \"He takes levothyroxine and is prescribed vitamin D.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "\"Well\" is the correct adverb to modify the verb \"checked out,\" not \"good.\"",
    "error": "\"everything checked out good there.\" ",
    "correction": " \"everything checked out well there.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " \"The\" is incorrect here; the subject pronoun \"She\" is required.",
    "error": "\"The describes her discomfort as a popping sensation\" ",
    "correction": " \"She describes her discomfort as a popping sensation\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The verb \"is\" is missing, resulting in incorrect sentence structure.",
    "error": "\"He in under the care of an endocrinologist, who is monitoring his pituitary gland.\" ",
    "correction": " \"He is under the care of an endocrinologist, who is monitoring his pituitary gland.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The subject \"he\" is needed before \"believes,\" and a comma is needed before \"and he believes\" to correctly join the clauses.",
    "error": "\"He bites his nails subconsciously, but they do not hurt and believes it is psychological.\" ",
    "correction": " \"He bites his nails subconsciously, but they do not hurt, and he believes it is psychological.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "\"Lay\" is the wrong verb form here; \"lie\" is correct when there is no direct object.",
    "error": "\"He reports an ache and pain in his hip and cannot lay flat on his back, needing to keep his knees up.\" ",
    "correction": " \"He reports an ache and pain in his hip and cannot lie flat on his back, needing to keep his knees up.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb tense is incorrect for the current context; \"has not attended\" is the correct present perfect form.",
    "error": "\"Hobbies:  Golfing and had not attended the gym for about 2 weeks.\" ",
    "correction": " \"Hobbies:  Golfing and has not attended the gym for about 2 weeks.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The original sentence incorrectly makes \"ablation\" the implied subject of \"has not had\"; adding \"she\" clarifies the correct subject.",
    "error": "\"An ablation for AFib was performed successfully and has not had any problems since.\" ",
    "correction": " \"An ablation for AFib was performed successfully, and she has not had any problems since.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The subject of \"reports\" is unclear and needs \"she\" to make the sentence grammatically correct.",
    "error": "\"Her husband is currently undergoing testosterone therapy, and reports difficulty keeping up with him.\" ",
    "correction": " \"Her husband is currently undergoing testosterone therapy, and she reports difficulty keeping up with him.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing the subject \"she,\" leading to a grammatical error.",
    "error": "\"Sometimes does fall asleep easily due to the tiredness.\" ",
    "correction": " \"Sometimes she does fall asleep easily due to the tiredness.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The sentence is missing auxiliary verbs and a clear subject for \"expressed,\" leading to incorrect grammar.",
    "error": "\"Diabetic eye exam not performed in several years but expressed interest in scheduling the examination.\" ",
    "correction": " \"Diabetic eye exam has not been performed in several years, but he expressed interest in scheduling the examination.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "Incorrect passive construction; the subject and verb order should be corrected for standard English usage, and \"a\" should be added before \"brain aneurysm.\"",
    "error": "\"She was suggested by her sister to have an MRI due to the family history of multiple sclerosis and brain aneurysm in her sister.\" ",
    "correction": " \"Her sister suggested that she have an MRI due to the family history of multiple sclerosis and a brain aneurysm in her sister.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The plural subject \"episodes\" requires the plural verb \"occur,\" not \"occurs.\"",
    "error": "\"since these episodes occurs randomly.\" ",
    "correction": " \"since these episodes occur randomly.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "Subject-verb agreement error; the singular subject \"Zyrtec\" takes the singular verb \"agrees.\"",
    "error": "\"She notes that older Zyrtec no longer agree with her\" ",
    "correction": " \"She notes that older Zyrtec no longer agrees with her\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb tense and structure are awkward; this correction uses a consistent past habitual construction.",
    "error": "\"He was also fox hunting and fishing previously\" ",
    "correction": " \"He also used to go fox hunting and fishing\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The preposition \"to\" is incorrect in this context; \"consulted the gynecologist\" is the correct verb usage.",
    "error": "\"She never consulted to the gynecologist.\" ",
    "correction": " \"She never consulted the gynecologist.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The verb \"prescribed\" should not be followed by the preposition \"with\" in this context.",
    "error": "\"was prescribed with medications, which resolve the infection after a 5 to 10-day course.\" ",
    "correction": " \"was prescribed medications, which resolve the infection after a 5 to 10-day course.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The clause is missing a subject, leading to a grammatical error.",
    "error": "\"although was unable to confirm this with a thermometer.\" ",
    "correction": " \"although she was unable to confirm this with a thermometer.\" or \"although they were unable to confirm this with a thermometer.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "\"Inquiries\" should be the verb \"inquires,\" and the verb tense in the subordinate clause should be present (\"are\" rather than \"were\") for standard reported speech here.",
    "error": "\"She expresses concern about how to help herself while waiting for the sleep apnea machine and inquiries if there were any measures she could take in the meantime.\" ",
    "correction": " \"She expresses concern about how to help herself while waiting for the sleep apnea machine and inquires if there are any measures she could take in the meantime.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The phrase needs clearer structure and subject-verb agreement to show that only the 28-year-old is adopted.",
    "error": "\"Living condition:  Lives with her husband. She has 3 children aged 46, 43 and 28 who is adopted.\" ",
    "correction": " \"Living condition:  Lives with her husband. She has 3 children aged 46, 43, and 28, who is adopted.\" or \"…and a 28-year-old who is adopted.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The article \"a\" before \"Cornell Medical Center\" is unnecessary, and the plural compound subject \"exploratory surgery ... and a D and C\" requires the plural verb \"were.\"",
    "error": "\"She was referred to a Cornell Medical Center where exploratory surgery on the ovarian fluid and a D and C was recommended.\" ",
    "correction": " \"She was referred to Cornell Medical Center where exploratory surgery on the ovarian fluid and a D and C were recommended.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The subject of \"tends\" is missing; it should be \"she,\" and the sentence needs to be restructured for correct subject-verb agreement.",
    "error": "\"Typically, her symptoms are self-limiting and tends to ignore them.\" ",
    "correction": " \"Typically, her symptoms are self-limiting, and she tends to ignore them.\" or \"Typically, her symptoms are self-limiting and she tends to ignore them.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing a subject after \"However\" and a subject for \"is,\" making it ungrammatical.",
    "error": "\"However, notes that the menstrual cycle resumes when is inconsistent with the testosterone injections.\" ",
    "correction": " \"However, the patient notes that the menstrual cycle resumes when the testosterone injections are inconsistent.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The word order is incorrect and the verb tense is inappropriate for duration.",
    "error": "\"Living Condition:  Lives in the same for 5 years house with wife and two dogs.\" ",
    "correction": " \"Living Condition:  Has lived in the same house for 5 years with wife and two dogs.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " This is a sentence fragment missing a subject.",
    "error": "\"Refilled the testosterone prescription.\" ",
    "correction": " \"The testosterone prescription was refilled.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " This is a sentence fragment missing a subject and verb.",
    "error": "\"Sufficient testosterone to last until the next lab appointment.\" ",
    "correction": " \"The patient has sufficient testosterone to last until the next lab appointment.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence incorrectly joins two structures; rephrasing fixes the subject-verb construction.",
    "error": "\"The patient is a 71-year-old male who is Caucasian presents via telephone visit for pain management.\" ",
    "correction": " \"The patient is a 71-year-old Caucasian male who presents via telephone visit for pain management.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " Word order is incorrect for standard verb phrase construction; \"had originally scheduled\" is the correct form.",
    "error": "\"He originally had scheduled an appointment for 11/17/2025.\" ",
    "correction": " \"He had originally scheduled an appointment for 11/17/2025.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The subject (\"he\") is missing in the second clause, causing a grammatical error.",
    "error": "\"Monitoring has not been performed since 2021 but believes he wore a Zio patch last time.\" ",
    "correction": " \"Monitoring has not been performed since 2021, but he believes he wore a Zio patch last time.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " This is a sentence fragment lacking an explicit subject and verb.",
    "error": "\"Uncertainty expressed over his breathing status compared to how it was a few years ago.\" ",
    "correction": " \"He expresses uncertainty about his breathing status compared to how it was a few years ago.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The original sentence has an unclear subject for \"does not want to travel anymore\" and is missing commas around the nonessential clause.",
    "error": "\"He spent a lot of time with his sister who passed away from dementia and does not want to travel anymore.\" ",
    "correction": " \"He spent a lot of time with his sister, who passed away from dementia, and he does not want to travel anymore.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": "The subject \"he\" is missing and a comma is needed to separate the clauses.",
    "error": "\"but when gets the headache it is pretty severe.\" ",
    "correction": " \"but when he gets the headache, it is pretty severe.\"",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The phrase \"called it as\" should be \"called it a,\" and the plural subject \"father and brother\" requires the verb \"have,\" not \"has.\"",
    "error": "\"His father called it as starburst as his father and brother has it.\" ",
    "correction": " \"His father called it a starburst as his father and brother have it.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The sentence is missing \"that\" and an appropriate past perfect verb form for correct grammar.",
    "error": "\"He reported never having gout previously.\" ",
    "correction": " \"He reported that he had never had gout previously.\" ",
    "section": "HISTORY OF PRESENT ILLNESS"
  },
  {
    "reasoning": " The verb \"were\" is missing, causing an incomplete sentence.",
    "error": "\"Feet together, bending forward to touch the toes, and standing upright all performed without difficulty.\" -",
    "correction": "\"Feet together, bending forward to touch the toes, and standing upright were all performed without difficulty.\" ",
    "section": "PHYSICAL EXAM"
  },
  {
    "reasoning": "The compound subject \"Head shape and circumference\" is plural, so the verb should be \"appear\" instead of \"appears.\"",
    "error": "\"Head: Head shape and circumference appears normal with mild central flattening, occipital prominence and minor sloping\"",
    "correction": "Head shape and circumference appear normal with mild central flattening, occipital prominence and minor sloping\"",
    "section": "PHYSICAL EXAM"
  },
  {
    "reasoning": "The verb \"was\" is missing, making the sentence grammatically incomplete.",
    "error": "\"Musculoskeletal:  A slight spinal asymmetry noted.\" -> ",
    "correction": "\"Musculoskeletal:  A slight spinal asymmetry was noted.\"",
    "section": "PHYSICAL EXAM"
  },
  {
    "reasoning": "Verb tense should be consistent with the rest of the physical exam, which is written in the present tense.",
    "error": "\"Nails looked great.\" -",
    "correction": "\"Nails look great.\"",
    "section": "PHYSICAL EXAM"
  },
  {
    "reasoning": "The phrase \"and air well\" is grammatically incomplete and needs a verb such as \"moves\" to form a correct clause.",
    "error": "\"Lungs:  Lungs are clear and air well.\" ",
    "correction": " \"Lungs:  Lungs are clear and air moves well.\"",
    "section": "PHYSICAL EXAM"
  },
  {
    "reasoning": " The original phrasing is grammatically awkward; subject and verb order should be corrected.",
    "error": "\"Extremities:  Present edema\" ",
    "correction": " \"Extremities:  Edema present\" or \"Extremities: Edema is present\" ",
    "section": "PHYSICAL EXAM"
  },
  {
    "reasoning": " Subject-verb agreement is incorrect (\"elicit\" should be \"elicits\") and \"sinus\" should be plural with an article for correct usage.",
    "error": "\"Nose:  No significant drainage noted. Palpation over sinus elicit pain.\" ",
    "correction": " \"Nose:  No significant drainage noted. Palpation over the sinuses elicits pain.\" ",
    "section": "PHYSICAL EXAM"
  },
  {
    "reasoning": "The phrase \"significant decreased\" is grammatically incorrect; it should be \"significantly decreased\" (adverb + adjective) or \"significant decrease\" (adjective + noun), and a definite article before \"right\" improves clarity.",
    "error": "\"Neck:  Significant decreased range of motion, right and left lateral with right being worse than the left.\" ",
    "correction": " \"Neck:  Significantly decreased range of motion, right and left lateral, with the right being worse than the left.\" or \"Neck:  Significant decrease in range of motion, right and left lateral, with the right being worse than the left.\"",
    "section": "PHYSICAL EXAM"
  },
  {
    "reasoning": " The verb \"was\" is needed to complete the sentence.",
    "error": "\"Finger-to-nose test normal and symmetric.\" ",
    "correction": " \"Finger-to-nose test was normal and symmetric.\" ",
    "section": "PHYSICAL EXAM"
  },
  {
    "reasoning": " \"Tags\" is the wrong verb here; \"tugs\" correctly describes pulling on the hairs.",
    "error": "\"There may be occasional pain if the remover tags on the hairs inside.\" ",
    "correction": " \"There may be occasional pain if the remover tugs on the hairs inside.\" ",
    "section": "PROCEDURE"
  },
  {
    "reasoning": " \"Ventricular\" is an adjective; the noun \"ventricle\" should be used as the subject of the sentence.",
    "error": "\"right ventricular is normal.\" ",
    "correction": " \"right ventricle is normal.\" ",
    "section": "RESULTS"
  },
  {
    "reasoning": "The sentence is missing a verb; adding \"was\" makes it grammatically complete.",
    "error": "\"1.5 cm precancerous polyp called a tubular adenoma removed.\" ",
    "correction": " \"A 1.5 cm precancerous polyp called a tubular adenoma was removed.\"",
    "section": "RESULTS"
  },
  {
    "reasoning": "The adverb \"mildly\" is misplaced and should precede \"positive\" to be grammatically correct.",
    "error": "\"a positive correlation mildly between symptoms of coughing, belching, and reflux episodes\" ",
    "correction": " \"a mildly positive correlation between symptoms of coughing, belching, and reflux episodes\"",
    "section": "RESULTS"
  },
  {
    "reasoning": " \"Revealed\" should not be capitalized after a comma and should match the sentence’s verb tense.",
    "error": "\"07/2025, Revealed a lot of ulcers and significant damage.\" ",
    "correction": " \"07/2025, revealed a lot of ulcers and significant damage.\" ",
    "section": "RESULTS"
  },
  {
    "reasoning": "The phrase is missing a verb; adding \"are\" or using the singular \"function\" corrects the grammar.",
    "error": "\"liver functions normal\" ",
    "correction": " \"liver function normal\" or \"liver functions are normal\"",
    "section": "RESULTS"
  },
  {
    "reasoning": "The verb \"are\" is needed for correct subject-verb agreement.",
    "error": "\"Platelet counts normal\" ",
    "correction": " \"Platelet counts are normal\"",
    "section": "RESULTS"
  },
  {
    "reasoning": "The original uses a comma splice and omits the past-tense verb \"was,\" resulting in an ungrammatical sentence.",
    "error": "\"Soft tissue evaluation demonstrates postsurgical changes to the stomach, everything else unremarkable.\" ",
    "correction": " \"Soft tissue evaluation demonstrates postsurgical changes to the stomach; everything else was unremarkable.\"",
    "section": "RESULTS"
  },
  {
    "reasoning": "The passive construction is missing the auxiliary verb \"were\" for correct grammar.",
    "error": "\"Some results flagged outside the reference range\" ",
    "correction": " \"Some results were flagged outside the reference range\"",
    "section": "RESULTS"
  },
  {
    "reasoning": "The verb \"is\" is missing and \"the\" should be added before \"lump\" for correct grammar.",
    "error": "\"Positive for an abnormal sensation when pressure applied to lump.\" ",
    "correction": " \"Positive for an abnormal sensation when pressure is applied to the lump.\"",
    "section": "REVIEW OF SYSTEMS"
  },
  {
    "reasoning": "The comparative form \"easier\" is used incorrectly here; it should be the adverbial phrase \"more easily.\"",
    "error": "\"Reports eating less and getting full easier.\" ",
    "correction": " \"Reports eating less and getting full more easily.\"",
    "section": "SOCIAL HISTORY"
  },
  {
    "reasoning": " The word order is awkward and omits a clear verb linking the subject and role.",
    "error": "\"Occupations:  Pilot currently for high school and elementary students.\" ",
    "correction": " \"Occupations:  Currently a pilot for high school and elementary students.\" ",
    "section": "SOCIAL HISTORY"
  },
  {
    "reasoning": " The auxiliary verb \"has\" is needed for correct present perfect tense.",
    "error": "\"Recreational Drugs: Never been a drug addict\" ",
    "correction": " \"Recreational Drugs:  Has never been a drug addict\" ",
    "section": "SOCIAL HISTORY"
  },
  {
    "reasoning": " Pronoun should agree with the singular subject \"The patient.\"",
    "error": "\"occasionally treats themselves to snacks.\" ",
    "correction": " \"occasionally treats herself to snacks.\" ",
    "section": "SOCIAL HISTORY"
  },
  {
    "reasoning": "The pronoun \"they\" does not agree with the previously specified female subject and should be \"she\" for grammatical consistency.",
    "error": "\"Diet:  The patient tries to watch what they eat and has noticed symptoms related to dairy consumption.\" ",
    "correction": " \"Diet:  The patient tries to watch what she eats and has noticed symptoms related to dairy consumption.\"",
    "section": "SOCIAL HISTORY"
  },
  {
    "reasoning": " The clause after the colon is a fragment missing the subject \"she.\"",
    "error": "\"Coffee/Tea/Caffeine-containing Drinks:  used to drink coffee but stopped due to its effect on blood pressure.\" ",
    "correction": " \"Coffee/Tea/Caffeine-containing Drinks:  She used to drink coffee but stopped due to its effect on blood pressure.\" ",
    "section": "SOCIAL HISTORY"
  }
]
;

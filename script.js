/* =============================================
   MedGrammar — Application Logic
   ============================================= */

// ─── Imperative Language Quiz Data (4 options with paired distractors) ───
const IMPERATIVE_QUIZ = [
  {
    question: "Which phrasing best uses direct imperative tone for a clinical plan?",
    options: [
      { text: "Continue current antihypertensive medication.", correct: true },
      { text: "Recommend continuing current antihypertensive medication.", correct: false },
      { text: "Current antihypertensive medication should be continued.", correct: false },
      { text: "Advise patient to continue antihypertensive medication.", correct: false }
    ],
    reason: "The correct answer uses a direct action verb. 'Recommend' and 'Advise' are indirect and sound optional. The third uses passive voice.",
    section: "PLAN"
  },
  {
    question: "Which is the most appropriate imperative phrasing for a plan item?",
    options: [
      { text: "Monitor blood glucose levels daily.", correct: true },
      { text: "Recommend monitoring blood glucose levels daily.", correct: false },
      { text: "Blood glucose levels should be monitored daily.", correct: false },
      { text: "Advise daily monitoring of blood glucose levels.", correct: false }
    ],
    reason: "'Monitor blood glucose levels daily' is direct and actionable. 'Recommend' and 'Advise' create indirect language that sounds optional. The third is passive.",
    section: "PLAN"
  },
  {
    question: "Which phrasing is most appropriate for documenting smoking cessation in a plan?",
    options: [
      { text: "Discuss smoking cessation strategies.", correct: true },
      { text: "Recommend smoking cessation to the patient.", correct: false },
      { text: "The patient must stop smoking immediately.", correct: false },
      { text: "Encourage smoking cessation.", correct: false }
    ],
    reason: "'Discuss smoking cessation strategies' is direct and actionable. 'Recommend' and 'Encourage' are indirect and sound optional. The third is commanding and judgmental.",
    section: "PLAN"
  },
  {
    question: "Select the correct documentation style for a follow-up plan item:",
    options: [
      { text: "Follow up with cardiology in 2 weeks.", correct: true },
      { text: "Recommend follow-up with cardiology in 2 weeks.", correct: false },
      { text: "A follow-up with cardiology in 2 weeks should be scheduled.", correct: false },
      { text: "Advise patient to follow up with cardiology in 2 weeks.", correct: false }
    ],
    reason: "The correct answer is a direct imperative. 'Recommend' and 'Advise' make the action sound optional. The third uses passive voice.",
    section: "PLAN"
  },
  {
    question: "Which phrasing best follows patient-centered documentation guidelines?",
    options: [
      { text: "Review medication adherence.", correct: true },
      { text: "Recommend reviewing medication adherence.", correct: false },
      { text: "Patient is noncompliant with medication.", correct: false },
      { text: "Patient has failed to comply with the medication regimen.", correct: false }
    ],
    reason: "'Review medication adherence' is concise and nonjudgmental. 'Recommend' is indirect. The last two use judgmental language ('noncompliant', 'failed to comply').",
    section: "PLAN"
  },
  {
    question: "Which belongs in the DISCUSSION section (not the Plan)?",
    options: [
      { text: "Risks and benefits were reviewed.", correct: true },
      { text: "Start metformin 500 mg daily.", correct: false },
      { text: "Order CBC in 2 weeks.", correct: false },
      { text: "Refer to endocrinology.", correct: false }
    ],
    reason: "'Risks and benefits were reviewed' uses past tense and describes what happened during the visit — it belongs in Discussion. The others are direct actions for the Plan.",
    section: "DISCUSSION"
  },
  {
    question: "Which phrasing correctly uses a direct action verb for an order?",
    options: [
      { text: "Order CBC and CMP in 4 weeks.", correct: true },
      { text: "Recommend ordering CBC and CMP in 4 weeks.", correct: false },
      { text: "CBC and CMP should be ordered in 4 weeks.", correct: false },
      { text: "It is recommended that CBC and CMP be ordered in 4 weeks.", correct: false }
    ],
    reason: "'Order CBC and CMP in 4 weeks' is direct and concise. 'Recommend' is indirect. The third is passive. The fourth uses subjunctive mood unnecessarily.",
    section: "PLAN"
  },
  {
    question: "Which phrasing is most appropriate for starting a new medication in the plan?",
    options: [
      { text: "Start low-dose aspirin therapy.", correct: true },
      { text: "Recommend starting low-dose aspirin therapy.", correct: false },
      { text: "Low-dose aspirin therapy should be started.", correct: false },
      { text: "Advise initiation of low-dose aspirin therapy.", correct: false }
    ],
    reason: "'Start low-dose aspirin therapy' is clear and actionable. 'Recommend' and 'Advise' make the action sound optional. The third is passive.",
    section: "PLAN"
  },
  {
    question: "Which belongs in the PLAN section (not the Discussion)?",
    options: [
      { text: "Refer to cardiology.", correct: true },
      { text: "Discussed treatment options with patient.", correct: false },
      { text: "Educated on signs and symptoms of DVT.", correct: false },
      { text: "Counseled on importance of medication adherence.", correct: false }
    ],
    reason: "'Refer to cardiology' is a direct action for the Plan. The others use past tense and describe what was discussed during the visit — they belong in Discussion.",
    section: "PLAN"
  },
  {
    question: "Which is the preferred phrasing for medication avoidance in plans?",
    options: [
      { text: "Avoid NSAIDs due to renal impairment.", correct: true },
      { text: "Recommend avoiding NSAIDs due to renal impairment.", correct: false },
      { text: "NSAIDs should be avoided due to renal impairment.", correct: false },
      { text: "Advise patient to avoid NSAIDs due to renal impairment.", correct: false }
    ],
    reason: "'Avoid NSAIDs due to renal impairment' is concise imperative. 'Recommend' and 'Advise' are indirect. The third is passive.",
    section: "PLAN"
  },
  {
    question: "Which statement follows documentation guidelines for physical activity?",
    options: [
      { text: "Discuss regular physical activity goals.", correct: true },
      { text: "Recommend regular physical activity.", correct: false },
      { text: "The patient was told to exercise more.", correct: false },
      { text: "Encourage patient to be more physically active.", correct: false }
    ],
    reason: "'Discuss regular physical activity goals' is direct and actionable. 'Recommend' and 'Encourage' are indirect and sound optional. The third is informal and inappropriate.",
    section: "PLAN"
  },
  {
    question: "Which phrasing correctly uses imperative voice for a referral?",
    options: [
      { text: "Refer to physical therapy for gait training.", correct: true },
      { text: "Recommend referral to physical therapy for gait training.", correct: false },
      { text: "A referral to physical therapy for gait training is recommended.", correct: false },
      { text: "Advise physical therapy referral for gait training.", correct: false }
    ],
    reason: "'Refer to physical therapy for gait training' is concise and direct. 'Recommend' and 'Advise' make the referral sound optional.",
    section: "PLAN"
  },
  {
    question: "Which demonstrates the preferred style for continuing treatment?",
    options: [
      { text: "Continue current pain management regimen.", correct: true },
      { text: "Recommend continuing current pain management regimen.", correct: false },
      { text: "The current pain management regimen will be continued.", correct: false },
      { text: "Advise continuation of current pain management regimen.", correct: false }
    ],
    reason: "'Continue current pain management regimen' is the ideal concise imperative. 'Recommend' and 'Advise' are indirect. The third is passive.",
    section: "PLAN"
  },
  {
    question: "Which phrasing is best for documenting a dosage adjustment?",
    options: [
      { text: "Increase metformin to 1000 mg twice daily.", correct: true },
      { text: "Recommend increasing metformin to 1000 mg twice daily.", correct: false },
      { text: "Metformin should be increased to 1000 mg twice daily.", correct: false },
      { text: "Advise increasing metformin dosage to 1000 mg twice daily.", correct: false }
    ],
    reason: "The correct answer is concise imperative. 'Recommend' and 'Advise' are indirect and sound optional. The third is passive.",
    section: "PLAN"
  },
  {
    question: "Which is the correct Discussion section phrasing?",
    options: [
      { text: "Counseled on importance of follow-up appointments.", correct: true },
      { text: "Schedule follow-up in 3 months.", correct: false },
      { text: "Order lipid panel.", correct: false },
      { text: "Start statin therapy.", correct: false }
    ],
    reason: "'Counseled on...' uses past tense and summarizes what happened — it belongs in Discussion. The others are action items for the Plan section.",
    section: "DISCUSSION"
  },
  {
    question: "Which phrasing is preferred when documenting patient education in a plan?",
    options: [
      { text: "Educate on signs and symptoms of infection.", correct: true },
      { text: "Recommend educating patient on signs of infection.", correct: false },
      { text: "Patient should be educated on signs and symptoms of infection.", correct: false },
      { text: "Advise education on signs and symptoms of infection.", correct: false }
    ],
    reason: "'Educate on signs and symptoms of infection' is concise imperative. 'Recommend' and 'Advise' are indirect. The third is passive.",
    section: "PLAN"
  },
  {
    question: "Which best uses direct imperative tone for scheduling?",
    options: [
      { text: "Schedule follow-up in 3 months.", correct: true },
      { text: "Recommend scheduling follow-up in 3 months.", correct: false },
      { text: "A follow-up in 3 months should be scheduled.", correct: false },
      { text: "Advise patient to schedule follow-up in 3 months.", correct: false }
    ],
    reason: "'Schedule follow-up in 3 months' is direct and concise. 'Recommend' and 'Advise' make it sound optional. The third is passive.",
    section: "PLAN"
  },
  {
    question: "Which phrasing follows the imperative style for discontinuing medication?",
    options: [
      { text: "Discontinue lisinopril due to persistent cough.", correct: true },
      { text: "Recommend discontinuing lisinopril due to persistent cough.", correct: false },
      { text: "Lisinopril should be discontinued due to persistent cough.", correct: false },
      { text: "Advise discontinuation of lisinopril due to persistent cough.", correct: false }
    ],
    reason: "'Discontinue lisinopril due to persistent cough' is concise imperative. 'Recommend' and 'Advise' are indirect. The third is passive.",
    section: "PLAN"
  },
  {
    question: "Which phrasing is appropriate for conditional actions in a plan?",
    options: [
      { text: "Return if symptoms worsen.", correct: true },
      { text: "Recommend returning if symptoms worsen.", correct: false },
      { text: "Patient should return if symptoms worsen.", correct: false },
      { text: "Advise patient to return if symptoms worsen.", correct: false }
    ],
    reason: "'Return if symptoms worsen' is a concise conditional imperative. 'Recommend' and 'Advise' are indirect. The third shifts to a passive-like construction.",
    section: "PLAN"
  },
  {
    question: "Which correctly identifies past-tense phrasing for the Discussion section?",
    options: [
      { text: "Explained potential side effects of new medication.", correct: true },
      { text: "Avoid NSAIDs due to GI risk.", correct: false },
      { text: "Obtain MRI of lumbar spine.", correct: false },
      { text: "Increase gabapentin to 600 mg TID.", correct: false }
    ],
    reason: "'Explained potential side effects...' uses past tense to describe what happened during the visit — this is Discussion. The others are direct Plan actions.",
    section: "DISCUSSION"
  }
];

// ─── Article Errors Quiz Data (context-based, 4-option format) ───
const ARTICLES_QUIZ = [
  {
    question: "Which sentence uses articles correctly in a clinical context?",
    options: [
      { text: "The patient was referred to the pharmacy for a medication review.", correct: true },
      { text: "Patient was referred to pharmacy for medication review.", correct: false },
      { text: "The patient was referred to a pharmacy for the medication review.", correct: false },
      { text: "A patient was referred to the pharmacy for medication review.", correct: false }
    ],
    reason: "The definite article 'the' is needed before 'patient' (specific patient), 'pharmacy' (known location), and the indefinite article 'a' before 'medication review' (one of many possible).",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Select the sentence with correct article usage:",
    options: [
      { text: "An MRI of the cervical spine was ordered.", correct: true },
      { text: "MRI of cervical spine was ordered.", correct: false },
      { text: "A MRI of the cervical spine was ordered.", correct: false },
      { text: "The MRI of a cervical spine was ordered.", correct: false }
    ],
    reason: "'An' is used before MRI (vowel sound). 'The' is needed before 'cervical spine' (specific body part). 'A MRI' is incorrect because MRI starts with a vowel sound.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which sentence correctly uses the definite article?",
    options: [
      { text: "The last check in 2023 revealed elevated values.", correct: true },
      { text: "Last check in 2023 revealed elevated values.", correct: false },
      { text: "A last check in 2023 revealed elevated values.", correct: false },
      { text: "The last check in the 2023 revealed elevated values.", correct: false }
    ],
    reason: "'The' is required before 'last check' because it refers to a specific, previously known event. Years do not take articles.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which sentence uses articles correctly?",
    options: [
      { text: "The Keppra dosage was decreased at the last visit.", correct: true },
      { text: "The Keppra dosage was decreased at last visit.", correct: false },
      { text: "Keppra dosage was decreased at the last visit.", correct: false },
      { text: "A Keppra dosage was decreased at a last visit.", correct: false }
    ],
    reason: "'The' is needed before both 'Keppra dosage' (specific medication's dosage) and 'last visit' (specific known visit).",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Select the grammatically correct sentence regarding article usage:",
    options: [
      { text: "An information brochure on DBS will be provided today.", correct: true },
      { text: "Information brochure on DBS will be provided today.", correct: false },
      { text: "The information brochure on a DBS will be provided today.", correct: false },
      { text: "A information brochure on DBS will be provided today.", correct: false }
    ],
    reason: "'An' is needed before 'information' (vowel sound). 'A information' is grammatically wrong. DBS is a specific procedure and doesn't need an article.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which sentence correctly handles articles with plural nouns?",
    options: [
      { text: "Ear issues or a stroke in the balance center of the brain can cause vertigo.", correct: true },
      { text: "An ear issues or stroke in the balance center of the brain can cause vertigo.", correct: false },
      { text: "The ear issues or the stroke in balance center of brain can cause vertigo.", correct: false },
      { text: "Ear issues or stroke in a balance center of a brain can cause vertigo.", correct: false }
    ],
    reason: "'An' cannot be used with plural 'issues.' 'A stroke' is correct (singular, nonspecific). 'The balance center' and 'the brain' refer to specific anatomical structures.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which uses articles correctly with disease names?",
    options: [
      { text: "Diabetes and blood sugar abnormalities are the most common causes of neuropathy.", correct: true },
      { text: "The diabetes and blood sugar abnormalities are the most common causes of neuropathy.", correct: false },
      { text: "A diabetes and blood sugar abnormalities are most common causes of neuropathy.", correct: false },
      { text: "Diabetes and the blood sugar abnormalities are most common causes of neuropathy.", correct: false }
    ],
    reason: "General disease names (diabetes) do not take articles. 'The most common causes' needs 'the' for a superlative construction.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Select the sentence with correct article usage for a new treatment option:",
    options: [
      { text: "Galantamine is a new option for this patient.", correct: true },
      { text: "Galantamine is new option for this patient.", correct: false },
      { text: "Galantamine is the new option for this patient.", correct: false },
      { text: "A Galantamine is a new option for this patient.", correct: false }
    ],
    reason: "'A' is needed before 'new option' (introducing one of multiple possibilities). Medication brand names don't take articles. 'The' would imply it's the only option.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which sentence uses articles correctly with 'higher dose'?",
    options: [
      { text: "Being on a higher dose will eventually cause more harm.", correct: true },
      { text: "Being on higher dose will eventually cause more harm.", correct: false },
      { text: "Being on the higher dose will eventually cause more harm.", correct: false },
      { text: "Being on an higher dose will eventually cause more harm.", correct: false }
    ],
    reason: "'A' is required before 'higher dose' (indefinite, comparative adjective + noun). 'An' is wrong before 'h' consonant sound. 'The' would imply a specific known dose.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which correctly uses articles with medical facility references?",
    options: [
      { text: "Patient will follow up at an outreach clinic closer to home.", correct: true },
      { text: "Patient will follow up at outreach clinic closer to home.", correct: false },
      { text: "Patient will follow up at the outreach clinic closer to home.", correct: false },
      { text: "Patient will follow up at a outreach clinic closer to home.", correct: false }
    ],
    reason: "'An' is needed before 'outreach' (vowel sound). Without an article, the phrase is incomplete. 'A outreach' is incorrect for vowel sounds.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which sentence uses the article correctly before an abbreviation?",
    options: [
      { text: "An EEG was performed to evaluate seizure activity.", correct: true },
      { text: "A EEG was performed to evaluate seizure activity.", correct: false },
      { text: "The EEG was performed to evaluate the seizure activity.", correct: false },
      { text: "EEG was performed to evaluate seizure activity.", correct: false }
    ],
    reason: "'An' is correct before EEG because 'E' has a vowel sound. 'A EEG' is incorrect. The fourth option is missing a necessary article.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which sentence correctly uses articles with 'side effect profile'?",
    options: [
      { text: "The potential side effect profile is similar to donepezil.", correct: true },
      { text: "Potential side effects profile is similar to donepezil.", correct: false },
      { text: "A potential side effect profile is similar to donepezil.", correct: false },
      { text: "Potential side effect profile is similar to donepezil.", correct: false }
    ],
    reason: "'The' is needed because we're referring to a specific medication's profile. 'Side effect' (singular) modifies 'profile' as a compound noun.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Select the correct article usage with 'recheck':",
    options: [
      { text: "A recheck is recommended in 6 months.", correct: true },
      { text: "Recheck is recommended in 6 months.", correct: false },
      { text: "The recheck is recommended in 6 months.", correct: false },
      { text: "An recheck is recommended in 6 months.", correct: false }
    ],
    reason: "'A' is needed before 'recheck' (introducing a new, nonspecific action). 'The' would imply a previously scheduled recheck. 'An' is wrong before consonant 'r'.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which uses articles correctly with anatomical references?",
    options: [
      { text: "An MRI of the lumbar spine showed disc herniation.", correct: true },
      { text: "MRI of lumbar spine showed disc herniation.", correct: false },
      { text: "A MRI of a lumbar spine showed disc herniation.", correct: false },
      { text: "The MRI of lumbar spine showed a disc herniation.", correct: false }
    ],
    reason: "'An' before MRI (vowel sound), 'the' before 'lumbar spine' (specific body part of the patient). 'A MRI' is incorrect; 'a lumbar spine' is wrong — each patient has one.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which sentence has correct article usage with 'patient's'?",
    options: [
      { text: "Songs from the patient's late teens tend to resonate most deeply.", correct: true },
      { text: "Songs from patient's late teens tend to resonate most deeply.", correct: false },
      { text: "Songs from a patient's late teens tend to resonate most deeply.", correct: false },
      { text: "The songs from patient's late teens tend to resonate most deeply.", correct: false }
    ],
    reason: "'The' is needed before 'patient's' for correct noun phrase construction when referring to a specific patient discussed in the note.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which correctly uses articles when describing visits?",
    options: [
      { text: "Patient will return for a follow-up visit in 2 weeks.", correct: true },
      { text: "Patient will return for follow-up visit in 2 weeks.", correct: false },
      { text: "Patient will return for the follow-up visit in 2 weeks.", correct: false },
      { text: "A patient will return for a follow-up visit in 2 weeks.", correct: false }
    ],
    reason: "'A' before 'follow-up visit' (one future visit, not yet specified). 'The' would imply it was previously scheduled. Using 'a patient' changes the meaning to any patient.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which sentence correctly omits articles where not needed?",
    options: [
      { text: "Patient reports improvement in sleep quality.", correct: true },
      { text: "The patient reports the improvement in the sleep quality.", correct: false },
      { text: "A patient reports an improvement in a sleep quality.", correct: false },
      { text: "Patient reports the improvement in sleep quality.", correct: false }
    ],
    reason: "In clinical notes, 'Patient' is understood (the specific patient). 'Sleep quality' is an uncountable abstract concept that doesn't require 'the' in general statements.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which uses articles correctly with medical equipment?",
    options: [
      { text: "A CPAP machine was prescribed for sleep apnea.", correct: true },
      { text: "CPAP machine was prescribed for sleep apnea.", correct: false },
      { text: "The CPAP machine was prescribed for the sleep apnea.", correct: false },
      { text: "An CPAP machine was prescribed for sleep apnea.", correct: false }
    ],
    reason: "'A' is correct before CPAP (consonant sound 'see-pap'). 'An' would be wrong. 'The' implies a previously mentioned specific machine.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Select correct article usage with 'increase':",
    options: [
      { text: "There was an increase in seizure frequency.", correct: true },
      { text: "There was increase in seizure frequency.", correct: false },
      { text: "There was the increase in seizure frequency.", correct: false },
      { text: "There was a increase in seizure frequency.", correct: false }
    ],
    reason: "'An' is needed before 'increase' (vowel sound). 'A increase' is grammatically wrong. 'The' implies a previously discussed specific increase.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which sentence uses articles correctly with 'history'?",
    options: [
      { text: "Patient has a history of hypertension and diabetes.", correct: true },
      { text: "Patient has history of hypertension and diabetes.", correct: false },
      { text: "Patient has the history of hypertension and diabetes.", correct: false },
      { text: "The patient has the history of the hypertension and diabetes.", correct: false }
    ],
    reason: "'A history' is the standard clinical phrase (one instance of medical history). Disease names used generally do not take articles.",
    section: "ASSESSMENT AND PLAN"
  }
];

// ─── Preposition Errors Quiz Data (context-based, 4-option format) ───
const PREPOSITIONS_QUIZ = [
  {
    question: "Which sentence uses the correct preposition for medical treatment?",
    options: [
      { text: "Patient is currently on metformin for diabetes.", correct: true },
      { text: "Patient is currently in metformin for diabetes.", correct: false },
      { text: "Patient is currently at metformin for diabetes.", correct: false },
      { text: "Patient is currently with metformin for diabetes.", correct: false }
    ],
    reason: "The preposition 'on' is used with medications (on metformin, on aspirin). 'In,' 'at,' and 'with' are incorrect in this context.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Select the sentence with the correct preposition:",
    options: [
      { text: "Patient was admitted to the hospital for observation.", correct: true },
      { text: "Patient was admitted in the hospital for observation.", correct: false },
      { text: "Patient was admitted at the hospital for observation.", correct: false },
      { text: "Patient was admitted into the hospital for observation.", correct: false }
    ],
    reason: "'Admitted to' is the standard clinical construction. 'Admitted in/at' are incorrect. 'Admitted into' is nonstandard in medical documentation.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which preposition correctly completes: 'Patient complains ___ headaches'?",
    options: [
      { text: "of", correct: true },
      { text: "about", correct: false },
      { text: "from", correct: false },
      { text: "with", correct: false }
    ],
    reason: "'Complains of' is the standard clinical phrasing. While 'complains about' is grammatically acceptable in everyday English, 'complains of' is the preferred medical documentation form.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which sentence uses the correct preposition with 'diagnosed'?",
    options: [
      { text: "Patient was diagnosed with type 2 diabetes.", correct: true },
      { text: "Patient was diagnosed of type 2 diabetes.", correct: false },
      { text: "Patient was diagnosed for type 2 diabetes.", correct: false },
      { text: "Patient was diagnosed from type 2 diabetes.", correct: false }
    ],
    reason: "'Diagnosed with' is the correct preposition collocation in medical English. 'Diagnosed of/for/from' are all incorrect.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Select the correct preposition: 'The symptoms are consistent ___ a viral infection.'",
    options: [
      { text: "with", correct: true },
      { text: "to", correct: false },
      { text: "for", correct: false },
      { text: "of", correct: false }
    ],
    reason: "'Consistent with' is the standard medical phrase for describing findings that match a diagnosis. 'Consistent to/for/of' are incorrect.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which sentence uses the correct preposition for location?",
    options: [
      { text: "Pain is localized to the right lower quadrant.", correct: true },
      { text: "Pain is localized in the right lower quadrant.", correct: false },
      { text: "Pain is localized at the right lower quadrant.", correct: false },
      { text: "Pain is localized on the right lower quadrant.", correct: false }
    ],
    reason: "'Localized to' is the correct clinical expression indicating a specific area. 'Localized in/at/on' are incorrect in this medical context.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which preposition is correct: 'Patient was referred ___ a specialist'?",
    options: [
      { text: "to", correct: true },
      { text: "for", correct: false },
      { text: "with", correct: false },
      { text: "at", correct: false }
    ],
    reason: "'Referred to' a person or department is correct. 'Referred for' is used with a reason (referred for evaluation), not a person.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Select the correct preposition usage with 'response':",
    options: [
      { text: "Patient showed good response to treatment.", correct: true },
      { text: "Patient showed good response for treatment.", correct: false },
      { text: "Patient showed good response with treatment.", correct: false },
      { text: "Patient showed good response of treatment.", correct: false }
    ],
    reason: "'Response to' is the correct collocation. A patient responds 'to' treatment, not 'for,' 'with,' or 'of' treatment.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which sentence uses the correct preposition with 'allergic'?",
    options: [
      { text: "Patient is allergic to penicillin.", correct: true },
      { text: "Patient is allergic of penicillin.", correct: false },
      { text: "Patient is allergic from penicillin.", correct: false },
      { text: "Patient is allergic with penicillin.", correct: false }
    ],
    reason: "'Allergic to' is the only correct preposition. 'Allergic of/from/with' are all grammatically incorrect.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which preposition correctly completes: 'Patient presents ___ chest pain'?",
    options: [
      { text: "with", correct: true },
      { text: "of", correct: false },
      { text: "for", correct: false },
      { text: "in", correct: false }
    ],
    reason: "'Presents with' is the standard clinical phrase for describing symptoms at presentation. 'Presents of/for/in' are incorrect.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Select the correct preposition: 'Symptoms are suggestive ___ multiple sclerosis.'",
    options: [
      { text: "of", correct: true },
      { text: "for", correct: false },
      { text: "to", correct: false },
      { text: "with", correct: false }
    ],
    reason: "'Suggestive of' is the correct medical collocation meaning the symptoms point toward a diagnosis. 'Suggestive for/to/with' are incorrect.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which uses the correct preposition with 'predispose'?",
    options: [
      { text: "This condition predisposes the patient to infection.", correct: true },
      { text: "This condition predisposes the patient for infection.", correct: false },
      { text: "This condition predisposes the patient with infection.", correct: false },
      { text: "This condition predisposes the patient of infection.", correct: false }
    ],
    reason: "'Predisposes to' is correct — someone is predisposed 'to' a risk or condition, not 'for,' 'with,' or 'of.'",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which sentence uses the correct preposition with 'comply'?",
    options: [
      { text: "Patient has difficulty complying with the medication regimen.", correct: true },
      { text: "Patient has difficulty complying to the medication regimen.", correct: false },
      { text: "Patient has difficulty complying for the medication regimen.", correct: false },
      { text: "Patient has difficulty complying on the medication regimen.", correct: false }
    ],
    reason: "'Comply with' is the correct collocation. One complies 'with' rules, regimens, or instructions — not 'to,' 'for,' or 'on.'",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which preposition is correct: 'Patient is at risk ___ falls'?",
    options: [
      { text: "for", correct: true },
      { text: "of", correct: false },
      { text: "to", correct: false },
      { text: "with", correct: false }
    ],
    reason: "'At risk for' is the standard American medical English phrasing. While 'at risk of' is acceptable in British English, 'for' is preferred in clinical documentation.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Select the correct preposition with 'benefit':",
    options: [
      { text: "Patient may benefit from physical therapy.", correct: true },
      { text: "Patient may benefit with physical therapy.", correct: false },
      { text: "Patient may benefit of physical therapy.", correct: false },
      { text: "Patient may benefit by physical therapy.", correct: false }
    ],
    reason: "'Benefit from' is the correct preposition. One benefits 'from' something. 'Benefit with/of/by' are incorrect in standard usage.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which sentence correctly uses prepositions with 'switch'?",
    options: [
      { text: "Switch from lisinopril to losartan.", correct: true },
      { text: "Switch lisinopril with losartan.", correct: false },
      { text: "Switch lisinopril for losartan.", correct: false },
      { text: "Switch of lisinopril to losartan.", correct: false }
    ],
    reason: "'Switch from X to Y' is the correct construction for changing medications. 'Switch X with/for Y' or 'switch of' are incorrect.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which preposition is correct: 'Patient was placed ___ a ventilator'?",
    options: [
      { text: "on", correct: true },
      { text: "in", correct: false },
      { text: "at", correct: false },
      { text: "with", correct: false }
    ],
    reason: "'Placed on' is correct for medical devices and support systems (on a ventilator, on oxygen, on dialysis). 'In/at/with' are incorrect.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Select the correct preposition: 'Findings are indicative ___ malignancy.'",
    options: [
      { text: "of", correct: true },
      { text: "for", correct: false },
      { text: "to", correct: false },
      { text: "with", correct: false }
    ],
    reason: "'Indicative of' is the correct collocation meaning the findings point to or suggest something. 'Indicative for/to/with' are incorrect.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which sentence uses the correct preposition with 'recover'?",
    options: [
      { text: "Patient is recovering from surgery.", correct: true },
      { text: "Patient is recovering of surgery.", correct: false },
      { text: "Patient is recovering after surgery.", correct: false },
      { text: "Patient is recovering with surgery.", correct: false }
    ],
    reason: "'Recovering from' is the correct preposition — one recovers 'from' an illness, procedure, or surgery. 'After' describes time, not the recovery process.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which preposition correctly completes: 'Defer ___ further evaluation'?",
    options: [
      { text: "to", correct: true },
      { text: "for", correct: false },
      { text: "on", correct: false },
      { text: "with", correct: false }
    ],
    reason: "'Defer to' means to refer the decision to someone or something else (defer to further evaluation, defer to specialist). 'Defer for/on/with' are incorrect in this context.",
    section: "ASSESSMENT AND PLAN"
  }
];

// ─── Subject-Verb Agreement Quiz Data (context-based, 4-option format) ───
const SV_QUIZ = [
  {
    question: "Which sentence has correct subject-verb agreement?",
    options: [
      { text: "The patient's symptoms have improved significantly.", correct: true },
      { text: "The patient's symptoms has improved significantly.", correct: false },
      { text: "The patient's symptoms was improved significantly.", correct: false },
      { text: "The patient's symptoms is improved significantly.", correct: false }
    ],
    reason: "'Symptoms' is plural, so it requires the plural verb 'have.' 'Has,' 'was,' and 'is' are all singular verbs that don't agree with the plural subject.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Select the sentence with correct subject-verb agreement:",
    options: [
      { text: "Neither the headaches nor the dizziness has resolved.", correct: true },
      { text: "Neither the headaches nor the dizziness have resolved.", correct: false },
      { text: "Neither the headaches nor the dizziness are resolved.", correct: false },
      { text: "Neither the headaches nor the dizziness were resolved.", correct: false }
    ],
    reason: "With 'neither...nor,' the verb agrees with the nearest subject. 'Dizziness' (singular) is nearest, so 'has' (singular) is correct.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which sentence has correct subject-verb agreement with a collective noun?",
    options: [
      { text: "The medical team has reviewed the case.", correct: true },
      { text: "The medical team have reviewed the case.", correct: false },
      { text: "The medical team are reviewing the case.", correct: false },
      { text: "The medical team were reviewing the case.", correct: false }
    ],
    reason: "In American English, collective nouns like 'team' are treated as singular. 'Has reviewed' is the correct singular verb form.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which sentence correctly handles subject-verb agreement with an intervening phrase?",
    options: [
      { text: "The list of medications was reviewed with the patient.", correct: true },
      { text: "The list of medications were reviewed with the patient.", correct: false },
      { text: "The list of medications have been reviewed with the patient.", correct: false },
      { text: "The list of medications are reviewed with the patient.", correct: false }
    ],
    reason: "The subject is 'list' (singular), not 'medications.' The prepositional phrase 'of medications' doesn't change the subject. 'Was' agrees with 'list.'",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Select the correct subject-verb agreement:",
    options: [
      { text: "Each of the patients was examined individually.", correct: true },
      { text: "Each of the patients were examined individually.", correct: false },
      { text: "Each of the patients have been examined individually.", correct: false },
      { text: "Each of the patients are examined individually.", correct: false }
    ],
    reason: "'Each' is always singular regardless of what follows. 'Each of the patients was' is correct — the verb agrees with 'each,' not 'patients.'",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which sentence has correct agreement with a compound subject?",
    options: [
      { text: "Nausea and vomiting were reported by the patient.", correct: true },
      { text: "Nausea and vomiting was reported by the patient.", correct: false },
      { text: "Nausea and vomiting has been reported by the patient.", correct: false },
      { text: "Nausea and vomiting is reported by the patient.", correct: false }
    ],
    reason: "Two subjects joined by 'and' form a compound subject and require a plural verb. 'Nausea and vomiting were' is correct.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which sentence correctly uses subject-verb agreement with 'there'?",
    options: [
      { text: "There are several risk factors for this condition.", correct: true },
      { text: "There is several risk factors for this condition.", correct: false },
      { text: "There has several risk factors for this condition.", correct: false },
      { text: "There was several risk factors for this condition.", correct: false }
    ],
    reason: "In 'there' constructions, the verb agrees with the real subject that follows. 'Risk factors' is plural, so 'are' is correct.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Select the sentence with correct subject-verb agreement:",
    options: [
      { text: "A number of tests were ordered.", correct: true },
      { text: "A number of tests was ordered.", correct: false },
      { text: "A number of tests has been ordered.", correct: false },
      { text: "A number of tests is ordered.", correct: false }
    ],
    reason: "'A number of' takes a plural verb because it means 'several' or 'many.' 'The number of' would take singular. 'A number of tests were' is correct.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which correctly handles agreement with 'either...or'?",
    options: [
      { text: "Either the medication or the dosage needs to be adjusted.", correct: true },
      { text: "Either the medication or the dosage need to be adjusted.", correct: false },
      { text: "Either the medication or the dosage have to be adjusted.", correct: false },
      { text: "Either the medication or the dosage are to be adjusted.", correct: false }
    ],
    reason: "With 'either...or,' the verb agrees with the nearest subject. 'Dosage' (singular) is nearest, so 'needs' (singular) is correct.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which sentence has correct subject-verb agreement with an uncountable noun?",
    options: [
      { text: "The information provided was helpful for the patient.", correct: true },
      { text: "The information provided were helpful for the patient.", correct: false },
      { text: "The information provided are helpful for the patient.", correct: false },
      { text: "The information provided have been helpful for the patient.", correct: false }
    ],
    reason: "'Information' is an uncountable noun and always takes a singular verb. 'Was' is the correct singular past tense form.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which sentence correctly handles agreement with 'none'?",
    options: [
      { text: "None of the symptoms have improved.", correct: true },
      { text: "None of the symptoms has improved.", correct: false },
      { text: "None of the symptoms is improving.", correct: false },
      { text: "None of the symptoms was improved.", correct: false }
    ],
    reason: "When 'none' refers to a plural noun (symptoms), it takes a plural verb in modern usage. 'None of the symptoms have improved' is correct.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Select the correct agreement with a gerund subject:",
    options: [
      { text: "Managing multiple comorbidities requires careful coordination.", correct: true },
      { text: "Managing multiple comorbidities require careful coordination.", correct: false },
      { text: "Managing multiple comorbidities have required careful coordination.", correct: false },
      { text: "Managing multiple comorbidities are requiring careful coordination.", correct: false }
    ],
    reason: "A gerund phrase ('Managing multiple comorbidities') functions as a singular subject and takes a singular verb. 'Requires' is correct.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which sentence has correct agreement with 'majority'?",
    options: [
      { text: "The majority of patients were satisfied with their care.", correct: true },
      { text: "The majority of patients was satisfied with their care.", correct: false },
      { text: "The majority of patients is satisfied with their care.", correct: false },
      { text: "The majority of patients has been satisfied with their care.", correct: false }
    ],
    reason: "'The majority of' + plural noun takes a plural verb. Since 'patients' is plural, 'were' is correct.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which correctly handles subject-verb agreement with 'as well as'?",
    options: [
      { text: "The patient, as well as her family members, was counseled.", correct: true },
      { text: "The patient, as well as her family members, were counseled.", correct: false },
      { text: "The patient, as well as her family members, have been counseled.", correct: false },
      { text: "The patient, as well as her family members, are counseled.", correct: false }
    ],
    reason: "'As well as' does NOT create a compound subject. The verb agrees with the main subject 'patient' (singular). 'Was' is correct.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which sentence has correct agreement with a percentage?",
    options: [
      { text: "Fifty percent of the medication was administered.", correct: true },
      { text: "Fifty percent of the medication were administered.", correct: false },
      { text: "Fifty percent of the medication have been administered.", correct: false },
      { text: "Fifty percent of the medication are administered.", correct: false }
    ],
    reason: "With percentages, the verb agrees with the noun in the 'of' phrase. 'Medication' is singular/uncountable, so 'was' is correct. (If it were 'patients,' the verb would be plural.)",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which sentence correctly uses subject-verb agreement?",
    options: [
      { text: "The number of seizure episodes has decreased.", correct: true },
      { text: "The number of seizure episodes have decreased.", correct: false },
      { text: "The number of seizure episodes are decreasing.", correct: false },
      { text: "The number of seizure episodes were decreased.", correct: false }
    ],
    reason: "'The number of' is always singular (it refers to the number itself). 'Has decreased' correctly agrees with the singular subject.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Select the sentence with correct subject-verb agreement:",
    options: [
      { text: "The patient's blood pressure and heart rate are within normal limits.", correct: true },
      { text: "The patient's blood pressure and heart rate is within normal limits.", correct: false },
      { text: "The patient's blood pressure and heart rate was within normal limits.", correct: false },
      { text: "The patient's blood pressure and heart rate has been within normal limits.", correct: false }
    ],
    reason: "Two subjects joined by 'and' (blood pressure and heart rate) require a plural verb. 'Are' is the correct plural verb.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which has correct agreement with 'every'?",
    options: [
      { text: "Every test result was reviewed carefully.", correct: true },
      { text: "Every test result were reviewed carefully.", correct: false },
      { text: "Every test result have been reviewed carefully.", correct: false },
      { text: "Every test result are reviewed carefully.", correct: false }
    ],
    reason: "'Every' always takes a singular verb, regardless of what noun follows. 'Was' correctly agrees with the singular sense of 'every test result.'",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which sentence correctly handles agreement with 'data'?",
    options: [
      { text: "The data suggest a correlation between the variables.", correct: true },
      { text: "The data suggests a correlation between the variables.", correct: false },
      { text: "The data is suggesting a correlation between the variables.", correct: false },
      { text: "The data has suggested a correlation between the variables.", correct: false }
    ],
    reason: "In scientific and medical writing, 'data' is treated as plural (datum is singular). 'The data suggest' uses the plural verb correctly.",
    section: "ASSESSMENT AND PLAN"
  },
  {
    question: "Which sentence has correct subject-verb agreement with 'along with'?",
    options: [
      { text: "The primary diagnosis, along with the secondary findings, was documented.", correct: true },
      { text: "The primary diagnosis, along with the secondary findings, were documented.", correct: false },
      { text: "The primary diagnosis, along with the secondary findings, have been documented.", correct: false },
      { text: "The primary diagnosis, along with the secondary findings, are documented.", correct: false }
    ],
    reason: "'Along with' (like 'as well as') does not form a compound subject. The verb agrees with 'diagnosis' (singular). 'Was' is correct.",
    section: "ASSESSMENT AND PLAN"
  }
];

// ─── Achievements Definition ───
const ACHIEVEMENTS = [
  { id: "first_step", icon: "🎯", name: "First Step", desc: "Complete your first quiz", check: s => s.totalQuizzes >= 1 },
  { id: "streak_3", icon: "🔥", name: "On Fire", desc: "Maintain a 3-day streak", check: s => s.streak >= 3 },
  { id: "xp_500", icon: "💎", name: "XP Collector", desc: "Earn 500 total XP", check: s => s.xp >= 500 },
  { id: "all_modules", icon: "🏆", name: "Grammar Master", desc: "Complete all four modules", check: s => s.modules.imperative?.completed && s.modules.articles?.completed && s.modules.prepositions?.completed && s.modules.subjectverb?.completed },
  { id: "perfectionist", icon: "💯", name: "Perfectionist", desc: "Score 100% on any quiz", check: s => Object.values(s.modules).some(m => m.best === 100) },
  { id: "daily_warrior", icon: "⚡", name: "Daily Warrior", desc: "Complete 5 daily challenges", check: s => (s.dailyChallenges || 0) >= 5 },
];

// ─── Motivational Messages ───
const MOTIVATION = {
  perfect: ["Flawless! You're a grammar genius! 🎉", "Perfect score! Absolutely brilliant! 🌟", "100%! Nothing can stop you! 💯"],
  great: ["Excellent work! Almost perfect! 🔥", "Outstanding performance! Keep it up! ⭐", "So close to perfection! 💪"],
  good: ["Good job! Room for improvement! 👍", "Nice effort! Practice makes perfect! 📚", "You're getting there! Keep learning! 🚀"],
  poor: ["Don't give up! Every mistake is a lesson! 💡", "Keep practicing – you'll get better! 🌱", "Review the explanations and try again! 📖"],
};

const MASCOT_TIPS = [
  "💡 Tip: Start plan items with a direct action verb — no 'advise,' 'recommend,' or 'encourage'!",
  "📝 Remember: Discussion = past tense, Plan = direct action verbs.",
  "🔍 Watch out: Missing articles are the most common error!",
  "⚡ Pro tip: Prepositions must match their verb context.",
  "🎯 Focus: Subject-verb agreement trips up even experienced writers.",
  "💊 Medical style: Use patient-facing, nonjudgmental language.",
  "✨ Keep going! Consistency is key to mastering grammar!",
  "🏆 Pro tip: Read your sentences aloud to catch awkward phrasing.",
];

// ─── Utility Functions ───
function getLevel(xp) {
  const xpPerLevel = 100;
  const level = Math.floor(xp / xpPerLevel) + 1;
  const currentLevelXp = xp % xpPerLevel;
  return { level, currentLevelXp, nextLevelXp: xpPerLevel, xp };
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function randomPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

// ─── State Management ───
const DEFAULT_STATE = {
  username: "",
  xp: 0,
  streak: 0,
  lastPlayDate: null,
  totalQuizzes: 0,
  dailyChallenges: 0,
  tutorialCompleted: false,
  modules: {
    imperative: { completed: false, best: 0, attempts: 0 },
    articles: { completed: false, best: 0, attempts: 0 },
    prepositions: { completed: false, best: 0, attempts: 0 },
    subjectverb: { completed: false, best: 0, attempts: 0 },
  },
  achievements: [],
  theme: "dark",
};

function loadState() {
  try {
    const saved = localStorage.getItem("medgrammar_state_v2");
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...DEFAULT_STATE, ...parsed, modules: { ...DEFAULT_STATE.modules, ...parsed.modules } };
    }
  } catch (e) { /* ignore */ }
  return { ...DEFAULT_STATE };
}

function saveState(state) {
  localStorage.setItem("medgrammar_state_v2", JSON.stringify(state));
}

// ─── Main App ───
const App = (() => {
  let state = loadState();
  let currentQuiz = null;

  function init() {
    applyTheme(state.theme);
    updateStreak();
    updateNav();

    if (state.username) {
      if (!state.tutorialCompleted) {
        navigate("tutorial");
      } else {
        navigate("modules");
      }
    }

    document.getElementById("usernameInput").addEventListener("keydown", e => {
      if (e.key === "Enter") startJourney();
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    document.getElementById("themeIcon").textContent = theme === "dark" ? "🌙" : "☀️";
  }

  function toggleTheme() {
    state.theme = state.theme === "dark" ? "light" : "dark";
    applyTheme(state.theme);
    saveState(state);
  }

  function updateStreak() {
    const today = new Date().toDateString();
    if (state.lastPlayDate) {
      const last = new Date(state.lastPlayDate);
      const diff = Math.floor((new Date(today) - last) / 86400000);
      if (diff > 1) state.streak = 0;
    }
  }

  function updateNav() {
    document.getElementById("navXpValue").textContent = `${state.xp} XP`;
    document.getElementById("navStreakValue").textContent = state.streak;
  }

  // ─── Navigation ───
  function navigate(page) {
    if (!state.tutorialCompleted && (page === "modules" || page === "quiz")) {
      showToast("📚 Please complete the tutorial first!", "error");
      page = "tutorial";
    }

    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    const screen = document.getElementById(`screen-${page}`);
    if (screen) screen.classList.add("active");

    document.querySelectorAll(".nav-link").forEach(l => {
      l.classList.toggle("active", l.dataset.page === page);
    });

    switch (page) {
      case "modules": renderModules(); break;
      case "dashboard": renderDashboard(); break;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ─── Welcome ───
  function startJourney() {
    const input = document.getElementById("usernameInput");
    const name = input.value.trim();
    if (!name) {
      input.style.borderColor = "var(--danger)";
      input.focus();
      showToast("⚠️ Please enter your name!", "error");
      return;
    }
    state.username = name;
    saveState(state);
    showToast(`Welcome, ${name}! Let's learn! 🎉`, "success");

    if (!state.tutorialCompleted) {
      navigate("tutorial");
    } else {
      navigate("modules");
    }

    setTimeout(() => mascotSay("Hi " + name + "! 👋 I'm your grammar assistant. Click me for tips!"), 1000);
  }

  // ─── Get quiz questions for a module ───
  function getModuleQuestions(moduleKey, count) {
    count = count || 20;
    switch (moduleKey) {
      case "imperative":
        return shuffleArray(IMPERATIVE_QUIZ).slice(0, count);
      case "articles":
        return shuffleArray(ARTICLES_QUIZ).slice(0, count);
      case "prepositions":
        return shuffleArray(PREPOSITIONS_QUIZ).slice(0, count);
      case "subjectverb":
        return shuffleArray(SV_QUIZ).slice(0, count);
      default:
        return [];
    }
  }

  // ─── Modules ───
  function renderModules() {
    const grid = document.getElementById("modulesGrid");
    const modules = [
      {
        key: "imperative", title: "Patient-Facing Language", icon: "🗣️",
        desc: "Quiz on imperative language and patient-centered documentation style",
        questions: 20, xp: 15,
      },
      {
        key: "articles", title: "Article Errors", icon: "📰",
        desc: "Identify and correct missing or incorrect articles (a, an, the) in medical documentation",
        questions: 20, xp: 15,
      },
      {
        key: "prepositions", title: "Preposition Errors", icon: "🔗",
        desc: "Fix incorrect or missing prepositions in clinical notes",
        questions: 20, xp: 15,
      },
      {
        key: "subjectverb", title: "Subject-Verb Errors", icon: "⚙️",
        desc: "Correct subject-verb agreement and verb form errors in medical writing",
        questions: 20, xp: 15,
      },
    ];

    grid.innerHTML = modules.map(function(m, i) {
      var modState = state.modules[m.key];
      var completed = modState.completed;
      var statusClass = completed ? "done-icon" : "play-icon";
      var statusIcon = completed ? "✓" : "▶";

      return '<div class="module-card ' + (completed ? 'completed' : '') + '"' +
        ' onclick="App.startQuiz(\'' + m.key + '\')"' +
        ' style="animation-delay: ' + (i * 0.1) + 's">' +
        '<div class="module-icon ' + m.key + '">' + m.icon + '</div>' +
        '<div class="module-info">' +
        '<div class="module-title">' + m.title + '</div>' +
        '<div class="module-desc">' + m.desc + '</div>' +
        '<div class="module-meta">' +
        '<span>📝 ' + m.questions + ' questions</span>' +
        '<span>⚡ ' + m.xp + ' XP each</span>' +
        (modState.best > 0 ? '<span>🏆 Best: ' + modState.best + '%</span>' : '') +
        '</div></div>' +
        '<div class="module-status ' + statusClass + '">' + statusIcon + '</div>' +
        '</div>';
    }).join("");

    // Daily challenge
    var daily = document.getElementById("dailyChallenge");
    var today = new Date().toDateString();
    if (state.lastDailyDate === today) {
      daily.style.opacity = "0.5";
      daily.style.pointerEvents = "none";
      daily.querySelector(".daily-desc").textContent = "✅ Completed today! Come back tomorrow.";
    } else {
      daily.style.opacity = "1";
      daily.style.pointerEvents = "auto";
    }
  }

  // ─── Quiz Engine ───
  function startQuiz(moduleKey) {
    var questions = getModuleQuestions(moduleKey, 20);
    if (!questions.length) return;

    currentQuiz = {
      moduleKey: moduleKey,
      questions: questions,
      currentIndex: 0,
      answers: [],
      startTime: Date.now(),
      elapsed: 0,
      timerId: null,
    };

    navigate("quiz");
    renderQuestion();
    startTimer();

    var titleMap = {
      imperative: "PATIENT-FACING LANGUAGE",
      articles: "ARTICLE ERRORS",
      prepositions: "PREPOSITION ERRORS",
      subjectverb: "SUBJECT-VERB ERRORS",
      daily: "DAILY CHALLENGE",
    };
    document.getElementById("quizModuleLabel").textContent = titleMap[moduleKey] || moduleKey.toUpperCase();
    mascotSay(randomPick([
      "You got this! 💪", "Focus and read carefully! 🔍",
      "Take your time with each one! ⏳", "Let's ace this! 🎯"
    ]));
  }

  function startDailyChallenge() {
    if (!state.tutorialCompleted) {
      showToast("📚 Please complete the tutorial first!", "error");
      navigate("tutorial");
      return;
    }
    var today = new Date().toDateString();
    if (state.lastDailyDate === today) return;

    var artQ = getModuleQuestions("articles", 3);
    var prepQ = getModuleQuestions("prepositions", 3);
    var svQ = getModuleQuestions("subjectverb", 4);
    var questions = shuffleArray([].concat(artQ, prepQ, svQ));

    currentQuiz = {
      moduleKey: "daily",
      questions: questions,
      currentIndex: 0,
      answers: [],
      startTime: Date.now(),
      elapsed: 0,
      timerId: null,
    };

    navigate("quiz");
    renderQuestion();
    startTimer();

    document.getElementById("quizModuleLabel").textContent = "DAILY CHALLENGE";
    mascotSay("Daily challenge! 10 quick questions for bonus XP! ⚡");
  }

  function startTimer() {
    if (currentQuiz.timerId) clearInterval(currentQuiz.timerId);
    currentQuiz.timerId = setInterval(function() {
      currentQuiz.elapsed++;
      document.getElementById("timerValue").textContent = formatTime(currentQuiz.elapsed);
    }, 1000);
  }

  function stopTimer() {
    if (currentQuiz && currentQuiz.timerId) {
      clearInterval(currentQuiz.timerId);
      currentQuiz.timerId = null;
    }
  }

  function renderQuestion() {
    var q = currentQuiz.questions[currentQuiz.currentIndex];
    var total = currentQuiz.questions.length;
    var idx = currentQuiz.currentIndex;

    document.getElementById("quizQuestionCount").textContent = (idx + 1) + " / " + total;
    document.getElementById("quizProgressFill").style.width = ((idx / total) * 100) + "%";

    var sectionText = q.section || "CLINICAL DOCUMENTATION";
    document.getElementById("quizSectionBadge").textContent = "📋 " + sectionText;

    var options;

    if (q.options) {
      // 4-option format (imperative quiz)
      document.querySelector(".quiz-instruction").textContent = q.question;
      options = shuffleArray(q.options.map(function(opt) {
        return { text: opt.text, isCorrect: opt.correct };
      }));
    } else {
      // 2-option format (grammar error quizzes)
      document.querySelector(".quiz-instruction").textContent = "Select the grammatically correct sentence:";
      options = shuffleArray([
        { text: q.correct, isCorrect: true },
        { text: q.incorrect, isCorrect: false },
      ]);
    }

    var optionsEl = document.getElementById("quizOptions");
    optionsEl.innerHTML = options.map(function(opt, i) {
      return '<button class="quiz-option" data-index="' + i + '" data-correct="' + opt.isCorrect + '"' +
        ' onclick="App.handleAnswer(this)">' +
        '<span class="option-letter">' + String.fromCharCode(65 + i) + '.</span> ' + escapeHtml(opt.text) +
        '</button>';
    }).join("");

    var feedback = document.getElementById("quizFeedback");
    feedback.className = "quiz-feedback";
    feedback.style.display = "none";
    document.getElementById("quizNextBtn").style.display = "none";

    var card = document.getElementById("quizCard");
    card.style.animation = "none";
    card.offsetHeight;
    card.style.animation = "popIn 0.4s ease";
  }

  function handleAnswer(btn) {
    var isCorrect = btn.dataset.correct === "true";
    var q = currentQuiz.questions[currentQuiz.currentIndex];
    selectAnswer(btn, isCorrect, q.reason || "");
  }

  function selectAnswer(btn, isCorrect, reason) {
    var options = document.querySelectorAll(".quiz-option");
    options.forEach(function(o) { o.classList.add("disabled"); });

    options.forEach(function(o) {
      if (o.dataset.correct === "true") o.classList.add("correct");
    });
    if (!isCorrect) btn.classList.add("wrong");

    var q = currentQuiz.questions[currentQuiz.currentIndex];
    currentQuiz.answers.push({
      question: q,
      wasCorrect: isCorrect,
      selectedText: btn.textContent.trim(),
    });

    var feedback = document.getElementById("quizFeedback");
    feedback.className = "quiz-feedback show " + (isCorrect ? "correct-fb" : "wrong-fb");
    feedback.style.display = "block";
    feedback.innerHTML = '<div class="feedback-title">' + (isCorrect ? "✅ Correct!" : "❌ Incorrect") + '</div>' +
      '<div class="feedback-reason">' + escapeHtml(reason) + '</div>';

    var nextBtn = document.getElementById("quizNextBtn");
    var isLast = currentQuiz.currentIndex >= currentQuiz.questions.length - 1;
    nextBtn.textContent = isLast ? "See Results →" : "Next Question →";
    nextBtn.style.display = "inline-flex";

    if (isCorrect) {
      showToast("+15 XP ⚡", "xp");
    }
  }

  function nextQuestion() {
    currentQuiz.currentIndex++;
    if (currentQuiz.currentIndex >= currentQuiz.questions.length) {
      finishQuiz();
    } else {
      renderQuestion();
    }
  }

  function finishQuiz() {
    stopTimer();

    var correctCount = currentQuiz.answers.filter(function(a) { return a.wasCorrect; }).length;
    var total = currentQuiz.questions.length;
    var percentage = Math.round((correctCount / total) * 100);
    var moduleKey = currentQuiz.moduleKey;

    var xpPerQuestion = 15;
    var xpEarned = correctCount * xpPerQuestion;
    var bonusXp = percentage === 100 ? 50 : percentage >= 80 ? 20 : 0;
    var totalXpEarned = xpEarned + bonusXp;

    state.xp += totalXpEarned;
    state.totalQuizzes++;

    var today = new Date().toDateString();
    if (state.lastPlayDate !== today) {
      var last = state.lastPlayDate ? new Date(state.lastPlayDate) : null;
      var diff2 = last ? Math.floor((new Date(today) - last) / 86400000) : 999;
      state.streak = diff2 <= 1 ? state.streak + 1 : 1;
    }
    state.lastPlayDate = today;

    if (moduleKey !== "daily") {
      var mod = state.modules[moduleKey];
      mod.attempts++;
      if (percentage > mod.best) mod.best = percentage;
      if (percentage >= 70) mod.completed = true;
    } else {
      state.dailyChallenges = (state.dailyChallenges || 0) + 1;
      state.lastDailyDate = today;
    }

    saveState(state);
    updateNav();
    checkAchievements();
    renderResults(correctCount, total, percentage, totalXpEarned, bonusXp);
    navigate("results");

    if (percentage >= 80) spawnConfetti();
  }

  function renderResults(correct, total, percentage, totalXp, bonusXp) {
    var emoji, msgPool;
    if (percentage === 100) { emoji = "🏆"; msgPool = MOTIVATION.perfect; }
    else if (percentage >= 80) { emoji = "🌟"; msgPool = MOTIVATION.great; }
    else if (percentage >= 50) { emoji = "👍"; msgPool = MOTIVATION.good; }
    else { emoji = "📚"; msgPool = MOTIVATION.poor; }

    var titleMap = {
      imperative: "Patient-Facing Language",
      articles: "Article Errors",
      prepositions: "Preposition Errors",
      subjectverb: "Subject-Verb Errors",
      daily: "Daily Challenge",
    };

    document.getElementById("resultsEmoji").textContent = emoji;
    document.getElementById("resultsTitle").textContent = randomPick(msgPool);
    document.getElementById("resultsSubtitle").textContent = "You scored " + correct + " out of " + total + " on " + (titleMap[currentQuiz.moduleKey] || "the quiz") + ".";

    document.getElementById("resultsStats").innerHTML =
      '<div class="result-stat-card"><span class="result-stat-value" style="color:var(--accent-light)">' + percentage + '%</span><span class="result-stat-label">Score</span></div>' +
      '<div class="result-stat-card"><span class="result-stat-value" style="color:var(--success)">' + correct + '</span><span class="result-stat-label">Correct</span></div>' +
      '<div class="result-stat-card"><span class="result-stat-value" style="color:var(--danger)">' + (total - correct) + '</span><span class="result-stat-label">Wrong</span></div>' +
      '<div class="result-stat-card"><span class="result-stat-value">' + formatTime(currentQuiz.elapsed) + '</span><span class="result-stat-label">Time</span></div>';

    document.getElementById("resultsXp").innerHTML =
      '<span>⚡ You earned <strong>' + totalXp + ' XP</strong></span>' +
      (bonusXp > 0 ? '<span style="margin-left:12px;color:var(--warning)">🎁 +' + bonusXp + ' bonus XP!</span>' : '');

    var list = document.getElementById("breakdownList");
    list.innerHTML = currentQuiz.answers.map(function(a, i) {
      var correctText = escapeHtml(a.question.correct || (a.question.options && a.question.options.find(function(o) { return o.correct; }) || {}).text || "");
      var selectedText = escapeHtml(a.selectedText || "");
      return '<div class="breakdown-item ' + (a.wasCorrect ? "correct-item" : "wrong-item") + '">' +
        '<div class="breakdown-q">Q' + (i + 1) + ' — ' + escapeHtml(a.question.section || "Clinical Plan") + '</div>' +
        (!a.wasCorrect ? '<div class="breakdown-sentence user-wrong">✗ ' + selectedText + '</div>' : '') +
        '<div class="breakdown-sentence correct-answer">✓ ' + correctText + '</div>' +
        '<div class="breakdown-reason">💡 ' + escapeHtml(a.question.reason || '') + '</div>' +
        '</div>';
    }).join("");
  }

  function retryModule() {
    if (currentQuiz) startQuiz(currentQuiz.moduleKey);
  }

  function confirmQuit() {
    showModal("Quit Quiz?", "Your progress on this quiz will be lost.", "Quit", function() {
      stopTimer();
      currentQuiz = null;
      navigate("modules");
      closeModal();
    });
  }

  // ─── Dashboard ───
  function renderDashboard() {
    var lvl = getLevel(state.xp);

    document.getElementById("dashProfile").innerHTML =
      '<div class="dash-card-title">Profile</div>' +
      '<div style="font-size:3rem;margin-bottom:8px">👤</div>' +
      '<div class="dash-username">' + (state.username || "Guest") + '</div>' +
      '<div class="dash-join-date">🔥 ' + state.streak + '-day streak</div>';

    document.getElementById("dashLevel").innerHTML =
      '<div class="dash-card-title">Level</div>' +
      '<div class="dash-big-stat" style="background:var(--gradient-primary);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Lv. ' + lvl.level + '</div>' +
      '<div class="dash-stat-label">' + state.xp + ' Total XP</div>' +
      '<div class="level-bar-container"><div class="level-bar-labels"><span>' + lvl.currentLevelXp + ' XP</span><span>' + lvl.nextLevelXp + ' XP</span></div>' +
      '<div class="level-bar"><div class="level-bar-fill" style="width:' + ((lvl.currentLevelXp / lvl.nextLevelXp) * 100) + '%"></div></div></div>';

    var moduleNames = {
      imperative: "Patient-Facing Language",
      articles: "Article Errors",
      prepositions: "Preposition Errors",
      subjectverb: "Subject-Verb Errors",
    };

    var moduleList = Object.keys(moduleNames).map(function(key) {
      var m = state.modules[key];
      var badgeClass = m.completed ? "badge-completed" : "badge-available";
      var badgeText = m.completed ? "Completed" : "Available";
      return '<div class="module-progress-item">' +
        '<span class="module-progress-name">' + moduleNames[key] + '</span>' +
        '<span class="module-progress-score">Best: ' + m.best + '% · ' + m.attempts + ' attempts</span>' +
        '<span class="module-progress-badge ' + badgeClass + '">' + badgeText + '</span>' +
        '</div>';
    }).join("");

    document.getElementById("dashProgress").innerHTML =
      '<div class="dash-card-title">Module Progress</div>' + moduleList;

    var achHTML = ACHIEVEMENTS.map(function(a) {
      var unlocked = state.achievements.includes(a.id);
      return '<div class="achievement-item ' + (unlocked ? "unlocked" : "locked-ach") + '" title="' + a.desc + '">' +
        '<span class="ach-icon">' + a.icon + '</span>' +
        '<span class="ach-name">' + a.name + '</span></div>';
    }).join("");

    document.getElementById("dashAchievements").innerHTML =
      '<div class="dash-card-title">Achievements</div><div class="achievements-grid">' + achHTML + '</div>';
  }

  // ─── Achievements ───
  function checkAchievements() {
    ACHIEVEMENTS.forEach(function(a) {
      if (!state.achievements.includes(a.id) && a.check(state)) {
        state.achievements.push(a.id);
        saveState(state);
        showAchievement(a);
      }
    });
  }

  function showAchievement(ach) {
    var popup = document.getElementById("achievementPopup");
    document.getElementById("achievementIcon").textContent = ach.icon;
    document.getElementById("achievementName").textContent = ach.name;
    popup.classList.add("show");
    setTimeout(function() { popup.classList.remove("show"); }, 4000);
  }

  // ─── Mascot ───
  function mascotSpeak() {
    mascotSay(randomPick(MASCOT_TIPS));
  }

  function mascotSay(msg) {
    var bubble = document.getElementById("mascotBubble");
    bubble.textContent = msg;
    bubble.classList.add("show");
    setTimeout(function() { bubble.classList.remove("show"); }, 5000);
  }

  // ─── Toasts ───
  function showToast(message, type) {
    type = type || "success";
    var container = document.getElementById("toastContainer");
    var toast = document.createElement("div");
    toast.className = "toast toast-" + type;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(function() {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(100px)";
      setTimeout(function() { toast.remove(); }, 300);
    }, 3000);
  }

  // ─── Modal ───
  function showModal(title, body, confirmText, onConfirm) {
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalBody").textContent = body;
    var confirmBtn = document.getElementById("modalConfirm");
    confirmBtn.textContent = confirmText;
    confirmBtn.onclick = onConfirm;
    document.getElementById("modalOverlay").classList.add("show");
  }

  function closeModal() {
    document.getElementById("modalOverlay").classList.remove("show");
  }

  // ─── Tutorial ───
  function completeTutorial() {
    state.tutorialCompleted = true;
    state.xp += 25;
    saveState(state);
    updateNav();
    showToast("🎓 Tutorial Complete! +25 XP — Modules unlocked!", "success");
    spawnConfetti();
    navigate("modules");
    setTimeout(function() { mascotSay("Great job finishing the tutorial! Now let's practice! 💪"); }, 800);
  }

  // ─── Confetti ───
  function spawnConfetti() {
    var colors = ["#6c5ce7", "#a29bfe", "#00c853", "#ffc107", "#ff5252", "#00b0ff"];
    for (var i = 0; i < 50; i++) {
      (function() {
        var piece = document.createElement("div");
        piece.className = "confetti-piece";
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.background = randomPick(colors);
        piece.style.animationDuration = (2 + Math.random() * 2) + "s";
        piece.style.animationDelay = Math.random() * 1.5 + "s";
        piece.style.width = (6 + Math.random() * 8) + "px";
        piece.style.height = (6 + Math.random() * 8) + "px";
        document.body.appendChild(piece);
        setTimeout(function() { piece.remove(); }, 5000);
      })();
    }
  }

  // Public API
  return {
    init: init,
    navigate: navigate,
    startJourney: startJourney,
    toggleTheme: toggleTheme,
    startQuiz: startQuiz,
    startDailyChallenge: startDailyChallenge,
    handleAnswer: handleAnswer,
    selectAnswer: selectAnswer,
    nextQuestion: nextQuestion,
    retryModule: retryModule,
    confirmQuit: confirmQuit,
    closeModal: closeModal,
    mascotSpeak: mascotSpeak,
    completeTutorial: completeTutorial,
  };
})();

// Boot
document.addEventListener("DOMContentLoaded", App.init);

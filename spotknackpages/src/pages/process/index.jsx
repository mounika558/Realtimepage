import React from 'react'
import Step1 from '../../assets/step_1.svg';
import Step2 from '../../assets/step_2.svg';
import Step3 from '../../assets/step_3.svg';
import Step4 from '../../assets/step_4.svg';
import Step5 from '../../assets/step_5.svg';
import Step6 from '../../assets/step_6.svg';
import Step7 from '../../assets/step_7.svg';
import Step8 from '../../assets/step_8.svg';
const steps=[
  {
    id: 1,
    title: 'Step 1',
    description:
      'Students register for the career they are interested with parents concern',
    image:Step1,
    imageFirst: false,
  },
  {
    id: 2,
    title: 'Step 2',
    description:
      'Team will reach out to you through Whatsapp message to thank for registration and to get confirmation to proceed for the next process',
    image: Step2,
    imageFirst: true,
  },
  {
    id: 3,
    title: 'Step 3',
    description:
      'After confirmation, Zoom interview will be scheduled based on their availability',
    image: Step3,
    imageFirst: false,
  },
  {
    id: 4,
    title: 'Step 4',
    description:
      'After the interview, students will be given questions, answers have to be mailed',
    image: Step4,
    imageFirst: true,
  },
  {
    id: 5,
    title: 'Step 5',
    description:
      'Finance team will mail the payment link for minimum payment to confirm the enrollment',
    image: Step5,
    imageFirst: false,
  },
  {
    id: 6,
    title: 'Step 6',
    description:
      'After confirmation of payment, batch and mentor allocation will be done',
    image:  Step6,
    imageFirst: true,
  },
  {
    id: 7,
    title: 'Step 7',
    description: 'Batch kickstart date will be announced',
    image: Step7,
    imageFirst: false,
  },
  {
    id: 8,
    title: 'Step 8',
    description:
      'Welcome session by the founder and interaction to know each other in the batch',
    image: Step8,
    imageFirst: true,
  }
]

export default function ProcessPage() {
  return (
    <>
    <section className="process-container mt-4 md:mt-14">
      <span className="  m-2 ml-8 font-inter font-medium text-xl flex  text-blue-400  justify-start md:text-3xl md:ml-12 lg:ml-18 lg:text-4xl xl:text-4xl">What We Do!</span>
      <span className=" m-2 ml-8 font-inter font-bold text-xl flex justify-start md:text-3xl md:ml-12 lg:ml-18 lg:text-4xl lg:mb-16 xl:text-4xl">Our Process Of Welcoming Students</span>
      
      {steps.map((step) =>(
      <div className="flex justify-around m-6 mt-6 md:mx-20 md:my-14 lg:mx-18 xl:mx-2 xl:my-10" key={step.id}>
        {
          step.imageFirst &&( 
            <img src={step.image} className="w-28 h-28 mr-3 md:w-40 md:h-40 md:mr-28 lg:w-64 lg:h-64 xl:w-80 xl:h-80 xl:mr-0 2xl:w-80 2xl:h-80"/>
          )
        }
        <div className="flex flex-col gap-4 flex-wrap mx-6 xl:w-2/5">
          <span className="text-lg  font-inter font-medium text-blue-400 md:text-2xl lg:text-3xl xl:text-4xl xl:leading-normal">{step.title}</span>
          <span className="font-inter text-sm font-semibold leading-normal md:text-xl md:leading-relaxed lg:text-2xl lg:leading-normal lg:font-semibold xl:text-3xl xl:leading-relaxed">{step.description}</span>
        </div>
        {
          !step.imageFirst && (
          <img src={step.image} className="w-28 h-28 ml-3 md:w-40 md:h-40  md:ml-28 lg:w-64 lg:h-64 xl:w-80 xl:h-80 xl:ml-0 2xl:w-80 2xl:h-80"/>
          )
        }
      </div> 
    ))}
    </section>
    </>
  )
}

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/stroke.css'; // You can reuse the same CSS styles

function StrokeSurgery() {
  return (
    <div>
      <div className="title7">
        <h1 className="title-content7">Stroke Surgery</h1>
      </div>
      <div className="stroke-content">
        <p style={{ fontSize: '25px', color: '' }}>
          <b>
            <i>
              Stroke surgery is a medical procedure performed to address and
              treat the effects of a stroke, which occurs when there is a sudden
              disruption of blood supply to the brain.
            </i>
          </b>
        </p>
        <p>
          <strong style={{ fontSize: '20px' }}>What is stroke surgery?</strong>
        </p>
        <p>
          Stroke surgery encompasses a range of procedures designed to address
          the aftermath of a stroke, which can result from blood clots or
          bleeding in the brain. These surgeries aim to restore blood flow,
          remove obstructions, and manage the consequences of stroke.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>Why do I need stroke surgery?</strong>
        </p>
        <ul>
          <li>To mitigate the damage caused by a stroke.</li>
          <li>
            To prevent future strokes or address underlying conditions that
            contribute to stroke risk.
          </li>
          <li>To improve neurological function and quality of life.</li>
        </ul>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>How does it work?</strong>
        </p>
        <ol>
          <li>
            Surgical procedures for stroke may involve the removal of blood
            clots (thrombectomy) or the management of brain bleeding.
          </li>
          <li>
            The surgeon may perform endovascular procedures, open surgery, or
            minimally invasive techniques to access and address the affected
            areas.
          </li>
          <li>
            These surgeries often require specialized tools and imaging
            guidance to navigate the brain's complex structures.
          </li>
          <li>
            Post-operative care and rehabilitation are critical components of
            stroke surgery recovery.
          </li>
        </ol>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            Risks and complications include:{' '}
          </strong>
        </p>
        <ul>
          <li>General surgical risks, such as bleeding and infection.</li>
          <li>Neurological complications or damage during surgery.</li>
          <li>Post-operative complications like seizures or cognitive changes.</li>
          <li>
            Risks specific to the type of stroke surgery performed, such as
            thrombectomy risks.
          </li>
        </ul>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>Recovery time:</strong>
        </p>
        <p>
          The recovery process following stroke surgery varies based on the
          individual, the type of surgery, and the extent of neurological
          damage. Rehabilitation and ongoing care are often needed.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>Cost:</strong>
        </p>
        <p>
          The cost of stroke surgery can vary significantly, including factors
          like the type of procedure, location, and healthcare coverage. Costs
          typically range from thousands to tens of thousands of dollars.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            What else can I expect during my appointment?
          </strong>
        </p>
        <p>
          During your stroke surgery consultation, you will discuss the
          procedure's purpose, potential surgical techniques, and the expected
          outcomes. Imaging and neurological assessments may be conducted.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            Can I bring someone with me for support?
          </strong>
        </p>
        <p>
          It's often helpful to have a family member or friend accompany you to
          appointments and provide support during the recovery process.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>Is this a routine procedure?</strong>
        </p>
        <p>
          Stroke surgery is typically not considered a routine procedure but is
          performed when a stroke has occurred or to prevent future strokes in
          high-risk individuals.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            Do I need to make any dietary restrictions?
          </strong>
        </p>
        <p>
          Your healthcare provider may provide dietary guidance before and after
          stroke surgery. Follow their recommendations for the best outcomes.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            How long before I can return to work/school?
          </strong>
        </p>
        <p>
          The timeline for returning to work or school following stroke surgery
          is variable and depends on individual progress, the type of surgery,
          and the nature of your daily activities.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            Will I need follow-up appointments?
          </strong>
        </p>
        <p>
          Follow-up appointments are typically necessary for monitoring your
          recovery, addressing any issues, and assessing the procedure's
          effectiveness.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            Are there risks associated with stroke surgery?
          </strong>
        </p>
        <p>
          As with any surgery, stroke surgery carries risks. It is crucial to
          choose experienced neurosurgeons and medical teams for these procedures.
        </p>
      </div>
      <div className="consult-page">
        <h3>Consult a Doctor for Stroke Surgery</h3>
        <p>
          If you have questions or concerns about stroke surgery, it's essential
          to consult a medical professional with expertise in neurological
          conditions. We can help you find the right doctor to address your
          specific needs.
        </p>
        <p>Here are some common questions to ask your doctor:</p>
        <ul>
          <li>Is stroke surgery appropriate for my condition?</li>
          <li>What are the potential risks and benefits of the procedure?</li>
          <li>Are there alternative treatment options to consider?</li>
          <li>What is the expected recovery process and duration?</li>
          <li>What should I expect during and after stroke surgery?</li>
          <li>Do I need to adhere to specific dietary or lifestyle guidelines?</li>
          <li>How can I prepare for the consultation and potential procedure?</li>
        </ul>
        <p>
          To schedule a consultation with a doctor, please use our{' '}
          <strong>
            <Link to="/contact">contact page</Link>
          </strong>{' '}
          or reach out to our medical staff for additional information.
        </p>
      </div>
    </div>
  );
}

export default StrokeSurgery;

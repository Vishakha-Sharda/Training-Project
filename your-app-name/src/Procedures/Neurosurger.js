import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/neurosurgery.css'; // You can reuse the same CSS styles

function Neurosurgery() {
  return (
    <div>
      <div className="title2">
        <h1 className="title-content2">Neurosurgery</h1>
      </div>
      <div className="neurosurgery-content">
        <p style={{ fontSize: '25px', color: '' }}>
          <b>
            <i>
              Neurosurgery is a medical specialty that focuses on the surgical
              treatment of conditions involving the nervous system, including the
              brain, spinal cord, and peripheral nerves.
            </i>
          </b>
        </p>
        <p>
          <strong style={{ fontSize: '20px' }}>What is neurosurgery? </strong>
        </p>
        <p>
          Neurosurgery involves surgical procedures to treat a wide range of
          neurological conditions, such as brain tumors, spinal cord injuries,
          epilepsy, and more. These procedures may be necessary when other
          treatments are insufficient.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>Why do I need neurosurgery? </strong>
        </p>
        <ul>
          <li>
            To remove brain tumors or lesions that pose a risk to your health.
          </li>
          <li>
            To address spinal cord injuries or disorders that affect your
            mobility and function.
          </li>
          <li>
            To treat neurological conditions such as epilepsy or chronic pain.
          </li>
        </ul>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>How does it work? </strong>
        </p>
        <ol>
          <li>
            A neurosurgeon performs a detailed evaluation and diagnosis of your
            condition.
          </li>
          <li>
            The surgical procedure is planned based on the diagnosis and the
            specific needs of the patient.
          </li>
          <li>
            You'll undergo surgery under anesthesia, and the neurosurgeon will
            access the affected area of the nervous system.
          </li>
          <li>
            The surgery may involve removing tumors, repairing injuries, or
            implanting medical devices.
          </li>
          <li>
            After the surgery, you'll be closely monitored during the recovery
            phase.
          </li>
        </ol>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            Risks and complications include:{' '}
          </strong>
        </p>
        <ul>
          <li>Bleeding or infection at the surgical site.</li>
          <li>Swelling or bruising of the brain or spinal cord.</li>
          <li>Complications related to anesthesia or postoperative pain.</li>
          <li>Neurological deficits depending on the type of surgery.</li>
        </ul>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>Recovery time: </strong>
        </p>
        <p>
          The recovery time after neurosurgery varies depending on the
          complexity of the procedure. Some patients may need weeks to months
          for a full recovery, while others may have a shorter recovery period.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>Cost: </strong>
        </p>
        <p>
          The cost of neurosurgery can vary widely based on the specific
          procedure, the hospital, and your insurance coverage. It's important
          to discuss costs with your healthcare provider.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            What else can I expect during my appointment?{' '}
          </strong>
        </p>
        <p>
          During your neurosurgery appointment, your neurosurgeon will discuss
          your condition, treatment options, and the surgical procedure. You may
          undergo additional diagnostic tests like MRI or CT scans.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            Can I bring someone with me for support?{' '}
          </strong>
        </p>
        <p>
          It's often recommended to have a family member or friend with you for
          support before and after neurosurgery, especially if you require
          assistance during your recovery.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            Is this a routine checkup?{' '}
          </strong>
        </p>
        <p>
          Neurosurgery is not a routine checkup and is typically conducted to
          address specific neurological conditions or disorders.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            Do I need to make any dietary restrictions?{' '}
          </strong>
        </p>
        <p>
          Depending on your surgery and your surgeon's recommendations, you may
          need to follow dietary restrictions before and after neurosurgery.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            How long do I need to wait before returning to work/school?{' '}
          </strong>
        </p>
        <p>
          The timeline for returning to work or school after neurosurgery
          depends on the type of surgery and your recovery progress. Your
          neurosurgeon will provide guidance.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            Will I need follow-up appointments?{' '}
          </strong>
        </p>
        <p>
          Yes, you'll likely need follow-up appointments to monitor your
          recovery, address any issues, and track your progress after
          neurosurgery.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            Are there risks associated with neurosurgery?{' '}
          </strong>
        </p>
        <p>
          Like any surgical procedure, neurosurgery carries some risks. However,
          when performed by skilled neurosurgeons, the benefits often outweigh
          the potential risks.
        </p>
      </div>
      <div className="consult-page">
        <h3>Consult a Doctor for Neurosurgery</h3>
        <p>
          If you have questions or concerns about neurosurgery, it's crucial to
          consult a medical professional. We can help you find the right doctor
          to address your specific needs.
        </p>
        <p>Here are some common questions to ask your doctor:</p>
        <ul>
          <li>Is neurosurgery the right option for my condition?</li>
          <li>What are the potential risks and benefits of the procedure?</li>
          <li>Are there alternative treatment options I should consider?</li>
          <li>What is the expected recovery process and duration?</li>
          <li>What should I expect during and after neurosurgery?</li>
          <li>Do I need to follow any specific dietary or lifestyle guidelines?</li>
          <li>How can I prepare for the consultation and potential procedure?</li>
        </ul>
        <p>
          To consult a doctor, please use our{' '}
          <strong>
            <Link to="/contact">contact page</Link>
          </strong>{' '}
          to schedule an appointment or get more information from our medical
          staff.
        </p>
      </div>
    </div>
  );
}

export default Neurosurgery;

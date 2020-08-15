import React from "react";
import { LinkedinFilled, MailFilled, GithubFilled } from "@ant-design/icons";
import { Tooltip, Button } from "antd";

export const Banner00DataSource = {
  wrapper: { className: "banner0" },
  textWrapper: { className: "banner0-text-wrapper kdqzgjzkem7-editor_css" },
  title: {
    className: "banner0-title",
    children: "https://i.imgur.com/AoCItcO.png",
  },
  content: {
    className: "banner0-content kdtqv4fxdjl-editor_css",
    children: (
      <span>
        <p>"Never settle until you've given your 100%"</p>
      </span>
    ),
  },
  button: {
    className: "banner0-button kdtqv7xap9o-editor_css",
    children: "Learn More About James",
    type: "default",
  },
};
export const Teams00DataSource = {
  wrapper: { className: "home-page-wrapper teams0-wrapper" },
  OverPack: { playScale: 0.3, className: "home-page teams0", appear: true },
  BannerAnim: {
    className: "banner-anim",
    children: [
      {
        name: "elem0",
        className: "teams0-banner-user-elem",
        titleWrapper: {
          className: "teams0-content-wrapper",
          children: [
            {
              name: "image",
              children:
                "https://stylisr.s3.us-west-2.amazonaws.com/dev-profile-photos/James.jpg",
              className: "teams0-image",
            },
            {
              name: "content",
              children: (
                <span>
                  <p>
                    Graduating May 2021, seeking a full-time position as a
                    Software Developer. Based in Vancouver but looking to
                    relocate if the opportunity arises. Contact Me!
                  </p>
                </span>
              ),
              className: "teams0-content kdpm9gmym6-editor_css",
            },
            {
              name: "title",
              children: (
                <span>
                  <p>James Kan</p>
                </span>
              ),
              className: "teams0-h1 kdpkr8zwyab-editor_css",
            },
            {
              name: "content2",
              children: (
                <span>
                  <p>
                    Fourth-year Computer Science &amp; Microbiology and
                    Immunology student at the University of British Columbia
                    (UBC) with a 4.0 GPA for Computer Science courses. I am
                    passionate about changing people's lives for the better one
                    line of code at a time.
                  </p>
                </span>
              ),
              className: "teams0-content kdpkrdw7vs-editor_css",
            },
          ],
        },
      },
    ],
  },
};
export const Feature60DataSource = {
  wrapper: { className: "home-page-wrapper feature6-wrapper" },
  OverPack: { className: "home-page feature6", playScale: 0.3 },
  Carousel: {
    className: "feature6-content",
    dots: false,
    wrapper: { className: "feature6-content-wrapper" },
    titleWrapper: {
      className: "feature6-title-wrapper",
      barWrapper: {
        className: "feature6-title-bar-wrapper",
        children: { className: "feature6-title-bar" },
      },
      title: { className: "feature6-title" },
    },
    children: [
      {
        title: {
          className: "feature6-title-text",
          children: (
            <span>
              <span>
                <p>My Current Statistics</p>
              </span>
            </span>
          ),
        },
        className: "feature6-item",
        name: "block0",
        children: [
          {
            md: 8,
            xs: 24,
            className: "feature6-number-wrapper",
            name: "child0",
            number: {
              className: "feature6-number",
              unit: {
                className: "feature6-unit",
                children: (
                  <span>
                    <p>
                      <br />
                    </p>
                  </span>
                ),
              },
              toText: true,
              children: "5",
            },
            children: {
              className: "feature6-text",
              children: (
                <span>
                  <p>Impactful Work Experiences</p>
                </span>
              ),
            },
          },
          {
            md: 8,
            xs: 24,
            className: "feature6-number-wrapper",
            name: "child1",
            number: {
              className: "feature6-number",
              unit: {
                className: "feature6-unit",
                children: (
                  <span>
                    <p>
                      <br />
                    </p>
                  </span>
                ),
              },
              toText: true,
              children: "7",
            },
            children: {
              className: "feature6-text",
              children: (
                <span>
                  <p>Proud Projects</p>
                </span>
              ),
            },
          },
          {
            md: 8,
            xs: 24,
            className: "feature6-number-wrapper",
            name: "child2",
            number: {
              className: "feature6-number",
              unit: {
                className: "feature6-unit",
                children: (
                  <span>
                    <p>
                      <br />
                    </p>
                  </span>
                ),
              },
              toText: true,
              children: "4",
            },
            children: {
              className: "feature6-text",
              children: (
                <span>
                  <p>Memorable Hackathon Experiences</p>
                </span>
              ),
            },
          },
          {
            md: 8,
            xs: 24,
            className: "feature6-number-wrapper",
            name: "child~kdsd9qz59k9",
            number: {
              className: "feature6-number",
              unit: {
                className: "feature6-unit",
                children: (
                  <span>
                    <p>
                      <br />
                    </p>
                  </span>
                ),
              },
              toText: true,
              children: "6",
            },
            children: {
              className: "feature6-text",
              children: (
                <span>
                  <span>
                    <p>Rewarding Volunteer Experiences</p>
                  </span>
                </span>
              ),
            },
          },
          {
            md: 8,
            xs: 24,
            className: "feature6-number-wrapper",
            name: "child~kdsd9snvj2a",
            number: {
              className: "feature6-number",
              unit: {
                className: "feature6-unit",
                children: (
                  <span>
                    <p>
                      <br />
                    </p>
                  </span>
                ),
              },
              toText: true,
              children: "6",
            },
            children: {
              className: "feature6-text",
              children: (
                <span>
                  <p>Proficient Languages</p>
                </span>
              ),
            },
          },
          {
            md: 8,
            xs: 24,
            className: "feature6-number-wrapper",
            name: "child~kdsd9twz72p",
            number: {
              className: "feature6-number",
              unit: {
                className: "feature6-unit",
                children: (
                  <span>
                    <p>
                      <br />
                    </p>
                  </span>
                ),
              },
              toText: true,
              children: "3",
            },
            children: {
              className: "feature6-text",
              children: (
                <span>
                  <p>Proficient Frameworks &amp; Libraries</p>
                </span>
              ),
            },
          },
        ],
      },
    ],
  },
};
export const Content130DataSource = {
  OverPack: {
    className: "home-page-wrapper content13-wrapper",
    playScale: 0.3,
  },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "image",
        children:
          "https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg",
        className: "title-image",
      },
      {
        name: "title",
        children: (
          <span>
            <p>Connect With Me!&nbsp;</p>
          </span>
        ),
        className: "title-h1",
      },
      {
        name: "content",
        children: (
          <span>
            <p>Reach out to me on LinkedIn or Email. Happy to chat!&nbsp;</p>
          </span>
        ),
        className: "title-content kdtqumdgj47-editor_css",
      },
      {
        name: "content2",
        children: (
          <span>
            <span>
              <div>
                <a
                  className="iconButton"
                  href="http://www.linkedin.com/in/jameskanbc"
                >
                  <LinkedinFilled style={{ fontSize: "48px", margin: "5px" }} />
                </a>
                <Tooltip title={"james.kan.bc@gmail.com"}>
                  <a
                    className="iconButton"
                    href="mailto:james.kan.bc@gmail.com"
                  >
                    <MailFilled style={{ fontSize: "48px", margin: "5px" }} />
                  </a>
                </Tooltip>
              </div>
            </span>
          </span>
        ),
        className: "title-content kdtqusj25v-editor_css",
      },
    ],
  },
};
export const Content90DataSource = {
  wrapper: { className: "home-page-wrapper content9-wrapper" },
  page: { className: "home-page content9" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "image",
        children:
          "https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg",
        className: "title-image",
      },
      {
        name: "title",
        children: (
          <span>
            <p>Work Experiences</p>
          </span>
        ),
        className: "title-h1",
      },
    ],
  },
  block: {
    className: "timeline",
    children: [
      {
        name: "block0",
        className: "block-wrapper",
        playScale: 0.3,
        children: {
          imgWrapper: { className: "image-wrapper" },
          textWrapper: { className: "text-wrapper" },
          img: {
            className: "block-img",
            children:
              "https://themarketinggp.com.au/wp-content/uploads/2019/04/hootsuite-Logo.png",
          },
          icon: {
            className: "block-icon",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg",
          },
          name: {
            className: "block-name kdtq0pebvbd-editor_css",
            children: (
              <span>
                <p>Hootsuite</p>
              </span>
            ),
          },
          post: {
            className: "block-post",
            children: (
              <span>
                <p>Software Developer Intern</p>
              </span>
            ),
          },
          time: {
            className: "block-time",
            children: (
              <span>
                <p>May, 2020 - Aug, 2020</p>
              </span>
            ),
          },
          title: {
            className: "block-title",
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <p>Building Confidence &amp; Growth&nbsp;</p>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
          content: {
            className: "block-content kdtqt45cy06-editor_css",
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <p>
                        <ul>
                          <li>
                            Migrated 100k+ Hootsuite Twitter users to use
                            webhook infrastructure in Scala for automated
                            message assignments.
                          </li>
                          <li>
                            Uncovered unreliability in existing logging
                            infrastructure and fixed existing services to use a
                            non-UDP logging infrastructure.
                          </li>
                          <li>
                            Worked with Kafka to prepare and emit data for
                            analytics.
                          </li>
                        </ul>
                      </p>
                      <p>
                        <br />
                      </p>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: "block1",
        className: "block-wrapper",
        playScale: 0.3,
        children: {
          imgWrapper: { className: "image-wrapper" },
          textWrapper: { className: "text-wrapper" },
          img: {
            className: "block-img",
            children:
              "https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1495219750/s6mbn7ej2gwzsy6a5lrw.png",
          },
          icon: {
            className: "block-icon",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg",
          },
          name: {
            className: "block-name kdtq12cj1t6-editor_css",
            children: (
              <span>
                <p>Opencare</p>
              </span>
            ),
          },
          post: {
            className: "block-post",
            children: (
              <span>
                <p>Full-Stack Software Developer Intern</p>
              </span>
            ),
          },
          time: {
            className: "block-time",
            children: (
              <span>
                <p>May, 2019 - Aug, 2019</p>
              </span>
            ),
          },
          title: {
            className: "block-title",
            children: (
              <span>
                <p>Explore Your Limitations</p>
              </span>
            ),
          },
          content: {
            className: "block-content kdsi05it93t-editor_css",
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <p>
                        <ul>
                          <li>
                            Implemented and deployed a cloud-based
                            online-booking data-scraper API with Node.js and
                            JavaScript for a platform that Opencare’s
                            competitors cannot support.
                          </li>
                          <li>
                            Built a C# integration for a dental software 3 weeks
                            earlier than scheduled and increased eligibility of
                            Opencare’s Canadian clients by 30% through the
                            desktop integration.
                          </li>
                          <li>
                            Created a C.I./C.D. build pipeline for the desktop
                            application using Jenkins to encourage the team to
                            deploy more regularly and reduce the time that
                            engineers spent creating/reviewing builds.
                          </li>
                        </ul>
                      </p>
                      <p>
                        <br />
                      </p>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: "block2",
        className: "block-wrapper",
        playScale: 0.3,
        children: {
          imgWrapper: { className: "image-wrapper" },
          textWrapper: { className: "text-wrapper" },
          img: {
            className: "block-img",
            children:
              "https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1494352498/koorqcqma5erxlyw3gr2.png",
          },
          icon: {
            className: "block-icon",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg",
          },
          name: {
            className: "block-name kdtq1wp4x3-editor_css",
            children: (
              <span>
                <p>Tasktop</p>
              </span>
            ),
          },
          post: {
            className: "block-post",
            children: (
              <span>
                <p>Junior Software Engineer</p>
              </span>
            ),
          },
          time: {
            className: "block-time",
            children: (
              <span>
                <p>Sept, 2018 - April, 2019</p>
              </span>
            ),
          },
          title: {
            className: "block-title",
            children: (
              <span>
                <p>Developing Technical Skills</p>
              </span>
            ),
          },
          content: {
            className: "block-content kdtq1bxa9cc-editor_css",
            children: (
              <span>
                <p>
                  <ul>
                    <li>
                      Built custom React chart components using D3 and SVG with
                      TypeScript to visualize client data in front-end and
                      delivered a successful product demo with BMW.
                    </li>
                    <li>
                      Deployed critical application monitoring infrastructure
                      for Kubernetes clusters using Datadog which helped to
                      identify major application performance bottlenecks.
                    </li>
                    <li>
                      Implemented back-end user access privilege features,
                      working in the micro-service architecture-based web app
                      using Scala, Kafka, Kubernetes, and GraphQL.
                    </li>
                  </ul>
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: "block3",
        className: "block-wrapper",
        playScale: 0.3,
        children: {
          imgWrapper: { className: "image-wrapper" },
          textWrapper: { className: "text-wrapper" },
          img: {
            className: "block-img",
            children:
              "https://icord.org/wp-content/uploads/2012/08/FoM-Logo_blue.png",
          },
          icon: {
            className: "block-icon",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg",
          },
          name: {
            className: "block-name kdtq1sspwwm-editor_css",
            children: (
              <span>
                <p>UBC Medicine</p>
              </span>
            ),
          },
          post: {
            className: "block-post",
            children: (
              <span>
                <p>Project Assistant</p>
              </span>
            ),
          },
          time: {
            className: "block-time",
            children: (
              <span>
                <p>May, 2018 - Aug, 2019</p>
              </span>
            ),
          },
          title: {
            className: "block-title",
            children: (
              <span>
                <p>Cross Disciplinary Cooperation&nbsp;</p>
              </span>
            ),
          },
          content: {
            className: "block-content kdtq1oo2p9o-editor_css",
            children: (
              <span>
                <p>
                  <ul>
                    <li>
                      The study aimed to investigate the evidence base behind
                      using virtual reality in a pediatric rehabilitation form
                      for patients on the autistic disorder spectrum.
                    </li>
                    <li>
                      My role is a full-stack programmer for the research team,
                      tasked with developing front and back end of evaluation
                      software for research analytics.
                    </li>
                    <li>
                      Maintained and debuged Xbox Kinect software used in the
                      study in addition to carrying out experimental trials with
                      autistic patients.
                    </li>
                    <li>
                      Developed a deployed website using HTML & CSS for
                      participant recruitment.
                    </li>
                  </ul>
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: "block~kdr13lkoj0e",
        className: "block-wrapper",
        playScale: 0.3,
        children: {
          imgWrapper: { className: "image-wrapper" },
          textWrapper: { className: "text-wrapper" },
          img: {
            className: "block-img",
            children:
              "data:image/jpeg;base64,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SZmd5dTQo2qTfo3fiYrNdE8MK/xs1jJPXZ8tLzeqPst+5d6LeMar8jMWyzssOjxHkAz5JPxuWPPH/f8A+PR0sxGlUink2HNd+qQfkQV6t4/Rt/DxaTEZN5jbq0CupYa+Jtn+bfaaWkZG3L89y8bHa+C8zs+hy0pqccRxKZNSiGrEYNwyRoBPKLg/zXqVvx4t5jrtLxOCKanhr2iVi03cDDH7f+lyw6HfjneHo/kprOKNkZgeE01RFZ0mzNtG1iLgWFsjvG/5rRmz5MeTpHRm02nx5cf6p2slMO0ZEEomM9wzPIbN8uU33ZrPk1M3rNdmrDo647xfiRGlteyaVoYdpsYIuNxJOdvkFp0WOaV4rfLH+QzVyX2r8JrRSpjkpuBJ85u0HDlIcTmPmsmqpauXi2bdFlpfFwboPSLBW0oaWvc4PJHnWytu3LZps85N4tDFrNLXF1rPdP4Q4f7OtfPYl/E5Y88T6jt8t+C1fSxG/wAKKF7DwJ2faknMcjZBvYQe3Pcq8teKkwsw34LxLSZqpjYTP+iGbY6xa4XhxTe3C+mtkiMfGzOWQucXHe4lx7Sble9SvDEQ+YyW4rTL8LpWICAgIFkmN+6Y6ONkcyjhjwnilyp2hG7lEOES/THEbiR2GyiaxPeHUXtHaXBN8+VIiIJtM95cKdt0RO3YSI2RMzPcso2g3kUofpryNxI7DZRNYnvDqtpjtLglTsTM93FlEREdkbzIpmN+5E7Tu/ZkcctokdpXPBXw65lvL8Lpy5Bskxv3TFpjs5c8neSe03URWI7QmbTbvL82U7fKN5EQnsBwSOpYXukLdl1iBbMWB3ndvWLU6i+O3DEPQ0mmx5K72l3dKcTjEQpYiCBYO2TcNa21m9u75KnSYpm3HaGjXaitaRioqi9N44iBAQEBAQEBAQEBEiAgIgQEBARIiBAQEBAQESIObqJiJ7pi0x2cKY6I3EBECAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIP//Z",
          },
          icon: {
            className: "block-icon",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg",
          },
          name: {
            className: "block-name kdtq22li53u-editor_css",
            children: (
              <span>
                <span>
                  <p>UBC Dentistry</p>
                </span>
              </span>
            ),
          },
          post: {
            className: "block-post",
            children: (
              <span>
                <span>
                  <p>Project Worker</p>
                </span>
              </span>
            ),
          },
          time: {
            className: "block-time",
            children: (
              <span>
                <span>
                  <p>Sept, 2016 - April, 2018</p>
                </span>
              </span>
            ),
          },
          title: {
            className: "block-title",
            children: (
              <span>
                <p>Automation&nbsp;</p>
              </span>
            ),
          },
          content: {
            className: "block-content kdtq29tp4i-editor_css",
            children: (
              <span>
                <p>
                  <ul>
                    <li>
                      Responsible for digitizing sensitive patient records into
                      secure database and assisting with the preparation and
                      distribution of financial documents.
                    </li>
                    <li>
                      Developed and maintained software on personal time to
                      simplify the digitization process of patient records that
                      are now utilized by the team.
                    </li>
                    <li>
                      The software developed is now an integral part of the
                      position for future students who take on the position.
                    </li>
                    <li>
                      GUI was created after feedback from colleagues and focus
                      on providing a simple, clean, and modern design.
                    </li>
                  </ul>
                </p>
              </span>
            ),
          },
        },
      },
    ],
  },
};
export const Content120DataSource = {
  wrapper: { className: "home-page-wrapper content12-wrapper" },
  page: { className: "home-page content12" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "image",
        children:
          "https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg",
        className: "title-image",
      },
      {
        name: "title",
        children: (
          <span>
            <span>
              <span>
                <span>
                  <span>
                    <p>Some Languages &amp; Frameworks &amp; Libraries</p>
                  </span>
                </span>
              </span>
            </span>
          </span>
        ),
        className: "title-h1",
      },
    ],
  },
  block: {
    className: "img-wrapper",
    children: [
      {
        name: "block0",
        className: "block",
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: "block-content kdqzmtnzl76-editor_css" },
          img: {
            children: "https://i.imgur.com/Q4DI9Ba.png?1",
            className: "kdqz6mn2egt-editor_css",
          },
        },
      },
      {
        name: "block~kdtskon1vin",
        className: "block",
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: "block-content kdqzmtnzl76-editor_css" },
          img: {
            children: "https://i.imgur.com/NTLBgKK.png?1",
            className: "kdqz6mn2egt-editor_css",
          },
        },
      },
      {
        name: "block3",
        className: "block",
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: "block-content" },
          img: { children: "https://i.imgur.com/RFIIwi7.png?1" },
        },
      },
      {
        name: "block4",
        className: "block",
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: "block-content" },
          img: { children: "https://i.imgur.com/xDvqOFR.png?1" },
        },
      },
      {
        name: "block1",
        className: "block",
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: "block-content kdtrc8j9fnj-editor_css" },
          img: {
            children: "https://i.imgur.com/MHVMq9U.png?1",
            className: "kdtqzmnpcw-editor_css",
          },
        },
      },
      {
        name: "block~kdtsg60atga",
        className: "block",
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: "block-content kdtrc8j9fnj-editor_css" },
          img: {
            children: "https://i.imgur.com/LTgFXzu.png?1",
            className: "kdtqzmnpcw-editor_css",
          },
        },
      },
      {
        name: "block~kdtsg6y318b",
        className: "block",
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: "block-content kdtrc8j9fnj-editor_css" },
          img: {
            children: "https://i.imgur.com/HSuwXA1.png",
            className: "kdtqzmnpcw-editor_css",
          },
        },
      },
      {
        name: "block~kdtsg7bjr1a",
        className: "block",
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: "block-content kdtrc8j9fnj-editor_css" },
          img: {
            children: "https://i.imgur.com/odTpAu9.png?1",
            className: "kdtqzmnpcw-editor_css",
          },
        },
      },
      {
        name: "block~kdtsg7u0c8r",
        className: "block",
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: "block-content kdtrc8j9fnj-editor_css" },
          img: {
            children: "https://i.imgur.com/jIgsqLB.png?1",
            className: "kdtqzmnpcw-editor_css",
          },
        },
      },
    ],
    gutter: 0,
  },
};
export const Feature51DataSource = {
  wrapper: { className: "home-page-wrapper content7-wrapper" },
  page: { className: "home-page content7" },
  OverPack: {},
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <span>
            <p>Highlighted Personal Projects</p>
          </span>
        ),
        className: "title-h1",
      },
      {
        name: "content",
        children: (
          <span>
            <p>Made with Passion! Check out other projects in my Github!</p>
            <Tooltip title="jameskanCa">
              <a href="https://github.com/jameskanCa?tab=repositories">
                <GithubFilled style={{ fontSize: 32, marginTop: 20 }} />
              </a>
            </Tooltip>
          </span>
        ),
      },
    ],
  },
  tabsWrapper: { className: "content7-tabs-wrapper" },
  block: {
    children: [
      {
        name: "block0",
        tag: {
          className: "content7-tag",
          text: {
            children: (
              <span>
                <p>Stylisr</p>
              </span>
            ),
            className: "content7-tag-name",
          },
          icon: { children: "laptop" },
        },
        content: {
          className: "content7-content",
          text: {
            className: "content7-text",
            md: 14,
            xs: 24,
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <h3>Description</h3>
                      <p>
                        Stylisr aims to connect fashion noobies to fashion
                        experts. It allows people to post fashion requests and
                        for people to respond with fashion suggestions. This
                        concept can help change the way people shop in an online
                        market that is ever so more important during COVID. As a
                        full-stack developer and also the project manager for
                        this project, I was involved in front and backend as was
                        making architectural design decisions.
                      </p>
                      <br />
                      <h3>Tech</h3>
                      <p>JavaScript, React, MongoDB, NodeJS</p>
                      <br />
                      <Button href="https://stylisr.herokuapp.com/">
                        Check out the site!
                      </Button>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
          img: {
            className: "content7-img",
            children:
              "https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png",
            md: 10,
            xs: 24,
          },
        },
      },
      {
        name: "block1",
        tag: {
          className: "content7-tag",
          icon: { children: "laptop" },
          text: {
            className: "content7-tag-name",
            children: (
              <span>
                <p>ICBSeat - Desk Reservation</p>
              </span>
            ),
          },
        },
        content: {
          className: "content7-content",
          text: {
            className: "content7-text",
            md: 14,
            xs: 24,
            children: (
              <span>
                <span>
                  <h3>Description</h3>
                  <p>
                    As part of a project course (CPSC 319) at UBC, ICBC
                    (Insurance Corporation of British Columbia) requested a
                    product that allows their employees to "reserve" desks as
                    they transition to a work from home friendly office policy.
                    As a project manager, I was in charge of 6 developers and it
                    was my role to ensure clients needs are met, the team's
                    progress is on track. But also continuing to sharpen my
                    coding skills, I was involved in architecture designs,
                    contributing to the code base participating in code reviews.
                  </p>
                  <br />
                  <h3>Tech</h3>
                  <p>
                    Java with Spring Framework, Javascript with React, MySQL
                  </p>
                  <br />
                  <h3>Role</h3>Project Manager &amp; Full-Stack Developer
                  <br />
                  <Button href="https://icbseat-client.herokuapp.com/">
                    Check out the site!
                  </Button>
                </span>
              </span>
            ),
          },
          img: {
            className: "content7-img",
            md: 10,
            xs: 24,
            children:
              "https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png",
          },
        },
      },
      {
        name: "block2",
        tag: {
          className: "content7-tag",
          text: {
            children: (
              <span>
                <p>YouTube Focus Reminder</p>
              </span>
            ),
            className: "content7-tag-name",
          },
          icon: { children: "laptop" },
        },
        content: {
          className: "content7-content",
          text: {
            className: "content7-text",
            md: 14,
            xs: 24,
            children: (
              <span>
                <span>
                  <h3>Description</h3>
                  <p>
                    This project aims to help make YouTube users make better
                    decisions on video choices while surfing YouTube. Its goal
                    is to reduce distraction and make YouTube a better tool for
                    education. When users surf YouTube videos, if a video may be
                    distracting, a popup will appear to notify users they may be
                    distracted. A client WebApp is also available to view
                    metrics regarding watch history. Clicking on project images
                    can enlarge to view example screenshots of the project. I
                    created a Chrome extension to collect video metadata and a
                    popup modal to notify users whether a video is distracting
                    towards studying. The chrome extension interacts with the
                    RESTful API server I implemented using Node.js to store and
                    retrieve user data from the MongoDB database, enforcing a
                    client-server architecture. This data can then be retrieved
                    from the Single-Page application in React that performs REST
                    calls to API to retrieve data for client-side calculation
                    and rendering of watch history metrics in charts.
                  </p>
                  <br />
                  <h3>Tech</h3>
                </span>
                C#, Unity, VRTK
                <br />
                <Button href="https://github.com/jameskanCa/youtubeextension">
                  Check out the code!
                </Button>
              </span>
            ),
          },
          img: {
            className: "content7-img",
            md: 10,
            xs: 24,
            children:
              "https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png",
          },
        },
      },
      {
        name: "block~kdse7ilc0i",
        tag: {
          className: "content7-tag",
          text: {
            children: (
              <span>
                <span>
                  <p>Habit App</p>
                </span>
              </span>
            ),
            className: "content7-tag-name",
          },
          icon: { children: "mobile" },
        },
        content: {
          className: "content7-content",
          text: {
            className: "content7-text",
            md: 14,
            xs: 24,
            children: (
              <span>
                <h3>Description</h3>
                <p>
                  As the number of productivity and wellness apps increases, it
                  becomes difficult for people to build a consistent routine
                  with these apps. Habit App was built to help tackle that by
                  allowing users the schedule the automatic opening of these
                  apps. The habit app also tracks a user's usage on the app to
                  determine if the specified usage duration was met and marks
                  the habit as complete or incomplete based on the result. The
                  project was the first chance to explore Flutter and mobile
                  development. I implemented patterns such as the BloC pattern
                  to help better design the application.
                </p>
                <br />
                <h3>Tech</h3>
                <p>Java, Dart, Flutter</p>
              </span>
            ),
          },
          img: {
            className: "content7-img",
            md: 10,
            xs: 24,
            children:
              "https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png",
          },
        },
      },
      {
        name: "block~kdse7j93bi6",
        tag: {
          className: "content7-tag",
          text: {
            children: (
              <span>
                <span>
                  <p>Voice Control Chrome Browser</p>
                </span>
              </span>
            ),
            className: "content7-tag-name",
          },
          icon: { children: "laptop" },
        },
        content: {
          className: "content7-content",
          text: {
            className: "content7-text",
            md: 14,
            xs: 24,
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <h3>Description</h3>
                      <p>
                        This project takes Google assistant devices and allow
                        users to use their voice to control the browser through
                        various voice commands. This is a collaborative project
                        involving building a Chrome extension using JavaScript,
                        accessing Google’s web API to achieve basic browser
                        commands through voice. I had a significant role in
                        writing server-side code in Golang that handles JWT
                        requests and performs routing of user’s voice commands
                        from Google Home devices to the correct browser.
                        Additionally, I deployed the server on Amazon AWS
                        infrastructure utilizing EC2 and a load balancer (ELB)
                        handling client requests.
                      </p>
                      <br />
                      <h3>Tech</h3>
                      <p>TypeScript, Golang, React, Dialogflow, Firebase</p>
                      <br />
                      <Button href="https://github.com/jameskanCa/VoiceControl">
                        Check out the code!
                      </Button>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
          img: {
            className: "content7-img",
            md: 10,
            xs: 24,
            children:
              "https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png",
          },
        },
      },
      {
        name: "block~kdsecduid0m",
        tag: {
          className: "content7-tag",
          text: {
            children: (
              <span>
                <span>
                  <span>
                    <p>UBC Dent File Renamer</p>
                  </span>
                </span>
              </span>
            ),
            className: "content7-tag-name",
          },
          icon: { children: "laptop" },
        },
        content: {
          className: "content7-content",
          text: {
            className: "content7-text",
            md: 14,
            xs: 24,
            children: (
              <span>
                <span>
                  <h3>Description</h3>
                  <p>
                    Designed and implemented an automation software that renamed
                    over 1000+ digitized patient records according to patient
                    information. Learned JavaFX in a week to design G.U.I. and
                    integrated M.V.C. design pattern. Back-end design utilized
                    Java file systems to create folders, save files, and comply
                    with departmental privacy and patient data security
                    requirements.
                  </p>
                  <br />
                  <h3>Tech</h3>
                  <p>JavaFX, Java</p>
                  <br />
                  <Button href="https://github.com/jameskanCa/ubcDentFileRenamer">
                    Check out the code!
                  </Button>
                </span>
              </span>
            ),
          },
          img: {
            className: "content7-img",
            md: 10,
            xs: 24,
            children:
              "https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png",
          },
        },
      },
      {
        name: "block~kdsefdn4tqq",
        tag: {
          className: "content7-tag",
          text: {
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <p>Wezard Rush</p>
                    </span>
                  </span>
                </span>
              </span>
            ),
            className: "content7-tag-name",
          },
          icon: { children: "laptop" },
        },
        content: {
          className: "content7-content",
          text: {
            className: "content7-text",
            md: 14,
            xs: 24,
            children: (
              <span>
                <span>
                  <h3>Description</h3>
                  <p>
                    VR centered game where users play as a wizard defending
                    their tower. Enemies are eliminated by being thrown in the
                    air and let to fall down. Utilizing Oculus Rift's SDK
                    unity's OpenVR support to develop the game. Coordinated with
                    a game designer, 2D artist, and sound artist to work on the
                    game.
                  </p>
                  <br />
                  <h3>Tech</h3>
                  <p>C#, Unity, VRTK</p>
                  <br />
                  <Button href="https://github.com/jameskanCa/WezardRushMain">
                    Check out the code
                  </Button>
                </span>
              </span>
            ),
          },
          img: {
            className: "content7-img",
            md: 10,
            xs: 24,
            children:
              "https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png",
          },
        },
      },
    ],
  },
};
export const Content10DataSource = {
  wrapper: { className: "home-page-wrapper content1-wrapper" },
  OverPack: { className: "home-page content1", playScale: 0.3 },
  imgWrapper: { className: "content1-img", md: 10, xs: 24 },
  img: {
    children: "https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png",
  },
  textWrapper: { className: "content1-text", md: 14, xs: 24 },
  title: {
    className: "content1-title",
    children: (
      <span>
        <span>
          <span>
            <p>Developer With a Passion</p>
          </span>
        </span>
      </span>
    ),
  },
  content: {
    className: "content1-content",
    children: (
      <span>
        <span>
          <span>
            <p>
              A goal of mine has always been to find a platform to share my
              experiences as I grow as a developer and as a leader. Stay tuned
              for my blog, quality content coming your way!&nbsp;
            </p>
            <Button style={{ margin: 15 }} disabled>
              Under Construction
            </Button>
          </span>
        </span>
      </span>
    ),
  },
};
export const Feature50DataSource = {
  wrapper: { className: "home-page-wrapper content7-wrapper" },
  page: { className: "home-page content7" },
  OverPack: {},
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <span>
            <span>
              <p>Hackathon Experiences</p>
            </span>
          </span>
        ),
        className: "title-h1",
      },
      {
        name: "content",
        children: (
          <span>
            <p>The journey never ends!&nbsp;</p>
          </span>
        ),
      },
    ],
  },
  tabsWrapper: { className: "content7-tabs-wrapper" },
  block: {
    children: [
      {
        name: "block0",
        tag: {
          className: "content7-tag",
          text: {
            children: (
              <span>
                <span>
                  <p>Protohack</p>
                </span>
              </span>
            ),
            className: "content7-tag-name",
          },
          icon: { children: "mobile" },
        },
        content: {
          className: "content7-content",
          text: {
            className: "content7-text",
            md: 14,
            xs: 24,
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <h3>Topic: Mental Health</h3>
                      <p>
                        By far the most unique experience formed a team on the
                        day of and facilitated the brainstorming of our project
                        by bringing out each individual's expertise in different
                        areas such as business, mental health, technical ...etc.
                        Focused on expanding problem-solving skills by narrowing
                        down and validating the problem in question. Learned and
                        utilized prototyping tools to prepare for the
                        presentation. Our solution was to bridge the gap between
                        counselors and students who are too afraid to reach out.
                        We do this by having students enter their daily emotions
                        through the Snapchat API bit emoji to engage with the
                        youth and through data warehousing, to detect deviations
                        in emotions.
                      </p>
                      <br />
                      <h3>Role</h3>
                      <p>Participant/Team Lead</p>
                      <br />
                      <h3>Placement</h3>2nd Place
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
          img: {
            className: "content7-img",
            children: `${require("../images/protohack.jpg")}`,
            md: 10,
            xs: 24,
          },
        },
      },
      {
        name: "block1",
        tag: {
          className: "content7-tag",
          icon: { children: "tablet" },
          text: {
            className: "content7-tag-name",
            children: (
              <span>
                <span>
                  <p>Lumohacks 2.0</p>
                </span>
              </span>
            ),
          },
        },
        content: {
          className: "content7-content",
          text: {
            className: "content7-text",
            md: 14,
            xs: 24,
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <h3>Topic: Mental Health</h3>
                      <p>
                        My team worked on multi-level solution aiming to tackle
                        drug abuse for Veterans. A mobile app, a smart wrist
                        band, and a dedicated website, our solution attempted to
                        disrupt individual's stream of thoughts.
                      </p>
                      <br />
                      <h3>Role</h3>
                      <p>Participant</p>
                      <br />
                      <h3>Placement</h3>7th Place
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
          img: {
            className: "content7-img",
            md: 10,
            xs: 24,
            children: `${require("../images/lumohacks2.jpg")}`,
          },
        },
      },
      {
        name: "block2",
        tag: {
          className: "content7-tag",
          text: {
            children: (
              <span>
                <span>
                  <p>Mechathon</p>
                </span>
              </span>
            ),
            className: "content7-tag-name",
          },
          icon: { children: "laptop" },
        },
        content: {
          className: "content7-content",
          text: {
            className: "content7-text",
            md: 14,
            xs: 24,
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <h3>Topic: Solving Opioid Crisis with Tech</h3>
                        <p>
                          Our concept revolves around reducing patient wait
                          times through profile matching and providing a
                          one-stop visit to get connected with the necessary
                          resources to seek opioid addiction help.
                        </p>
                        <br />
                        <h3>Role</h3>
                        <p>Team Lead</p>
                        <br />
                        <h3>Placement</h3>1st Place
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
          img: {
            className: "content7-img",
            md: 10,
            xs: 24,
            children: `${require("../images/mechathon.jpg")}`,
          },
        },
      },
      {
        name: "block~kdpm87kzqia",
        tag: {
          className: "content7-tag",
          text: {
            children: (
              <span>
                <span>
                  <span>
                    <p>Lumohacks</p>
                  </span>
                </span>
              </span>
            ),
            className: "content7-tag-name",
          },
          icon: { children: "laptop" },
        },
        content: {
          className: "content7-content",
          text: {
            className: "content7-text",
            md: 14,
            xs: 24,
            children: (
              <span>
                <span>
                  <h3>Topic: Mental Health</h3>
                  <p>
                    The team worked on an android app that matches people based
                    on selected mood for the day. The concept focuses on
                    ensuring people can connect and support each other.
                  </p>
                  <br />
                  <h3>Role</h3>
                  <p>Participant</p>
                  <h3>Placement</h3>11th Place
                </span>
              </span>
            ),
          },
          img: {
            className: "content7-img",
            md: 10,
            xs: 24,
            children: `${require("../images/lumohacks.jpg")}`,
          },
        },
      },
    ],
  },
};
export const Content91DataSource = {
  wrapper: { className: "home-page-wrapper content9-wrapper" },
  page: { className: "home-page content9" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "image",
        children:
          "https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg",
        className: "title-image",
      },
      {
        name: "title",
        children: (
          <span>
            <p>Volunteer Experiences</p>
          </span>
        ),
        className: "title-h1",
      },
    ],
  },
  block: {
    className: "timeline",
    children: [
      {
        name: "block1",
        className: "block-wrapper",
        playScale: 0.3,
        children: {
          imgWrapper: { className: "image-wrapper" },
          textWrapper: { className: "text-wrapper" },
          img: {
            className: "block-img",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png",
          },
          icon: {
            className: "block-icon",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg",
          },
          name: {
            className: "block-name",
            children: (
              <span>
                <p>Committee Member</p>
              </span>
            ),
          },
          post: {
            className: "block-post",
            children: (
              <span>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
          time: {
            className: "block-time",
            children: (
              <span>
                <p>2018</p>
              </span>
            ),
          },
          title: {
            className: "block-title",
            children: (
              <span>
                <p>
                  UBC Computer Science Department's Committee on Student
                  Development
                </p>
              </span>
            ),
          },
          content: {
            className: "block-content kdtqtphw8e-editor_css",
            children: (
              <span>
                <p>
                  Provide student input on co-curricular activities proposed by
                  C.S. department. Brainstormed activities aimed at helping to
                  improve C.S. student's career development such as 'From the
                  Future You', a panel of graduates giving career advice.
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: "block2",
        className: "block-wrapper",
        playScale: 0.3,
        children: {
          imgWrapper: { className: "image-wrapper" },
          textWrapper: { className: "text-wrapper" },
          img: {
            className: "block-img",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png",
          },
          icon: {
            className: "block-icon",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg",
          },
          name: {
            className: "block-name",
            children: (
              <span>
                <p>Volunteer</p>
              </span>
            ),
          },
          post: {
            className: "block-post",
            children: (
              <span>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
          time: {
            className: "block-time",
            children: (
              <span>
                <p>2017 - 2018</p>
              </span>
            ),
          },
          title: {
            className: "block-title",
            children: (
              <span>
                <p>UBC GIRLsmarts4tech</p>
              </span>
            ),
          },
          content: {
            className: "block-content kdtqtsyezs-editor_css",
            children: (
              <span>
                <p>
                  Involved in planning and delivery on cyber-security and
                  ciphers themed workshops for elementary school students to
                  promote women in computer science. Helped students understand
                  the basic ideas of encryption through connecting real world
                  analogies with activities.
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: "block3",
        className: "block-wrapper",
        playScale: 0.3,
        children: {
          imgWrapper: { className: "image-wrapper" },
          textWrapper: { className: "text-wrapper" },
          img: {
            className: "block-img",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png",
          },
          icon: {
            className: "block-icon",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg",
          },
          name: {
            className: "block-name",
            children: (
              <span>
                <p>Co-founder</p>
              </span>
            ),
          },
          post: {
            className: "block-post",
            children: (
              <span>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
          time: {
            className: "block-time",
            children: (
              <span>
                <p>2016 – 2017</p>
              </span>
            ),
          },
          title: {
            className: "block-title",
            children: (
              <span>
                <p>unBounded at UBC</p>
              </span>
            ),
          },
          content: {
            className: "block-content kdtqtw3v3ol-editor_css",
            children: (
              <span>
                <p>
                  Co-founder of an AMS &amp; UBC club that worked with schools
                  in the lower mainland to science beyond classrooms. Organized
                  and oversaw the successful implementation of outreach with
                  Moscrop Secondary School’s cancer society club.
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: "block~kdscwtx2uac",
        className: "block-wrapper",
        playScale: 0.3,
        children: {
          imgWrapper: { className: "image-wrapper" },
          textWrapper: { className: "text-wrapper" },
          img: {
            className: "block-img",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png",
          },
          icon: {
            className: "block-icon",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg",
          },
          name: {
            className: "block-name",
            children: (
              <span>
                <p>Volunteer</p>
              </span>
            ),
          },
          post: {
            className: "block-post",
            children: (
              <span>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
          time: {
            className: "block-time",
            children: (
              <span>
                <span>
                  <p>2017 - 2018</p>
                </span>
              </span>
            ),
          },
          title: {
            className: "block-title",
            children: (
              <span>
                <span>
                  <p>U.B.C. Science Orientation leader</p>
                </span>
              </span>
            ),
          },
          content: {
            className: "block-content kdtqu1040mh-editor_css",
            children: (
              <span>
                <span>
                  <p>
                    Mentor first year students transition into UBC. Provided
                    academic advices and ensuring mental well being of students
                    to ensure successful transition into university.
                  </p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: "block~kdscwuk7j",
        className: "block-wrapper",
        playScale: 0.3,
        children: {
          imgWrapper: { className: "image-wrapper" },
          textWrapper: { className: "text-wrapper" },
          img: {
            className: "block-img",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png",
          },
          icon: {
            className: "block-icon",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg",
          },
          name: {
            className: "block-name",
            children: (
              <span>
                <p>Judge</p>
              </span>
            ),
          },
          post: {
            className: "block-post",
            children: (
              <span>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
          time: {
            className: "block-time",
            children: (
              <span>
                <span>
                  <p>2018</p>
                </span>
              </span>
            ),
          },
          title: {
            className: "block-title",
            children: (
              <span>
                <span>
                  <p>Spyre Science Fair 2018</p>
                </span>
              </span>
            ),
          },
          content: {
            className: "block-content kdtqu474t8-editor_css",
            children: (
              <span>
                <span>
                  <p>
                    Asked to judge for high school science fair with 15
                    participating groups. Provided feedback on tech projects and
                    helped students develop further passion for computer science
                    and innovation.
                  </p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: "block~kdscwv2tcul",
        className: "block-wrapper",
        playScale: 0.3,
        children: {
          imgWrapper: { className: "image-wrapper" },
          textWrapper: { className: "text-wrapper" },
          img: {
            className: "block-img",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png",
          },
          icon: {
            className: "block-icon",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg",
          },
          name: {
            className: "block-name",
            children: (
              <span>
                <p>Founder</p>
              </span>
            ),
          },
          post: {
            className: "block-post",
            children: (
              <span>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
          time: {
            className: "block-time",
            children: (
              <span>
                <span>
                  <p>2015 – 2016</p>
                </span>
              </span>
            ),
          },
          title: {
            className: "block-title",
            children: (
              <span>
                <span>
                  <p>Beyond - Coding Conference</p>
                </span>
              </span>
            ),
          },
          content: {
            className: "block-content kdtqu6jttm-editor_css",
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <p>
                        Created, planned and coordinated logistical operations,
                        funding for this inaugural coding conference for over 80
                        student attendees. Worked closely with Lighthouse Labs
                        to develop event content focusing on intro to
                        JavaScript.
                      </p>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
        },
      },
    ],
  },
};
export const Footer00DataSource = {
  wrapper: { className: "home-page-wrapper footer0-wrapper" },
  OverPack: { className: "home-page footer0", playScale: 0.05 },
  copyright: {
    className: "copyright",
    children: (
      <span>
        <span>2020 James Kan Powered by Ant Layout Made With :)</span>
      </span>
    ),
  },
};

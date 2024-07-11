import PropTypes from "prop-types";
import React, { forwardRef, Fragment } from "react";
import styles from "./ContentOverview.module.css";
import Box from "../Box/Box";
import Heading from "../Typography/Heading/Heading";
import Paragraph from "../Typography/Paragraph/Paragraph";
import OrderedList from "../Lists/OrderedList/OrderedList";
import Link from "../Link/Link";

const ContentOverview = forwardRef(
  (
    {
      courseData,
      itemsPerRow = 3,
      mainHeadingProps = {},
      mainParagraphProps = {},
      sectionHeadingProps = {},
      sectionParagraphProps = {},
      ...rest
    },
    ref
  ) => {
    const itemWidth = `${100 / itemsPerRow}%`;

    return (
      <Box ref={ref} {...rest}>
        {courseData.map((course, index) => (
          <Fragment key={`${course.title.slice(0, 3)}-${index}`}>
            <Heading type="h3" className={styles.rue_Content_Overview_title} {...mainHeadingProps}>
              {course.title}
            </Heading>
            {course.description.map((paragraph, i) => (
              <Paragraph
                key={`${paragraph.slice(0, 3)}-${i}`}
                className={styles.rue_Content_Overview_description}
                {...mainParagraphProps}
              >
                {paragraph}
              </Paragraph>
            ))}

            {course.sections.map((section, sectionIndex) => (
              <Fragment key={`${section.title.slice(0, 3)}-${sectionIndex}`}>
                <Heading type="h3" className={styles.rue_Content_Overview_section_title} {...sectionHeadingProps}>
                  {section.title}
                </Heading>
                <OrderedList className={styles.rue_Content_Overview_topic_list}>
                  {section.topics.map((topic) => (
                    <OrderedList.Item
                      key={topic.id}
                      className={styles.rue_Content_Overview_topic_item}
                      style={{ width: itemWidth }}
                    >
                      <Paragraph
                        type="span"
                        className={styles.rue_Content_Overview_topic_id}
                        {...sectionParagraphProps}
                      >
                        {topic.id}
                      </Paragraph>
                      <Link to={topic.path}>
                        <Paragraph type="span">{topic.title}</Paragraph>
                      </Link>
                    </OrderedList.Item>
                  ))}
                </OrderedList>
              </Fragment>
            ))}
          </Fragment>
        ))}
      </Box>
    );
  }
);

ContentOverview.propTypes = {
  courseData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.arrayOf(PropTypes.string).isRequired,
      sections: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          topics: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              path: PropTypes.string.isRequired,
            })
          ).isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  itemsPerRow: PropTypes.number,
  mainHeadingProps: PropTypes.object,
  mainParagraphProps: PropTypes.object,
  sectionHeadingProps: PropTypes.object,
  sectionParagraphProps: PropTypes.object,
};

ContentOverview.displayName = "ContentOverview";
export default ContentOverview;

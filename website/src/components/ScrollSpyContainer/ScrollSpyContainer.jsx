import React, { Fragment } from "react";
import styles from "./ScrollSpyContainer.module.css";
import ScrollSpyListGroups from "../ScrollSpyListGroups/ScrollSpyListGroups";
import ScrollSpy from "../ScroolSpy/ScroolSpy";
import { Each } from "../Each";

const ScrollSpyContainer = ({ height, width, variant }) => {
  let Branches = [
    { id: 4, branch: "Computer Science and Engineering", linkid: "#C1" },
    { id: 2, branch: "Mechanical Engineering", linkid: "#C2" },
    { id: 1, branch: "Civil Engineering", linkid: "#C3" },
    { id: 3, branch: "Electrical Engineering", linkid: "#C4" },
    { id: 5, branch: "Chemical Engineering", linkid: "#C5" },
  ];
  let content = [
    {
      id: "C1",
      title: "Computer Science and Engineering",
      content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt sequi repudiandae doloremque placeat in, omnis
      quo impedit laboriosam, neque, accusamus qui harum. Provident et placeat dolores porro officia, voluptas
      eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nesciunt ad! Deleniti repellendus
      ullam sequi facere ipsum! Asperiores iste eius dolorum cupiditate sit sunt? Quibusdam officiis quas saepe
      dolorem deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusamus, fuga voluptate
      doloribus officia officiis dolor dolorem ducimus odit ea hic quod deserunt ut esse alias sequi, saepe, ratione
      eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi maxime vel minus esse animi
      vero rerum ullam dolore! Animi doloribus natus voluptatem inventore voluptas amet. Quaerat dicta sequi
      veritatis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, dolore, corporis enim quaerat
      voluptate nulla aspernatur facilis rem veritatis sint dolorum eligendi atque! Fugit, sint voluptates. Atque
      distinctio deserunt nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laudantium deleniti
      fugit ipsum cumque iusto quam nisi nostrum rem deserunt incidunt animi quisquam iste ullam quae, atque ipsam.
      Eveniet, consequatur?`,
    },
    {
      id: "C2",
      title: "Mechanical Engineering",
      content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt sequi repudiandae doloremque placeat in, omnis
        quo impedit laboriosam, neque, accusamus qui harum. Provident et placeat dolores porro officia, voluptas
        eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nesciunt ad! Deleniti repellendus
        ullam sequi facere ipsum! Asperiores iste eius dolorum cupiditate sit sunt? Quibusdam officiis quas saepe
        dolorem deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusamus, fuga voluptate
        doloribus officia officiis dolor dolorem ducimus odit ea hic quod deserunt ut esse alias sequi, saepe, ratione
        eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi maxime vel minus esse animi
        vero rerum ullam dolore! Animi doloribus natus voluptatem inventore voluptas amet. Quaerat dicta sequi
        veritatis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, dolore, corporis enim quaerat
        voluptate nulla aspernatur facilis rem veritatis sint dolorum eligendi atque! Fugit, sint voluptates. Atque
        distinctio deserunt nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laudantium deleniti
        fugit ipsum cumque iusto quam nisi nostrum rem deserunt incidunt animi quisquam iste ullam quae, atque ipsam.
        Eveniet, consequatur?`,
    },
    {
      id: "C3",
      title: "Civil Engineering",
      content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt sequi repudiandae doloremque placeat in, omnis
        quo impedit laboriosam, neque, accusamus qui harum. Provident et placeat dolores porro officia, voluptas
        eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nesciunt ad! Deleniti repellendus
        ullam sequi facere ipsum! Asperiores iste eius dolorum cupiditate sit sunt? Quibusdam officiis quas saepe
        dolorem deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusamus, fuga voluptate
        doloribus officia officiis dolor dolorem ducimus odit ea hic quod deserunt ut esse alias sequi, saepe, ratione
        eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi maxime vel minus esse animi
        vero rerum ullam dolore! Animi doloribus natus voluptatem inventore voluptas amet. Quaerat dicta sequi
        veritatis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, dolore, corporis enim quaerat
        voluptate nulla aspernatur facilis rem veritatis sint dolorum eligendi atque! Fugit, sint voluptates. Atque
        distinctio deserunt nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laudantium deleniti
        fugit ipsum cumque iusto quam nisi nostrum rem deserunt incidunt animi quisquam iste ullam quae, atque ipsam.
        Eveniet, consequatur?`,
    },
    {
      id: "C4",
      title: "Electrical Engineering",
      content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt sequi repudiandae doloremque placeat in, omnis
        quo impedit laboriosam, neque, accusamus qui harum. Provident et placeat dolores porro officia, voluptas
        eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nesciunt ad! Deleniti repellendus
        ullam sequi facere ipsum! Asperiores iste eius dolorum cupiditate sit sunt? Quibusdam officiis quas saepe
        dolorem deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusamus, fuga voluptate
        doloribus officia officiis dolor dolorem ducimus odit ea hic quod deserunt ut esse alias sequi, saepe, ratione
        eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi maxime vel minus esse animi
        vero rerum ullam dolore! Animi doloribus natus voluptatem inventore voluptas amet. Quaerat dicta sequi
        veritatis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, dolore, corporis enim quaerat
        voluptate nulla aspernatur facilis rem veritatis sint dolorum eligendi atque! Fugit, sint voluptates. Atque
        distinctio deserunt nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laudantium deleniti
        fugit ipsum cumque iusto quam nisi nostrum rem deserunt incidunt animi quisquam iste ullam quae, atque ipsam.
        Eveniet, consequatur?`,
    },
    {
      id: "C5",
      title: "Chemical Engineering",
      content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt sequi repudiandae doloremque placeat in, omnis
        quo impedit laboriosam, neque, accusamus qui harum. Provident et placeat dolores porro officia, voluptas
        eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nesciunt ad! Deleniti repellendus
        ullam sequi facere ipsum! Asperiores iste eius dolorum cupiditate sit sunt? Quibusdam officiis quas saepe
        dolorem deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusamus, fuga voluptate
        doloribus officia officiis dolor dolorem ducimus odit ea hic quod deserunt ut esse alias sequi, saepe, ratione
        eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi maxime vel minus esse animi
        vero rerum ullam dolore! Animi doloribus natus voluptatem inventore voluptas amet. Quaerat dicta sequi
        veritatis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, dolore, corporis enim quaerat
        voluptate nulla aspernatur facilis rem veritatis sint dolorum eligendi atque! Fugit, sint voluptates. Atque
        distinctio deserunt nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laudantium deleniti
        fugit ipsum cumque iusto quam nisi nostrum rem deserunt incidunt animi quisquam iste ullam quae, atque ipsam.
        Eveniet, consequatur?`,
    },
  ];
  const fieldsetStyle = {
    height: height || "auto",
    width: width || "100%",
  };

  const getTitleStyle = () => {
    switch (variant) {
      case "primary":
        return styles.rue_fieldset_title_primary;
      case "secondary":
        return styles.rue_fieldset_title_secondary;
      case "success":
        return styles.rue_fieldset_title_success;
      case "warning":
        return styles.rue_fieldset_title_warning;
      case "danger":
        return styles.rue_fieldset_title_danger;
      case "info":
        return styles.rue_fieldset_title_info;
      case "light":
        return styles.rue_fieldset_title_light;
      case "dark":
        return styles.rue_fieldset_title_dark;
      default:
        return styles.rue_fieldset_title;
    }
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        gap: "5px",
        border: "1px solid #ccc",
        padding: "5px",
        borderRadius: "5px",
        height: "800px",
        overflow: "auto",
      }}
    >
      <div
        style={{
          width: "65%",
        }}
      >
        <Each
          of={content}
          render={(item) => (
            <ScrollSpy scrollThrottle={100} offsetTop="7.5%" useBoxMethod={false}>
              <div id={item.id} className={styles.rue_fieldset} style={fieldsetStyle}>
                <div className={getTitleStyle()}>{item.title}</div>
                <div className={styles.rue_fieldset_content}>{item.content}</div>
              </div>
            </ScrollSpy>
          )}
        />
      </div>
      <div
        style={{
          width: "calc(100% - 20%)",
          borderLeft: "1px solid #ccc",
          margin: "10px",
          position:"fixed",
          left:"70%"
        }}
      >
        <ScrollSpyListGroups size="sm" width="30%" items={Branches} variant="success" />
      </div>
    </div>
  );
};

export default ScrollSpyContainer;

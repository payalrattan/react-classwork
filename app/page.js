"use client";
import { Button } from "@/components/button/Button.jsx";
import { Input } from "../components/input-component/InputComponent";
import { Greeting } from "@/components/greeting-component/Greeting.jsx";
import { Person } from "@/components/person-component/Person.jsx";
import { ImageComponent } from "@/components/imageComponent/ImageComponent"
import { Layout } from "@/components/layout/Layout.jsx";
import { Cards } from "@/components/card-component/Cards.jsx";

export default function Home() {
  return (
    <div>
      <Layout>
        <Greeting />
        <ImageComponent
          imageUrl="/dog.jpeg"
          alt="Random Image"
        />
        <Person />
        <Cards />
        <Button
          appearance="button"
          text="Click here"
          action={() => console.log("button clicked")}
        />
        <br />
        <br />
        <Button
          appearance="danger-button"
          text="Dangerous Text"
          action={() => console.log("clicked Dangerous buttton")}
        />
        <br />
        <br />
        <Input type="text" placeholder="Type something here" />
        <br />
      </Layout>
    </div>

  );
}

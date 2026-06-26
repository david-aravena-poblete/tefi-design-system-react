import { Button } from "../../../components/button";

export function ButtonSkeleton() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        width: "400px",
      }}
    >
      <div>
        <Button>Primary</Button>
        <br />
        <br />
        <Button skeleton>Primary</Button>
      </div>

      <div>
        <Button size="sm">Small</Button>
        <br />
        <br />
        <Button skeleton size="sm">
          Small
        </Button>
      </div>

      <div>
        <Button size="md">Medium</Button>
        <br />
        <br />
        <Button skeleton size="md">
          Medium
        </Button>
      </div>

      <div>
        <Button size="lg">Large</Button>
        <br />
        <br />
        <Button skeleton size="lg">
          Large
        </Button>
      </div>

      <div>
        <Button fullWidth>
          Full Width
        </Button>

        <br />
        <br />

        <Button
          skeleton
          fullWidth
        >
          Full Width
        </Button>
      </div>

      <div>
        <Button variant="secondary">
          Secondary
        </Button>

        <br />
        <br />

        <Button
          skeleton
          variant="secondary"
        >
          Secondary
        </Button>
      </div>

      <div>
        <Button variant="ghost">
          Ghost
        </Button>

        <br />
        <br />

        <Button
          skeleton
          variant="ghost"
        >
          Ghost
        </Button>
      </div>

      <div>
        <Button variant="danger">
          Danger
        </Button>

        <br />
        <br />

        <Button
          skeleton
          variant="danger"
        >
          Danger
        </Button>
      </div>

      <div>
        <Button variant="link">
          Link
        </Button>

        <br />
        <br />

        <Button
          skeleton
          variant="link"
        >
          Link
        </Button>
      </div>

      <div>
        <Button>
          Guardar cambios del formulario
        </Button>

        <br />
        <br />

        <Button skeleton>
          Guardar cambios del formulario
        </Button>
      </div>

      <div>
        <Button>OK</Button>

        <br />
        <br />

        <Button skeleton>
          OK
        </Button>
      </div>
    </div>
  );
}
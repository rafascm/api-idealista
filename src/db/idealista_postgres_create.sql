CREATE TABLE "labels" (
	"id" serial NOT NULL,
	"color" character varying NOT NULL,
	CONSTRAINT "labels_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "tasks" (
	"id" serial NOT NULL,
	"name" character varying NOT NULL,
	"ischecked" BOOLEAN NOT NULL,
	CONSTRAINT "tasks_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "tasks_labels" (
	"id" serial NOT NULL,
	"id_label" bigint NOT NULL,
	"id_task" bigint NOT NULL,
	CONSTRAINT "tasks_labels_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "tasks_labels" ADD CONSTRAINT "tasks_labels_fk0" FOREIGN KEY ("id_label") REFERENCES "labels"("id");
ALTER TABLE "tasks_labels" ADD CONSTRAINT "tasks_labels_fk1" FOREIGN KEY ("id_task") REFERENCES "tasks"("id");


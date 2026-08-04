/* ======================================
   SKILL PROP
====================================== */

export interface SkillProp {
    type:
      | "boolean"
      | "select"
      | "text"
      | "number";
  
    options?: readonly string[];
  
    description?: string;
  }
  
  /* ======================================
     SKILL
  ====================================== */
  
  export interface Skill {
    name: string;
  
    namespace: string;
  
    description: string;
  
    props: Record<string, SkillProp>;
  }
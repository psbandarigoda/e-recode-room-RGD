
export class RecordLog {

  // Update Log Info
  datetime:Date;

  // Certificate Info
  certificate_id: string;

  // Process Info
  ad: string;
  ad_status: string;
  adr: string;
  adr_status: string;
  client: string;
  client_status: string;
  print: string;
  print_status: string;

  // Child's Info
  child_birthday: string;
  child_birth_place: string;
  child_name_s: string;
  child_name_e: string;
  child_gender: string;
  child_birth_weight: string;
  child_count: string;

  // Father's Info
  father_id: string;
  father_name_s: string;
  father_name_e: string;
  father_birthday: string;
  father_ethnic_group: string;
  father_birth_place: string;

  // Mother's Info
  mother_id: string;
  mother_name_s: string;
  mother_name_e: string;
  mother_birthday: string;
  mother_age_at_birth_of_a_child: string;
  mother_ethnic_group: string;
  mother_birth_place: string;

  // PR Info
  permanent_address: string;

  // Parents Marriage Info
  married_place: string;
  married_date: string;

  // Grandfather's Info
  gf_id: string;
  gf_name: string;
  gf_birth_year: string;
  gf_birth_place: string;

  // Information Provider
  ip_id: string;
  ip_name: string;
  ip_address: string;
  ip_phone: string;
  ip_email: string;
  ip_date: string;

  // Registrar's Info
  reg_id: string;
  reg_name: string;
  reg_address: string;

}

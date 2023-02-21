import agent from "../../../agent";

// improving performance
export async function getItemAndComments(id) {
  const item =  agent.Items.get(id);
  const comments =  agent.Comments.forItem(id);

  return Promise.all([item, comments]).then(res => res)
}


